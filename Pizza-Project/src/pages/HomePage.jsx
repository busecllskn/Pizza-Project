import HeroSection from "../components/HeroSection";
import KategoriBar from "../components/KategoriBar";
import FeaturedSection from "../components/FeaturedSection";
import MenuSection from "../components/MenuSection";
import HomeFooter from "../components/HomeFooter";

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    background: "#f7f2ef",
  },
};

export default function HomePage() {
  return (
    <div style={styles.page}>
      <HeroSection />
      <KategoriBar />
      <FeaturedSection />
      <MenuSection />
      <HomeFooter />
    </div>
  );
}