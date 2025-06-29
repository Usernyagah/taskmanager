import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TaskCard = ({ task, onToggle, onDelete }) => (
  <Card>
    <CardContent className="flex justify-between items-center py-4">
      <span className={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span>
      <div className="space-x-2">
        <Button variant="outline" onClick={() => onToggle(task.id)}>
          {task.done ? 'Undo' : 'Done'}
        </Button>
        <Button variant="destructive" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default TaskCard;
