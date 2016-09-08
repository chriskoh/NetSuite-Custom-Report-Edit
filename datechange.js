// datechange.js
// Change a custom report's date range

function recordchange(type, name){

	if(name == 'datefield' && nlapiGetFieldValue('datefield') != ""){
		
		// replace URL with custom report URL
		var reporturl = 'https://system.na1.netsuite.com/app/reporting/reportrunner.nl?cr=522&customized=T&whence='
		
		var win = window.open(reporturl,"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=10, height=10, visible=none");
	  	window.focus(); // focuses the main window.

		win.onload = function(){
			win.document.getElementById('crit_1_from').value=nlapiGetFieldValue('datefield');
			win.document.getElementById("refresh").click();
			
			//alert("Start Date critera modified.");
			setTimeout(function(){ 

				win.close();
			}, 1000);
		}
	}
	
	if(name == 'datefield2' && nlapiGetFieldValue('datefield2') != ""){
	
		// replace URL with custom report URL
		var reporturl = 'https://system.na1.netsuite.com/app/reporting/reportrunner.nl?cr=522&customized=T&whence='
		
		var win = window.open(reporturl,"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=10, height=10, visible=none");
		window.focus(); // focuses the main window.

		win.onload = function(){
			win.document.getElementById('crit_1_to').value=nlapiGetFieldValue('datefield2');
			win.document.getElementById("refresh").click();
			
			//alert("End Date critera modified.");
			setTimeout(function(){ 

				win.close();
			}, 1000);
		}
	}
}
