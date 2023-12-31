// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import {
  heroData,
  headerData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData
} from '../data.json'

// import data

const Home = () => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      heroData,
      headerData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData

    }
  }
}
export default Home;
