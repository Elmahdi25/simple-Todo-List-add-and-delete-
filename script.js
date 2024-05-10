const todoList = [];
renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const elementObject = todoList[i];
    const name = elementObject.name;
    /*if we have the same key as much as the name of the variable we can do this 
                const { name } = elementObject ====  const name = elementObject.name;

                const { name, dueDate} = elmentObject;
                */
    const dueDate = elementObject.dueDate;
    const html = `
                <div>${name}</div>
                <div>${dueDate}</div>  
                <button class="delete-button" onclick="
                todoList.splice(${i},1);
                renderTodoList();
                ">Delete</button> 
                 `;
    todoListHtml += html;
  }
  //console.log(todoListHtml);
  document.querySelector(".container").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".inputName");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".inputDate");
  const dueDate = dateInputElement.value;
  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
