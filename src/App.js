import './App.css';
import NewBtn from './NewBtn';

function App() {
  return (
    <div className="App">
      <h1>Hello John</h1>

      <NewBtn btnName = "All" />
      <NewBtn btnName = "Music" />
      <NewBtn btnName = "Drama" />
      <NewBtn btnName = "Songs" />
      <NewBtn btnName = "Movies" />
      <NewBtn btnName = "Books" />
    </div>
  );
}

export default App;
