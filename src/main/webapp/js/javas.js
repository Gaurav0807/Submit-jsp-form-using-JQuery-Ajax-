
 $(document).ready(function() {
	$('#username').blur(function() {
		$.ajax({
			url : 'GetFormData',
			data : {
				username : $('#username').val()
			},
			success : function(data) {
				$('#h1').html(data);
			}
		});
	});
});