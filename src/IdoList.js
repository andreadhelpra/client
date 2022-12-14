import React, { useEffect, useState } from "react";
import purple_sphere from "./images/purple-sphere.png"
import {CiSearch} from "react-icons/ci";

function IdoList() {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    const fetchData = () => {
        //fetch(`http://localhost:9000/`)
        fetch(`https://ad900.brighton.domains/api`)
          .then((response) => response.json())
          .then((actualData) => {
            setData(actualData);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      
      useEffect(() =>{
        if (localStorage.getItem('datakey') == null || localStorage.getItem('datakey').length == 2){
          localStorage.setItem('datakey', JSON.stringify(data));
        }
      }, [data]);
      

      
      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('datakey'));
        if (items){
          setFilteredData( 
            items.filter((ido) => {
            return (ido.name.toLowerCase().includes(searchInput.toLowerCase()) 
            || ido.source.toLowerCase().includes(searchInput.toLowerCase()) );
          }, [items, searchInput]));
        }
      });

     
      // Add Styles
      <style>@import url('https://fonts.cdnfonts.com/css/lemonmilk');</style>    

      let searchIcon;

      if(searchInput.length > 0){
        searchIcon = <span className="icon"></span>
      } else {
        searchIcon = <span className="icon"><CiSearch/></span>
      }


      // Add HTML
      return (
        <div className="list">
          <div className="searchbar">
          <input
              type="search"
              placeholder="Search IDOs"
              onChange={handleChange}
              value={searchInput} />
              {searchIcon}
          </div>
          
          <tbody className="table">
            <tr className="headings">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Public maximum allocation</th>
              <th>Private maximum allocation</th>
              <th>Source</th>
            </tr>
            {filteredData.map((ido, index) => (
              <tr key={index} class="tablebody">
                 <td><img src={purple_sphere} className="purple_sphere"/></td>
                <th className="smallheading">Name</th>
                <td className="name">{ido.name}</td>
                <th className="smallheading">Price</th>
                <td>{ido.price}</td>
                <th className="smallheading">Public maximum allocation</th>
                <td>{ido.max_allocation_pub}</td>
                <th className="smallheading">Private maximum allocation</th>
                <td>{ido.max_allocation_pvt}</td>
                <th className="smallheading">Source</th>
                <td><a href={ido.source}>{ido.source}</a></td>
              </tr>
            ))}
          </tbody>
        </div>
      );
}

export default IdoList;