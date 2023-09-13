import MainContainer from '@/components/MainContainer/MainContainer';
import BannerSlider from '@/components/Pages/HomePage/BannerSlider/BannerSlider';
import BestPrice from '@/components/Pages/HomePage/BestPrice/BestPrice';
import CustomerReviews from '@/components/Pages/HomePage/CustomerReviews/CustomerReviews';

export default function Home() {
  return (
    <MainContainer keywords={'main page'}>
      <BannerSlider />
      <BestPrice />
      <CustomerReviews />
    </MainContainer>
  );
}
