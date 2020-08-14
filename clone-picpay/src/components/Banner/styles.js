import styled from 'styled-components/native';

export const Container = styled.View`
    background: #6882BB;
    margin: 25px 16px;
    margin-top: 25px;
    border-radius: 8px;
    height: 150px;
    flex-direction: row;
    align-items: center;
    padding: 15px;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
`;