import HeroSection from '../components/HeroSection';
import { Images } from '../constants/Images';

const Homepage = () => {
    return (
        <>
            <HeroSection
                backgroundImage={Images.Fox2}
            ></HeroSection>
        </>
    )
}

export default Homepage