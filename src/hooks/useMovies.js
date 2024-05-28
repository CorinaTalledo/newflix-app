import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useMovies() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [oneMovie, setOneMovie] = useState({});
  const [trailer, setTrailer] = useState();

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const { idMovie } = useParams();

  async function getMoviesByCategory(category) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?page=${page}`,
        {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
          },
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            accept: "application/json",
          },
        }
      );

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getTopRatedMovies() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            language: "en-US",
            page: 1,
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getOneMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}`,
        {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setOneMovie(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getTrailer() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
        {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setTrailer(
        response.data.results.find(({ name }) => name === "Official Trailer")
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getSearchedMovie(inputValue) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}`,
        {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handlePagination = (event, pagenumber) => {
    setPage(pagenumber);
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    movies,
    getMoviesByCategory,
    topRatedMovies,
    getTopRatedMovies,
    oneMovie,
    getOneMovie,
    trailer,
    getTrailer,
    getSearchedMovie,
    totalPages,
    page,
    handlePagination,
    resetPage,
  };
}
