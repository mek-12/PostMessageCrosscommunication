console.log("Message listener loaded");

(function(){
    addEventListener("message", function (e) {
        var result = MessageHandler.Methods.MessageProcessor(e);
        if(result){
            this.window.alert(result);
        }
    });

    addEventListener("message", function (e) {
        var result = MessageHandler.Methods.MessageProcessor(e);
        if(result){
            this.window.console.log(result);
        }
    });
})();
