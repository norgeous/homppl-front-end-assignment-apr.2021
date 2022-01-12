import SearchPage from '../../pages/SearchPage';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Who’s in town</h1>
      <small>
        powered by
        <a href="https://bandsintown.com">bandsintown.com</a>
      </small>
    </header>

    <SearchPage />
  </div>
);

export default App;
