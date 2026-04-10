import React, { useState } from "react";
import './index.css';
import Grid from './components/Grid';
import Chart from './components/Chart';
import { demoData } from "./utils";
import type { Row } from "./types/Row";

function App() {
 
  const [data, setData] = useState<Row[]>(demoData);

    return (
      <>
        <Chart data={data} />
        <Grid data={data} onChange={setData} />
      </>
    )
}

export default App
