import React from 'react'
import * as S from './styles'
import { Product } from 'components/index'
import { NoData, Text } from 'screens/Favorites/styles'
import LottieView from "lottie-react-native";
import loadingA from '../../assets/check.json'
import { ButtonBuyNow, TextButtonAdd } from 'screens/Details/styles';
import { useNavigation } from '@react-navigation/native';

function Checkout() {
    const navigation = useNavigation();

    return (
        <NoData style={{
            justifyContent: 'center',
        }}>
            <LottieView
                source={loadingA}
                autoPlay
                speed={0.8}
                style={{ width: 200, height: 300 }}
            />
            <Text>Compra Finalizada com sucesso!</Text>
            <S.Button
                onPress={() => { navigation.navigate('HomeScreen') }}
            >
                <TextButtonAdd>Comprar Novamente</TextButtonAdd>
            </S.Button>
        </NoData>
    )
}

export default Checkout

