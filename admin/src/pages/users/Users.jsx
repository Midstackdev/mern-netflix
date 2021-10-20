import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userRows } from '../../dummyData'
import './users.css'


export default function Users() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'username', headerName: 'username', width: 200, renderCell: (params) => (
          <div className="userList">
              <img src={params.row.avatar} alt="" className="usersListImg" />
              {params.row.username}
          </div>
      ) },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'status', headerName: 'Status', width: 120},
      { field: 'transaction', headerName: 'Transaction Volume', width: 160},
      { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
          <>
            <Link to={`/users/${params.row.id}`}>
                <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteOutline className="userlistDelete" 
                onClick={() => handleDelete(params.row.id)} 
            />
          </>
      )},
    ];
    
    
    return (
        <div className="users">
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
        </div>
    )
}
