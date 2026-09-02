import { useState } from 'react';
import * as AnimationService from '../services/AnimationService';
import styles from '../styles/AddAnimation.module.css'
import { useConfirm } from "material-ui-confirm";

export default function AddAnimation() {
    const confirm = useConfirm();
    const [animation, setAnimation] = useState({
            name: "",
            description: "",
            code: "",
            favorite: false
        });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAnimation(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { confirmed, reason } = await confirm();
            if (confirmed) {
                doSend();
            }
        console.log(reason);
    };

    const doSend = async () => {
        AnimationService.postAnimation(animation)
        .then(setAnimation({
            name: "",
            description: "",
            code: "",
            favorite: false
        }))
        .catch((err) => {
            console.error('Fehler beim erstellen:', err);
        });
    }

    return(
        <div className={styles.AddAnimation}>
            <iframe srcDoc={animation.code} className={styles.Animation}/>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' placeholder='Name' value={animation.name} onChange={handleChange} required />
                <textarea name='code' type='text' placeholder='Code' value={animation.code} onChange={handleChange} required />
                <input name='description' type='text' placeholder='Beschreibung' value={animation.description} onChange={handleChange} required />
                <button type='submit'>Hinzufügen</button>
            </form>
        </div>
    );
}