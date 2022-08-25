import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { EventObjects } from '../constants/EventObjects';
import CardBox from './CardBox';

interface Props {
    cardSectionH2: string;
}

const CardSection = ({ cardSectionH2 }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.section}
                bgcolor='primary.main'
                sx={{ ...CardSectionStyles }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles }}
                >
                    <Typography
                        variant='h2'
                        sx={{ textAlign: 'center', mb: 5 }}
                        color='secondary.light'
                    >

                        {cardSectionH2}
                    </Typography>

                    <Box
                        component='div'
                        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
                    >

                        {EventObjects.map((event) => {

                            return (
                                <CardBox
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