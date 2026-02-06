import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice";

const TaskBoard = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.taskList);

  const [taskText, setTaskText] = useState("");
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter((t) => t.text.toLowerCase().includes(q));
  }, [tasks, search]);

  const handleAdd = () => {
    const value = taskText.trim();

    if (!value) {
      alert("Please enter a task");
      return;
    }

    dispatch(
      addTask({
        id: Date.now(),
        text: value,
        createdAt: new Date().toISOString(),
      }),
    );

    setTaskText("");
  };

  const onEnterAdd = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="board">
      <div className="board-header">
        <div>
          <h1 className="title">Task Manager</h1>
          <p className="subtitle">Organize your work using Redux Toolkit </p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <p className="stat-label">Total Tasks</p>
            <h2 className="stat-value">{tasks.length}</h2>
          </div>
          <div className="stat-card">
            <p className="stat-label">Showing</p>
            <h2 className="stat-value">{filteredTasks.length}</h2>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="add-row">
          <input
            className="task-input"
            type="text"
            placeholder="Write a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={onEnterAdd}
          />

          <button className="btn btn-primary" onClick={handleAdd}>
            + Add Task
          </button>
        </div>

        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="btn btn-ghost" onClick={() => setSearch("")}>
            Clear
          </button>
        </div>

        <div className="list">
          {filteredTasks.length === 0 ? (
            <div className="empty">
              <h3>No tasks found</h3>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div className="task-card" key={task.id}>
                <div className="task-left">
                  <div className="dot" />
                  <p className="task-text">{task.text}</p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTask(task.id))}
                  title="Delete task"
                >
                  ✖
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
