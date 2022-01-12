/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('wutang');

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext); // hook

export default DataContextProvider;
export { useDataContext };
