import './App.css';

function Info(){
    return(
        <>
            <div className='name'>
                <h1>Swati Aggrawal</h1>
            </div>
            <div className="field">
                <h1>Frontend Developer</h1>
            </div>
            <div className="website">
                <a href='https://swatiaggrawal.github.io/WebPortfolio/' >WebPortfolio</a>
            </div>
            <div className="email">
            <button>E-mail</button>
            </div>
            <div className="linkdin">
            <button>LinkdIn</button>
            </div>
            <div className="about">
                <h1>About</h1>
                <p>I am a final year BTECH CSE student learning about various technical concepts like Data Structures, Algorithms, Artificial Intelligence and Machine Learning.</p>
            </div>
            <div className='interest'>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic.Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </>
    )
}

export default Info;