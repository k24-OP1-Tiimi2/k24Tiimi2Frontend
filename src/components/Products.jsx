import { useEffect } from "react";
import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Products() {
    const [products, setProducts] = useState([]);
    const gridRef = useRef();

    useEffect(() => getProducts(), []);

    const getProducts = () => {
        fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => setProducts(data._embedded.products))
        .catch(err => console.error(err))
    }

    const columns = [
        {field: 'name', sortable: true, filter: true},
        {field: 'description', sortable: true, filter: true},
        {field: 'type', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'size', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true}
    ];

    return (
        <>
        <div className="ag-theme-material" style={{width: '100%', height: '1000px'}}>
        <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            ProductList
          </Typography>
        </Toolbar>
      </AppBar>
            <AgGridReact
                ref={gridRef}
                columnDefs={columns}
                rowData={products}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
        </>
    );
}