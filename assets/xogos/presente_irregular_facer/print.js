window.onload=function(){rutaRecursos="/actividades/"+$(document).data("idActividad")+"/";rutaRecursos="";cargarDatosPrint();}
function cargarDatosPrint()
{var rutaXml=rutaRecursos+"actividad.xml";xmlDoc=cargarXMLDoc(rutaXml);if((xmlDoc!=null)&&(xmlDoc!=undefined))
{try{extraerDatosPrint();}
catch(e){errorXML();}
crearPrint();}
else
{errorXML();}}
function errorXML()
{$.get("/avisoEstructuraXml.php");$("#lienzo").html("<div id='errorXML'>"+$(document).data("loadingXmlError")+"</div>");}
function cargarXMLDoc(archivoXML){return jQuery.parseXML(DatosActividad);}
function extraerDatosPrint()
{try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;grupos=new Array();var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{var datosPareja=new Array();datosPareja["id"]=parejas[i].attributes.getNamedItem("id").value;elementoA=parejas[i].getElementsByTagName("elementoA")[0];elementoB=parejas[i].getElementsByTagName("elementoB")[0];datosPareja["elementoA_Tipo"]=elementoA.attributes.getNamedItem("tipo").value;datosPareja["elementoA_Valor"]=elementoA.childNodes[0].nodeValue;datosPareja["elementoB_Tipo"]=elementoB.attributes.getNamedItem("tipo").value;datosPareja["elementoB_Valor"]=elementoB.childNodes[0].nodeValue;grupos[i]=datosPareja;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtGrupo=idioma.getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;txtHuecos=idioma.getElementsByTagName("txtHuecos")[0].childNodes[0].nodeValue;txtNormal=idioma.getElementsByTagName("txtNormal")[0].childNodes[0].nodeValue;txtElementos=idioma.getElementsByTagName("txtElementos")[0].childNodes[0].nodeValue;txtTradicional=idioma.getElementsByTagName("txtTradicional")[0].childNodes[0].nodeValue;}
function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+" : ");$("#nombreAutor").html(autor);var divElementos=$("<div>",{id:"contentElementos"});$('#lienzo').append(divElementos);var divElementosA=$("<div>",{id:"divElementosA"});$('#contentElementos').append(divElementosA);var divElementosB=$("<div>",{id:"divElementosB"});$('#contentElementos').append(divElementosB);cargarPrint();}
function cargarPrint()
{var mostrados=[];var repetido=0;for(i=0;i<grupos.length;i++){repetido=1;aleatorio=0;while(aleatorio>=grupos.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var divElementoA=$("<div>",{id:"elementoA"+i,"class":"elementos elementosA"});$('#divElementosA').append(divElementoA);if(grupos[aleatorio]["elementoA_Tipo"]=="TEXTO"){$("#elementoA"+i).html("<div class='txtCard'>"+grupos[aleatorio]["elementoA_Valor"]+"</div>");}
else if(grupos[aleatorio]["elementoA_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[aleatorio]["elementoA_Valor"];$("#elementoA"+i).html("<div class='imageCard'><img src='"+src+"'></div>");}
else if(grupos[aleatorio]["elementoA_Tipo"]=="AUDIO"){$("#elementoA"+i).html("<button class='soundCard'></button>");}}
mostrados=[];repetido=0;for(i=0;i<grupos.length;i++){repetido=1;aleatorio=0;while(aleatorio>=grupos.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var divElementoB=$("<div>",{id:"elementoB"+i,"class":"elementos elementosB"});$('#divElementosB').append(divElementoB);if(grupos[aleatorio]["elementoB_Tipo"]=="TEXTO"){$("#elementoB"+i).html("<div class='txtCard'>"+grupos[aleatorio]["elementoB_Valor"]+"</div>");}
else if(grupos[aleatorio]["elementoB_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[aleatorio]["elementoB_Valor"];$("#elementoB"+i).html("<div class='imageCard'><img src='"+src+"'></div>");}
else if(grupos[aleatorio]["elementoB_Tipo"]=="AUDIO"){$("#elementoB"+i).html("<button class='soundCard'></button>");}}}