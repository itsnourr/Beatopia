import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import InputCard from './InputCard';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: { name: "To-Do", color: "#F52A2A", tasks: [] },
    doing: { name: "Doing", color: "#2AD7F5", tasks: [] },
    done: { name: "Done", color: "#2AF567", tasks: [] },
  });

  // Fetch tasks from the backend
  useEffect(() => {
    fetch("/tasks")
      .then((response) => response.json())
      .then((data) => {
        const newColumns = { todo: { tasks: [] }, doing: { tasks: [] }, done: { tasks: [] } };
        data.forEach((task) => {
          newColumns[task.status].tasks.push(task);
        });
        setColumns({
          todo: { ...newColumns.todo, name: "To-Do", color: "#F52A2A" },
          doing: { ...newColumns.doing, name: "Doing", color: "#2AD7F5" },
          done: { ...newColumns.done, name: "Done", color: "#2AF567" },
        });
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Handle task drag and drop
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // If dropped outside the board, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) return; // No change

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId !== destination.droppableId) {
      destTasks.splice(destination.index, 0, movedTask);
    } else {
      sourceTasks.splice(destination.index, 0, movedTask);
    }

    // Update task status based on destination column
    movedTask.status = destination.droppableId;
    if (destination.droppableId === "done") {
      movedTask.done = true;
    } else {
      movedTask.done = false;
    }

    // Update state
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      [destination.droppableId]: { ...destColumn, tasks: destTasks },
    });

    // Send a PUT request to update the task's status in the database
    fetch(`/tasks/${movedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: movedTask.status }),
    }).catch((error) => console.error("Error updating task:", error));
  };

  // Add a new task to a column and send it to the backend
  const addTaskToColumn = (columnId, newTask) => {
    if (!newTask.id || !newTask.title || !newTask.label || !newTask.dueDate || newTask.done === undefined) {
      alert("Mandatory fields");
      return;
    }

    // Send a POST request to create the new task in the database
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((task) => {
        setColumns((prevColumns) => {
          const updatedTasks = [...prevColumns[columnId].tasks, task];
          return {
            ...prevColumns,
            [columnId]: { ...prevColumns[columnId], tasks: updatedTasks },
          };
        });
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  // Delete a task and send a DELETE request to the backend
  const handleDeleteTask = (id) => {
    fetch(`/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setColumns((prevColumns) => {
          const updatedColumns = { ...prevColumns };
          Object.keys(updatedColumns).forEach((columnId) => {
            updatedColumns[columnId].tasks = updatedColumns[columnId].tasks.filter(
              (task) => task.id !== id
            );
          });
          return updatedColumns;
        });
      })
      .catch((error) => console.error("Error deleting task:", error));
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

