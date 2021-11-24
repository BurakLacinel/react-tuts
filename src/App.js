import "./App.css";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ]);

  const handleClick = (id) => {
    // setEvents(
    //   events.filter((event) => {
    //     return id !== event.id;
    //   })
    // );

    // Yukarıda "setEvents()" içerisinde "events" current state'ini kullanıyoruz."setEvents()" ile güncellediğimiz "events", güncelleme gerçekleşmeden önce değişime uğrayabilir. Bu beklenmedik hatalara sebep olabilir. Bunun için "setEvents()"e state'in o anki değerini dönen bir fonksiyon yazmalıyız.
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });

    // Temel Kural; "state"i önceki değerine göre güncellememiz gerektiğinde, İlk olarak callback function ile önceki değere ulaşmak gerekir.
  };

  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id}>
          <h4>
            {index + 1} - {event.title}
          </h4>
          <button onClick={() => handleClick(event.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
