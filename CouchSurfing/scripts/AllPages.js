

$('#tabstrip-home').ready(function (e) {
 
     longitudeMY=49.835228;
        	latitudeMY=24.00827;
    $('#downloadButton').click(function (e) {
        SyncExpensesNow();
 	   SyncHouses();   
    });
    
    $('#butonevents').click(function (e) {
        if(isHousesViewLoaded!==true){
            createListHouses();
        }
        if(isEventViewLoaded!==true){
            createListEvents();
        }
    });
      $('#buttonHouses').click(function (e) {
       
        if(isHousesViewLoaded!==true){
            createListHouses();
        }
        if(isEventViewLoaded!==true){
            createListEvents();
        }
    });
});



function createListEvents(){
    $('#expensesShownList').empty();
    
    
    $.each(allEvents, function (ind, valu) {
        
			$('#expensesShownList').append("<li data-theme='a' data-role='list-divider'><a name='"+valu.Name+"' data-transition='slide' href='#page-eventdetails' onclick='gotoEvent(name)'>"+valu.Name+"</a></li>");
			//console.log(valu.Name);
		});
    isEventViewLoaded=true;
}



function createListHouses(){
    
    $('#houseList').empty();
    $.each(allHouses, function (ind, valu) {
                      $('#houseList').append("<li data-theme='a' data-role='list-divider'><a name='"+valu.ID+"' data-transition='slide' href='#page-housedetails' onclick='gotoHouse(name)'>"+valu.ID+"<br/>"+valu.Address+"</a></li>");
						//console.log(valu.ID);
                    }); 
    isHousesViewLoaded=true;
}
 function initializemap() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }

function changeviewtomap(){
    		try{
            
            var curJs = jlinq.from(allEvents).equals("Name", currentEventMY).first();
                if(curJs){
                longitudeMY=curJs.Longitude;
                latitudeMY=curJs.Latitude;
                }
        }catch(e){
            longitudeMY=49.835228;
        	latitudeMY=24.00827;
    	}
     longitudeMY=49.835228;
        	latitudeMY=24.00827;
    console.log(longitudeMY);
    console.log(latitudeMY);
    
}

$(document).on('pageshow', '#tabstrip-location', function() 
{ 
    
    
      var minZoomLevel = 12;

   var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(38.50, -90.50),
      mapTypeId: google.maps.MapTypeId.ROADMAP
   });
    
    
    
    
  /*  
   // debugger;
        app.locationService.initLocation();
        app.locationService.show();
        //app.locationService.hide();
    
  		ko.applyBindings(app.locationService.viewModel, document.getElementById("tabstrip-location"));
    
    console.log(app.locationService.viewModel);
      // debugger;
   // alert('uhuu');
    //$('#map-canvas').*/
});

