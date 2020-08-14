import React from 'react';
import { View, Image } from 'react-native';
import {
    Feather,
    MaterialCommunityIcons,
    AntDesign,
} from '@expo/vector-icons';

import {
    Container,
    Title,
    Card,
    CardHeader,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    DateLabel,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../assets/images/avatar.png';

const Activities = () => {
    return (
        <Container>
            <View>
                <Title>Atividades</Title>
            </View>

            <Card>
                <CardHeader>
                    <Image source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@joacymsilva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Joacy Mesquita</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 13,00</Value>

                        <Divider />

                        <Date>
                            <Feather name="lock" size={14} color="#fff" />
                            <DateLabel>há 2 anos</DateLabel>
                        </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}

export default Activities;