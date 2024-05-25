import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [initialCarrusel, setInitialCarrusel] = useState([]);
  const [oneMovie, setOneMovie] = useState({});
  const [trailer, setTrailer] = useState();
  // const [releases, setReleases] = useState([]);

  const [movies, setMovies] = useState([]);

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const { idMovie } = useParams();

  // Ocultar la api key

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
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkxNmIwNTA0Zjc0YjlmMjQ2NzFiYjRmMGZmMjhkMyIsInN1YiI6IjY2M2ZmMjZlNTNhMmU1Yzc5MzBiMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AIbiaaCpVKgqLqrtHpZqhBa8ZXfWWgAMIoqD5YpL8E",
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkxNmIwNTA0Zjc0YjlmMjQ2NzFiYjRmMGZmMjhkMyIsInN1YiI6IjY2M2ZmMjZlNTNhMmU1Yzc5MzBiMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AIbiaaCpVKgqLqrtHpZqhBa8ZXfWWgAMIoqD5YpL8E",
          },
        }
      );

      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getPopularCarrusel() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
            page: 1,
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkxNmIwNTA0Zjc0YjlmMjQ2NzFiYjRmMGZmMjhkMyIsInN1YiI6IjY2M2ZmMjZlNTNhMmU1Yzc5MzBiMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AIbiaaCpVKgqLqrtHpZqhBa8ZXfWWgAMIoqD5YpL8E",
          },
        }
      );

      setInitialCarrusel(response.data.results.slice(0, 5));
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
            /*             append_to_response: "videos",
             */
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkxNmIwNTA0Zjc0YjlmMjQ2NzFiYjRmMGZmMjhkMyIsInN1YiI6IjY2M2ZmMjZlNTNhMmU1Yzc5MzBiMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AIbiaaCpVKgqLqrtHpZqhBa8ZXfWWgAMIoqD5YpL8E",
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkxNmIwNTA0Zjc0YjlmMjQ2NzFiYjRmMGZmMjhkMyIsInN1YiI6IjY2M2ZmMjZlNTNhMmU1Yzc5MzBiMzg3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AIbiaaCpVKgqLqrtHpZqhBa8ZXfWWgAMIoqD5YpL8E",
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

  const handlePagination = (event, pagenumber) => {
    setPage(pagenumber);
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    topRatedMovies,
    getTopRatedMovies,
    initialCarrusel,
    getPopularCarrusel,
    oneMovie,
    getOneMovie,
    trailer,
    getTrailer,

    movies,
    getMoviesByCategory,
    totalPages,
    page,
    handlePagination,
    resetPage,
  };
}
