import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import InputField from "./Component/InputField";
import LoginForm from "./Component/LoginForm";

import LoginFormShotcut from "./Component/LoginFormShotcut";
import PopupModel from "./PopModel/PopupModel";

function App() {
  // const [name, setname] = useState("");
  // const [fullname, setfullname] = useState();
  // // ......................
  // const [lname, setLname] = useState("");
  // const [lastname, setLastname] = useState();

  // const inPutValue = (event) => {
  //   console.log(event.target.value, "helll");
  //   setname(event.target.value);
  // };

  // const inPutValueTwo = (event) => {
  //   console.log(event.target.value, "hello");
  //   setLname(event.target.value);
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setfullname(name);
  //   setLastname(lname);
  // };

  return (
    <>
      <Router>
        <div class="">
          <ul className="Router__link">
            <li className="">
              <Link to="/">
                <button type="" className="">
                  login Form
                </button>
              </Link>
            </li>
            <li className="">
              <Link to="/popup-modal">
                <button type="" className="">
                  Popup Modal
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<LoginFormShotcut />}></Route>
          {/* <div> */}
          {/* <InputField /> */}
          {/* <LoginForm /> */}
          {/* <LoginFormShotcut /> */}
          {/* </div> */}
          {/* <div>
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>
            welcome
            <b>
              {fullname} {lastname}
            </b>
            to Oriflamme Company Pagaloo ki
          </strong>
          <p>Change this and that and try again.</p>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form classname="" onSubmit={onSubmit}>
          <Form.Control
            type="text"
            placeholder="Enter Your First Name..."
            value={name}
            onChange={inPutValue}
          />
          <Form.Control
            type="text"
            placeholder="Enter Your Last Name..."
            value={lname}
            onChange={inPutValueTwo}
          />
          <Button type="submit" variant="success">
            Success
          </Button>
        </form>
      </div> */}
          <Route path="/popup-modal" element={<PopupModel />}></Route>
          {/* <div>
            <PopupModel />
          </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
