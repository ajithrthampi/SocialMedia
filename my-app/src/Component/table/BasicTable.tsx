

import React, { useMemo } from 'react'
// @ts-ignore
import { useTable } from 'react-table'
// import MOCK_DATA from '../MOCK_DATA.json'   ////////////////////
import { COLUMNS } from './column'
import './Table.css'


const BasicTable = () => {

  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])////////////////////////

  const tableInstance = useTable({
    columns,
    // data   ////////////////////
  })

  const {
    getTableProps,  /// destructure on table tag
    getTableBodyProps,
    headerGroups, /// contain column heading information
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div>
      <table {...getTableProps()}>
        <thead >
          {headerGroups.map((headerGroup: any) => {
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))
              }
            </tr>
          })}

        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row: any) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell: any) => {
                      return
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    })
                  }

                </tr>
              )
            })
          }

        </tbody>
      </table>
   
    </div>
  )
}

export default BasicTable