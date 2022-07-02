import React from 'react';
import data from './dummyData.json'
const Table = () => {

    return(
      <table border={1}>
        <tr>
          <th>Id</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      {data.map((items)=>{
        return(
          <tr>
          <td>{items.Id}</td>
          <td>{items.Year}</td>
          <td>{items.Medals}</td>
          </tr>
        )
      })}
      </table>
    )
    }
    export default Table;