import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const CardFooter = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    height: 13px;
    width: 2px;
    margin: 0 10px;
    background: rgba(255, 255, 255, 0.6);
`;

export const Date = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DateLabel = styled.Text`
    font-size: 14px;
    margin-left: 5px;
    color: #fff;
`;

export const Actions = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;