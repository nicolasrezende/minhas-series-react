import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const EditarGenero = ({ match }) => {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        axios
            .get(`/api/genres/${match.params.id}`)
            .then(res => setName(res.data.name));
    }, [match.params.id]);

    const onChange = (evt) => {
        setName(evt.target.value);
    }

    const onSave = () => {
        axios
            .put(`/api/genres/${match.params.id}`, { name })
            .then(res => setSuccess(true));
    }

    if (success) {
        return <Redirect to='/generos'/>
    }

    return (
        <div className='container'>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' className='form-control' id="name" value={name} onChange={onChange} />
                </div>
                <button type='button' className='btn btn-primary' onClick={onSave}>Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero;