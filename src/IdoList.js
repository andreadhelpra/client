import React, { useEffect, useState } from "react";
import "./IdoList.css";
import Table from 'react-bootstrap/Table';



function IdoList() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`http://localhost:9000/`)
        //fetch(`https://ad900.brighton.domains/api`)
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setData(actualData);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      return (
        <div className="list">
          <tbody class ="table">
            <tr class="headings">
              <th>Name</th>
              <th>Price</th>
              <th>Public maximum allocation</th>
              <th>Private maximum allocation</th>
              <th>Source</th>
            </tr>
            {data.map((item, index) => (
              <tr key={index} class="tablebody">
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.max_allocation_pub}</td>
                <a><td>{item.max_allocation_pvt}</td></a>
                <td>{item.source}</td>
              </tr>
            ))}
          </tbody>
        </div>
      );
}

export default IdoList;