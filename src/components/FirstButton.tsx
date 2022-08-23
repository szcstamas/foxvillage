import { Link } from '@mui/material';
import Button from '@mui/material/Button';

interface Props {
    text: string;
    link: string;
}

const FirstButton = ({ text, link }: Props) => {
    return (
        <Button variant='contained'>
            <Link underline="none"
                color="secondary.light"
                href={link}
                key='foxvillage-mainpage-hero-cta'>
                {text}
            </Link>
        </Button>
    )
}

export default FirstButton