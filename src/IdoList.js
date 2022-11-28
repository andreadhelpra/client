import React, { useEffect, useState } from "react";
import "./IdoList.css";
import purple_sphere from "./images/purple-sphere.png"
import transparent_sphere from "./images/transparent_sphere.png"


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
      
      <style>@import url('https://fonts.cdnfonts.com/css/lemonmilk');</style>  

      return (
        <div className="list">
          <tbody className="table">
            <tr className="headings">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Public maximum allocation</th>
              <th>Private maximum allocation</th>
              <th>Source</th>
            </tr>
            {data.map((item, index) => (
              <tr key={index} class="tablebody">
                 <td><img src={transparent_sphere} className="transparent_sphere"/></td>
                <th className="smallheading">Name</th>
                <td className="name">{item.name}</td>
                <th className="smallheading">Price</th>
                <td>{item.price}</td>
                <th className="smallheading">Public maximum allocation</th>
                <td>{item.max_allocation_pub}</td>
                <th className="smallheading">Private maximum allocation</th>
                <td>{item.max_allocation_pvt}</td>
                <th className="smallheading">Source</th>
                <td><a href={item.source}>{item.source}</a></td>
              </tr>
            ))}
          </tbody>
        </div>
      );
}

export default IdoList;