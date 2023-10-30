import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalogue from "./pages/Catalogue";
import Mission from "./pages/Mission";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/mission' element={<Mission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
