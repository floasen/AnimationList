export default function AnimationCard({ animation }) {
    return (
        <div className= 'AnimationCard'>
            <p>{animation.name}</p>
            <iframe srcDoc= {animation.code}/>
            <p>{animation.description}</p>
        </div>
    );   
}

