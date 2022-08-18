import React from 'react'
import Section from '../components/Section';
import { Images } from '../constants/Images';
import BabyFox from '../assets/img/babyfox.jpg';

const Homepage = () => {
    return (
        <>
            <Section
                backgroundImage={BabyFox}
            ></Section>
        </>
    )
}

export default Homepage