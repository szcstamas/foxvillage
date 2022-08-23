import HeroSection from '../components/HeroSection';
import { Images } from '../constants/Images';

const Homepage = () => {
    return (
        <>
            <HeroSection
                backgroundImage={Images.Fox2}
                h1TextFirstSlice="Welcome to the"
                h1Span="Fox Village"
                h1TextSecondSlice="of Zsámbék"
                pText="Explore our mythical village of wonders in the city of Zsámbék, located in Hungary!"
                primaryBtnText="Explore"
                primaryBtnLink="#explore"
                primaryBtnIcon="explore"
                secondaryBtnText="Contact"
                secondaryBtnLink="/contact"
                secondaryBtnIcon="mail"
            ></HeroSection>
        </>
    )
}

export default Homepage