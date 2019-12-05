import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPanel from "./components/left_panel/leftPanel";
import RightPanel from "./components/right_panel/rightPanel";

function App() {
  return (
      <div>
        {/* Left Panel */}
          <LeftPanel/>
        {/* /#left-panel */}
        {/* Right Panel */}
          <RightPanel/>
        {/* /#right-panel */}
      </div>
  );
}

export default App;
