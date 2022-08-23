import { useState } from 'react';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { motion } from 'framer-motion';

interface Props {
    text: string;
    link: string;
    icon: string;
}

const PrimaryButton = ({ text, link, icon }: Props) => {

    let [hover, setHover] = useState(false);

    return (
        <Button
            component={motion.button}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: .1, ease: 'easeInOut', }}
            whileInView={{ opacity: 1, x: 0 }}
            variant='contained'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                px: 5,
                mt: 2,
                fontSize: '1.25rem',
                width: { xs: '100%', md: 'auto' },
                transition: 'all .2s ease',
                '&:hover': {
                    transform: 'translateY(-5px)!important',
                    pr: 8
                }
            }}>
            <Link underline="none"
                color="secondary.light"
                href={link}
                key='foxvillage-mainpage-hero-cta'>
                {text}
            </Link>

            {/* if icon prop is set to explore, render an explore icon */}
            {icon === 'explore'
                ? <ExploreIcon
                    sx={{
                        opacity: '0',
                        transition: 'all .2s ease',
                        position: 'absolute',
                        right: '50px',
                        ...(hover === true && {
                            right: '30px',
                            opacity: '1',
                        }),
                    }
                    } >
                </ExploreIcon>
                : null}

            {/* if icon prop is set to clock, render a clock icon */}
            {icon === 'clock' ? <AccessTimeFilledIcon
                sx={{
                    opacity: '0',
                    transition: 'all .2s ease',
                    position: 'absolute',
                    right: '50px',
                    ...(hover === true && {
                        right: '30px',
                        opacity: '1',
                    }),
                }
                } >
            </AccessTimeFilledIcon> : null}
        </Button >
    )
}

export default PrimaryButton