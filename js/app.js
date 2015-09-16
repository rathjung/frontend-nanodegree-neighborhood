(function(){

// Initialize Model
var placeData = [
	{
		name: 'Wat Phra Kaew',
		lat: 13.751399,
		lng: 100.492541,
		imgSrc: 'img/wat001.jpg',
		imgAttribute: 'Photo by D.Alyoshin from Wikimedia Commons.',
		description: 'Wat Phra Kaew (Thai: วัดพระแก้ว, English: Temple of the Emerald Buddha; full official name Wat Phra Si Rattana Satsadaram, Thai: วัดพระศรีรัตนศาสดาราม) is regarded as the most sacred Buddhist temple (wat) in Thailand. The Emerald Buddha housed in the temple is a potent religio-political symbol and the palladium (protective image) of Thai society. It is located in Phra Nakhon District, the historic centre of Bangkok, within the precincts of the Grand Palace.'
	},
	{
		name: 'Wat Pho',
		lat: 13.746575,
		lng: 100.492728,
		imgSrc: 'img/wat002.jpg',
		imgAttribute: 'Photo by sumet_k under license: CC0 Public Domain',
		description: 'Wat Pho (Thai: วัดโพธิ also spelt Wat Po, is a Buddhist temple complex in Phra Nakhon district, Bangkok, Thailand. It is located in the Rattanakosin district directly to the south of the Grand Palace. Known also as the Temple of the Reclining Buddha, its official name is Wat Phra Chetuphon Vimolmangklararm Rajwaramahaviharn (Thai: วัดพระเชตุพนวิมลมังคลารามราชวรมหาวิหาร). The more commonly-known name, Wat Pho, is a contraction its older name Wat Photaram.'
	},
	{
		name: 'Wat Arun',
		lat: 13.743703,
		lng: 100.489005,
		imgSrc: 'img/wat003.jpg',
		imgAttribute: 'Photo by Manoonp from Wikimedia Commons.',
		description: 'Wat Arun Ratchawararam Ratchawaramahawihan or Wat Arun ("Temple of Dawn") is a Buddhist temple (wat) in Bangkok Yai district of Bangkok, Thailand, on the Thonburi west bank of the Chao Phraya River. The temple derives its name from the Hindu god Aruna, often personified as the radiations of the rising sun. Wat Arun is among the best known of Thailand\'s landmarks and the first light of the morning reflects off the surface of the temple with pearly iridescence. Although the temple had existed since at least the seventeenth century, its distinctive prang (spires) were built in the early nineteenth century during the reign of King Rama II.'
	},
	{
		name: 'Wat Ratchabophit',
		lat: 13.749143,
		lng: 100.497345,
		imgSrc: 'img/wat004.jpg',
		imgAttribute: 'Photo by มัทนา from Wikimedia Commons.',
		description: 'Wat Ratchabophit or formally Wat Ratchabophit Sathit Maha Simaram Ratcha Wara Maha Wihan is a Buddhist temple located in on Atsadang Road, Bangkok, along Khlong Lot, not far from Wat Pho and the Grand Palace. The temple was built during the reign of King Chulalongkorn (Rama V).'
	},
	{
		name: 'Wat Ratchanaddaram',
		lat: 13.754767,
		lng: 100.504301,
		imgSrc: 'img/wat005.jpg',
		imgAttribute: 'Photo by Jr8825 from Wikimedia Commons.',
		description: 'Wat Ratchanatdaram (Thai: วัดราชนัดดาราม or Wat Ratchanatda School) is a buddhist temple (wat) located at the intersection between Ratchadamnoen Klang and Maha Chai Road, in Phra Nakhon district, Bangkok. Meaning Temple of the Royal Niece, the temple was built to the order of King Nangklao (Rama III) for the princess granddaughter, Somanass Waddhanawathy (พระเจ้าหลานเธอ พระองค์เจ้าโสมนัสวัฒนาวดี) in 1846.'
	},
	{
		name: 'Wat Ratchapradit',
		lat: 13.749453,
		lng: 100.495848,
		imgSrc: 'img/wat006.jpg',
		imgAttribute: 'Photo by Hochgeladen von Hdamm from Wikimedia Commons.',
		description: 'Wat Ratchapadit is a relatively compact temple, built in 1864 on a former coffee plantation King Rama IV bought to turn it into a temple of Dhammayutika Nikaya, an austere order of Buddhism founded by himself, so that people living in the Grand Palace had a place to practice meditation near their residences. Wall paintings in the main ordination hall are also the highlights. The wall paintings depicts the royal ceremonies over 12 months, as well as some significant works and events of King Rama IV.'
	},
	{
		name: 'Wat Saket and the Golden Mount',
		lat: 13.753865,
		lng: 100.508134,
		imgSrc: 'img/wat007.jpg',
		imgAttribute: 'Photo by Ahoerstemeier from Wikimedia Commons.',
		description: 'Wat Saket Ratcha Wora Maha Wihan (Thai: วัดสระเกศราชวรมหาวิหาร, usually shortened to Wat Saket) is a Buddhist temple (Wat) in Pom Prap Sattru Phai district, Bangkok, Thailand. The temple dates back to the Ayutthaya era, when it was known as Wat Sakae. When Bangkok became the capital, King Rama I renovated the temple and gave it its present name.'
	},
	{
		name: 'Wat Suthat and the Giant Swing',
		lat: 13.751042,
		lng: 100.501006,
		imgSrc: 'img/wat008.jpg',
		imgAttribute: 'Photo by Kenta akutsu from Wikimedia Commons.',
		description: 'Wat Suthat Thep Wararam (Thai: วัดสุทัศนเทพวราราม is a Buddhist temple in Bangkok, Thailand. It is a royal temple of the first grade, one of ten such temples in Bangkok (23 in Thailand). Construction was begun by King Rama I in 1807 (B.E. 2350). Further construction and decorations were carried out by King Rama II who helped carve the wooden doors, but the temple was not completed until the reign of King Rama III in 1847 (B.E.2390). This temple contains the Buddha image Phra Sri Sakyamuni (Thai: พระศรีศากยมุนี) which have been moved from Sukhothai province.'
	},
	{
		name: 'Wat Thepthidaram',
		lat: 13.753385,
		lng: 100.504221,
		imgSrc: 'img/wat009.jpg',
		imgAttribute: 'Photo by Hochgeladen von Hdamm from Wikimedia Commons.',
		description: 'Thoroughly completed in 1839 after a three-year construction during the reign of King Rama II whose aim was to tribute to his daughter, Wat Thepthidaram (means Temple of the Angel) is famous for its architecture influenced by Chinese arts, especially its ordination hall. Wat Thepthidaram was also the former residence of Sunthorn Phu, one of the greatest poets in Thai history, during his monkhood in 1840-1842, whose biography is shown at the museum located within the temple compound.'
	}
];

// Constructor for Place
var Place = function(data) {
	this.name = data.name;
	this.lat = data.lat;
	this.lng = data.lng;
	this.imgSrc = data.imgSrc;
	this.imgAttribute = data.imgAttribute;
	this.description = data.description;
};

// Initialize ViewModel
var ViewModel = function() {
	var self = this;

	// Set location list observable array from PlaceData
	this.placeList = ko.observableArray([]);
	// Get value from search field.
	this.search = ko.observable('');

	// Make place object from each item in location list then push to observable array.
	placeData.forEach(function(item){
		this.placeList.push(new Place(item));
	}, this);

	// Initial current location to be the first one.
	this.currentPlace = ko.observable(this.placeList()[0]);

	// Functions invoked when user clicked an item in the list.
	this.setPlace = function(clickedPlace) {

		// Set current location to which user clicked.
		self.currentPlace(clickedPlace);

		// Find index of the clicked location and store for use in activation of marker.
		var index = self.filteredItems().indexOf(clickedPlace);

		// Prepare content for Google Maps infowindow
		self.updateContent(clickedPlace);

		// Activate the selected marker to change icon.
		// function(marker, context, infowindow, index)
		self.activateMarker(self.markers[index], self, self.infowindow)();

		// Invoke function for instagram API call.
		self.instagramImg(clickedPlace.lat, clickedPlace.lng);

	};

    // Filter location name with value from search field.
	this.filteredItems = ko.computed(function() {
	    var searchTerm = self.search().toLowerCase();
	    if (!searchTerm) {
	        return self.placeList();
	    } else {
	        return ko.utils.arrayFilter(self.placeList(), function(item) {
	        	// return true if found the typed keyword, false if not found.
            	return item.name.toLowerCase().indexOf(searchTerm) !== -1;
	        });
	    }
	});

	// Initialize Google Maps
  	this.map = new google.maps.Map(document.getElementById('map'), {
        	center: {lat: 13.750521, lng: 100.491460},
            zoom: 15,
            scrollwheel: false
        });

  	// Initialize markers
	this.markers = [];

	// Initialize infowindow
	this.infowindow = new google.maps.InfoWindow({
		maxWidth: 320
	});

	// Render all markers with data from the data model.
	this.renderMarkers(self.placeList());

	// Subscribe to changed in search field. If have change, render again with the filered locations.
  	this.filteredItems.subscribe(function(){
		self.renderMarkers(self.filteredItems());
  	});

  	// Add event listener for map click event (when user click on other areas of the map beside of markers)
	google.maps.event.addListener(self.map, 'click', function(event) {

		// Every click change all markers icon back to defaults.
		self.deactivateAllMarkers();

		// Every click close all indowindows.
	    self.infowindow.close();
	});
};


// Method for clear all markers.
ViewModel.prototype.clearMarkers = function() {
	for (var i = 0; i < this.markers.length; i++) {
		this.markers[i].setMap(null);
	}
		this.markers = [];
};

// Method for render all markers.
ViewModel.prototype.renderMarkers = function(arrayInput) {

	// Clear old markers before render
	this.clearMarkers();
	var infowindow = this.infowindow;
	var context = this;
	var placeToShow = arrayInput;

	// Create new marker for each place in array and push to markers array
  	for (var i = 0, len = placeToShow.length; i < len; i ++) {
		var location = {lat: placeToShow[i].lat, lng: placeToShow[i].lng};
		var marker = new google.maps.Marker({
				position: location,
				map: this.map,
				icon: 'img/map-pin-01.png'
			});

		this.markers.push(marker);

		//render in the map
		this.markers[i].setMap(this.map);

		// add event listener for click event to the newly created marker
		marker.addListener('click', this.activateMarker(marker, context, infowindow, i));
  	}
};

// Set all marker icons back to default icons.
ViewModel.prototype.deactivateAllMarkers = function() {
	var markers = this.markers;
	for (var i = 0; i < markers.length; i ++) {
		markers[i].setIcon('img/map-pin-01.png');
	}
};

// Set the target marker to change icon and open infowindow
// Call from user click on the menu list or click on the marker
ViewModel.prototype.activateMarker = function(marker, context, infowindow, index) {
	return function() {

		// check if have an index. If have an index mean request come from click on the marker event
		if (!isNaN(index)) {
			var place = context.filteredItems()[index];
			context.updateContent(place);
			context.instagramImg(place.lat, place.lng);
		}
		// closed opened infowindow
		infowindow.close();

		// deactivate all markers
		context.deactivateAllMarkers();

		// Open targeted infowindow and change its icon.
		infowindow.open(context.map, marker);
		marker.setIcon('img/map-pin-02.png');
	};
};

// Change the content of infowindow
ViewModel.prototype.updateContent = function(place){
	var html = '<div class="info-content">' +
		'<h3>' + place.name + '</h3>' +
		'<img src="' + place.imgSrc + '">' +
		'<em>' + place.imgAttribute + '</em>' +
		'<p>' + place.description + '</p>' + '</div>';

	this.infowindow.setContent(html);
};

// Method for instagram API call
ViewModel.prototype.instagramImg = function(lat, lng) {

	// Prepare variable
	var igLat = lat,
		igLng = lng,
		locationURLList = [],
		imageObjList = [],
		imageList = [],
		infoBox = $('#ig-info'),
		imgDiv = $('.ig-div');

	// Remove old image and tell the user we're loading images.
	imgDiv.remove();
 	infoBox.show().removeClass('bg-danger').addClass('bg-info').text("Loading...");

 	// Make AJAX call
 	// The first call will get an array of location ID. We have to use those ID to make url for call again to get real image objects.
	$.ajax({
	    type: 'GET',
	    dataType: 'jsonp',
	    cache: true,
	    url: 'https://api.instagram.com/v1/locations/search?lat=' + igLat.toString() + '&lng=' + igLng.toString() + '&distance=100&access_token=35376971.52c688d.7841812059474470834c3b5dbbd5bfa8'
	}).done(function(data){

		// If request done, continue the next process
		// loop through data from instagram and make URL for second call.
	    for (var i = 0; i < data.data.length; i++) {
	    	// Create target URL from location ID and push to the URL list array
	        var targetURL = 'https://api.instagram.com/v1/locations/' + data.data[i].id + '/media/recent?access_token=35376971.52c688d.7841812059474470834c3b5dbbd5bfa8';
	        locationURLList.push(targetURL);
	    }

	    // Just 10 location URL is enough. When make a request to each URL, will get a lot of images.
	    locationURLList = locationURLList.slice(0, 10);

		// Make an AJAX call with each URL in array.
		$.when.apply($, locationURLList.map(function(url) {
		    return $.ajax({
	            type: "GET",
	            dataType: "jsonp",
	            cache: true,
	            url: url
	        });
		})).done(function() {

			// If got all data from each URL then hide the info box.
			infoBox.hide();

			// Loop through returned data and make an array of image objects.
		    for (var i = 0; i < arguments.length; i ++) {
		        imageObjList.push.apply(imageObjList, arguments[i][0].data);
		    }

		    // We want only first 10 images to display.
		    imageObjList = imageObjList.slice(0, 10);

		    // Append images to the page
		    for (var j = 0; j < imageObjList.length; j ++) {
		    	$('#ig').append('<div class="ig-div"><a href="' + imageObjList[j].link + '"><img src="' + imageObjList[j].images.low_resolution.url + '" /></a></div>');
		    }

		});

		// Do not display error message
		clearTimeout(instagramRequestTimeout);
	});

	// But if there're any problem in the AJAX call process, tell the user.
	var instagramRequestTimeout = setTimeout(function(){
	    infoBox.removeClass('bg-info').addClass('bg-danger').text("Fail to get instagram resources");
	}, 8000);
};

// Initialize Knockout View Model
ko.applyBindings(new ViewModel());

})();
