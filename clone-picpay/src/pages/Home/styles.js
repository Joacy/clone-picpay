import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px;
`;

export const BalanceContainer = styled.View`

`;

export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;