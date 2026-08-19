import { useEffect, useState } from 'react';
import AnimationCard from '../modules/AimationCard';
import * as AnimationService from '../service/AnimationService';

export default function Home() {
    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        AnimationService.getAnimation()
        .then(data => setAnimations(data))
        .catch((err) => {
            console.log('Fehler beim Laden:', err);
        }) 
    },[]);

    return (
        <div>
            <h1>Animationen</h1>
            {animations.length === 0 ? (
            <p>Keine Animationen verfügbar.</p>
        ) : (
            bikes.map(animations => (
            <div key={animations.id}>
                <AnimationCard animations={animations} />
            </div>
            ))
        )}
        </div>
    );

}
