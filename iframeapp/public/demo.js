const methodStrHeader = "MyMeThOd";
const methodStrPrntHeader = "PrNtHeader"

async function clickButton (){
    var prnt = window.top || window.parent;

    var methodInfo = {
        MethodName: "GetFullName",
        Parameters: ["Muhammed","Emin","Karaboğa"]
    };
    var strMethodInfo = methodStrHeader + JSON.stringify(methodInfo);
    prnt.postMessage(strMethodInfo,'http://localhost:3000');
    var messageFromParent = await getResponseFromParent();
    console.log(messageFromParent);
}

async function getResponseFromParent(){
    return new Promise(function (resolve) {
    addEventListener("message", function animationendListener(event) {
        var message = event.data || "";
        if(message == null || typeof message != 'string' || message.indexOf(methodStrPrntHeader) == -1){
            // console.warn("Message handled but messae is empty!");
            return;
        }
        // debugger;
        removeEventListener("message", animationendListener);
        var response = JSON.parse(message.split(methodStrPrntHeader)[1]);
        //call any handler you want here, if needed
        resolve(response);
    });
});
}
// addEventListener("message", function(event){
//     var message = event.data || "";
//     if(message == null || typeof message != 'string' || message.indexOf(methodStrPrntHeader) == -1){
//         // console.warn("Message handled but messae is empty!");
//         return;
//     }
//     // debugger;
//     var response = JSON.parse(message.split(methodStrPrntHeader)[1]);
//     console.log("Result: " + response.Result);
// });


// var div = this.Div;  
// return new Promise(function (resolve) {
//     div.addEventListener("animationend", function animationendListener() {
//         div.removeEventListener("animationend", animationendListener);
//         //call any handler you want here, if needed
//         resolve();
//     });
// });