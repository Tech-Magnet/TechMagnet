function onLoad(){
    document.getElementById('f-year').innerHTML = new Date().getFullYear();
}

var PRO = [];
var QTY = [];
var PRICE = [];
var NAME = [];

var TOTAL_PRICE = 0;

function addOrder(pID){

    var pricePID = "price-" + pID;
    var price = document.getElementById(pricePID).innerHTML;

    var qtyPID = "qty-" + pID;
    var qty = document.getElementById(qtyPID).value;

    var namePID = "name-" + pID;
    var name = document.getElementById(namePID).innerHTML;


    //Stoping Negative Quatities
    if(qty < 1){qty = 1;}
    
    
    PRO.push(pID);
    QTY.push(qty);
    PRICE.push(price);
    NAME.push(name);

    /*console.log("");
    console.log("NAME = " + NAME);
    console.log("PRO = " + PRO);
    console.log("QTY = " + QTY);
    console.log("PRICE = " + PRICE);
    console.log("");
    console.log("");*/



    window.sessionStorage.setItem("ProIdSIS", JSON.stringify(PRO));
    window.sessionStorage.setItem("QtySIS", JSON.stringify(QTY));
    window.sessionStorage.setItem("PriceSIS", JSON.stringify(PRICE));
    window.sessionStorage.setItem("NameSIS", JSON.stringify(NAME));
    

    
}

function addItem() {

    var storedArrayPro = JSON.parse(sessionStorage.getItem("ProIdSIS"));
    for (var iPRO = 0; iPRO < storedArrayPro.length; iPRO++) {
        PRO.push(storedArrayPro[iPRO]);
        //console.log("PRO ID = " + PRO);
    }

    var storedArrayQty = JSON.parse(sessionStorage.getItem("QtySIS"));
    for (var iQTY = 0; iQTY < storedArrayQty.length; iQTY++) {
        QTY.push(storedArrayQty[iQTY]);
        //console.log("QTY = " + QTY);
    }

    var storedArrayPri = JSON.parse(sessionStorage.getItem("PriceSIS"));
    for (var iPRI = 0; iPRI < storedArrayPri.length; iPRI++) {
        PRICE.push(storedArrayPri[iPRI]);
        //console.log("PRICE = " + PRICE);
    }

    var storedArrayNam = JSON.parse(sessionStorage.getItem("NameSIS"));
    for (var iNam = 0; iNam < storedArrayNam.length; iNam++) {
        NAME.push(storedArrayNam[iNam]);
        //console.log("NAME = " + NAME);
    }

    for (var i = 0; i < PRO.length; i++){
        var list = document.getElementById("myList");
        var div = document.createElement("div");
        div.style.backgroundColor = "#ffffff";
        div.innerHTML = "<div class='row'><div class='column'><img src='pics/pro/Untitled-" + PRO[i] + ".jpg' style='width: 250px'></div><div class='column'> <p>" + NAME[i] +"</p><p>Antal: " + QTY[i] +"</p><p>Pris: " + PRICE[i] * QTY[i] +" kr</p></div></div>";
        div.appendChild(document.createTextNode(""));
        list.appendChild(div);
    }
    
    for(var i = 0; i < PRO.length; i++){
        TOTAL_PRICE += PRICE[i] * QTY[i]; 
    }
    document.getElementById("cart-total").innerHTML = TOTAL_PRICE;
    //console.log(TOTAL_PRICE);
    onLoad();
  }

  function send(){
        var Phone;
        if(document.getElementById('coustomerPhone').value == null){
            Phone = "NONE";
        }else{
            Phone = document.getElementById('coustomerPhone').value
        }

        var order = "A New Order has come in \n \nPRICE: " + TOTAL_PRICE + ", \nEmail: " + document.getElementById('coustomerMail').value + ", \nPhone: " + Phone + ", \nName: " + document.getElementById('coustomerName').value + " , \nAddress: " + document.getElementById('coustomerAddress1').value + ", \nZip Code: " + document.getElementById('coustomerAddress2').value + ", \nCity: " + document.getElementById('coustomerAddress3').value + "\n \nProduct Name: " + NAME + "\nProcukt ID: " + PRO + "\nQuantity: " + QTY + "\nPRICE: " + PRICE;

        console.log(order);



      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1116417872856625223/LFnjS4miUXWf49z87q2TfVYEUNxxP_eHkUT999yHFwZ3KjHqMHWvpb1d9daa4W1Y_7KU");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Online Orders",
        avatar_url: "",
        content: order
      }

      request.send(JSON.stringify(params));
  }