


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
              <Intro />
              <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
    return <img className="avatar" src="photoOfSelf.jpg" alt="Ashton Little"/>
}

function Intro() {
    return (
        <div>
            <h1>Ashton Little</h1>
            <p>
                React Developer that is passionate about all things code. When I am not coding I enjoy cycling, guitar and all things Nintendo. 
            </p>
        </div>
    )
}

function Skillset() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🚀" color="dodgerBlue" />
            <Skill skill="JavaScript" emoji="🚀" color="green" />
            <Skill skill="HTML+CSS" emoji="🚀" color="pink" />
            <Skill skill="Bootstrap" emoji="🚀" color="orange" />
            <Skill skill="GitHub" emoji="🚀" color="grey" />
        </div>
    
    )
}

function Skill({skill, emoji, color}) {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>{ emoji}</span>
        </div>
    )
}

export default App;
