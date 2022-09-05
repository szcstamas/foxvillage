import React from 'react';
import { Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { motion } from 'framer-motion';

interface Props {
    xDirection: number;
    priceSectionIconLightColor: string;
    priceSectionIconDarkColor: string;
    priceSectionFirstIllu: string;
    priceSectionIlluInvert: number;
    priceSectionIlluMaxHeight: number;
}

const PriceSection = ({ xDirection, priceSectionIconLightColor, priceSectionIconDarkColor, priceSectionFirstIllu, priceSectionIlluMaxHeight, priceSectionIlluInvert }: Props) => {

    const priceSectionIllu = {
        position: 'absolute',
        bottom: '-100px',
        left: '0',
        width: '100%',
        pointerEvents: 'none',
        filter: `invert(${priceSectionIlluInvert}%)`
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                id='prices'
                bgcolor='primary.main'
                component={motion.section}
                sx={{
                    ...CardSectionStyles,
                    position: 'relative'
                }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: xDirection }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color='secondary.light'
                        >

                            Our prices
                        </Typography>
                        <LocalOfferIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [priceSectionIconLightColor, priceSectionIconDarkColor, priceSectionIconDarkColor, priceSectionIconDarkColor, priceSectionIconLightColor,],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            sx={{
                                fontSize: '3rem',
                                transformOrigin: 'center!important',
                                transformBox: 'fill-box',
                            }}
                        ></LocalOfferIcon>
                    </Box>
                </Box>

                <Box
                    component={motion.img}
                    src={priceSectionFirstIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...priceSectionIllu }}
                />

            </Box>
        </ThemeProvider>
    )
}

export default PriceSection