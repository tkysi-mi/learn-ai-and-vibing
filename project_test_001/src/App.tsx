import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Simple Todo App
        </h1>

        <div className="space-y-6">
          <AddTaskForm onAdd={addTask} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
