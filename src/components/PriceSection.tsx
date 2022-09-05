import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { CardSectionStyles, ContainerBoxStyles, PriceTicketRotatedText } from '../constants/Styles';
import { motion } from 'framer-motion';
import PriceTicket from './PriceTicket';


interface Props {
    xDirection: number;
    priceSectionIconLightColor: string;
    priceSectionIconDarkColor: string;
    priceSectionFirstIllu: string;
    priceSectionIlluInvert: number;
    priceSectionIlluMaxHeight: number;
    priceSectionParagraph: string;
}

const PriceSection = ({ xDirection, priceSectionIconLightColor, priceSectionIconDarkColor, priceSectionParagraph, priceSectionFirstIllu, priceSectionIlluInvert }: Props) => {

    const [currency, setTicketCurrency] = useState('€');
    const [oneTimeWeekDaysTickets, setOneTimeWeekDaysTickets] = useState([]);
    const [oneTimeWeekEndTickets, setOneTimeWeekEndTickets] = useState([]);

    useEffect(() => {
        axios.get('tickets.json')
            .then(res => {
                setOneTimeWeekDaysTickets(res.data.onetimetickets[0].weekdays);
                setOneTimeWeekEndTickets(res.data.onetimetickets[1].weekends);
            }
            )
            .catch(err => console.log(err))
    }, [currency])

    const priceSectionIllu = {
        position: 'absolute',
        bottom: '-150px',
        left: '0',
        width: '100%',
        pointerEvents: 'none',
        filter: `invert(${priceSectionIlluInvert}%)`
    };

    const [currencyName, setCurrencyName] = useState('EUR');

    const handleChange = (event: SelectChangeEvent) => {
        setCurrencyName(event.target.value);

        switch (event.target.value) {
            case 'EUR':
                setTicketCurrency('€');
                break;
            case 'HUF':
                setTicketCurrency('Ft');
                break;
            case 'USD':
                setTicketCurrency('$');
                break;
        }
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

                        {priceSectionParagraph}
                    </Typography>

                    {/* prices table */}
                    {/* prices big container */}
                    <Box
                        component={motion.div}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        {/* one-time tickets container */}
                        <Box
                            component={motion.div}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            {/* one-time prices header */}
                            <Box
                                component={motion.div}
                                color='secondary.light'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingBottom: 1,
                                    borderBottom: '2px solid #fff',
                                    width: '100%',
                                }}
                            >
                                {/* one-time ticket h4 */}
                                <Typography variant='h4'>
                                    One-time tickets
                                </Typography>

                                {/* dropdown currency & dropdown header */}
                                <Box
                                    component='div'
                                    color='secondary.light'
                                    sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'right' }}
                                >
                                    See prices in:
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            className='select-currency'
                                            value={currencyName}
                                            onChange={handleChange}
                                            sx={{ color: '#fff', border: '2px solid #fff', transition: 'all .2s ease', '&:hover': { backgroundColor: '#0a381f' } }}
                                            displayEmpty
                                        >
                                            <MenuItem value='EUR' >EUR</MenuItem>
                                            <MenuItem value='HUF' >HUF</MenuItem>
                                            <MenuItem value='USD' >USD</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box component='div'
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '50%',
                                            border: '2px solid #fff',
                                            p: 2,
                                            cursor: 'pointer',
                                            transition: 'all .2s ease',
                                            '&:hover': {
                                                backgroundColor: '#0a381f'
                                            }
                                        }}><ExpandMoreIcon></ExpandMoreIcon></Box>
                                </Box>
                            </Box>

                            {/* one-time ticket LIST */}
                            <Box
                                component='div'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    gap: 6,
                                    width: '100%',
                                    flexDirection: { sm: 'column', md: 'row' }
                                }}
                            >
                                {/* one-time ticket LEFT SIDE */}
                                <Box
                                    component='div'
                                    sx={{
                                        position: 'relative',
                                        flex: '1',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: 1
                                    }}
                                >
                                    <Typography
                                        variant='h4'
                                        color='secondary.light'
                                        sx={{ ...PriceTicketRotatedText }}
                                    >
                                        weekdays
                                    </Typography>
                                    <Box
                                        component='div'
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                            gap: 1,
                                            width: '100%',
                                            ml: 6
                                        }}
                                    >
                                        {
                                            oneTimeWeekDaysTickets.map((ticket: any, index) => {

                                                const EUR_TO_HUF_CHANGE = 402;
                                                const EUR_TO_USD_CHANGE = 0.99;



                                                switch (currency) {
                                                    case '€':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                    case 'Ft':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price * EUR_TO_HUF_CHANGE)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                    case '$':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price * EUR_TO_USD_CHANGE)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                }

                                                return ticket;

                                            })
                                        }
                                    </Box>

                                </Box>

                                {/* one-time ticket RIGHT SIDE */}
                                <Box
                                    component='div'
                                    sx={{
                                        position: 'relative',
                                        flex: '1',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: 1
                                    }}
                                >
                                    <Typography
                                        variant='h4'
                                        color='secondary.light'
                                        sx={{ ...PriceTicketRotatedText }}
                                    >
                                        weekends
                                    </Typography>
                                    <Box
                                        component='div'
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                            width: '100%',
                                            gap: 1,
                                            ml: 6
                                        }}
                                    >
                                        {
                                            oneTimeWeekEndTickets.map((ticket: any, index) => {

                                                const EUR_TO_HUF_CHANGE = 402;
                                                const EUR_TO_USD_CHANGE = 0.99;

                                                switch (currency) {
                                                    case '€':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                    case 'Ft':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price * EUR_TO_HUF_CHANGE)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                    case '$':
                                                        return (
                                                            <PriceTicket
                                                                key={index}
                                                                ticketTitle={ticket.title}
                                                                ticketPrice={Math.trunc(ticket.price * EUR_TO_USD_CHANGE)}
                                                                ticketCurrency={currency}
                                                                ticketDesc={ticket.desc}
                                                            />
                                                        )
                                                }

                                                return ticket;
                                            })
                                        }
                                    </Box>

                                </Box>

                            </Box>

                        </Box>
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

