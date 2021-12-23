import ClassCompPersonCard from './ClassCompPersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
     <ClassCompPersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
        />
      <ClassCompPersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
        />
      <ClassCompPersonCard
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hairColor={"Brown"}
        />
      <ClassCompPersonCard
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"Brown"}
        />
    </div>
  );
}

export default App;
