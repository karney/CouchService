

$('#tabstrip-home').ready(function (e) {
 
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