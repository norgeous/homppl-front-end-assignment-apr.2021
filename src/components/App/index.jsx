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

    <hr />

    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </div>
);

export default App;
