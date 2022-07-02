import './App.css';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <a href="/table">table</a> |{" "}
        <a href="/chart">chart</a>
      </nav>
      
    </div>
  );
}

export default App;
