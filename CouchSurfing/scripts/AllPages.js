

$('#tabstrip-home').ready(function (e) {
 
     longitudeMY=49.835228;
        	latitudeMY=24.00827;
    $('#downloadButton').click(function (e) {
        SyncExpensesNow();
 	   SyncHouses();   
    });
    
    $('#butonevents').click(function (e) {

        createListEvents();
        createListHouses();
    });
      $('#buttonHouses').click(function (e) {
       
        createListEvents();
        createListHouses();
    });
});



function createListEvents(){
    $('#expensesShownList').empty();
    $.each(allEvents, function (ind, valu) {
                      
                        var spacer = document.createElement("li");
                            spacer.setAttribute('data-role', 'list-divider');
                            $('#listik').append(spacer);
                        
                        $.tmpl($('#Template-expenses'), valu).appendTo('#expensesShownList');
                 
                    });        
}



function createListHouses(){
    
    $('#houseList').empty();
    $.each(allHouses, function (ind, valu) {
                      
                        var spacer = document.createElement("li");
                            spacer.setAttribute('data-role', 'list-divider');
                            $('#listik').append(spacer);
                        
                        $.tmpl($('#Template-houses'), valu).appendTo('#houseList');
                 
                    });        
}


function changeviewtomap(){
		try{
           // debugger;
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