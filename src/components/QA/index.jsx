import { useDataContext } from '../../contexts/DataContext';

const artistNames = [
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
  'wutang',
  'maroon5',
  'ed sheeran',
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
