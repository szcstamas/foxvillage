import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import SecondaryButton from './SecondaryButton';

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
                sx={{}}
            >
                <Box
                    component='img'
                    src={cardImgSrc}
                ></Box>

                <Typography
                    variant='h4'>
                    {cardTextH4}
                </Typography>

                <Typography paragraph={true}>
                    {cardTextParagraph}
                </Typography>

                <SecondaryButton
                    text='Watch it!'
                    link={cardButtonLink}
                    icon='rightarrow'
                />

            </Box>

        </ThemeProvider>
    )
}

export default CardBox