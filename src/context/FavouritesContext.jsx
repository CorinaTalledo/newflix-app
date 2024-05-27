import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

// Lo usa CardMovie, DetailMovie, MyList

export default function FavouritesContextProvider({ children }) {
  const [allFavourites, setAllFavourites] = useState([]);

  // 1. Crear estado de todos los favoritos. Ahi se van a almacenar todos los seleccionados

  // Este useEffect ejecuta el LS desde que se abre la app con lo que haya.
  useEffect(() => {
    const favouritesLS = JSON.parse(localStorage.getItem("favourites"));
    if (favouritesLS) {
      setAllFavourites(favouritesLS);
    }
  }, []);

  // 2. Agrega el nuevo favorito almacenandolo en el LS
  const addFavourite = (favourite) => {
    localStorage.setItem(
      "favourites",
      JSON.stringify([...allFavourites, favourite])
    );

    setAllFavourites([...allFavourites, favourite]);
  };

  // Elimina el favorito segun el id
  const removeFavourite = (id) => {
    const newFavourites = allFavourites.filter(
      (favourite) => favourite.id !== id
    );

    localStorage.setItem("favourites", JSON.stringify(newFavourites));

    setAllFavourites(newFavourites);
  };

  // Para saber si existe y saber qué funcion ejecutar (agregar o eliminar)
  const isFavourite = (id) => {
    const exist = allFavourites.some((movie) => movie.id === id);
    return exist;
  };

  const totalFavourites = () => {
    return allFavourites?.length;
  };

  const data = {
    allFavourites,
    addFavourite,
    isFavourite,
    removeFavourite,
    totalFavourites,
  };

  return (
    <FavouritesContext.Provider value={data}>
      {children}
    </FavouritesContext.Provider>
  );
}
