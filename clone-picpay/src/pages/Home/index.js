import React from 'react';
import { ScrollView } from 'react-native';

import {
    AntDesign,
    MaterialCommunityIcons
} from '@expo/vector-icons';

import {
    Wrapper,
    Header,
    BalanceContainer,
    BalanceTitle,
    Balance,
} from './styles';

const Home = () => {
    return (
        <Wrapper>
            <ScrollView>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={24} color="#10c86e" />
                </Header>
            </ScrollView>
        </Wrapper>
    );
}

export default Home;