import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { ProductType } from 'services/products'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons'

type ProductsType = ProductType & {
    liked: boolean
}

type FilterProps = {
    products: ProductsType[]
    setProducts: (products: ProductsType[]) => void
    getPrduct: () => void
}

function Filter({ products, setProducts, getPrduct }: FilterProps) {
    const [search, setSearch] = useState<string>('')

    const handleClear = () => {
        setSearch('')
        getPrduct()
    }

    const searchFilter = (text: string) => {
        if (text) {
            const newData = products.filter((item) => {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setProducts(newData)
        } else {
            getPrduct()
            setProducts(products)
        }
        setSearch(text)
    }

    useEffect(() => {
        searchFilter(search)
    }, [search])


    return (
        <>
            <S.Container
                placeholder="Pesquisar"
                value={search}
                onChangeText={(text) => searchFilter(text)}
                underlineColorAndroid="transparent"
            />
            <S.Search onPress={() => searchFilter(search)}>
                {search.length > 0 ? (
                    <S.Clear onPress={() => handleClear()}><Feather name="close" size={24} color="#08012A" /></S.Clear>
                ): (<Feather name="magnify" size={24} color="#08012A" />)}
                
            </S.Search>
        </>

    )
}

export default Filter

