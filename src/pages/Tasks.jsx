import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskCard from '../components/TaskCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, done: false }]);
      setText('');
    }
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      <div className="flex gap-2 mb-4">
        <Input value={text} onChange={e => setText(e.target.value)} placeholder="New task" />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onToggle={toggleDone} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
