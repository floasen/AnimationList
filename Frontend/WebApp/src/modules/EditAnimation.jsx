import { useState } from 'react';
import * as AnimationService from '../services/AnimationService';

export default function EditAnimation({ animation, onSaved, onCancel }) {
    const [form, setForm] = useState({...animation});

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        AnimationService.putAnimation(animation.id, form)
        .then(() => onSaved())
        .catch((err) => {
            console.error('Fehler beim speichern:', err);
        });
    }


    return(
        <div>
            <iframe srcDoc={form.code}/>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' placeholder='Name' value={form.name} onChange={handleChange} required />
                <textarea name='code' type='text' placeholder='Code' value={form.code} onChange={handleChange} required />
                <input name='description' type='text' placeholder='Beschreibung' value={form.description} onChange={handleChange} required />
                <button type='submit'>Speichern</button>
                <button type='button' onClick={onCancel}>Abbrechen</button>
            </form>
        </div>
    );
}