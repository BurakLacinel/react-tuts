//// "npx create-react-app" vs. "npm create-react-app"
// "npx"; pakedi geçici olarak "download" eder. Sonrasında Otomatik olarak çalıştırır.
// "npm"; pakedi kalıcı olarak "install" eder. Sonrasında Otomatik olarak çalıştırmaz.

// React versiyon 17.0 itibariyle "component"larda "import React from "react"" yazmaya gerek yok.

import "./App.css";
import React, { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ]);

  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id}>
          <h4>
            {index + 1} - {event.title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default App;
