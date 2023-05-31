import React from "react";
import { MDBDataTable } from "mdbreact";

interface RowData {
  [key: string]: any;
}

interface Props {
  data: RowData[];
	selectedRows: any;
	setSelectedRows: any;
	selected: any;
}

const TablaAprobacionM: React.FC<Props> = ({ data, selectedRows, setSelectedRows, selected }) => {


   const handleSelect = (e:any ,index: any) => {
			e.preventDefault()
			setSelectedRows([...selectedRows, index]);
			selected(index)
  }; 



	console.log(data)

  const columns:any = [
		{ label: 'Seleccione', field: 'select' },
		{ label: 'Sede', field: 'sedCode', sort: 'asc' },
		{ label: 'Semestre', field: 'semCode', sort: 'asc' },
		{ label: 'Clase', field: 'classCode', sort: 'asc' },
		{ label: 'Carrera', field: 'carName', sort: 'asc' },
		{ label: 'Curso', field: 'curName', sort: 'asc' },
		{ label: 'Fecha', field: 'coclDate', sort: 'asc' },
		{ label: 'Docente', field: 'traCode', sort: 'asc' },
  ];

	const rows = data.map((rowData, index) => {
	rowData.select = (
		<a
			href="!#"
			className="text-decoration-none text-center"
			// onClick={selectedRows.includes(rowData.classCode)}
			onClick={(e:any) => handleSelect(e, rowData)}
		> Seleccione </a>
	)

	return rowData
	}
	);

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

export default TablaAprobacionM;