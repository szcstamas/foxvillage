import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Props {
    backgroundImage: string;
}

const Section = ({ backgroundImage }: Props) => {
    return (
        <Box
            component={motion.section}
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: .25, duration: .5, ease: 'easeInOut', }}
            sx={{ px: 0, py: 25, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', }}
        >
            <Box
                component={motion.div}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .75, duration: .5, ease: 'easeInOut', }}
                sx={{ maxWidth: '1350px', m: 'auto' }}
            >
                <Typography variant="h1"
                    sx={{ width: '70%', }}
                >
                    Welcome to the Fox Village of Zsambek!
                </Typography>
            </Box>
        </Box>
    )
}

export default Section