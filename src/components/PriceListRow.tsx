import React from 'react';
import { Box } from '@mui/material';
import PriceTicket from './PriceTicket';

interface Props {

    currency: string;
    priceListArray: Array<{}>;
}

const PriceListRow = ({ currency, priceListArray }: Props) => {
    return (
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
    )
}

export default PriceListRow