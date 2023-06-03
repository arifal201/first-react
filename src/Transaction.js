import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TableComponent = () => {
  const [transactions,setData] = useState([]);
  
  useEffect(()=>{
    fetchData()
  },[]);
  
  const fetchData = async () => {
    try {
      let response = await axios.get('http://localhost:8000/api/summary');
      let data = response.data.data || [];
      setData(data);
    } catch (error) {
      console.error('Error : ',error);
    }
  };

  const handleSearch = async (event) => {
    try {
      let filterValue = event.target.value;
      let filterResponse = await axios.get(`http://localhost:8000/api/summary?search_product=${filterValue}`);
      let filterData = filterResponse.data.data || [];
      setData(filterData);
    } catch (error) {
      console.error('Error : ', error);
    }
  };

  const handleOrderBy = async (event) =>{
    try {
      let filterValue = event.target.value;
      let response = await axios.get(`http://localhost:8000/api/summary?order_by=${filterValue}`);
      let filterData = response.data.data || [];
      setData(filterData);
    } catch (error) {
      console.error('Error : ',error);
    }
  };

  return (
    <div>
      <h1>
        Table Transaction
      </h1>
      <select onChange={handleOrderBy}>
        <option value='product_name'>by product name</option>
        <option value='date_transaction'>by date transaction</option>
        <option value='product_stock'>by stock</option>
        <option value='id'>by id</option>
        <option value='quantity'>by quantity</option>
      </select>
      <table align='center' border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>nama barang</th>
            <th>stok</th>
            <th>jumlah terjual</th>
            <th>tanggal transaksi</th>
            <th>jenis barang</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product_name}</td>
                <td>{item.stock}</td>
                <td>{item.quantity}</td>
                <td>{item.date_transaction}</td>
                <td>{item.type}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;