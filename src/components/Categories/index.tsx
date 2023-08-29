import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { FlatList, Text } from 'react-native'
import { ProductType } from 'services/products'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import CategoryService, { CategoriesType } from 'services/categories'
import loadingA from '../../assets/homeLoading.json'
import LottieView from "lottie-react-native";

type ProductsType = ProductType & {
    liked: boolean
}

type FilterProps = {
    setProducts: (products: ProductsType[]) => void
    getPrduct: () => void
    setLoading: (b:boolean) => void
}

function Categories({ getPrduct, setProducts, setLoading }: FilterProps) {
    const [categories, setCategories] = useState<CategoriesType[]>([]);

    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await CategoryService.index()
            setCategories(response)    
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
            console.log('finally')
        }
    }

    const getCategory = async (category: CategoriesType) => {
        if (category === 'All') {
            getPrduct()
        } else {
            try {
                setLoading(true)
                const response = await CategoryService.show(category)
                setProducts(response)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
                console.log('finally')
            }
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const categoriesData = [
        'All',
        ...categories
    ]

    return (
        <S.Container>
                <FlatList
                    data={categoriesData}
                    horizontal={true}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={({ item }: { item: CategoriesType }) => (
                        <S.Category onPress={() => getCategory(item)}>
                            <Text style={{ color: 'black' }}>{item.toUpperCase()}</Text>
                        </S.Category>
                    )}
                />
        </S.Container>

    )
}

export default Categories

