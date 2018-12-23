document.getElementById('button').addEventListener("click", loadData);


function loadData(){
// Create an XHR Object
const xhr = new XMLHttpRequest();

//Open
xhr.open('GET', 'file.txt', true);

xhr.onload = function(){
    if(this.status === 200){
        document.querySelector('#output').textContent = this.responseText;
    }
}

xhr.send();

};
