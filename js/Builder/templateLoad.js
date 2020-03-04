async function obtenerTemplate(idwf,idcamp){

  if( idwf !="" && idcamp !="" ){

    let layout = null;

          let lay = await $.ajax({
                     type: "POST",
                     url: "php/getTheme.php",
                     data: {idwebflow: idwf, idcampaing : idcamp},
                     success: function(response, status, request)
                     {

                      if(response){

                         var Jsonprocessed = JSON.parse(response);

                         Jsonprocessed.estructura = JSON.parse(Jsonprocessed.estructura);

                         layout = Jsonprocessed;

                   }

                }

           });
        return layout;

  }else{ console.log("Alerta: id de weblow o id de campaña o id de clave esta vacio.");}

}

function cargarLayoutItems(estructura){

    let layoutitems = [];

      for (var key in estructura) {
        
        for(var subkey in  estructura[key]){

          let layoutitem = estructura[key][subkey];

            if(layoutitem.layoutype == "title"){

              layoutitems.push( cargarTitle(layoutitem) );
            }
            else if(layoutitem.layoutype == "input"){

              layoutitems.push( cargarInput(layoutitem) );

            }
            else if(layoutitem.layoutype == "tipology"){

              layoutitems.push( cargarTipology(layoutitem) );

            }
            else if(layoutitem.layoutype == "management" || 
                    layoutitem.layoutype == "debt"       ||
                    layoutitem.layoutype == "telephone"  ||
                    layoutitem.layoutype == "address"    || 
                    layoutitem.layoutype == "datatable"){

              layoutitems.push( cargarDatatable(layoutitem) );

            }
            else if(layoutitem.layoutype == "promise" ){

              layoutitems.push( cargarPromesa(layoutitem) );

            }

           else if(layoutitem.layoutype == "actioncall"  ){

              layoutitems.push( cargarCallAction(layoutitem) );

            }


          console.log(estructura[key][subkey]);

      }

    }

     $('.box , .subitem')
     .resizable({containment: 'parent', handles: "se", create: setContainerResizer, stop:resizeStop})
     .draggable({containment: 'parent', stop:dragStop});

    return layoutitems;
}


function cargarCallAction(layoutitem){

    $( "#playfield" ).append( ""+ 
            "<div id='"+layoutitem.draggableid+"' class='box draggable' style='z-index: 2; background-color: #47bdff;height: "+layoutitem.height+"; z-index: 1; top:"+layoutitem.top+"; left:"+layoutitem.left+"; width: "+layoutitem.width+";'>"+
            "</div>");

    for(let i=0; i < layoutitem.items.length; i++){

      let inputSelected = "";

           if(layoutitem.items[i].uitype=="select"){ inputSelected="<div class='input-group-prepend'>" +"<span class='input-group-text nobordeRadius'>"+layoutitem.items[i].title+"</span>" +"<select class='custom-select' style='height:auto;'>"+"<option value='-1' selected>Selecciona una opcion...</option>"+"</select>"+"<div>";}
      else if(layoutitem.items[i].uitype=="textarea"){ inputSelected="<div class='input-group-prepend'>" +"<span class='input-group-text nobordeRadius'>"+layoutitem.items[i].title+"</span>" +"<textarea class='form-control' style='height:unset!important;width:auto!important;' aria-label='With textarea'></textarea>"+"<div>";}
      else if(layoutitem.items[i].uitype=="input"){ inputSelected= "<div class='input-group-prepend'>" +"<span class='input-group-text nobordeRadius'>"+layoutitem.items[i].title+"</span>" +"<input type='text' style='height:auto;' class='form-control nobordeRadius'>"+"<div>";}
      else if(layoutitem.items[i].uitype=="list"){ inputSelected="<div class='input-group-prepend' style='flex-direction:column;'> " +"<h2>Proceso</h2>"+"<div>"+"<ul class='list-group'>"+"<li class='hangBtn list-group-item'>COLGAR</li>"+"<li class='callBtn list-group-item'>LLAMAR</li>"+"</ul>"+"<div>"+"<div>";}

        $( "#"+layoutitem.draggableid ).append( ""+ 
              "<div id='"+layoutitem.items[i].id+"' data-subtype='"+layoutitem.items[i].type+"' data-uitype='"+layoutitem.items[i].uitype+"' class='subitem' style='width: "+layoutitem.items[i].width+"; position: absolute !important; left: "+layoutitem.items[i].left+"; top: "+layoutitem.items[i].top+"; height: "+layoutitem.items[i].height+";'>"+
                         inputSelected+                  
                "</div>");

    }

    let settings  = {}; 

      return new LayoutItem(layoutitem.draggableid, null, "actioncall", settings ,$('#'+layoutitem.draggableid)); 


}


