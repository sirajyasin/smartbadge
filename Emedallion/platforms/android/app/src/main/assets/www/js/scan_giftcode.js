var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#claim_code");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var amnt = $('#gift_amnt').text();
			var total_amnt = parseInt(amnt) + parseInt(result.text);
                        $('#gift_amnt').html(total_amnt);

                        ebucks_json = {};
                        $.ajax({
                           url: "https://api.myjson.com/bins/kxd08",
                           type: "GET",
                           contentType: "application/json; charset=utf-8",
                           dataType: "json",
                           success: function (data, textStatus, jqXHR) {
               	             ebucks_json = data;
                            var signum = window.localStorage.getItem('Signum');
	                     ebucks_json[signum]['balance'] = total_amnt;
                             $.ajax({
                                   url: "https://api.myjson.com/bins/kxd08",
                                   type: "PUT",
                                   contentType: "application/json; charset=utf-8",
 	                	    data: JSON.stringify(ebucks_json),
                                   dataType: "json",
                                   success: function (data, textStatus, jqXHR) {
 	                              $('#redeem_status').html('Balance Updated!!!');		
                                   }
                                 });
                      
                                  }
                                });



		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
