import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Promo from "@/components/Promo";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Menu />
      <Promo />
      <BookingForm />
      <Footer />
    </main>
  );
};

export default Index;