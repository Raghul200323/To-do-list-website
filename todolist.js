import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Complete project", completed: false },
    { id: 3, text: "Go for a run", completed: false },
  ]);
  
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const copyTasks = () => {
    const taskText = tasks.map((task) => (task.completed ? `✓ ${task.text}` : task.text)).join("\n");
    navigator.clipboard.writeText(taskText);
  };
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-4">Task List</h2>
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`cursor-pointer mb-2 ${task.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? "✓" : "•"} {task.text}
              </li>
            ))}
          </ul>
          <Button className="mt-4" onClick={copyTasks}>
            <Clipboard className="mr-2 h-4 w-4" /> Copy Tasks
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}