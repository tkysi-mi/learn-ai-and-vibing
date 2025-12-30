import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
      <span className="text-gray-700 flex-1 break-all">{task.title}</span>
    </div>
  );
}
