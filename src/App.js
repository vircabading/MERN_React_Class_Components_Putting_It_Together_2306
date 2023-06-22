import './App.css';
import PersonCardComp from './components/PersonCardComp';

//////////////////////////////////////////////
// App.js

function App() {
  return (
    <div className="App">
      <PersonCardComp firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCardComp firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonCardComp firstName={"Millard"} lastName={"Filmore"} age={50} hairColor={"Brown"} />
      <PersonCardComp firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;
