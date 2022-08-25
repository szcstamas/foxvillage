import { Typography, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CardButton from './buttons/CardButton';

interface Props {

    cardImgSrc: string;
    cardTextH4: string;
    cardTextParagraph: string;
    cardButtonLink: string;
    transitionDelay: any;
}

const CardBox = ({ cardImgSrc, cardTextH4, cardTextParagraph, cardButtonLink, transitionDelay }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Link
                component={motion.a}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: transitionDelay }}
                href={cardButtonLink}
                sx={{ flex: '1', flexGrow: '1', minWidth: '300px' }}
                underline='none'
            >
                <Box
                    component={motion.div}
                    sx={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '8px solid #fff',
                        transition: 'all .2s ease',
                        height: '100%',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                        }
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
                        sx={{ pl: 3, py: 2 }}
                    >

                        <Typography
                            color='primary.main'
                            variant='h4'
                            sx={{ mb: 2 }}
                        >
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
            </Link>

        </ThemeProvider>
    )
}

export default CardBox