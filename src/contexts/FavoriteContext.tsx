import { createContext, useEffect, useState } from 'react'
import { deleteProduct, getStoragedData, saveProduct, storeData } from '../utils/storage';
import { ProductType } from 'services/products';

type ContextProviderProps = {
    children: React.ReactNode
}

export const FavoritesContext = createContext({})

export const FavoritesProvider = ({ children }: ContextProviderProps) => {
    const [favorites, setFavorites] = useState<ProductType[]>([]);

    const handleFavorite = async (item: ProductType) => {
        const productExists = favorites.find(i => i.id === item.id)
        if (productExists) {
            setFavorites((prev) => prev.filter((product: ProductType) => product.id !== item.id))
        } else {
            setFavorites((prev) => [...prev, item])
        }
        await storeData('@favorites', item)
    }


    const isFavorite = (item: ProductType) => {
        if(!favorites) return false
        return favorites.find(i => i.id === item.id)
    }

    const getFavorites = async () => {
        const data = await getStoragedData('@favorites')
        if (data) {
            setFavorites(data)
        }
    }
    return (
        <FavoritesContext.Provider value={{
            favorites,
            isFavorite,
            handleFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
