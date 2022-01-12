import { useDataContext } from '../../contexts/DataContext';
import useApi from '../../hooks/useApi';
import Artist from '../../components/Artist';
import Event from '../../components/Event';

const SearchPage = () => {
  const { searchTerm } = useDataContext();
  const { data } = useApi(searchTerm);

  return (
    <div style={{ margin: 10, border: '1px solid blue' }}>
      <p>{`Search results for "${searchTerm}"`}</p>

      {!data.length ? <p>Loading artist data</p> : <Artist artistData={data[0].artist} />}
      {!data.length
        ? <p>Loading events data</p>
        : data.map((eventData, i) => (
          <Event key={eventData.datetime} eventData={eventData} index={i} />
        ))}
    </div>
  );
};

export default SearchPage;
