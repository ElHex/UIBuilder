

//FUNCIONES PARA AGREGAR AL DOM-------------------------------

function addInput(index,containerID, title, top, left){

     $( "#"+containerID ).append( ""+ 
        "<div id='draggable"+index+"' class='box draggable' style='z-index: 1; top:"+top+"%; left:"+left+"%;'>"+        
                "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                  "<div class='input-group-prepend'>"+
                    "<span contenteditable='true' oncontextmenu='return false;' class='input-group-text' id='span"+index+"'>"+title+"</span>"+
                   "<span class='input-group-text' ><i  class='deleteelement fa fa-trash-alt' data-tippy-arrow='true' data-tippy-placement='right' onclick='deleteElement(this)' data-drag-id='draggable"+index+"'></span></i>"+
                  "</div>"+
                  "<input style='height:auto!important;width:auto!important;' data-originalTitle='"+title+"' placeholder='"+title+"' type='text' class='form-control'>"+
                "</div>"+
        "</div>");	

}

function addDtable(index,containerID,top,left,minwidth){

  $( "#"+containerID ).append( ""+ 
      "<div id='draggable"+index+"' data-tablrogid='table"+index+"' class='box  tabledroppable' style='z-index: 0; top:"+top+"%; left: "+left+"%;min-width : "+minwidth+"; width: 100%; padding: 1%; line-height: normal!important;'>"+
         "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='draggable"+index+"'>Close</a>"+
           "<table id='table"+index+"' class='display' style='width:100%; background-color: #e6e6e6;'>"+
			"</table>"+
      "</div>");	


}

function addTypology(index,containerID, top, left ){

	$( "#"+containerID ).append( ""+ 
            "<div id='draggable"+index+"' class='box draggable' style='background-color: #47bdff;height: 8%; z-index: 1; top:"+top+"%; left:"+left+"%; min-width: 100%; width: 100%;'>"+
            "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='draggable"+index+"'>Close</a>"+
            "<div id='subitem_A"+index+"' data-subtype='tipologia' data-uitype='select' class='subitem' style='width: 39.5166%; position: absolute !important; left: 0.525486%; top: 7.73994%; height: 17.6471%;'>"+
                    "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                      "<div class='input-group-prepend'>"+
                       "<span class='input-group-text'>Tipologia</span>"+
                      "</div>"+
                      "<select class='custom-select' style='height:auto;'>"+
                       "<option value='-1' selected>Selecciona una opcion...</option>"+
                      "</select>"+
                    "</div>"+
                "</div>"+ //
            "<div id='subitem_B"+index+"' data-subtype='tipologia2' data-uitype='select' class='subitem' style='width: 39.5166%; position: absolute !important; left: 0.472937%; top: 28.483%; height: 16.7183%;'>"+
                    "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                      "<div class='input-group-prepend'>"+
                       "<span class='input-group-text'>Sub-tipologia 2</span>"+
                        "<span class='input-group-text' ><i  class='deleteelement fa fa-trash-alt' data-tippy-arrow='true' data-tippy-placement='right' onclick='deleteSubElement(this)'></span></i>"+
                      "</div>"+
                      "<select class='custom-select' style='height:auto;'>"+
                       "<option value='-1' selected>Selecciona una opcion...</option>"+
                      "</select>"+
                    "</div>"+
                "</div>"+ //
                "<div id='subitem_C"+index+"' data-subtype='tipologia3' data-uitype='select' class='subitem' style='width: 39.5166%; position: absolute !important; left: 0.472937%; top: 49.226%; height: 17.6471%;'>"+
                    "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                      "<div class='input-group-prepend'>"+
                       "<span class='input-group-text' >Sub-tipologia 3</span>"+
                       "<span class='input-group-text' ><i  class='deleteelement fa fa-trash-alt' data-tippy-arrow='true' data-tippy-placement='right' onclick='deleteSubElement(this)'></span></i>"+
                      "</div>"+
                      "<select class='custom-select' style='height:auto;'>"+
                       "<option value='-1' selected>Selecciona una opcion...</option>"+

                      "</select>"+
                    "</div>"+
                "</div>"+
                 "<div id='subitem_E"+index+"' data-subtype='comentarios' data-uitype='textarea' class='subitem' style='width: 57.8035%;position: absolute !important;left: 41.4609%;top: 5.26316%;height: 86.6873%;'>"+
                    "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                      "<div class='input-group-prepend'>"+
                        "<span class='input-group-text'>Comentarios</span>"+
                       "<span class='input-group-text' ><i  class='deleteelement fa fa-trash-alt' data-tippy-arrow='true' data-tippy-placement='right' onclick='deleteSubElement(this)'></span></i>"+
                      "</div>"+
                      "<textarea class='form-control' style='height:auto!important;width:auto!important;' aria-label='With textarea'></textarea>"+
                    "</div>"+

            "</div>");


}

