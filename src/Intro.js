import "./App.css";
import NewBtn from "./NewBtn";

function Intro() {
  function handle(value) {
    alert(value);
  }

  return (
    <div className="App">
      <h1>Hello John</h1>

      <NewBtn btnName="All" btnColor="green" handle={handle} />
      <NewBtn btnName="Music" btnColor="pink" handle={handle} />
      <NewBtn btnName="Drama" handle={handle} />
      <NewBtn btnName="Songs" handle={handle} />
      <NewBtn btnName="Movies" handle={handle} />
      <NewBtn btnName="Books" handle={handle} />
    </div>
  );
}

export default Intro;
