$( document ).ready( function () {

	var contactsHtml = "";
	function getAllContacts() {
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

		return contactsJson;
	}

	updateContactList();

	function updateContactList() {
		$( ".contacts-container" ).html("");
		var allContactsJson = getAllContacts();
		$.each(allContactsJson, function(i, val) {
			contactsHtml += '<div class="contact-container">' +
								'<div class="contact-srnum contact-col">1.</div>' +
								'<div class="contact-icon contact-col"></div>' +
								'<div class="contact-name contact-col">' + val['name'] + '</div>' +
								'<div class="contact-num contact-col"> ' + val['num'] + ' </div>' +
								'<div class="contact-city contact-col">New Delhi</div>' +
							'</div>'
		});
		$( ".contacts-container" ).html( contactsHtml );

		$(".contact-container").unbind("click").click(function() {
			contactClick();
		});
	}

	$(".create-new").click(function() {
		contactClick();
	});

	$(".modal-cancel").click(function() {
		$(".modal-backdrop").fadeOut(300);
		$(".contact-modal").fadeOut(300);
	});

	function contactClick() {
		$(".modal-backdrop").fadeIn(300);
		$(".contact-modal").fadeIn(300);
	}

} );