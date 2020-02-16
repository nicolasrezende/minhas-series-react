import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Generos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/genres').then(res => setData(res.data.data));
    }, []);
    
    const deleteGenero = id => {
        axios
            .delete(`/api/genres/${id}`)
            .then(res => {
                const filtrado = data.filter(genre => genre.id !== id);
                setData(filtrado);
            });
    }

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteGenero(record.id)}>Remover</button>
                    <Link to={'/generos/' + record.id} className='btn btn-warning'>Editar</Link>
                </td>
            </tr>
        )
    }

    if (data.length === 0){
        return (
            <div className='container'>
                <div className='alert alert-warning' role="alert">
                    Nenhum gênero para exibir.
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Genêros</h1>
            <Link to='/generos/novo' className='btn btn-primary'>Novo genêro</Link>
            <br />
            <br />
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos;