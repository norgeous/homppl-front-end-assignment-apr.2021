/* eslint-disable react/prop-types */
import Event from '../Event';

const EventsList = ({ events }) => (
  !events.length
    ? <p>no events</p>
    : events.map((eventData, i) => (
      <Event
        key={eventData.datetime}
        eventData={eventData}
        index={i}
      />
    ))
);

export default EventsList;
