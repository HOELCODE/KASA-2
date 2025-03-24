import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRouter from "./routes/Router";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
