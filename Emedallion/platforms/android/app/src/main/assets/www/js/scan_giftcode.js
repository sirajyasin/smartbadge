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
                        $('#gift_amnt').html(parseInt(amnt) + parseInt(result.text));
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
