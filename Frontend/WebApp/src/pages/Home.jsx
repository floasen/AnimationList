import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import AnimationCard from '../modules/AnimationCard';
import * as AnimationService from '../services/AnimationService';

export default function Home() {
    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        AnimationService.getAnimation()
        .then(data => setAnimations(data))
        .catch((err) => {
            console.error('Fehler beim Laden:', err);
        }); 
    },[]);

    /*
    const handleChange = (e) => {
        const value = e.target.checked;
        setAnimations(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
        const values = e.target;
        const id = e.
        AnimationService.putAnimation(id, animationData)
        } catch (err){
            console.log('Fehler beim setzen', err);
            alert('Fehler beim setzen');
        }
    }
*/

    return (
        <div>
            <h1>Animationen</h1>
            <div className='grid-container'>
                
                {animations.length === 0 ? (
                <p>Keine Animationen verfügbar.</p>
            ) : (
                animations.map(animation => (
                <div key={animation.id} className= 'item'>
                    <Link to= {`/AnimationDetails/${animation.id}`}>
                    <AnimationCard animation={animation} />
                    </Link>
                </div>
                ))
            )}
            </div>
        </div> 
    );
}
