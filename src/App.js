import Header from './components/Header';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App w3-light-grey">
      <div className="w3-content" style={{maxWidth: "1400px" }}>
          <Header/>
          <Content/>
      </div>
    </div>
  );
}

export default App;