function addPromise(index,containerID,top,left){

	$("#"+containerID).append("" +
    "<div id='draggable" + index + "' class='box draggable' style='background-color: #47bdff;height: 50%; z-index: 1; top: "+top+"%; left:"+left+"; min-width: 100%; width: 100%; height:9.3%;'>" +

    "<div id='subitem_A" + index + "' data-subtype='promiseSelect' data-uitype='select' class='subitem' style='width: 35.7878%; position: absolute !important; left: 4.51306%; top: 23.2975%; height: 13.9785%;'>" +
    "<div class='input-group'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text'>Programar promesa</span>" +
    "</div>" +
    "<select class='custom-select' style='height:auto;'>" +
    "<option value='-1' selected>Selecciona una opcion...</option>" +
    "<option value='hide'>No  mostrar promesa</option>" +
    "<option value='show'>Mostrar promesa</option>" +
    "</select>" +
    "</div>" +
    "</div>" +

    "<div id='subitem_B" + index + "' data-subtype='promisedate' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 0%; top: 36.9176%; height: 15.7706%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text' > Fecha de promesa</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +

    "</div>" +
    "</div>" +

    "<div id='subitem_C" + index + "' data-subtype='promisehour' data-uitype='input' class='subitem'  style='width: 43.943%; position: absolute !important; left: 0%; top: 50.5376%; height: 16.8459%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text nobordeRadius'>Hora de promesa</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +


    "<div id='subitem_D" + index + "' data-subtype='promiseAmount' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 0%; top: 64.1577%; height: 17.2043%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text' >Monto de promesa</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +

    "<div id='subitem_E" + index + "' data-subtype='promisePhone' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 0%; top: 77.7778%; height: 20.4301%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text' >Telefono de promesa</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +

    "<div id='subitem_F" + index + "' data-subtype='callselect' data-uitype='select' class='subitem' style='width: 35.7878%; position: absolute !important; left: 61.0451%; top: 23.2975%; height: 13.9785%;'>" +
    "<div class='input-group'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text'>Programar llamada</span>" +
    "</div>" +
    "<select class='custom-select' style='height:auto;'>" +
    "<option value='-1' selected>Selecciona una opcion...</option>" +
    "<option value='hide'>No programar llamada</option>" +
    "<option value='show'>Programar llamada</option>" +

    "</select>" +
    "</div>" +
    "</div>" +

    "<div id='subitem_G" + index + "' data-subtype='calldate' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 55.8987%; top: 36.9176%; height: 15.7706%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text' > Fecha de programacion</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +

    "</div>" +
    "</div>" +

    "<div id='subitem_H" + index + "' data-subtype='callhour' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 55.8987%; top: 50.5376%; height: 16.8459%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text nobordeRadius'>Hora de programacion</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +


    "<div id='subitem_I" + index + "' data-subtype='callnumber' data-uitype='input' class='subitem' style='width: 43.943%; position: absolute !important; left: 55.8987%; top: 64.1577%; height: 17.2043%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text' >Telefono de programacion</span>" +
    "    <input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +

    "</div>");


}


function addCallTool(index,containerID,top,left,width,height){

    $("#"+containerID).append("" +
    "<div id='draggable" + index + "' class='box draggable' style='z-index: 2; background-color: #47bdff;height: 50%; z-index: 1; top: "+top+"%; left:"+left+"%; width: "+width+"%; height:"+height+"%;'>" +

    "<div id='subitem_A" + index + "' data-subtype='phoneSelect' data-uitype='select' class='subitem' style='width: 97.343%; position: absolute !important; left: 1.44928%; top: 7.58294%; height: 17.0616%;'>" +
    "<div class='input-group'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text'>Telefono</span>" +
    "</div>" +
    "<select class='custom-select' style='height:auto;'>" +
    "<option value='-1' selected>Selecciona una opcion...</option>" +
    "</select>" +
    "</div>" +
    "</div>" +

    
    "<div id='subitem_H" + index + "' data-subtype='phoneinput' data-uitype='input' class='subitem' style='width: 97.343%; position: absolute !important; left: 1.44928%; top: 26.0664%; height: 18.9573%;'>" +
    "<div class='input-group-prepend'>" +
    "<span class='input-group-text nobordeRadius'>Nuevo Telefono</span>" +
    "<input type='text' class='form-control nobordeRadius'>" +
    "</div>" +
    "</div>" +


    "<div id='subitem_I" + index + "' data-subtype='actionlist' data-uitype='list' class='subitem' style='width: 43.9614%; position: absolute !important; left: 30.1932%; top: 46.4455%; height: 17.0616%;'>" +
    "<div class='input-group-prepend' style='flex-direction:column;'> " +
    "<h2>Proceso</h2>"+
    "<div>"+
    "<ul class='list-group'>"+
    "<li class='hangBtn list-group-item'>COLGAR</li>"+
    "<li class='callBtn list-group-item'>LLAMAR</li>"+
    "</ul>"+
    "<div>"+

    "</div>" +
    "</div>" +

    "</div>");

}


function addTitle(index,containerID,top,left,titletag){

    $( "#"+containerID ).append( ""+ 
         "<div id='draggable"+index+"' class='box draggable' style='z-index: 1; top:"+top+"%; left:"+left+"%;'>"+     
           "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='draggable"+index+"'>Close</a>"+   
           "<"+titletag+" id='title"+index+"' contenteditable='true' oncontextmenu='return false;' style='width: fit-content;height: fit-content;'>Escriba su nuevo titulo haciendo click derecho aqui</"+titletag+">"+
          "</div>");


}

//--------------------------------------------------------

//FUNCTIONS FOR SPECIFIC TOOLTYPE

//( 1 )________________DATATABLE

function startDatatableBase(index){

	    var dt = $('#table'+index).DataTable( {
            "dom": 'ftpr',
            "ordering": false,
            "retrieve": true,
            "responsive": true,
              "columns": [
                { "title": "<span></span>",className: "" }
              ],
             "language": {
                  "emptyTable": "Mueve un item aqui para asignarlo a esta tabla."
                },

            } );

	    if(dt){
	    	return dt;
	    }

	    return null;

}

function startDt(id, titles) {

    var dt = $("#" + id).DataTable({
        "responsive": true,
        "dom": "ltip",
        "ordering": false,
        "columns": titles
    });

    if(dt){
    	return dt;
    }

    return null;

}