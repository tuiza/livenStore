import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { ProductType } from 'services/products'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
                placeholder="Buscar na Liven Store"
                value={search}
                placeholderTextColor={'#171164'}
                onChangeText={(text) => searchFilter(text)}
                underlineColorAndroid={'transparent'}
                onBlur={() => searchFilter(search)}
            />
            {search.length > 0 ?
                (<S.Clear onPress={handleClear}>
                    <Icon name="close" size={25} color="#171164" />
                </S.Clear>)
                : (<S.Search onPress={() => searchFilter(search)}>
                    <Icon name="magnify" size={25} color="#171164" />
                </S.Search>)
            }
            
        </>

    )
}

export default Filter

