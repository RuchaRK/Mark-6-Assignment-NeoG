var textArea1 = document.querySelector("#txt-area");
var clickBtn = document.querySelector("#click-btn");
var textArea2 = document.querySelector("#txt-area2");
var clickBtn2 = document.querySelector("#click-btn2");
var loader = document.querySelector("#preloader");


function createURL(text){
    var url = "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" +text;
     
    return url;
}

function clickHandler(){
    var inputText = textArea1.value;
    textArea2.style.display = "none";
    clickBtn.style.display = "none";
    loader.style.display = "block";
    clickBtn2.style.display = "block";
    clickBtn2.disabled = true;

    fetch(createURL(inputText))
    .then(response => response.json())
    .then(
        json=> {
            textArea2.innerText = json.contents.translated;
            textArea2.style.display = "block";
            clickBtn.style.display = "block";
            loader.style.display = "none";
            clickBtn2.style.display = "none"; 
        }) 
    }

  
clickBtn.addEventListener('click',clickHandler);
