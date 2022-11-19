import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
