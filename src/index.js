document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const newTaskDescription = document.querySelector("#new-task-description");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //use cb fxn to store val
    createTodoList(newTaskDescription.value);

    //reset input
    form.reset();
  });

  function createTodoList(todo) {
    let p = document.createElement("p");
    let button = document.createElement("button");

    p.innerHTML = todo;
    button.innerHTML = "remove";

    document.querySelector("#list").appendChild(p);
    p.appendChild(button);

    button.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  }
});
