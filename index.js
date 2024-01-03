let istatus = document.querySelector("h5");

let buttonValue = document.querySelector("button");

flag = 0;
buttonValue.addEventListener("click", function(){
    if(flag==0){                      // for applying changes on add friend.
        istatus.innerHTML="Friend";
        istatus.style.color="green";
        buttonValue.style.backgroundColor="grey";
        buttonValue.style.color="white";
        buttonValue.style.border="2px solid green";
        flag=1;
        buttonValue.innerHTML="Remove Friend";
    }
    else{                           // for applying changes on remove friend.
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        buttonValue.style.backgroundColor="aliceblue";
        buttonValue.style.color="black";
        buttonValue.style.border="2px solid red";

        flag=0;
        buttonValue.innerHTML="Add Friend";

    }
});