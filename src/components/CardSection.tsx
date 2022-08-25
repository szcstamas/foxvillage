import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import { SectionStyles, ContainerBoxStyles } from '../constants/Styles';
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
                sx={{ ...SectionStyles }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles }}
                >
                    <Typography
                        variant='h2'
                        sx={{ textAlign: 'center' }}
                        color='secondary.light'
                    >

                        {cardSectionH2}
                    </Typography>

                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default CardSection