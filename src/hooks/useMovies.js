import { useState } from "react";
import axios from "axios";

export default function useMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [initialCarrusel, setInitialCarrusel] = useState([]);

  async function getPopularMovies() {
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

      setPopularMovies(response.data.results);
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

  return {
    popularMovies,
    getPopularMovies,
    topRatedMovies,
    getTopRatedMovies,
    initialCarrusel,
    getPopularCarrusel,
  };
}
