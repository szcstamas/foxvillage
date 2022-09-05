import React from 'react';
import { Typography, Box } from '@mui/material';
import PriceTicket from './PriceTicket';
import { PriceTicketRotatedText } from '../constants/Styles';

interface Props {

    currency: string;
    priceListColumnTitle: string;
    priceListArray: Array<{}>;
}

const PriceListColumn = ({ currency, priceListColumnTitle, priceListArray }: Props) => {
    return (
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
                {priceListColumnTitle}
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
                    priceListArray.map((ticket: any, index: number) => {

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
    )
}

export default PriceListColumn