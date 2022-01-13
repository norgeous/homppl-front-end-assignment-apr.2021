/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const unique = (value, index, self) => self.indexOf(value) === index;

const DataContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favouritedEvents, setFavouritedEvents] = useState([]);
  const toggleFavouritedEvent = (newFavouritedEvent) => {
    const isFavouritedEvent = favouritedEvents.includes(newFavouritedEvent);
    if (!isFavouritedEvent) {
      setFavouritedEvents([
        ...favouritedEvents,
        newFavouritedEvent,
      ].filter(unique));
    } else {
      setFavouritedEvents(
        favouritedEvents.filter((favouritedEvent) => favouritedEvent !== newFavouritedEvent),
      );
    }
  };

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
export { useDataContext };
