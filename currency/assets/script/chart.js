async function GetStock() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var apiKey = "fOxc0Drc_HGjBiTz8dp6xdDPxNgTxrmb"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;
        var BaseCurrency= document.getElementById("basecurrency").value;
        var ToCurrency= document.getElementById("tocurrency").value;

        /* URL for AJAX Call */
        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + ToCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {  
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an oject
            var msg1 =JSON.parse(msg1JSONText);          
                var stockdate = [];
                var stockvalue = [];
                var numdays = msg1.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        stockvalue[i] = msg1.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg1.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }


                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Close",
                        "data": stockvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );            
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    document.getElementById("StockSymbol").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("ceo").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    document.getElementById("logo").src = "";
    document.getElementById("StockValueTable").innerHTML = "";
    document.getElementById("StockVolumeTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}