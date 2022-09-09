import './App.css';
import problemList from './problem.json'
import {ProblemCard} from "./components/ProblemCard";

function App() {
  return (
    <div style={{maxWidth: '500px', margin: '0 auto'}}>
      {problemList.map(item => (
          <ProblemCard
            key={item.id}
            name={item.name}
            link={item.link}
            answer={item.answer}
          />
      ))}
    </div>
  );
}

export default App;
