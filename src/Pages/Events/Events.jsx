import React from "react";
import "./Events.css";

const eventsList = [
  {
    day: "Monday",
    time: "4pm - 7pm",
    event: "Cyber Security",
    location: "Computer Lab F04",
    lead: "Webster Ifedha",
  },
  {
    day: "Tuesday",
    time: "5pm - 8pm",
    event: "UI/UX",
    location: "Computer Lab F04",
    lead: "Manase Gunga",
  },
  {
    day: "Wednesday",
    time: "6pm - 9pm",
    event: "Web Development",
    location: "Computer Lab F04",
    lead: "Carolyne Githenduka",
  },
  {
    day: "Thursday",
    time: "4pm - 7pm",
    event: "Mobile Apps Development",
    location: "Computer Lab F04",
    lead: "Stanley Amunze",
  },
  {
    day: "Friday",
    time: "3pm - 6pm",
    event: "Cloud Engineering",
    location: "Computer Lab F04",
    lead: "Paul Karanja",
  },
  {
    day: "Saturday",
    time: "1pm - 4pm",
    event: "Power Platform",
    location: "Computer Lab F04",
    lead: "Evyonn Mbithe",
  },
];

function Events() {
  return (
    <div className="events-container">
      <h1> Weekly Events</h1>
      <div className="events-list">
        {eventsList.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.day}</h3>
            <p>
              <strong>Event:</strong> {event.event}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Led by:</strong> {event.lead}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Events;
