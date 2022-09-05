import { Typography, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from 'framer-motion';

interface Props {

    headerTitle: string;
    headerCurrencyValue: string;
    onChangeFunctionSelect: any;
}

const PricesListHeader = ({ headerTitle, headerCurrencyValue, onChangeFunctionSelect }: Props) => {
    return (
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
                {headerTitle}
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
                        value={headerCurrencyValue}
                        onChange={onChangeFunctionSelect}
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
    )
}

export default PricesListHeader