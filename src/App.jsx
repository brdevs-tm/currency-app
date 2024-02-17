import React, { Fragment } from "react";
import mainContent from "./components/mainContent/MainContent";
import MainContent from "./components/mainContent/MainContent";

const App = () => {
  return (
    <Fragment>
      <main>
        <div className="container">
          <MainContent />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
