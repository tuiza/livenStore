import { createContext, useState } from 'react'

type ContextProviderProps = {
    children: React.ReactNode
}

type CartType = {
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



    const handleAddToCart = (item: CartType) => {
        console.log(item.price)
        setTotalProducts((prev) => prev + 1)
        setTotalPrice((prev) => prev + Number(item.price)*item.quantity)
        setCart((prev) => [...prev, item])
    }

    const handleRemoveFromCart = (item: CartType) => {
        setTotalProducts((prev) => prev - 1)
        setTotalPrice((prev) => prev - Number(item.price)*item.quantity)
        setCart((prev) => prev.filter((product: CartType) => product.id !== item.id))
    }

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
