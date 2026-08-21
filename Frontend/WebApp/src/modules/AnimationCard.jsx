export default function AnimationCard() {
    return (
        <div className= 'AnimationCard'>
            <p>{animationName}</p>
            <iframe srcdoc= {animtion.code} sandbox>
            </iframe>
            <p>{animationDescriptrion}</p>
            <form onSubmit={handleSubmit}>
                <input 
                type='checkbox'
                name='favoritebutton'
                checked={animation.favorite}
                onChange={handleChange}
                />
                <button type="submit">Bestätigen</button>
            </form>
        </div>
    );   
}