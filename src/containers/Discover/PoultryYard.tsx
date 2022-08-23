import HeroSection from '../../components/HeroSection';
import { Images } from '../../constants/Images';

const PoultryYard = () => {
    return (
        <HeroSection
            backgroundImage={Images.Hen1}
            h1TextFirstSlice="Discover our lovely"
            h1Span="Poultry Yard"
            h1TextSecondSlice="!"
            pText="Our poultry yard is one of the most family-friendly place where you can see our tiny, lovely guests!"
            primaryBtnText="Our guests"
            primaryBtnLink="#guests"
            primaryBtnIcon="paw"
            secondaryBtnText="The Fox Forest"
            secondaryBtnLink="/fox-forest"
            secondaryBtnIcon="forest"
        ></HeroSection>
    )
}

export default PoultryYard