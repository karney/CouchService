function SyncExpensesNow() {
    console.log('sadadas');
 
    
    $.ajax({
            url: url + "GetData",
            type: 'GET',
            dataType: 'text',
            success : function(text){processExpensesData(text);},
            error:processError
    });
    
} 


function SyncHouses() {
    console.log('Sync houses');
    
    $.ajax({
            url: url + "GetHouses",
            type: 'GET',
            dataType: 'text',
            success : function(text){processHousesData(text);},
            error:processError
    });
    
} 

function SaveHouses(curhouse) {
    console.log('save houses');
 
    
    $.ajax({
            url: url + "SetHouses?ID="+curhouse.ID+"&a="+curhouse.Address+"&r="+curhouse.Rating+"&u"+curhouse.UserMarks+"&c="+curhouse.Comments,
            type: 'GET',
            dataType: 'text',
            success : function(text){processHousesData(text);},
            error:processError
    });
    
} 

function SaveEvents(curEvent) {
    console.log('sadadas');
 
    
    $.ajax({
            url: url + "SetEven?n"+curEvent.Name+"&c="+curEvent.Country+"&ci="+curEvent.City+"&d="+curEvent.Description,
            type: 'GET',
            dataType: 'text',
            success : function(text){processExpensesData(text);},
            error:processError
    });
    
} 


function processError(jqXHR, textStatus, errorThrown) {
    alert("Sync Error: " + textStatus + " " + jqXHR.status + ": " + GetErrorMessageByCode(jqXHR.status));
    setLoader("Loading...", false);
}

function processSuccess(jqXHR, textStatus, data) {
    setLoader("Loading...", false);
}



function processHousesData(data) {
    try{
        var dd = data.substr(68);
        var dod=dd.substring(0,dd.indexOf("</string>"));
        var jsData = $.parseJSON(dod);
        
        allHouses=jsData;
		console.log(allHouses);
        countHouses = allHouses.length;
        var startline1=$("#totalhousesss").html()
        $("#totalhousesss").html(startline1+"  "+countHouses);
		$("#totalhousesss1").html(countHouses);
		console.log($("#totalhousesss").html());
    //    alert('Houses downloaded complete');
    }
    catch(e){
         console.log(e.message);
    }
}


function processExpensesData(data) {
    try{
        var dd = data.substr(68);
        var dod=dd.substring(0,dd.indexOf("</string>"));
        var jsData = $.parseJSON(dod);
        
        allEvents=jsData;
console.log(allEvents);
        countEvents = allEvents.length;
        var startline=$("#totalEventsss").html()
        $("#totalEventsss").html(startline+"  "+countEvents);
        $("#totalEventsss1").html(countEvents);
        
		console.log($("#totalEventsss").html());
    //    alert('Events downloaded complete');
    }
    catch(e){
         console.log(e.message);
    }
}