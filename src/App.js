import "./App.css";
import Title from "./components/Title";

const App = () => {
  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
    </div>
  );
};

export default App;
