function get_qrcode() {
    code = null;
    var qr_url = "http://34.70.33.8/get-user-qr-code";
    $.support.cors = true;
    $.ajax({
       url:  qr_url,
       data: { 'user': 'edihyav' },
       type: "GET",
    }).done(function(result) {
	 console.log(result);   
    });
    return code;

}

