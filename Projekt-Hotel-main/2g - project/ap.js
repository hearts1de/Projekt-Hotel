function printInput(){
    const inputName = document.querySelector('.name').value
    const surName = document.querySelector('.surName').value

    
    document.querySelector('.resultName').textContent = inputName;
    document.querySelector('.resultSurName').innerHTML = surName;
}

