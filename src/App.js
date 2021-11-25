import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="App">
      <Title
        title="Events in Your Area"
        subtitle="All the latest events in mario kingdom"
      />

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      <Modal>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic
          autem sunt a doloribus quam recusandae vero, corrupti iure quasi
          mollitia incidunt vel dolores. Laborum doloremque natus unde suscipit
          excepturi.
        </p>
        <a href="#">find out more...</a>
      </Modal>
    </div>
  );
};

export default App;
