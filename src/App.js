import "./App.css";
import { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
          <div key={index}>
            <h4>
              {index + 1} - {event.title}
            </h4>
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App;
