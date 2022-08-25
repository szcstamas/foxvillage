import CardSection from '../components/CardSection';
import HeroSection from '../components/HeroSection';
import { EventObjects } from '../constants/EventObjects';
import { Images } from '../constants/Images';

const Homepage = () => {
    return (
        <>
            <HeroSection
                backgroundImage={Images.Fox2}
                h1TextFirstSlice="Welcome to the"
                h1Span="Fox Village"
                h1TextSecondSlice="of Zsámbék!"
                pText="Explore our mythical village of wonders in the city of Zsámbék, located in Hungary!"
                primaryBtnText="Explore"
                primaryBtnLink="#explore"
                primaryBtnIcon="explore"
                secondaryBtnText="Contact"
                secondaryBtnLink="/contact"
                secondaryBtnIcon="mail"
            ></HeroSection>
            <CardSection
                id='explore'
                cardSectionBg='primary.main'
                cardSectionH2='Events'
                cardSectionH2Color='secondary.light'
                cardSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                cardSectionIconLightColor='#fff'
                cardSectionIconDarkColor='#f9bc60'
                cardSectionFirstIllu={Images.Forest1}
                cardSectionSecondIllu={Images.Forest2}
                cardSectionIlluWidth='300px'
                arrayOfCards={EventObjects}
            ></CardSection>
        </>
    )
}

export default Homepage