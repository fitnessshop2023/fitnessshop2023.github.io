import MainContainer from '@/components/MainContainer/MainContainer';
import BestPrice from '@/components/Pages/HomePage/BestPrice/BestPrice';

export default function Home() {
  return (
    <MainContainer keywords={'main page'}>
      <BestPrice />
    </MainContainer>
  );
}