function cargarPromesa(layoutitem){

  let selectbase = "";
  let textboxbase = "<textarea class='form-control' style='height:unset!important;width:auto!important;' aria-label='With textarea'></textarea>";
  let inputbase = " <input type='text' style='height:auto;' class='form-control nobordeRadius'>";
 
    $( "#playfield" ).append( ""+ 
            "<div id='"+layoutitem.draggableid+"' class='box draggable' style='background-color: #47bdff;height: "+layoutitem.height+"; z-index: 1; top:"+layoutitem.top+"; left:"+layoutitem.left+"; min-width: 100%; width: 100%;'>"+
            "</div>");

    for(let i=0; i < layoutitem.items.length; i++){

      let inputSelected = "";

           if(layoutitem.items[i].uitype=="select"){ 

             selectbase = "<select class='custom-select' style='height:auto;'>"+"<option value='-1' selected>Selecciona una opcion...</option>";


             if(layoutitem.items[i].settings.options.length > 0){

              let IOptions = layoutitem.items[i].settings.options;

              //se usa un for para extraer las opciones asignadas y asi cargarlas aqui en esta variable selectbase, entonces al terminar el proceso, le hacemos append al item indicado
              for(let x = 0; x<IOptions.length; x++){

                  selectbase = selectbase + "<option value='"+ IOptions[x].optionValue+"'>"+IOptions[x].optionTitle+"</option>" ;
              }

          }

            selectbase = selectbase +"</select>";

            inputSelected=selectbase;


           }
      else if(layoutitem.items[i].uitype=="textarea"){ inputSelected=textboxbase;}
      else if(layoutitem.items[i].uitype=="input"){ inputSelected=inputbase;}

        $( "#"+layoutitem.draggableid ).append( ""+ 
              "<div id='"+layoutitem.items[i].id+"' data-subtype='"+layoutitem.items[i].type+"' data-uitype='"+layoutitem.items[i].uitype+"' class='subitem' style='width: "+layoutitem.items[i].width+"; position: absolute !important; left: "+layoutitem.items[i].left+"; top: "+layoutitem.items[i].top+"; height: "+layoutitem.items[i].height+";'>"+
                      "<div class='input-group-prepend'>"+
                       "<span class='input-group-text'>"+layoutitem.items[i].title+"</span>"+
                         inputSelected+
                      "</div>"+                      
                "</div>");

    }

    let settings  = {}; 

      return new LayoutItem(layoutitem.draggableid, null, "promise", settings ,$('#'+layoutitem.draggableid)); 


}



function cargarDatatable(layoutitem){

      $( "#playfield" ).append( ""+ 
              "<div id='"+layoutitem.draggableid+"' data-tablrogid='"+layoutitem.localid+"' class='box' style='z-index: 0; top:"+layoutitem.top+"; left:"+layoutitem.left+";min-width : 100%; width: 100%; padding: 1%; line-height: normal!important;'>"+
                  "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='"+layoutitem.draggableid+"'>Close</a>"+
                     "<table id='"+layoutitem.localid+"' class='display' style='width:100%; background-color: #e6e6e6;'>"+
                      "</table>"+
              "</div>");

      let titles = [];

      $(layoutitem.settings.Colname).each(function(){

            var coltitleval= this;
       

            var obj = {}; 
             obj.title = "<i id='setcoltoleft' data-tablrogid='"+layoutitem.localid+"' class='fas fa-arrow-circle-left' style='padding-right:2%;'></i><span data-originaltitle='"+coltitleval.original+"'>"+coltitleval.title+"</span><i class='fas fa-arrow-circle-right' data-tablrogid='"+layoutitem.localid+"' id='setcoltoright' style='padding-left:2%;'></i>";
            

             obj.data=null;

             var deleteiconcustom = $.parseHTML( deleteiconHTML );
             $(deleteiconcustom).attr('data-tablrogid', layoutitem.localid);
             obj.defaultContent = $( deleteiconcustom )[0].outerHTML ;
             titles.push(obj);

            
        });

     var dt = $('#'+ layoutitem.localid).DataTable( {
                 "dom": 'ftpr',
                 "ordering": false,
                 "retrieve": true,
                 "responsive": true,
                  "columns": titles,

                  } );

      let settings = {Colname: ""};

      return new LayoutItem(layoutitem.draggableid, layoutitem.localid, layoutitem.layoutype, settings , dt);

}

