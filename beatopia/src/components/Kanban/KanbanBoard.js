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
  
    // Make a copy of the source tasks and destination tasks
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1); // Remove the task from the source column
  
    // If moving within the same column, just reorder
    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
    } else {
      // Otherwise, move the task to the destination column
      destTasks.splice(destination.index, 0, movedTask);
    }
  
    // Update 'done' status if the task is moved to the "Done" column
    if (destination.droppableId === "done") {
      movedTask.done = true;
    } else {
      movedTask.done = false;
    }
  
    // Update the columns state with the modified tasks
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      [destination.droppableId]: { ...destColumn, tasks: destTasks },
    });
  };
  
  

  const addTaskToColumn = (columnId, newTask) => {
    // Check if any required property is null or undefined
    if (!newTask.id || !newTask.title || !newTask.label || !newTask.dueDate || newTask.done === undefined) {
      alert("Mandatory fields");
      return; // Stop further execution if validation fails
    }

    setColumns((prevColumns) => {
      const column = prevColumns[columnId];
      // If the new task is being added to the "done" column, set 'done' to true
      if (columnId === 'done') {
        newTask.done = true;
      } else {
        // Otherwise, set 'done' to false
        newTask.done = false;
      }

      const updatedTasks = [...column.tasks, newTask];
      return {
        ...prevColumns,
        [columnId]: { ...column, tasks: updatedTasks },
      };
    });
  };

  const handleDeleteTask = (id) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };

      Object.keys(updatedColumns).forEach((columnId) => {
        updatedColumns[columnId].tasks = updatedColumns[columnId].tasks.filter(task => task.id !== id);
      });

      return updatedColumns;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
      {Object.keys(columns).map((columnId) => (
          <TaskColumn
              key={columnId}
              name={columns[columnId].name}
              color={columns[columnId].color}
              tasks={columns[columnId].tasks}
              columnId={columnId}
              onDelete={handleDeleteTask}
              addTaskToColumn={addTaskToColumn}
          />
      ))}

      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;