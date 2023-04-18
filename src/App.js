import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import toolTipComponent, {
  TooltipComponent,
} from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-8 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
