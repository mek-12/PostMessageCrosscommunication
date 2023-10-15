console.log("Message handler loaded!");
const methodStrHeader = "MyMeThOd";
const methodStrPrntHeader = "PrNtHeader"

const MessageHandler = {
    Methods: {
        MessageProcessor: function (event){
            var message = event.data || "";
            if(message == null || typeof message != 'string' || message.indexOf(methodStrHeader) == -1){
                // console.warn("Message handled but messae is empty!");
                return;
            }
            // debugger;
            var methodInfo = JSON.parse(message.split(methodStrHeader)[1]);
            var method = ParentOwnerMethods.Methods[methodInfo.MethodName];
            if(method != null){
                let parameters = methodInfo.Parameters;
                event.source.postMessage(methodStrPrntHeader + JSON.stringify({Result: method(parameters[0],parameters[1],parameters[2])}),'http://localhost:3001');    
                return `Execute Result: ${method(parameters[0],parameters[1],parameters[2])}`;
            }
            return "";
        }
    }
}


const ParentOwnerMethods =  {
    Methods: {
        GetSumResult: function (arg1, arg2){
            return arg1 + arg2;
        },
        GetFullName: function (name, middleName,surname){
            name = name + ' ' + middleName || '';
            return name + " " + surname ;
        }
    }
}