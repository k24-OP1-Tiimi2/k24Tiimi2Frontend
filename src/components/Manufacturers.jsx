import { useEffect } from "react";
import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Manufacturers() {
    const [manufacturers, setManufacturers] = useState([]);
    const gridRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/manufacturers',{
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                      'Content-Type': 'application/json',
                    }});
                const data = await response.json();
                setManufacturers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    const columns = [
        { headerName: 'Manufacturer', field: 'name', sortable: true, filter: true },
        {
            headerName: 'Products', field: 'products', sortable: false, filter: false, cellRenderer: params => {
                const products = params.value.map(product => product.name).join(', ');
                return products;
            }
        }
    ];

    return (
        <>
        <div className="ag-theme-material" style={{width: '100%', height: '80vh'}}>
        <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Manufacturers
          </Typography>
        </Toolbar>
      </AppBar>
            <AgGridReact
                ref={gridRef}
                columnDefs={columns}
                rowData={manufacturers}
                pagination={true}
                paginationPageSize={20}
            />
        </div>
        </>
    );
}