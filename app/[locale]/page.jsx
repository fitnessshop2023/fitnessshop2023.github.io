import MainContainer from '@/components/MainContainer/MainContainer';
import BannerSlider from '@/components/Pages/HomePage/BannerSlider/BannerSlider';
import BestPrice from '@/components/Pages/HomePage/BestPrice/BestPrice';
import Blog from '@/components/Pages/HomePage/Blog/Blog';
import { Categories } from '@/components/Pages/HomePage/Categories/Categories';
import CustomerReviews from '@/components/Pages/HomePage/CustomerReviews/CustomerReviews';

export default function Home() {
  return (
    <MainContainer keywords={'main page'}>
      <BannerSlider />
      <Categories />
      <BestPrice />
      <Blog />
      <CustomerReviews />
    </MainContainer>
  );
}
