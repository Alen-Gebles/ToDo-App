const list = document.getElementById("list");
const input = document.getElementById("input");
const clear = document.getElementById("clear");
const completedList = document.getElementById("completedList");

function submitInput() {
  const inputValue = input.value;

  list.style.paddingLeft = "0px"
  completedList.style.paddingLeft = "0px"

  const liElement = document.createElement('li');
  liElement.className = "item";


  const paragraph = document.createElement('p');
  paragraph.textContent = inputValue;


  const btnBox = document.createElement('div');
  btnBox.style.display = "flex"
  btnBox.style.flexDirection = "column"


  const doneButton = document.createElement('button');
  doneButton.textContent = 'Done';
  
  doneButton.addEventListener("click", () => {
    moveEl(liElement)
    liElement.style.backgroundColor = "lightgreen"
  })


  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    liElement.remove();
  });

  clear.addEventListener("click", () => {
    while(list.firstChild){
    list.removeChild(list.firstChild);
    }
  })
  
  liElement.appendChild(paragraph);
  btnBox.appendChild(doneButton);
  btnBox.appendChild(removeButton);
  liElement.appendChild(btnBox);
  list.appendChild(liElement);

  
  input.value = '';

  function moveEl(element) {
    completedList.appendChild(element);
  }
}

