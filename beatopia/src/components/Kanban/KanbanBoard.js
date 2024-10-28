import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: { name: "To-Do", color: "#F52A2A", tasks: [
      { id: "1", title: "Hausaufgaben Shop", label: "Personal", dueDate: "Nov 5, 2024", done: false },
      { id: "2", title: "Solve HWK 1", label: "Math", dueDate: "Oct 30, 2024", done: false },
      { id: "3", title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
      { id: "4", title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    ]},
    doing: { name: "Doing", color: "#2AD7F5", tasks: [
      { id: "5", title: "Hausaufgaben Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
      { id: "6", title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
      { id: "7", title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    ]},
    done: { name: "Done", color: "#2AF567", tasks: [
      { id: "8", title: "Hausaufgaben Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: true },
      { id: "9", title: "Solve HWK 1", label: "Math", dueDate: "Oct 30, 2024", done: true },
      { id: "10", title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: true },
      { id: "11", title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: true },
    ]},
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = Array.from(sourceColumn.tasks);
    const destTasks = Array.from(destColumn.tasks);

    const [movedTask] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      [destination.droppableId]: { ...destColumn, tasks: destTasks },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {Object.entries(columns).map(([columnId, column]) => (
          <TaskColumn
            key={columnId}
            columnId={columnId}
            name={column.name}
            color={column.color}
            tasks={column.tasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;