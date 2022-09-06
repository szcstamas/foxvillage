import React from 'react'
import { FlexCenter } from '../constants/Styles'
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PrimaryButton from './buttons/PrimaryButton';

const ThankYou = () => {
    return (
        <Box
            component='div'
            sx={{ height: '90vh', ...FlexCenter, textAlign: 'center', flexDirection: 'column', gap: 2 }}
        >
            <Typography
                variant='h1'
                component={motion.h1}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .5 }}
            >Thank you!</Typography>

            <Typography
                paragraph={true}
                component={motion.p}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >Your message was sent to us! We will reply to you soon! ❤</Typography>

            <PrimaryButton
                text='Back to homepage!'
                link='/#/'
                icon='home'
            />


        </Box>
    )
}

export default ThankYou