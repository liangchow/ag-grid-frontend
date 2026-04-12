import { useState } from "react";
import './index.css';
import Chart from './components/Chart';
import Grid from './components/Grid';
import Button from "./components/Button";
import { demoData } from "./data/demoData";
import type { Row } from "./types/Row";

function App() {
 
  const [data, setData] = useState<Row[]>(demoData)

  function handleProcess() {

  }

    return (
      <>
        <Chart data={data} />
        <Grid data={data} onChange={setData} />
        <Button onClick={handleProcess} />
      </>
    )
}

export default App
