import React from 'react';
import { View } from 'react-native';

import {
    ScrollView,
    Option,
    Title,
    Img,
} from './styles';

import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

const options = [
    {
        id: String(Math.random()),
        img: img8,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#172c4a",
    },
    {
        id: String(Math.random()),
        img: img9,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#6a0159",
    },
    {
        id: String(Math.random()),
        img: img10,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#4139c8",
    },
    {
        id: String(Math.random()),
        img: img11,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#00ab4b",
    },
    {
        id: String(Math.random()),
        img: img12,
        title: "Pague suas contas sem sair de casa",
        bgColor: "#ba2f76",
    },
];

const Tips = () => {
    return (
        <ScrollView>
            {options.map(option => (
                <Option key={option.id} bgColor={option.bgColor} >
                    <Title>{option.title}</Title>
                    <Img source={option.img} />
                </Option>
            ))}
        </ScrollView>
    );
}

export default Tips;