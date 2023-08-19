import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const LOCAL_STORAGE_KEY = '@todolist';

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [editTask, setEditTask] = useState({
    enabled: false,
    item: '',
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    saveLocalStorage(tasks);
  }, [tasks]);

  function saveLocalStorage(tasks: string[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }

  const handleRegister = useCallback(() => {
    if (!input) {
      alert('Task is empty');
      return;
    }
    if (editTask.enabled) {
      handleSaveEdit(input);
      return;
    }
    setTasks([...tasks, input]);
    setInput('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, tasks]);

  function handleDelete(item: string) {
    setTasks(tasks.filter((task) => task !== item));
  }

  function handleSaveEdit(input: string) {
    const findIndexTask = tasks.findIndex((task) => task === editTask.item);

    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enabled: false,
      item: '',
    });
    setInput('');
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();

    setInput(item);
    setEditTask({
      enabled: true,
      item,
    });
  }

  const totalTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h1>ToDoList</h1>

      <input
        placeholder="Type the name of the task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enabled ? 'Update task' : 'Register task'}
      </button>
      <hr />
      <strong>You have {totalTasks} tasks</strong>
      <br />
      <br />
      {tasks.map((item) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </section>
      ))}
    </div>
  );
}
