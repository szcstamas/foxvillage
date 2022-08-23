import { useState } from 'react';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

interface Props {
    text: string;
    link: string;
    icon: string;
}

const MainButton = ({ text, link, icon }: Props) => {

    let [hover, setHover] = useState(false);

    return (
        <Button
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
                    transform: 'translateY(-5px)',
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

export default MainButton