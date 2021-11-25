import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ]);

  return (
    <div className="App">
      {showContent && (
        <div>
          <button onClick={() => setShowContent(false)}>Hide Content</button>
        </div>
      )}

      {!showContent && (
        <div>
          <button onClick={() => setShowContent(true)}>Show Content</button>
        </div>
      )}

      {showContent && <EventList events={events} handleClick={handleClick} />}
    </div>
  );
};

export default App;
