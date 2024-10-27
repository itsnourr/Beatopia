import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './KanbanBoard.css';
import TaskColumn from './TaskColumn'

const KanbanBoard = () => {
    const taskToAdd = [ {title: "Study Control", label: "Control", dueDate: "Today", done: false} ];

    const tasksToDo = [
        { title: "Hausaufgaben Shop", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { title: "Solve HWK 1", label: "Math", dueDate: "Oct 30, 2024", done: false },
        { title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
      ];

    const tasksDoing = [
        { title: "Hausaufgaben Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    ];

    const tasksDone = [
        { title: "Hausaufgaben Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: true },
        { title: "Solve HWK 1", label: "Math", dueDate: "Oct 30, 2024", done: true },
        { title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: true },
        { title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: true },
      ];

    return (
        <div className="board">
            <TaskColumn name="To-Do" color="#F52A2A" tasks={tasksToDo}/>
            <TaskColumn name="Doing" color="#2AD7F5" tasks={tasksDoing}/>
            <TaskColumn name="Done" color="#2AF567" tasks={tasksDone}/>
        </div>
    );
}; 

export default KanbanBoard