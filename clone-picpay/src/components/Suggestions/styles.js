import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: "center",
        paddingVertical: 20,
        paddingLeft: 16,
    }
}))`
    background: #1e222b;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image`
    width: 60px;
    height: 60px;    
`;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
`;