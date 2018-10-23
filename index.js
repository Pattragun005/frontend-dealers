$(function () {
    function getContain() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://staffcoc.000webhostapp.com/dearler.json";
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {   
            var tid=1;
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var c = jsResult["dealer"].length;
            var meet ="";
            for(i =0;i<c;i++){
               
                if(parseInt(jsResult["dealer"][i]["id_dealer"])===parseInt(tid)){
                 meet+=jsResult["dealer"][i]["id_dealer"]+"."+jsResult["dealer"][i]["username_dealer"];
             
                    $('#username').val(jsResult["dealer"][i]["username_dealer"]);
                    $('#createpassword').val(jsResult["dealer"][i]["password_dealer"]);
                    $('#repeatpassword').val(jsResult["dealer"][i]["password_dealer"]);
                    $('#email').val(jsResult["dealer"][i]["email_dealer"]);
                    $('#phone').val(jsResult["dealer"][i]["tel"]);
                    $('#address').val(jsResult["dealer"][i]["address"]);
                    $('#type').val(jsResult["dealer"][i]["type"]);
                    $('#companyname').val(jsResult["dealer"][i]["company_name"]);
                }
              }
                     
        }
    }
    document.getElementsByClassName("contain").innerHTML = getContain();  
});