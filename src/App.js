


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
       <Intro />
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

export default App;
