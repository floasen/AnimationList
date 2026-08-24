import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditAnimation from '../modules/EditAnimation'
import * as AnimationService from '../services/AnimationService';

export default function AnimationDetails() {
    const { animationId } = useParams();
    const [animation, setAnimation] = useState({});
    const [animationEditId, setAnimationEditId] = useState(null);

    const loadAnimation = () => {
        AnimationService.getAnimationById(animationId)
        .then(data => setAnimation(data))
        .catch((err) => {
        console.error('Fehler beim Laden:', err);
        }); 
    }

        useEffect(() => {
            loadAnimation();
        },[]);

    return(
        <div>
            { animationEditId == animation.id ? (
            <EditAnimation
            animation={animation}
            onCancel={() => setAnimationEditId(null)}
            onSaved={() => {
                setAnimationEditId(null);
                loadAnimation();
            }}
            />
            ):(
            <div>
                <iframe srcDoc={animation.code}/>
                <form>
                    <input name='name' type='text' value={animation.name} />
                    <textarea name='code' type='text' value={animation.code} />
                    <input name='description' type='text' value={animation.description} />
                </form>
                <button type='button' onClick={() => setAnimationEditId(animation.id)}>Bearbeiten</button>
            </div>
            )
            }
        </div>
    );
}