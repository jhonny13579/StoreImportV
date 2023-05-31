import React from "react";
import { MDBDataTable } from "mdbreact";

interface RowData {
  [key: string]: any;
}

interface Props {
  data: RowData[];
	selectedRows: any
	setSelectedRows: any
}

const TablaControl: React.FC<Props> = ({ data, selectedRows, setSelectedRows }) => {
  

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedRows(
        data.map((_, index) => _.ClassCode)
      );
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelect = (index: any) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i:any) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const columns:any = [
    {
      label: (
        <input
          type="checkbox"
          onChange={(e) => handleSelectAll(e.target.checked)}
          checked={selectedRows.length === data.length}
        />
      ),
      field: "checkbox",
      sort: "asc",
      width: 50,
    },
		{ label: 'Curso', field: 'cursName', sort: 'asc' },
  ];

  const rows = data.map((rowData, index) => ({
    checkbox: (
      <input
        type="checkbox"
        checked={selectedRows.includes(rowData.ClassCode)}
        onChange={() => handleSelect(rowData.ClassCode)}
      />
    ),
		cursName: rowData.cursName
  }));

  return (
    <MDBDataTable
			noBottomColumns
      striped
      bordered
      hover
			displayEntries={false}
      info={false}
      data={{ columns, rows }}
			noRecordsFoundLabel={'No se encuentran Registros.'}
      paginationLabel={['<', '>']}
			paging={false}
			searching={true}
			searchLabel="Buscar"
			responsiveXl={true}
			scrollX={false}
			responsive={false}
    />
  );
};

export default TablaControl;