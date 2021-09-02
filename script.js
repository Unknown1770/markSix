const btnTranslate = document.querySelector('#translate');
let inputText = document.querySelector('#input');
let output = document.querySelector('#output');

const url = 'https://api.funtranslations.com/translate/minion.json'

function getTranslateMsg(text) {
    const serverurl = url + '?' + 'text=' + text;
    return serverurl;
}

function errorHandler(error) {
    console.log("error occured:- " + error);
    alert("Something wrong with the server, Try again after some time.");
}

function trans() {
    const textmsg = inputText.value;
    fetch(getTranslateMsg(textmsg))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)


};

btnTranslate.addEventListener("click", trans);