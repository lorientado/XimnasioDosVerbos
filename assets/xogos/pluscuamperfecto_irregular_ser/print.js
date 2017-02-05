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
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;numElementosMax=0;grupos=new Array();var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{var datosPareja=new Array();datosPareja["id"]=parejas[i].attributes.getNamedItem("id").value;datosPareja["nombre"]=parejas[i].attributes.getNamedItem("nombre").value;datosPareja["num_elementos"]=parejas[i].attributes.getNamedItem("numero_elementos").value;if(datosPareja["num_elementos"]>numElementosMax)numElementosMax=datosPareja["num_elementos"];datosPareja["texto"]=parejas[i].attributes.getNamedItem("texto").value;datosPareja["respuesta"]=parejas[i].attributes.getNamedItem("respuesta").value;grupos[i]=datosPareja;}
elementos=new Array();var datos=xmlDoc.getElementsByTagName("elemento");for(i=0;i<datos.length;i++)
{var datosElemento=new Array();datosElemento["id"]=datos[i].attributes.getNamedItem("id").value;datosElemento["contenido"]=datos[i].childNodes[0].nodeValue;elementos[i]=datosElemento;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtGrupo=idioma.getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;txtHuecos=idioma.getElementsByTagName("txtHuecos")[0].childNodes[0].nodeValue;txtNormal=idioma.getElementsByTagName("txtNormal")[0].childNodes[0].nodeValue;txtElementos=idioma.getElementsByTagName("txtElementos")[0].childNodes[0].nodeValue;txtTradicional=idioma.getElementsByTagName("txtTradicional")[0].childNodes[0].nodeValue;$("#normal").click(function(){$("label").removeClass("modoSel");$("#normalL").addClass("modoSel");modo="normal";actualizaPrint();});$("#huecos").click(function(){$("label").removeClass("modoSel");$("#huecosL").addClass("modoSel");modo="huecos";actualizaPrint();});$("#tradicional").click(function(){$("label").removeClass("modoSel");$("#tradicionalL").addClass("modoSel");modo="tradicional";actualizaPrint();});$("#normalLS").text(txtNormal);$("#huecosLS").text(txtHuecos);$("#tradicionalLS").text(txtTradicional);$("#normalL").addClass("modoSel");$("#normal").attr("checked","true");}
function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+" : ");$("#nombreAutor").html(autor);var divElementos=$("<div>",{id:"divElementos"});$('#lienzo').append(divElementos);var divGrupos=$("<div>",{id:"divGrupos"});$('#lienzo').append(divGrupos);var divLeyenda=$("<div>",{id:"divLeyenda"});$('#lienzo').append(divLeyenda);var divTradicional=$("<div>",{id:"divTradicional"});$('#lienzo').append(divTradicional);cargarPrint();}
function cargarPrint()
{var colocadas=[];var aceptar=0;for(i=0;i<elementos.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;while(aceptar==0)
{posicion=Math.floor((Math.random()*100));if(posicion<elementos.length)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas[i]=posicion;aceptar=0;if(posicion<10)var posicionx="0"+posicion;else var posicionx=posicion;var divElemento=$("<div>",{id:"elemento"+posicionx,"class":"elementos"});$('#divElementos').append(divElemento);$("#elemento"+posicionx).html(elementos[posicion]["contenido"]);}
crearGrupos();crearLeyenda();crearTradicional();}
function crearGrupos()
{var cadena="";for(i=0;i<grupos.length;i++)
{idGrupo=grupos[i]["id"];cadena+="<div id='grupo"+i+"' class='grupos'>";if(grupos[i]["texto"]=="")var titulo=txtGrupo+" "+(i+1);else var titulo=grupos[i]["texto"];cadena+="<div id='tituloGrupo"+i+"' class='tituloGrupos'>"+titulo+"</div>";for(j=0;j<elementos.length;j++)
{if(elementos[j]["id"]==idGrupo)
{cadena+="<div id='elementoVacio"+i+"_"+j+"' class='elementosVacios'></div>";}}
cadena+="</div>";}
$("#divGrupos").html(cadena);}
function crearLeyenda()
{var cadena="";cadena+="<ol>";for(i=0;i<grupos.length;i++)
{idGrupo=grupos[i]["id"];if(grupos[i]["texto"]=="")var titulo=txtGrupo+" "+(i+1);else var titulo=grupos[i]["texto"];cadena+="<li>"+titulo+" <span class='numLeyenda'>("+txtElementos+": "+grupos[i]["num_elementos"]+")</span></li>";}
cadena+="</ol>";$("#divLeyenda").html(cadena).hide();}
function crearTradicional()
{var cadena="";var arrayGeneral=new Array();for(i=0;i<grupos.length;i++)
{idGrupo=grupos[i]["id"];var arrayGrupo=new Array();var cont=0;for(j=0;j<elementos.length;j++)
{if(elementos[j]["id"]==grupos[i]["id"])
{arrayGrupo[cont]=elementos[j]["contenido"];cont++;}}
arrayGeneral[i]=arrayGrupo;}
for(k=0;k<numElementosMax;k++)
{var arrayHorizontal=new Array();for(i=0;i<grupos.length;i++)
{arrayHorizontal[i]=arrayGeneral[i][k];}
arrayHorizontal=arrayHorizontal.sort(function(){return Math.random()-0.5});var cadena="<ul>";for(m=0;m<arrayHorizontal.length;m++)
{if(arrayHorizontal[m]!=undefined)cadena+="<li>"+arrayHorizontal[m]+"</li>";}
cadena+="</ul>";$("#divTradicional").append(cadena).hide();}}
function actualizaPrint()
{if(modo=="normal")
{$("#divElementos").show();$("#divGrupos").show();$("#divLeyenda").hide();$("#divTradicional").hide();$("#lienzo").removeClass("huecos");}
else if(modo=="huecos")
{$("#divElementos").show();$("#divGrupos").hide();$("#divLeyenda").show();$("#divTradicional").hide();$("#lienzo").addClass("huecos");}
else if(modo=="tradicional")
{$("#divElementos").hide();$("#divGrupos").hide();$("#divLeyenda").hide();$("#divTradicional").show();}}