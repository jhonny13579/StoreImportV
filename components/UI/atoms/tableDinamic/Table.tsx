import type { ReactNode } from 'react'
import { MDBDataTable } from 'mdbreact'

export interface Props {
  listData?: {
    [rest: string]: any
    clickEvent?: (() => void) | undefined
  }[]
  columns?: {
    [rest: string]: any
    label?: string | undefined
    field?: string | undefined
    sort?: string | undefined
    width?: number | undefined
    searchable?: boolean | undefined
  }[]
  pagination?: boolean
  entries?: number
  scrollX?: boolean
  children?: ReactNode
  order?: any
  onPageChange?:any
	data?: any
}

const Table = ({
  listData,
  columns,
	data,
  pagination = false,
  entries = 10,
  scrollX = false,
  order = [],
  onPageChange
}: Props) => {
  return (
    <MDBDataTable
      noBottomColumns
      striped
      bordered
      hover
      order={order}
      entries={entries}
      displayEntries={false}
      info={false}
      noRecordsFoundLabel={'No se encuentran Registros.'}
      paginationLabel={['<', '>']}
      paging={pagination}
      searching={true}
      searchLabel="Buscar"
      responsiveXl={true}
      scrollX={scrollX}
      data={data || {
        columns,
        rows: listData,
      }}
      responsive={false}
      onPageChange={onPageChange}
    />
  )
}

export default Table
