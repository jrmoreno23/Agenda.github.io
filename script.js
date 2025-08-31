document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadTasks();

  setTimeout(() => {
    document.querySelector(".ad-left")?.classList.add("show");
    document.querySelector(".ad-right")?.classList.add("show");
  }, 500);
});

const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
taskInput.addEventListener("keypress", e => { if(e.key==="Enter") addTask(); });
searchInput.addEventListener("input", filterTasks);

/* Funciones addTask, renderTask, startEditing, localStorage, drag & drop, filterTasks, dark mode (igual que tu código original) */
