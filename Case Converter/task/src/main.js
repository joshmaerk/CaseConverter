function upperCase() {
    clearStyle()
    var elem = document.getElementsByTagName("textarea")[0];
    elem.value = elem.value.toUpperCase();
}

function lowerCase() {
    clearStyle()
    var elem = document.getElementsByTagName("textarea")[0];
    elem.value = elem.value.toLowerCase();
}


function properCase() {
    clearStyle()
    var elem = document.getElementsByTagName("textarea")[0];
    var text = elem.value.toLowerCase().split(" ")
    for (let i=0; i < text.length; i++) {
        const char = text[i][0]
        text[i] = text[i].replace(char, char.toUpperCase(),0)
    }
    elem.value = text.join(" ")
    //elem.style = "text-transform: capitalize;"
}

function sentenceCase() {
    clearStyle()
    var elem = document.getElementsByTagName("textarea")[0];
    var sentences = elem.value.toLowerCase().split(".")
    for (let i = 0; i < sentences.length; i++) {

        sentences[i] = sentences[i].trimStart()

        const char = sentences[i][0];
        if (char !== undefined) {
            sentences[i] = sentences[i].replace(char, char.toUpperCase())
        }
    }
    elem.value = sentences.join('. ').trimEnd()
}

function clearStyle() {
    document.getElementsByTagName("textarea")[0].style = ""
}

function saveText() {
    let elem = document.getElementsByTagName("textarea")[0]
    download("text.txt", elem.value)
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}