function cargarTipology(layoutitem){

  let selectbase = "<select class='custom-select' style='height:auto;'>"+"<option value='-1' selected>Selecciona una opcion...</option>"+"</select>";
  let textboxbase = "<textarea class='form-control' style='height:unset!important;width:auto!important;' aria-label='With textarea'></textarea>";

    $( "#playfield" ).append( ""+ 
            "<div id='"+layoutitem.draggableid+"' class='box draggable' style='background-color: #47bdff;height: "+layoutitem.height+"; z-index: 1; top:"+layoutitem.top+"; left:"+layoutitem.left+"; min-width: 100%; width: 100%;'>"+
            "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='"+layoutitem.draggableid+"'>Close</a>"+
            "</div>");

    for(let i=0; i < layoutitem.items.length; i++){

      let inputSelected = "";

           if(layoutitem.items[i].uitype=="select"){ inputSelected=selectbase;}
      else if(layoutitem.items[i].uitype=="textarea"){ inputSelected=textboxbase;}

        $( "#"+layoutitem.draggableid ).append( ""+ 
              "<div id='"+layoutitem.items[i].id+"' data-subtype='"+layoutitem.items[i].type+"' data-uitype='"+layoutitem.items[i].uitype+"' class='subitem' style='width: "+layoutitem.items[i].width+"; position: absolute !important; left: "+layoutitem.items[i].left+"; top: "+layoutitem.items[i].top+"; height: "+layoutitem.items[i].height+";'>"+
                    "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                      "<div class='input-group-prepend'>"+
                       "<span class='input-group-text'>"+layoutitem.items[i].title+"</span>"+
                      "</div>"+
                        inputSelected+
                    "</div>"+
                "</div>");

    }

    let settings  = {}; 

    return new LayoutItem(layoutitem.draggableid, null, "tipology", settings ,$('#'+layoutitem.draggableid)); 


}

function cargarInput(layoutitem){

       $( "#playfield" ).append( ""+ 
        "<div id='"+layoutitem.draggableid+"' class='box draggable' style='z-index: 1; top:"+layoutitem.top+"; left:"+layoutitem.left+"; width:"+layoutitem.width+"; height: "+layoutitem.height+"';>"+        
                "<div class='input-group' style='height:100%!important;justify-content:center;'>"+
                  "<div class='input-group-prepend'>"+
                     "<span contenteditable='true' oncontextmenu='return false;' class='input-group-text' id='"+layoutitem.localid+"'>"+layoutitem.settings.Colname+"</span>"+

                   "<span class='input-group-text' ><i  class='deleteelement fa fa-trash-alt' data-tippy-arrow='true' data-tippy-placement='right' onclick='deleteElement(this)' data-drag-id='"+layoutitem.draggableid+"'></span></i>"+
                  "</div>"+
                  "<input style='height:auto!important;width:auto!important;' data-originalTitle='"+layoutitem.settings.originaltitle+"' placeholder='"+layoutitem.settings.originaltitle+"' type='text' class='form-control'>"+
                "</div>"+
        "</div>");  

           return new LayoutItem(layoutitem.draggableid,layoutitem.localid,"input", layoutitem.settings ,$('#'+layoutitem.draggableid));

}


function cargarTitle(layoutitem){  


          $( "#playfield" ).append( ""+ 
            "<div id='"+layoutitem.draggableid+"' class='box draggable' style='z-index: 1; top:"+layoutitem.top+"; left:"+layoutitem.left+"; width:"+layoutitem.width+"; height: "+layoutitem.height+"';>"+      
            "<a class='deleteelement deleteicon close-modal' onclick='deleteElement(this)' data-drag-id='"+layoutitem.draggableid+"'>Close</a>"+   
            "<"+layoutitem.settings.titletype+" id='"+layoutitem.localid+"' contenteditable='true' oncontextmenu='return false;' style='width: fit-content;height: fit-content;'>"+layoutitem.settings.title+"</"+layoutitem.settings.titletype+">"+
            "</div>"); 

          let settings = {};

          return new LayoutItem(layoutitem.draggableid, layoutitem.localid, "title", settings, $('#' + layoutitem.draggableid));

}



function cargarSubItems(){



}