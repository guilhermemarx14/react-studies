import { useState } from 'react';

interface StudentInfoProps {
  name: string;
  age: string;
}

export default function App() {
  const [input, setInput] = useState('');
  const [age, setAge] = useState('');
  const [studentInfo, setStudentInfo] = useState<StudentInfoProps>();
  const [counter, setCounter] = useState(0);

  function showStudent() {
    setStudentInfo({
      name: input,
      age: age,
    });
  }

  function add() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Knowing useState</h1>
      <input
        placeholder="Type the name"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br /> <br />
      <input
        placeholder="Type the age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <hr />
      <button onClick={showStudent}>Show Student</button>
      <hr />
      <h3>
        Welcome {studentInfo?.name} of age {studentInfo?.age}
      </h3>
      <hr />
      <br />
      <button onClick={add}>+</button> {counter}{' '}
      <button onClick={sub}>-</button>
    </div>
  );
}
