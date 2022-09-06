import React, { useState } from 'react';
import { Typography, Box, FormControl, TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CallIcon from '@mui/icons-material/Call';
import { CardSectionStyles, ContainerBoxStyles, FlexCenter, FlexStart } from '../constants/Styles';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    xDirection: number;
    contactSectionParagraph: string;
    contactSectionIconLightColor: string;
    contactSectionIconDarkColor: string;
    contactSectionFirstIllu: string;
    contactSectionSecondIllu: string;
    contactSectionIlluWidth: number;
    contactSectionIlluWidthOnSmallScreen: number;
    contactSectionIlluInvert: number;
}

const ContactSection = ({ xDirection, contactSectionParagraph, contactSectionIconLightColor, contactSectionIconDarkColor, contactSectionFirstIllu, contactSectionIlluWidth, contactSectionIlluWidthOnSmallScreen, contactSectionIlluInvert }: Props) => {

    const [contactMessageBoxVisible, setContactMessageBoxVisible] = useState(true);
    const [contactInfoVisible, setContactInfoVisible] = useState(false);
    const [iframeHeight, setIframeHeight] = useState(400);

    const cardSectionIlluStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        maxWidth: { xs: contactSectionIlluWidthOnSmallScreen, lg: contactSectionIlluWidth },
        maxHeight: `${contactSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `invert(${contactSectionIlluInvert}%)`
    };

    const makeContactInfoVisible = () => {
        setContactMessageBoxVisible(false);
        setContactInfoVisible(true);
        setIframeHeight(300);
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                id='contact'
                bgcolor='#272727'
                component={motion.section}
                sx={{
                    ...CardSectionStyles,
                    position: 'relative'
                }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, ...FlexCenter, gap: 3, flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: xDirection }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ ...FlexCenter, gap: 2 }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color='#fff'
                        >

                            Contact us
                        </Typography>
                        <CallIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [contactSectionIconLightColor, contactSectionIconDarkColor, contactSectionIconDarkColor, contactSectionIconDarkColor, contactSectionIconLightColor,],
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
                        ></CallIcon>
                    </Box>

                    { /* contact section paragraph */}
                    <Typography
                        color="secondary.light"
                        component={motion.p}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        paragraph={true}
                        sx={{
                            textAlign: 'center',
                            width: { md: '100%', lg: '60%' }
                        }}>

                        {contactSectionParagraph}
                    </Typography>

                    {/* form and map container */}
                    <Box
                        component={motion.div}
                        sx={{ ...FlexStart, width: '100%', gap: 2, }}
                    >
                        {/* form control */}
                        <FormControl sx={{ flex: '1', display: 'flex', gap: 2 }}>
                            <TextField
                                required
                                id="filled-required"
                                label="Your name..."
                                placeholder="e.g. John Smith"
                                variant="filled"
                                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                            />
                            <TextField
                                required
                                id="filled-required"
                                label="Your e-mail address..."
                                placeholder="e.g. foxvillage@foxvillage.com"
                                variant="filled"
                                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                            />
                            <TextField
                                variant="filled"
                                placeholder="And your message..."
                                multiline
                                rows={4}
                                maxRows={10}
                                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                            />
                            <Button
                                type="submit"
                                variant='contained'
                                sx={{ display: 'flex', gap: 2, p: 2 }}
                            >
                                SEND!

                                <svg fill='#fff' width='20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                            </Button>
                        </FormControl>

                        <Box
                            component={motion.div}
                            sx={{ ...FlexCenter, flexDirection: 'column', flex: '1', gap: 3 }}
                        >
                            <AnimatePresence>
                                {contactMessageBoxVisible && (
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        sx={{
                                            position: 'absolute',
                                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 50% 100%, 50% 75%, 0% 75%)',

                                        }}
                                    >
                                        <Box
                                            component='div'
                                            color='secondary.dark'
                                            bgcolor='secondary.main'
                                            sx={{ ...FlexCenter, flexDirection: 'column', alignItems: 'left', position: 'relative', py: 3, pl: 3, pr: 6, pb: 6 }}>
                                            <CloseIcon
                                                onClick={makeContactInfoVisible}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 10,
                                                    right: 10,
                                                    fontSize: 25,
                                                    border: '1px solid #000',
                                                    borderRadius: '50%',
                                                    p: .5,
                                                    transition: 'all .2s ease',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        backgroundColor: '#000',
                                                        color: '#fff'
                                                    }
                                                }} />
                                            <Typography variant='h5' sx={{ mb: 1 }}>2072 Zsámbék</Typography>
                                            <Typography paragraph={true} sx={{ m: 0 }}>Fox Street 32.</Typography>
                                            <Typography paragraph={true}>+36 20 4747 0202</Typography>
                                        </Box>

                                    </Box>
                                )}
                            </AnimatePresence>
                            <motion.iframe
                                style={{ borderRadius: 10, border: '5px solid #fff', transition: 'all .2s ease', height: iframeHeight, width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43095.32353559752!2d18.708909564461887!3d47.53941961353924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a723f91e9a669%3A0xa4569ef7ee64f8db!2zWnPDoW1iw6lrLCAyMDcy!5e0!3m2!1shu!2shu!4v1662449393660!5m2!1shu!2shu" loading="lazy"></motion.iframe>

                            <AnimatePresence>
                                {contactInfoVisible && (
                                    <Box
                                        color='secondary.light'
                                        bgcolor='transparent'
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        sx={{ ...FlexCenter, alignItems: 'left', flexDirection: 'column', width: '100%' }}
                                    >
                                        <Typography variant='h4' sx={{ mb: 1 }}>2072 Zsámbék</Typography>
                                        <Typography paragraph={true} sx={{ m: 0 }}>Fox Street 32.</Typography>
                                        <Typography paragraph={true}>+36 20 4747 0202</Typography>
                                    </Box>
                                )}
                            </AnimatePresence>
                        </Box>

                    </Box>

                </Box>



                {/* form */}

                <Box
                    component={motion.img}
                    src={contactSectionFirstIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...cardSectionIlluStyle }}
                />

            </Box>
        </ThemeProvider >
    )
}

export default ContactSection