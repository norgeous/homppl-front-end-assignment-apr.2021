import DataContextProvider from '../../contexts/DataContext';
// import QA from '../QA';
import AppMenu from '../AppMenu';
import Router from '../Router';

const App = () => (
  <DataContextProvider>
    <div className="App">
      <AppMenu />
      {/* <QA /> */}
      <Router />
    </div>
  </DataContextProvider>
);

export default App;
