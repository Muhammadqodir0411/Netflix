import Navbar from "./Componets/Header/Navbar";
import Header from "./Componets/Header/Header";
import Main from "./Componets/Main/Main";
import Footer from "./Componets/Footer/Footer";
import Movie from "./movieDetails/movie";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App container">
      <Navbar />
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/movie/:id" element={<Movie />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
