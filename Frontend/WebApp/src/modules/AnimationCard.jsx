export default function AnimationCard({ animation }) {
    return (
        <>
            <p>{animation.name}</p>
            <iframe srcDoc= {animation.code}/>
            <p>{animation.description}</p>
        </>
    );   
}

