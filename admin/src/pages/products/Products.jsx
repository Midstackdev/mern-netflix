import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './products.css'
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/ApiRequests';


export default function Products() {
    const {movies, dispatch} = useContext(MovieContext)

    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteMovie(id, dispatch)
    }
    
    const columns = [
      { field: '_id', headerName: 'ID', width: 90 },
      { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => (
          <div className="productList">
              <img src={params.row.img} alt="" className="productListImg" />
              {params.row.title}
          </div>
      ) },
      { field: 'genere', headerName: 'Genere', width: 120 },
      { field: 'year', headerName: 'Year', width: 120},
      { field: 'limit', headerName: 'Age limit', width: 160},
      { field: 'isSeries', headerName: 'Is series', width: 160},
      { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
          <>
            <Link to={{pathname: `/products/${params.row._id}`, movie: params.row }}>
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
            <DataGrid rows={movies} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick getRowId={(r) => r._id} />
        </div>
    )
}
