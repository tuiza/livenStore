import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { FlatList, Text } from 'react-native'
import { ProductType } from 'services/products'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CategoryService, { CategoriesType } from 'services/categories'
import loadingA from '../../assets/homeLoading.json'
import LottieView from "lottie-react-native";
import theme from '../../../src/global/theme'

type ProductsType = ProductType & {
    liked: boolean
}

type FilterProps = {
    setProducts: (products: ProductsType[]) => void
    getPrduct: () => void
    setLoading: (b: boolean) => void
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
        }
        finally {
            setLoading(false)
        }
    }

    const getIcon = (category: CategoriesType) => {
        switch (category) {
            case 'electronics':
                return 'cellphone'
            case 'jewelery':
                return 'diamond'
            case `men's clothing`:
                return 'human-male-boy'
            case `women's clothing`:
                return 'human-female-girl'
            case 'All':
                return 'select-all'
            default:
                return ''
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

            }
            finally {
                setLoading(false)

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
                        <Icon name={getIcon(item)} size={25} color={theme.colors.roxoClaro} />
                    </S.Category>
                )}
            />
        </S.Container>

    )
}

export default Categories

