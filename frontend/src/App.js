import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

// uh oh, not asynchrous programming!!
async function getWebscrapeInfo(url) {
  return axios
    .get("/api/webscrape", {
      params: {
        url: url,
      },
    })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function App() {
  const [webscrape, setWebscrape] = useState({});

  return (
    <div>
      <button
        onSubmit={() => {
          setWebscrape(getWebscrapeInfo("https://www.google.com"));
        }}
      >
        Webscrape!!!
      </button>
    </div>
  );
}

export default App;
