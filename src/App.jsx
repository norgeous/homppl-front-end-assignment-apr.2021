import { useState } from 'react';
import useApi from './useApi';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('maroon5');
  const { url, data } = useApi(searchTerm);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Who’s in town</h1>
        <small>
          powered by
          <a href="https://bandsintown.com">bandsintown.com</a>
        </small>
      </header>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <br />
      {searchTerm}
      <br />
      {url}
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
