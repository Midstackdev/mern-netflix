import React, { useContext, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './lists.css'
import { ListContext } from '../../context/listContext/ListContext';
import { deleteList, getLists } from '../../context/listContext/ApiRequests';



export default function Lists() {
    const {lists, dispatch} = useContext(ListContext)

    useEffect(() => {
        getLists(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteList(id, dispatch)
    }
    
    const columns = [
      { field: '_id', headerName: 'ID', width: 250 },
      { field: 'title', headerName: 'Title', width: 250},
      { field: 'genre', headerName: 'Genere', width: 150 },
      { field: 'type', headerName: 'Type', width: 150},
      { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
          <>
            <Link to={{pathname: `/lists/${params.row._id}`, list: params.row }}>
                <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" 
                onClick={() => handleDelete(params.row._id)} 
            />
          </>
      )},
    ];
    
    
    return (
        <div className="products">
            <DataGrid rows={lists} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick getRowId={(r) => r._id} />
        </div>
    )
}
