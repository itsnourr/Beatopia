import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import InputCard from './InputCard';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: {
      name: "To-Do",
      color: "#F52A2A",
      tasks: [
        { id: "1", title: "Buy Stationery for School", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { id: "2", title: "Complete Math Homework", label: "Math", dueDate: "Oct 30, 2024", done: false },
        { id: "3", title: "Prepare for Team Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { id: "4", title: "Plan Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
      ]
    },
    doing: {
      name: "Doing",
      color: "#2AD7F5",
      tasks: [
        { id: "5", title: "Research Travel Plans", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { id: "6", title: "Work on Project Draft", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { id: "7", title: "Shop for Essentials", label: "Personal", dueDate: "Nov 5, 2024", done: false },
      ]
    },
    done: {
      name: "Done",
      color: "#2AF567",
      tasks: [
        { id: "8", title: "Finish Morning Workout", label: "Personal", dueDate: "Nov 5, 2024", done: true },
        { id: "9", title: "Submit Math Assignment", label: "Math", dueDate: "Oct 30, 2024", done: true },
        { id: "10", title: "Attend Project Kickoff", label: "Work", dueDate: "Nov 1, 2024", done: true },
        { id: "11", title: "Weekly Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: true },
      ]
    }
  });
  
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the board, do nothing
    if (!destination) return;

    // If the task is dropped in the same position, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceTasks = Array.from(sourceColumn.tasks);
    const destTasks = Array.from(destColumn.tasks);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // If moving between columns, add the task to the destination column
    destTasks.splice(destination.index, 0, movedTask);

    // Update 'done' status if the task is moved to the "Done" column
    if (destination.droppableId === "done") {
        movedTask.done = true;
    } else {
        movedTask.done = false;
    }

    // Update state with the new task lists in both columns
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
