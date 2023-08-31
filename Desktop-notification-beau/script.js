//Desktop Notifications
//The Notification api lets webpage or apps send notifications that are displayed outside the page at the system level
//this lets web apps send information to a user even if the application is idle or in the background
Notification.requestPermission().then(function(result){
    alert(result);
});

//new Notification("Subscribe to JS Nuggets");

function notifyMe(){
    if(!('Notification' in windows)){
        alert("This browser does not support system notifications");
    }
    else if(Notification.permission == "granted"){
        notify();
    }
    else if(Notification.permission !== 'denied'){
        Notification.requestPermission(function(permission){
            if(permission === "granted"){
                notify();
            }
        })
    }
}

function notify(){
    var notification = new Notification('Title of Notification', {
        icon: "http://carnes.cc/jsnuggets_avatar.jpg",
        body: "Hey! You are on notice!"
    });

    notification.onclick = function(){
        window.open("http://carnes.cc");
    };
    setTimeout(notification.close.bind(notification), 7000);

}

notifyMe();