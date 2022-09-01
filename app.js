var textArea1 = document.querySelector("#txt-area");
var clickBtn = document.querySelector("#click-btn");
var textArea2 = document.querySelector("#txt-area2");


function createURL(text){
    var url = "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" +text;
     
    return url;
}

function clickHandler(){
    var inputText = textArea1.value;

    

    fetch(createURL(inputText))
    .then(response => response.json())
    .then(
        json=> {
            textArea2.innerText = json.contents.translated;
            
            
        }) 
    
        

    }

  
clickBtn.addEventListener('click',clickHandler);
