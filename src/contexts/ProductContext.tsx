import { createContext, useEffect, useState } from 'react'
import { deleteProduct, getStoragedData, saveProduct, storeData } from '../utils/storage';

type ContextProviderProps = {
    children: React.ReactNode
}

export type CartType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    liked: boolean;
    quantity: number;
    size?: string;
}

export const ProductContext = createContext({})

export const CartProvider = ({ children }: ContextProviderProps) => {
    const [cart, setCart] = useState<CartType[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const handleAddToCart = async(item: CartType) => {
        setTotalProducts((prev) => Number(prev)  + item.quantity)
        setTotalPrice((prev) => prev + Number(item.price) * item.quantity)
        const productExists = cart.find(i => i.id === item.id)
        if (productExists) {
            setCart((prev) => prev.map((product: CartType) => product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product))
        } else {
            setCart((prev) => [...prev, item])
        }
        await saveProduct('@cart', item)
        await storeData('@totalProducts', totalProducts + 1)
    }

    const handleRemoveFromCart = async (item: CartType) => {
        setTotalProducts((prev) => prev - item.quantity)
        setTotalPrice((prev) => prev - Number(item.price) * item.quantity)
        setCart((prev) => prev.filter((product: CartType) => product.id !== item.id))
        await deleteProduct(item.id)
        await storeData('@totalProducts', totalProducts - 1)
    }

    useEffect(() => {
        async function loadStorageData() {
            const productsStored = await getStoragedData('@cart');
            const totalProductsStored = await getStoragedData('@totalProducts');
            setTotalProducts(totalProductsStored);
            setCart(productsStored);
        }
        loadStorageData();
    }, [])

    return (
        <ProductContext.Provider value={{
            cart,
            handleAddToCart,
            handleRemoveFromCart,
            totalPrice,
            totalProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}
