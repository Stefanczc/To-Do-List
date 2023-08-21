const inputField = document.getElementById('input');
const itemsList = document.getElementById('to-do-list');
let counter = 1;

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
    });

    newItem.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        itemsList.removeChild(newItem);
    });
    
    itemsList.appendChild(newItem);
    counter++;
    inputField.value = '';
}

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});
