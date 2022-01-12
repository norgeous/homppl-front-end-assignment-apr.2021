/* eslint-disable react/prop-types */

const Event = ({ eventData }) => {
  if (!eventData) return null;

  const { datetime, title, url } = eventData;
  return (
    <div style={{ margin: 5, border: '1px solid red' }}>
      event:
      {title}
      <br />
      {datetime}
      <br />
      {url}
    </div>
  );
};

export default Event;
