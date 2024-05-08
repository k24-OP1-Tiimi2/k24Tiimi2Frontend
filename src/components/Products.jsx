import { useEffect } from "react";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AppBar, Toolbar, Typography } from '@mui/material';
import Addorder from "./Addorder";

export default function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => getProducts(), []);

    
  const getProducts = () => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        // Fetch type and manufacturer for each product
        const promises = data._embedded.products.map(product => {
          return Promise.all([
            fetch(product._links.type.href).then(res => res.json()),
            fetch(product._links.manufacturer.href).then(res => res.json())
          ]).then(([typeData, manufacturerData]) => {
            return { ...product, type: typeData, manufacturer: manufacturerData };
          });
        });

        // Wait for all promises to resolve
        return Promise.all(promises);
      })
      .then(productsWithData => {
        setProducts(productsWithData);
      })
      .catch(err => console.error(err));
  }


  const saveOrderForCustomer = (order, productLink) => {
    let orderWithCustomer = { ...order, product: productLink }
    fetch('http://localhost:8080/api/orders', {
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
        // Order saved successfully, now fetch products again
        return getProducts();
    })
    .catch(err => console.error(err))
}

const [columnDefs, setColumnDefs] = useState([
    { field: 'name', sortable: true, filter: true, flex: 1 },
    { field: 'type.type_name', headerName: 'Type', sortable: true, filter: true, flex: 1 },
    { field: 'color', sortable: true, filter: true, flex: 1 },
    { field: 'size', sortable: true, filter: true, flex: 1 },
    { field: 'price', sortable: true, filter: true, flex: 1 },
    { field: 'manufacturer.name', headerName: 'Manufacturer', sortable: true, filter: true, flex: 1 },
    { cellRenderer: (params) => <Addorder saveOrder={saveOrderForCustomer} params={params} />, },
  ]);

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
        <AgGridReact
          columnDefs={columnDefs}
          rowData={products}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </>
  );
}