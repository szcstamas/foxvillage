import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Section = () => {
    return (
        <Box
            component={motion.section}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .25, duration: .5, ease: 'easeInOut' }}
            sx={{ maxWidth: '1200px', m: 'auto', p: 15 }}>
            <Typography variant="h1">
                Welcome to the Fox Village of Zsambek!
            </Typography>
        </Box>
    )
}

export default Section