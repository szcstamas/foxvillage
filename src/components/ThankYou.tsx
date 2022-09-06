import React from 'react'
import { FlexCenter } from '../constants/Styles'
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <Box
            component='div'
            sx={{ height: '90vh', ...FlexCenter, textAlign: 'center', flexDirection: 'column', gap: 2 }}
        >
            <Typography variant='h1'>Thank you!</Typography>
            <Typography paragraph={true}>Your message was sent to us! We will reply to you soon! ❤</Typography>
            <Link to='/'>Back to homepage</Link>

        </Box>
    )
}

export default ThankYou