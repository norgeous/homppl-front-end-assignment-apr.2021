import DataContextProvider from '../../contexts/DataContext';
import QA from '../QA';
import Menu from '../AppMenu';
import SearchPage from '../../pages/SearchPage';

const App = () => (
  <DataContextProvider>
    <div className="App">
      <Menu />
      <QA />
      <SearchPage />
    </div>
  </DataContextProvider>
);

export default App;
