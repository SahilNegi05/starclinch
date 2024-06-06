// import Banner from "./components/banner/Banner";
// import Header from "./components/header/Header";
// import LateNightMaggie from "./components/lateNightMaggie/lateNightMaggie";
// import RecentShow from "./components/recentShow/RecentShow";
// import TalentSection from "./components/talentSection/TalentSection";
// import TopCeleb from "./components/topCeleb/TopCeleb";

import Banner from "./mobilComponents/banner/Banner";
import Footer from "./mobilComponents/footer/footer";
import FundingArea from "./mobilComponents/fundingArea/fundingArea";
import Header from "./mobilComponents/header/Header";
import HighProfileClient from "./mobilComponents/highProfileClient/highProfileClient";
import OurClient from "./mobilComponents/ourClient/ourClient";
import PriceArea from "./mobilComponents/priceArea/priceArea";
import SneeakPeeak from "./mobilComponents/sneakPeek/sneeakPeeak";
import StarCarousle from "./mobilComponents/starCarousle/starCarousle";
import StarReviews from "./mobilComponents/starReviews/starReviews";
import Statistics from "./mobilComponents/statistics/statistics";

export default function Home() {
  return (
    <div class="mobile">
      <Header />
      <Banner />
      <StarReviews />
      <OurClient />
      <HighProfileClient />
      <Statistics />
      <FundingArea />
      <PriceArea />
      <SneeakPeeak />
      <StarCarousle />
      <Footer />
    </div>
  );
}
