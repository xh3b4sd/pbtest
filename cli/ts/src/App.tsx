import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as grpcWeb from "grpc-web";
import { APIClient } from "./api/ApiServiceClientPb";
import { CreateI, CreateO } from "./api/create_pb";

// What is going on here?
const client = new APIClient("http://0.0.0.0:7777");

function App() {
  console.log("our api:", client);

  const request = new CreateI();
  request.setName("Marcus");

  client.create(request, {}, (err: grpcWeb.Error, response: CreateO) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
