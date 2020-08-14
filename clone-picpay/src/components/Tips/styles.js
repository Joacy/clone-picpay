import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: "center",
        paddingLeft: 16,
    }
}))`
    margin-top: 25px;
`;

export const Option = styled.View`
    justify-content: space-around;
    width: 150px;
    height: 230px;
    border-radius: 8px;
    padding: 15px;
    margin-right: 16px;
    background: ${({ bgColor }) => bgColor};
`;

export const Title = styled.Text`
    margin-bottom: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;
    align-self: center;
`;