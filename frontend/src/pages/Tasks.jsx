import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import api from '../lib/axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Load tasks from backend
  useEffect(() => {
    api.get('/tasks').then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (text.trim()) {
      const res = await api.post('/tasks', { text });
      setTasks(prev => [...prev, res.data]);
      setText('');
    }
  };

  const toggleDone = async (id, done) => {
    const res = await api.put(`/tasks/${id}`, { done: !done });
    setTasks(tasks.map(t => (t._id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

      <div className="flex gap-2 mb-4">
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="mt-4 text-md">Start by adding your first task! 🚀</p>
        </div>
      ) : (
        <div className="space-y-2">
          {tasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onToggle={() => toggleDone(task._id, task.done)}
              onDelete={() => deleteTask(task._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;

