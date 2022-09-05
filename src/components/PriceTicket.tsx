import { Box, Typography } from '@mui/system';
import { PriceTicketStyle } from '../constants/Styles';

interface Props {

    ticketTitle: string;
    ticketPrice: number;
    ticketDesc: string;
}

const PriceTicket = ({ ticketTitle, ticketPrice, ticketDesc }: Props) => {
    return (
        <Box component='div' sx={{ ...PriceTicketStyle }}>
            <Typography paragraph={true}>{ticketTitle}</Typography>
            <Typography variant='h4'>{ticket}</Typography>
            <Typography paragraph={true} sx={{ fontSize: '14px', color: '#efefef' }}>With proper student or elderly license!</Typography>
        </Box>
    )
}

export default PriceTicket