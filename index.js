const listContent = document.getElementById('create-to-do');
const listItem = document.createElement('li');

listItem.textContent = listContent;
console.log(listContent);

const listElement = document.querySelector('#to-do-list');
listElement.append(listContent);

const btn = document.querySelector('#add');

btn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = listContent.value; 
    listElement.append(newItem);
});

