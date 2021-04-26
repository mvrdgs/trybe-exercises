import './App.css';
import Task from './Task'

const appointments = [1, 2, 3, 4, 5, 6]

function App() {
  return (
    <ul>
      {appointments.map((each) => Task(each))}
    </ul>
  );
};

export default App;
