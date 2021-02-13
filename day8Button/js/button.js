let clickButton = document.createElement('button');
document.body.appendChild(clickButton);
clickButton.id = 'btn';
clickButton.innerHTML = 0;
clickButton.onclick = () => (clickButton.innerHTML++);
