import React, { useEffect, useState } from 'react'
import * as S from './styles'
import {Product, Filter} from 'components/index'

function App() {
    /* const [allProducts, setAllProducts] = useState<ProductType[]>([]);

    async function getAllProducts() {
        const products = await Products.index()
        setAllProducts(products)
    } */
/*     async function getAllCategories() {
        const products = await Products.index()

    }
    async function getCategory(category: CategoriesType) {
        const categoryResponse = await Category.show(category)

    } */

    /* useEffect(() => {
        getAllProducts();
    }, []) */

    return (
        <S.Container>
            <Filter />
            <Product />
        </S.Container>
    )
}

export default App

