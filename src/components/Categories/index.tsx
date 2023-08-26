import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { FlatList, Text } from 'react-native'
import { ProductType } from 'services/products'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import CategoryService, { CategoriesType } from 'services/categories'

type ProductsType = ProductType & {
    liked: boolean
}

type FilterProps = {
    setProducts: (products: ProductsType[]) => void
    getPrduct: () => void
}

function Categories({ products, getPrduct, setProducts }: FilterProps) {
    const [categories, setCategories] = useState<CategoriesType[]>([]);

    const getCategories = async () => {
        const response = await CategoryService.index()
        setCategories(response)
    }

    const getCategory = async (category: CategoriesType) => {
        if (category === 'All') {
            getPrduct()
        } else { const response = await CategoryService.show(category)
        setProducts(response)
    }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <S.Container>
            <FlatList
                data={['All', ...categories]}
                horizontal={true}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }: {item: CategoriesType}) => (
            <S.Category onPress={() => getCategory(item)}>
                <Feather name='heart' size={22} color="#db3333" />
            </S.Category>
            )}
        />
        </S.Container>

    )
}

export default Categories

