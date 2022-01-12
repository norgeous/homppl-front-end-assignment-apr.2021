/* eslint-disable react/prop-types */

const Artist = ({ artistData }) => {
  if (!artistData) return null;

  const {
    name,
    image_url: imageUrl,
  } = artistData;

  return (
    <div style={{ margin: 10, border: '1px solid green' }}>
      <h2>{name}</h2>
      <img src={imageUrl} alt="artist" width={100} />

      <hr />
      <pre>{JSON.stringify(artistData, null, 2)}</pre>
    </div>
  );
};

export default Artist;
