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
        setTotalProducts((prev) => prev  + item.quantity)
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

    const handleAddOneToCart = async (item: CartType) => {
        setTotalProducts((prev) => prev + 1)
        setTotalPrice((prev) => prev + Number(item.price))
        setCart((prev) => prev.map((product: CartType) => product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product))
        await saveProduct('@cart', item)
        await storeData('@totalProducts', totalProducts + 1)
    }

    const handleRemoveOneFromCart = async (item: CartType) => {
        setTotalProducts((prev) => prev > 0 ? prev - 1 : 0)
        setTotalPrice((prev) => prev > Number(item.price) ? prev - Number(item.price) : 0)
        if (item.quantity > 1) {
            setCart((prev) => prev.map((product: CartType) => product.id === item.id ? { ...product, quantity: product.quantity - 1 } : product))
        } else {
            setCart((prev) => prev.filter((product: CartType) => product.id !== item.id))
        }
        await saveProduct('@cart', item)
        await storeData('@totalProducts', totalProducts - 1)
    }


    const handleRemoveAllFromCart = async (item: CartType) => {
        console.log(item)
        setTotalProducts((prev) => prev > item.quantity ? prev - item.quantity : 0)
        setTotalPrice((prev) => prev > Number(item.price) * item.quantity ? prev - Number(item.price) * item.quantity : 0)
        setCart((prev) => prev.filter((product: CartType) => product.id !== item.id))
        await deleteProduct(item.id)
        await storeData('@totalProducts', totalProducts - item.quantity)
    }

    const handleRemoveFromCart = async (item: CartType) => {
        setTotalProducts((prev) => prev > item.quantity ? prev - 1 : 0)
        setTotalPrice((prev) => prev > Number(item.price) ? prev - Number(item.price) : 0)
        if (item.quantity > 1) {
            setCart((prev) => prev.map((product: CartType) => product.id === item.id ? { ...product, quantity: product.quantity - 1 } : product))
        } else {
            setCart((prev) => prev.filter((product: CartType) => product.id !== item.id))
        }
        await deleteProduct(item.id)
        await storeData('@totalProducts', totalProducts - 1)
    }

    const handleRemoveAll = async () => {
        setTotalProducts(0)
        setTotalPrice(0)
        setCart([])
        await storeData('@totalProducts', 0)
        await storeData('@cart', [])
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
            totalProducts,
            handleRemoveAllFromCart,
            handleAddOneToCart,
            handleRemoveAll,
            handleRemoveOneFromCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}
