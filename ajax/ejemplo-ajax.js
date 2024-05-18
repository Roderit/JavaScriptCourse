function reqListener(){
    console.log(JSON.parse(this.responseText));
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost/JavaScriptCourse/ajax/prueba.txt");
oReq.send();