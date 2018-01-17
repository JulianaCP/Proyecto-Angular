var list_Bombo_1 = []; 





function fillChart(){
    //add a child to the td element in the table
    $('#' + randomPositionTeam).append( "<img class='imageTable' src='"+randomTeam.bandera+"' alt=''>" );
    $('#' + randomPositionTeam).append("<p class='textTable'>"+randomTeam.nombreEquipo+"</p>");
    changeDialogValues();

}


listFinalChart.push({'name': randomTeam.nombreEquipo,'position':randomPositionTeam});


listaSeleccionados = JSON.parse(localStorage.listTeams);


var lista = JSON.stringify(listFinalChart);
localStorage.setItem("listFinalChart",lista);