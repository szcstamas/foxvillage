import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { motion } from 'framer-motion';
import PricesListHeader from './PricesListHeader';
import PriceListColumn from './PriceListColumn';
import PriceTicket from './PriceTicket';
import PriceListRow from './PriceListRow';

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

    const [oneTimeWeekDaysTickets, setOneTimeWeekDaysTickets] = useState<any[]>([]);
    const [oneTimeWeekEndTickets, setOneTimeWeekEndTickets] = useState<any[]>([]);
    const [nightTripTickets, setNightTripTickets] = useState<any[]>([]);
    const [animalShowTickets, setAnimalShowTickets] = useState<any[]>([]);
    const [closeUpTickets, setCloseUpTickets] = useState<any[]>([]);
    const [longPeriodTickets, setLongPeriodTickets] = useState<any[]>([]);

    //onetime currency
    const [oneTimeCurrency, setOneTimeCurrency] = useState('€');
    const [oneTimeCurrencyName, setOneTimeCurrencyName] = useState('EUR');

    //event currency
    const [eventCurrency, setEventCurrency] = useState('€');
    const [eventTicketCurrencyName, setEventTicketCurrencyName] = useState('EUR');

    //longperiod currency
    const [longPeriodCurrency, setLongPeriodCurrency] = useState('€');
    const [longPeriodTicketCurrencyName, setLongPeriodTicketCurrencyName] = useState('EUR');

    useEffect(() => {
        axios.get('tickets.json')
            .then(res => {
                setOneTimeWeekDaysTickets(res.data.onetimetickets[0].weekdays);
                setOneTimeWeekEndTickets(res.data.onetimetickets[1].weekends);
                setNightTripTickets(res.data.eventtickets[0].nighttrip);
                setAnimalShowTickets(res.data.eventtickets[1].animalshow);
                setCloseUpTickets(res.data.eventtickets[2].closeup);
                setLongPeriodTickets(res.data.longperiodtickets);
            }
            )
            .catch(err => console.log(err))
    }, [oneTimeCurrency, eventCurrency, longPeriodCurrency])

    const priceSectionIllu = {
        position: 'absolute',
        bottom: -30,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        filter: `invert(${priceSectionIlluInvert}%) drop-shadow(0px 0px 5px rgba(0, 0, 0, .25))`
    };

    const oneTimeHandleChange = (event: SelectChangeEvent) => {
        setOneTimeCurrencyName(event.target.value);

        switch (event.target.value) {
            case 'EUR':
                setOneTimeCurrency('€');
                break;
            case 'HUF':
                setOneTimeCurrency('Ft');
                break;
            case 'USD':
                setOneTimeCurrency('$');
                break;
        }
    };

    const eventTicketHandleChange = (event: SelectChangeEvent) => {
        setEventTicketCurrencyName(event.target.value);

        switch (event.target.value) {
            case 'EUR':
                setEventCurrency('€');
                break;
            case 'HUF':
                setEventCurrency('Ft');
                break;
            case 'USD':
                setEventCurrency('$');
                break;
        }
    };

    const longPeriodTicketHandleChange = (event: SelectChangeEvent) => {
        setLongPeriodTicketCurrencyName(event.target.value);

        switch (event.target.value) {
            case 'EUR':
                setLongPeriodCurrency('€');
                break;
            case 'HUF':
                setLongPeriodCurrency('Ft');
                break;
            case 'USD':
                setLongPeriodCurrency('$');
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
                            gap: 3
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
                                gap: 2,
                            }}
                        >
                            {/* one-time prices header */}
                            <PricesListHeader
                                headerTitle='One-time tickets'
                                headerCurrencyValue={oneTimeCurrencyName}
                                onChangeFunctionSelect={oneTimeHandleChange}
                            />

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
                                <PriceListColumn
                                    currency={oneTimeCurrency}
                                    priceListColumnTitle='weekdays'
                                    priceListArray={oneTimeWeekDaysTickets}
                                />

                                {/* one-time ticket RIGHT SIDE */}
                                <PriceListColumn
                                    currency={oneTimeCurrency}
                                    priceListColumnTitle='weekends'
                                    priceListArray={oneTimeWeekEndTickets}
                                />

                            </Box>

                        </Box>

                        {/* event tickets container */}
                        <Box
                            component={motion.div}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            {/* event tickets header */}
                            <PricesListHeader
                                headerTitle='Event tickets (only on weekends)'
                                headerCurrencyValue={eventTicketCurrencyName}
                                onChangeFunctionSelect={eventTicketHandleChange}
                            />

                            {/* event ticket LIST */}
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
                                {/* even ticket NIGHT TRIP */}
                                <PriceListColumn
                                    currency={eventCurrency}
                                    priceListColumnTitle='night trip'
                                    priceListArray={nightTripTickets}
                                />

                                {/* event ticket ANIMAL SHOW */}
                                <PriceListColumn
                                    currency={eventCurrency}
                                    priceListColumnTitle='animal show'
                                    priceListArray={animalShowTickets}
                                />

                                {/* event ticket CLOSE UP */}
                                <PriceListColumn
                                    currency={eventCurrency}
                                    priceListColumnTitle='close up'
                                    priceListArray={closeUpTickets}
                                />


                            </Box>

                        </Box>

                        {/* longp period tickets container */}
                        <Box
                            component={motion.div}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            {/* long period header */}
                            <PricesListHeader
                                headerTitle='Long period tickets'
                                headerCurrencyValue={longPeriodTicketCurrencyName}
                                onChangeFunctionSelect={longPeriodTicketHandleChange}
                            />

                            {/* long period LIST */}
                            <PriceListRow
                                currency={longPeriodCurrency}
                                priceListArray={longPeriodTickets}
                            />

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

