import DataContextProvider from '../../contexts/DataContext';
import Menu from '../AppMenu';
import SearchPage from '../../pages/SearchPage';

const App = () => (
  <DataContextProvider>
    <div className="App">
      <Menu />
      <SearchPage />
    </div>
  </DataContextProvider>
);

export default App;
