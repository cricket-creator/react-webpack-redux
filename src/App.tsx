import React, { ChangeEvent, useState } from "react";

import Input from "components/Input";
import Button from "components/Button";

function App(): JSX.Element {
  const [v, setV] = useState<string>("");

  const changeV = (e: ChangeEvent<HTMLInputElement>): void => {
    setV(e.target.value);
  };

  return (
    <>
      <h1>Simple React app with custom webpack config</h1>

      <Input
        value={v}
        onChange={changeV}
      />

      <Button type="button">Click on me</Button>
    </>
  );
}

export default App;
