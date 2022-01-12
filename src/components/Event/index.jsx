/* eslint-disable react/prop-types */

const Event = ({ eventData, index }) => {
  if (!eventData) return null;

  const {
    datetime,
    title,
    url,
  } = eventData;

  return (
    <div style={{ margin: 10, border: '1px solid red' }}>
      {`Event ${index}`}
      {title}
      <br />
      {datetime}
      <br />
      {url}

      <hr />
      <pre>{JSON.stringify(eventData, null, 2)}</pre>
    </div>
  );
};

export default Event;
