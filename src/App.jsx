import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import ContainMovies from "./views/ContainMovies";
import DetailMovie from "./views/DetailMovie";
import Search from "./views/Search";
import Error404 from "./views/Error404";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import MyList from "./views/MyList";
import FavouritesContextProvider from "./context/FavouritesContext";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <FavouritesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<ContainMovies />} />
            <Route path="/movie/:idMovie" element={<DetailMovie />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </FavouritesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
