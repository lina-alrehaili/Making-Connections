
/* remove user by their id number and decrement requests */
function remove(num) {
    var userID
    var requestsNum
    if (num == 1){
        userID = document.getElementById("user1");
        requestsNum=document.getElementById("numOfRequests");
        requestsNum.innerHTML=requestsNum.innerHTML-1;
    }
    if (num == 2){
        userID = document.getElementById("user2");
        requestsNum=document.getElementById("numOfRequests");
        requestsNum.innerHTML=requestsNum.innerHTML - 1;
    }
    userID.remove();
}
/* change user name when clicked */
function changeName(){
    var name=document.getElementById("nameID");
    name.innerHTML="Lina Alrehaili";
}
/* add connection number when accept request */
function addConnection(){
    var connections=document.getElementById("numOfConnections");
    connections.innerHTML=parseInt(connections.innerHTML)+1;
}