$( document ).ready( function () {
	var contactsJson = [
		{
			"id" : "1",
			"name" : "praveen",
			"num" : "9999048676",
			"city": "New Delhi"
		},
		{
			"id" : "2",
			"name" : "gaurav",
			"num" : "9999048676",
			"city": "Loni"
		},
		{
			"id" : "3",
			"name" : "vik",
			"num" : "9999048676",
			"city": "MIG"
		},
		{
			"id" : "4",
			"name" : "Rahul",
			"num" : "9999048676",
			"city": "LIG"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
		{
			"id" : "5",
			"name" : "Piyush",
			"num" : "9999048676",
			"city": "Delhi"
		},
	];

	$( ".contacts-container" ).html("");

	var contactsHtml = "";

	// <div class="contact-container">
	// 			<div class="contact-srnum contact-col">
	// 				1.
	// 			</div>
	// 			<div class="contact-icon contact-col">
					
	// 			</div>
	// 			<div class="contact-name contact-col">
	// 				Praveen
	// 			</div>
	// 			<div class="contact-num contact-col">
	// 				9999048676
	// 			</div>
	// 			<div class="contact-city contact-col">
	// 				New Delhi
	// 			</div>
	// 		</div>

	$.each(contactsJson, function(i, val) {
		// console.log(val)
		console.log(val)
		contactsHtml += '<div class="contact-container">' +
							'<div class="contact-srnum contact-col">1.</div>' +
							'<div class="contact-icon contact-col"></div>' +
							'<div class="contact-name contact-col">' + val['name'] + '</div>' +
							'<div class="contact-num contact-col"> ' + val['num'] + ' </div>' +
							'<div class="contact-city contact-col">New Delhi</div>' +
						'</div>'
		// $("#" + i).append(document.createTextNode(" - " + val));
	});
console.log(contactsHtml)
	$( ".contacts-container" ).html( contactsHtml );

} );