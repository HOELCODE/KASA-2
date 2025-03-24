import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Banner>
        <div className="banner-home banner-commun">
          <div className="banner-overlay"></div>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <Cards />
    </>
  );
};

export default Home;
