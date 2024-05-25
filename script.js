const list = document.getElementById("list")
const input = document.getElementById("input")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const completedList = document.getElementById("completedList")

function checkList(){
  const inputValue = input.value.trim();
  if(inputValue === ""){
    return;
  } else{
    addTask();
  }
  function addTask(){

    const liElement = document.createElement('li');
    liElement.className = "item";
    list.style.paddingLeft = "0px"
    completedList.style.paddingLeft = "0px"
    list.appendChild(liElement)

    ////////////buttons////////////////////
    const btnBox = document.createElement('div');
    btnBox.style.display = "flex"
    btnBox.style.flexDirection = "column"
    liElement.appendChild(btnBox)
    /////////////////////////////////////////

    //////////////////////////////////////////
    const remove = document.createElement('button');
    remove.addEventListener("click", () => {
      liElement.remove();
    })
    btnBox.appendChild(remove)
    //////////////////////////////////////////
    const pin = document.createElement('button');
    const BackgroundImageURL = "url('image/pin-svgrepo-com.png')";
    const newBackgroundImageURL = "url('image/pin-svgrepo-comgreen.png')";
    pin.classList.add('pinBtn')
    pin.addEventListener("click", () => {
      if(list.firstChild !== liElement){
        list.insertBefore(liElement, list.firstChild);
        pin.style.backgroundImage = newBackgroundImageURL
      } else{
        list.appendChild(liElement);
        pin.style.backgroundImage = BackgroundImageURL
      }
      
    })
    btnBox.appendChild(pin)
    //////////////////////////////////////////
    const labelBox = document.createElement("label");
    const checkBox = document.createElement("input");
    const checkSpan = document.createElement("span");
    liElement.appendChild(labelBox);
    labelBox.appendChild(checkBox);
    labelBox.appendChild(checkSpan);
    checkBox.setAttribute("type", "checkbox");
    checkSpan.classList.add("checkmark");
    labelBox.classList.add("custom-checkbox");

    checkBox.addEventListener("click", () => {
      if(checkBox.checked){
        completedList.append(liElement)
        inputText.style.textDecoration = "line-through"
        inputText.style.color = "rgb(123, 123, 123)"
      } else{
        list.append(liElement)
        inputText.style.textDecoration = "none"
        inputText.style.color = "rgb(190, 190, 190)"
      }
    })
    //////////////////////////////////////////
    const inputText = document.createElement('p')
    liElement.appendChild(inputText)
    inputText.className = 'inputP'
    inputText.textContent = inputValue;
    
  
    input.value = ""
  }
}

submit.addEventListener("click", checkList)