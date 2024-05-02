import { useEffect } from "react";
import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AppBar, Toolbar, Typography } from '@mui/material';
import ReserveButton from "./ReserveButton";

export default function Products() {
    const [products, setProducts] = useState([]);
    const gridRef = useRef();

    function ReserveButtonRenderer(params) {
        return <ReserveButton data={params.data} />;
      }

    useEffect(() => getProducts(), []);

    const getProducts = () => {
        fetch('http://localhost:8080/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err))
    }

    const columns = [
        {field: 'name', sortable: true, filter: true, flex: 1},
        {field: 'type.type_name', headerName: 'Type', sortable: true, filter: true, flex: 1},
        {field: 'color', sortable: true, filter: true, flex: 1},
        {field: 'size', sortable: true, filter: true, flex: 1},
        {field: 'price', sortable: true, filter: true, flex: 1},
        {field: 'manufacturer.name', headerName: 'Manufacturer', sortable: true, filter: true, flex: 1},
        {headerName: 'Reserve', cellRenderer: ReserveButtonRenderer, flex: 1, cellStyle: {'background-color': 'cornflowerblue', 'color':'white'}}
    ];

    return (
        <>
        <div className="ag-theme-material" style={{width: '100%', height: '80vh'}}>
        <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Products
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