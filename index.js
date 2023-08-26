const inputField = document.getElementById('input');
const itemsList = document.getElementById('to-do-list');
let counter = 1;
const savedItems = JSON.parse(localStorage.getItem('todoItems')) || [];

function addListItem() {
    const newItem = document.createElement('li');
    const trimmedValue = inputField.value.trim();

    if (trimmedValue === '') {
        return;
    }
    newItem.textContent = trimmedValue;

    newItem.addEventListener('click', function () {
        newItem.style.textDecoration !== 'line-through' ?
            newItem.style.textDecoration = 'line-through' :
            newItem.style.textDecoration = 'none';
        saveToLocalStorage();
        
    });
    savedItems.push(newItem.textContent);

    newItem.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        itemsList.removeChild(newItem);
        savedItems.pop();

        saveToLocalStorage();
    });
    itemsList.appendChild(newItem);
    saveToLocalStorage();
    counter++;
    inputField.value = '';
}

function saveToLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(savedItems));
}

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addListItem();
        console.log(savedItems);
    }
});

savedItems.forEach(itemText => {
    const newItem = document.createElement('li');
    newItem.textContent = itemText;
    newItem.addEventListener('click', function () {
        newItem.style.textDecoration = newItem.style.textDecoration !== 'line-through' ?
            'line-through' :
            'none';
        saveToLocalStorage();
    });
    newItem.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        itemsList.removeChild(newItem);
        savedItems.pop();
        saveToLocalStorage();
    });
    itemsList.appendChild(newItem);
});
