import HeroSection from '../components/HeroSection';
import { Images } from '../constants/Images';

const Homepage = () => {
    return (
        <>
            <HeroSection
                backgroundImage={Images[2]}
            ></HeroSection>
        </>
    )
}

export default Homepage