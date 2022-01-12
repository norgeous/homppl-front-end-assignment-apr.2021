/* eslint-disable react/prop-types */

const Artist = ({ artistData }) => {
  console.log(artistData);

  if (!artistData) return null;

  const { name, image_url: aiu } = artistData;
  return (
    <div>
      artist name:
      {name}
      <img src={aiu} alt="artist" />
    </div>
  );
};

export default Artist;
