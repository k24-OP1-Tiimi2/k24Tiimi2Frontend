import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AppBar, Toolbar, Typography } from '@mui/material';
import Addorder from "./Addorder";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dogstorebackend.onrender.com/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      const promises = data._embedded.products.map(async (product) => {
        const typeResponse = fetch(product._links.type.href).then(res => res.json());
        const manufacturerResponse = fetch(product._links.manufacturer.href).then(res => res.json());
        const [typeData, manufacturerData] = await Promise.all([typeResponse, manufacturerResponse]);
        return { ...product, type: typeData, manufacturer: manufacturerData };
      });

      const productsWithData = await Promise.all(promises);
      setProducts(productsWithData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const saveOrderForCustomer = (order, productLink) => {
    let orderWithCustomer = { ...order, product: productLink }
    fetch('https://dogstorebackend.onrender.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderWithCustomer)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to save order');
    })
    .then(data => {
      return getProducts();
    })
    .catch(err => console.error(err))
  }

  const columnDefs = [
    { field: 'name', sortable: true, filter: true, flex: 1 },
    { field: 'type.type_name', headerName: 'Type', sortable: true, filter: true, flex: 1 },
    { field: 'color', sortable: true, filter: true, flex: 1 },
    { field: 'size', sortable: true, filter: true, flex: 1 },
    { field: 'price', sortable: true, filter: true, flex: 1 },
    { field: 'manufacturer.name', headerName: 'Manufacturer', sortable: true, filter: true, flex: 1 },
    { cellRenderer: (params) => <Addorder saveOrder={saveOrderForCustomer} params={params} />, },
  ];

  return (
    <>
      <div className="ag-theme-material" style={{ width: '100%', height: '80vh' }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Products
            </Typography>
          </Toolbar>
        </AppBar>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <AgGridReact
            columnDefs={columnDefs}
            rowData={products}
            pagination={true}
            paginationPageSize={10}
          />
        )}
      </div>
    </>
  );
}