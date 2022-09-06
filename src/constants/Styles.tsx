import { theme } from "./Theme";

export const FlexCenter = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const FlexStart = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
}

export const HeroSectionStyles = {

    px: { xs: 5, sm: 10, md: 15, lg: 0 },
    py: { xs: 5, sm: 10, md: 15, lg: 25 },
};

export const CardSectionStyles = {

    px: { xs: 5, sm: 10, md: 15, lg: 0 },
    pt: { xs: 5, sm: 5, md: 6, lg: 10, xl: 10 },
    pb: { xs: 12, sm: 7, md: 8, lg: 12, xl: 15 },
    overflow: 'hidden'
};

export const ContainerBoxStyles = {

    maxWidth: { sm: '100%', lg: '1100px', xl: '1400px' },
    m: 'auto'
};

//object created from theme colors, so I can use them without using theme 
export const Colors = {

    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    light: theme.palette.secondary.light,
    dark: theme.palette.secondary.dark
}

export const PriceTicketStyle = {

    position: 'relative',
    backgroundColor: '#fff',
    overflow: 'hidden',
    p: 3,
    '&::before': { content: '""', position: 'absolute', width: 40, height: 40, borderRadius: '50%', backgroundColor: Colors.primary, top: '50%', left: -5, transform: 'translate(-50%, -50%)' },
    '&::after': { content: '""', position: 'absolute', width: 40, height: 40, borderRadius: '50%', backgroundColor: Colors.primary, top: '50%', right: -45, transform: 'translate(-50%, -50%)' },
}

export const PriceTicketRotatedText = {

    textTransform: 'uppercase',
    opacity: .8,
    transform: 'rotate(180deg)',
    writingMode: 'vertical-lr'
}

