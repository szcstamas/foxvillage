import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import { theme } from '../constants/Theme';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { EventObjects } from '../constants/EventObjects';

import CardBox from './CardBox';

interface Props {
    cardSectionH2: string;
    cardSectionBg: string;
    cardSectionH2Color: string;
    id: string;
    cardSectionParagraph: string;
    cardSectionIconLightColor: string;
    cardSectionIconDarkColor: string;
}

const CardSection = ({ id, cardSectionH2, cardSectionBg, cardSectionH2Color, cardSectionParagraph, cardSectionIconLightColor, cardSectionIconDarkColor }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                id={id}
                component={motion.section}
                bgcolor={cardSectionBg}
                sx={{ ...CardSectionStyles }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color={cardSectionH2Color}
                        >

                            {cardSectionH2}
                        </Typography>
                        <PetsIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [cardSectionIconLightColor, cardSectionIconDarkColor, cardSectionIconDarkColor, cardSectionIconDarkColor, cardSectionIconLightColor,],
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
                        ></PetsIcon>
                    </Box>

                    <Typography
                        color={cardSectionH2Color}
                        component={motion.p}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        paragraph={true}
                        sx={{
                            textAlign: 'center',
                            width: { md: '100%', lg: '60%' }
                        }}>

                        {cardSectionParagraph}
                    </Typography>

                    <Box
                        component='div'
                        sx={{ display: 'flex', rowGap: 5, columnGap: 3, flexWrap: 'wrap', alignItems: 'stretch' }}
                    >

                        {EventObjects.map((event, index) => {

                            return (
                                <CardBox
                                    transitionDelay={'.' + index}
                                    cardImgSrc={event.eventImg}
                                    cardTextH4={event.eventTitle}
                                    cardTextParagraph={event.eventDesc}
                                    cardButtonLink={event.eventLink}
                                />
                            )
                        })

                        }
                    </Box>

                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default CardSection