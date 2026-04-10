import { DataSheetGrid, floatColumn, keyColumn, type Column } from "react-datasheet-grid";
import 'react-datasheet-grid/dist/style.css'
import type { Row } from "../types/Row";

type Props = {
  data: Row[];
  onChange: (data: Row[]) => void;
}

function Grid({ data, onChange }: Props) {

  const columns: Column<Row>[] = [
    { ...keyColumn<Row, 'pressure'>('pressure', floatColumn), title: "Pressure"},
    { ...keyColumn<Row, 'void_ratio'>('void_ratio', floatColumn), title: "Void Ratio"},
  ];

  return (
        <DataSheetGrid<Row>
          value={data}
          columns={columns}
          onChange={onChange}
          createRow={() => ({ pressure: null, void_ratio: null })}
          autoAddRow
        />
  );
};

export default Grid
