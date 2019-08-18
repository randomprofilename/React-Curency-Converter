import React from 'react';
// import './App.css';
import "semantic-ui-less/semantic.less"
import { HashRouter } from "react-router-dom"
import BaseLayout from "./components/BaseLayout";

function App() {
  return (
    <HashRouter>
      <BaseLayout />
    </HashRouter>
  );
}

export default App;
