import React from 'react';
import Pagination from "./Pagination";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const RTable = () => {
  const data = [
    {
        scheme : 'Axis Bluechip Fund Direct Growth',
        trans_amount : 12293.01,
        trans_date : '14 feb 2021',
        trans_time : '8:46 AM',
        trans_status : 'pending'
      },
      {
        scheme : 'Axis Bluechip Fund Direct Growth',
        trans_amount : 12293.01,
        trans_date : '14 feb 2021',
        trans_time : '8:46 AM',
        trans_status : 'pending'
      },
      {
        scheme : 'Axis Bluechip Fund Direct Growth',
        trans_amount : 12293.01,
        trans_date : '14 feb 2021',
        trans_time : '8:46 AM',
        trans_status : 'cancelled'
      },
      {
        scheme : 'Axis Bluechip Fund Direct Growth',
        trans_amount : 12293.01,
        trans_date : '14 feb 2021',
        trans_time : '8:46 AM',
        trans_status : 'successful'
      }
];
function MyCell({ value}) {
    var color = "";
    if (value == 'pending')
        color = 'orange';
    else if (value == 'successful')
        color = 'green'
    else if (value == 'cancelled')
        color = 'red'
    return <p style = {{ color: color }}>{value}</p>
  }
  return (
    <ReactTable
      PaginationComponent={Pagination}
      data={data}
      columns = {
        [
            {
              Header: 'Scheme Name',
              accessor: 'scheme',
              minWidth: 270
            },
            {
              Header: 'Transaction Amount',
              accessor: 'trans_amount',
              minWidth: 150
            },
            {
              Header: 'Transaction Date',
              accessor: 'trans_date',
              minWidth: 150
            },
            {
              Header: 'Transaction Time',
              accessor: 'trans_time',
              minWidth: 150
            },
            {
              Header: 'Transaction Status',
              accessor: 'trans_status',
              minWidth: 200,
              Cell: MyCell,
            }
          ]
    }
    />
  );
}

export default RTable;