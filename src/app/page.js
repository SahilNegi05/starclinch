import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import LateNightMaggie from "./components/lateNightMaggie/lateNightMaggie";
import RecentShow from "./components/recentShow/RecentShow";
import TalentSection from "./components/talentSection/TalentSection";
import TopCeleb from "./components/topCeleb/TopCeleb";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <TopCeleb />
      <LateNightMaggie />
      <RecentShow />
      <TalentSection />
    </div>
  );
}
