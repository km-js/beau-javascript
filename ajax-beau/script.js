//Ajax stands for asynchronous javascript and xml
//Ajax allows you to update parts of a website without reloading the entire page 
//you can recieve data from a server and send data to a server in the background

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };


xhttp.open("GET","https://crossorigin.me/http://carnes.cc/code/ajax_example.txt", true);
xhttp.send();
}

//7 main steps of Ajax
//1. An event occurs on a webpage(when you hit a button)
//2. Xml Http request object is created by javascript
//3. xml http request sends a request to the web server(xhttp.send)
//4. Server processes the request 
//5.Server sends response back to the webpage
//6.Response is read by javascript(this.responseText)
//7. Action is performed by Javascript 