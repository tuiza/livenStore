
import { ScreenHeader } from 'components/index';
import { FavoritesContext } from 'contexts/FavoriteContext';
import { ProductContext } from 'contexts/ProductContext';
import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonsContainer, Column, Product, ProductImage, ProductInfo, ProductName, ProductPrice, RemoveButton } from 'screens/Cart/styles';
import { ButtonQuantity, Quantity } from 'screens/Details/styles';
import { ProductType } from 'services/products';

function Favorites() {
    const { favorites, handleFavorite } = useContext(FavoritesContext)
    const { handleAddOneToCart } = useContext(ProductContext)
    return (
        <>
        < ScreenHeader title="Favoritos" />
            <FlatList
                data={favorites}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }: { item: ProductType }) => (
                    <Product>
                        <ProductImage source={{ uri: item.image }} />
                        <Column>
                            <ProductInfo>
                                <ProductName numberOfLines={1} >{item.title}</ProductName>
                                <ProductPrice>R$ {Number(item.price).toFixed(2)}</ProductPrice>
                            </ProductInfo>
                            <ButtonsContainer>
                                {/* <Quantity>
                                    <ButtonQuantity onPress={() => handleRemoveOneFromCart(item)}>
                                        <Icon name="minus" size={25} color={theme.colors.red} />
                                    </ButtonQuantity>
                                    <TextQuantity>{item.quantity}</TextQuantity>
                                    <ButtonQuantity onPress={() => handleAddOneToCart(item)} >
                                        <Icon name="plus" size={25} color={theme.colors.green} />
                                    </ButtonQuantity>
                                </Quantity> */}
                                <RemoveButton onPress={() => { handleAddOneToCart(item)}}>
                                    <Icon name="plus" size={24} color="#fff" />
                                </RemoveButton>
                                <RemoveButton onPress={() => {handleFavorite(item)}}>
                                    <Icon name="delete" size={24} color="#fff" />
                                </RemoveButton>
                            </ButtonsContainer>

                        </Column>
                    </Product>
                )}
            />
        </>
    )
}

export default Favorites;