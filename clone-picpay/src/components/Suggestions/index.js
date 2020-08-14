import React from 'react';

import {
    ScrollView,
    Option,
    Img,
    Label,
} from './styles';

import img1 from '../../assets/images/01.png';
import img2 from '../../assets/images/02.png';
import img3 from '../../assets/images/03.png';
import img4 from '../../assets/images/04.png';
import img5 from '../../assets/images/05.png';
import img6 from '../../assets/images/06.png';
import img7 from '../../assets/images/07.png';

const options = [
    {
        id: String(Math.random()),
        img: img1,
        label: "Recarga",
    },
    {
        id: String(Math.random()),
        img: img2,
        label: "Uber",
    },
    {
        id: String(Math.random()),
        img: img3,
        label: "Ônibus",
    },
    {
        id: String(Math.random()),
        img: img4,
        label: "TV",
    },
    {
        id: String(Math.random()),
        img: img5,
        label: "Doações",
    },
    {
        id: String(Math.random()),
        img: img6,
        label: "Cód. de Barras",
    },
    {
        id: String(Math.random()),
        img: img7,
        label: "FAQ",
    },
];

const Suggestions = () => {

    return (
        <ScrollView>
            {options.map(option => (
                <Option key={option.id}>
                    <Img source={option.img} />
                    <Label>{option.label}</Label>
                </Option>
            ))}
        </ScrollView>
    );
}

export default Suggestions;