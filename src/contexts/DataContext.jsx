/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

// const unique = (value, index, self) => self.indexOf(value) === index;

const getIsFav = (favouritedEvents, newFavouritedEvent) => favouritedEvents
  .map(({ id }) => id)
  .includes(newFavouritedEvent.id);

const DataContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favouritedEvents, setFavouritedEvents] = useState([]);
  const toggleFavouritedEvent = (newFavouritedEvent) => {
    const isFavouritedEvent = getIsFav(favouritedEvents, newFavouritedEvent);

    if (!isFavouritedEvent) {
      const newFavouritedEvents = [
        newFavouritedEvent,
        ...favouritedEvents,
      ];

      setFavouritedEvents(newFavouritedEvents);
    } else {
      const newFavouritedEvents = favouritedEvents
        .filter((favouritedEvent) => favouritedEvent.id !== newFavouritedEvent.id);

      setFavouritedEvents(newFavouritedEvents);
    }
  };

  return (
    <DataContext.Provider
      value={{
        searchTerm,
        setSearchTerm,

        favouritedEvents,
        toggleFavouritedEvent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext); // hook

export default DataContextProvider;
export { useDataContext, getIsFav };
