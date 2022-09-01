import { motion, useScroll, useSpring } from 'framer-motion';
import CardSection from '../components/CardSection';
import HeroSection from '../components/HeroSection';
import { DiscoverObjects } from '../constants/DiscoverObjects';
import { EventObjects } from '../constants/EventObjects';
import { Images } from '../constants/Images';

const Homepage = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <HeroSection
                backgroundImage={Images.Fox2}
                h1TextFirstSlice="Welcome to the"
                h1Span="Fox Village"
                h1TextSecondSlice="of Zsámbék!"
                pText="Explore our mythical village of wonders in the city of Zsámbék, located in Hungary!"
                primaryBtnText="Explore"
                primaryBtnLink="/#explore"
                primaryBtnIcon="explore"
                secondaryBtnText="Contact"
                secondaryBtnLink="/foxvillage/#/contact"
                secondaryBtnIcon="mail"
            ></HeroSection>
            <CardSection
                id='explore'
                xDirection={-100}
                cardSectionBg='primary.main'
                cardSectionH2='Events'
                cardSectionH2Color='secondary.light'
                cardSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                cardSectionIconLightColor='#fff'
                cardSectionIconDarkColor='#f9bc60'
                cardSectionFirstIllu={Images.Forest1}
                cardSectionSecondIllu={Images.Forest2}
                cardSectionIlluInvert={100}
                cardSectionIlluWidth='300px'
                cardBoxColor='#fff'
                cardTypoColor='primary.main'
                arrayOfCards={EventObjects}
            ></CardSection>
            <CardSection
                id='discover'
                xDirection={100}
                cardSectionBg='secondary.light'
                cardSectionH2='Discover'
                cardSectionH2Color='primary.main'
                cardSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                cardSectionIconLightColor='#272727'
                cardSectionIconDarkColor='#f9bc60'
                cardSectionFirstIllu={Images.Forest1}
                cardSectionSecondIllu={Images.Forest2}
                cardSectionIlluInvert={0}
                cardSectionIlluWidth='300px'
                cardBoxColor='#0e4627'
                cardTypoColor='secondary.light'
                arrayOfCards={DiscoverObjects}
            ></CardSection>
        </>
    )
}

export default Homepage