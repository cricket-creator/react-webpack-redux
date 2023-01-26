import React from "react";

import Input from "components/Input";
import Button from "components/Button";

function App(): JSX.Element {
  return (
    <>
      <h1>Simple React app with custom webpack config</h1>

      <Input />

      <Button type="button">Click on me</Button>
    </>
  );
}

export default App;
