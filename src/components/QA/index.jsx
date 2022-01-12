import { useDataContext } from '../../contexts/DataContext';

const artistNames = [
  'wutang',
  'maroon5',
  'ed sheeran',
  'a',
  'b',
  'c',
  'd',
  'e',
  'i',
  'm',
  'o',
  'q',
  's',
  't',
  'w',
  'x',
];

const QA = () => {
  const { setSearchTerm } = useDataContext();

  return (
    <div>
      {artistNames.map((artistName) => (
        <button type="button" key={artistName} onClick={() => setSearchTerm(artistName)}>{artistName}</button>
      ))}
    </div>
  );
};

export default QA;
