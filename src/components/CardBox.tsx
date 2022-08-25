import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CardButton from './buttons/CardButton';

interface Props {

    cardImgSrc: string;
    cardTextH4: string;
    cardTextParagraph: string;
    cardButtonLink: string;
}

const CardBox = ({ cardImgSrc, cardTextH4, cardTextParagraph, cardButtonLink }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.div}
                sx={{
                    flex: '1',
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
                bgcolor='secondary.light'
            >
                <Box
                    component='div'
                    sx={{
                        height: '50%',
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        component='img'
                        src={cardImgSrc}
                        sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    ></Box>

                </Box>

                <Box
                    component='div'
                    sx={{ px: 4, py: 2 }}
                >

                    <Typography
                        variant='h4'>
                        {cardTextH4}
                    </Typography>

                    <Typography paragraph={true}>
                        {cardTextParagraph}
                    </Typography>

                    <CardButton
                        text='Watch it!'
                        link={cardButtonLink}
                        icon='rightarrow'
                    />
                </Box>
            </Box>

        </ThemeProvider>
    )
}

export default CardBox