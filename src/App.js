import React from "react";

import Buttonoutlined from "./components/buttons/Buttonoutlined";
function App() {
  return (
    <div>
      <Buttonoutlined
        fontSize="var(--S1)"
        title="Click Me"
        url="#"
        right={true}
      />
    </div>
  );
}

export default App;
