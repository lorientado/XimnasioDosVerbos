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
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("tituloActividad")[0].childNodes[0].nodeValue;orden_preguntas=xmlDoc.getElementsByTagName("orden_preguntas")[0].childNodes[0].nodeValue;numPreguntasTotal=xmlDoc.getElementsByTagName("numero_preguntas_totales")[0].childNodes[0].nodeValue;numPreguntasTotal=parseInt(numPreguntasTotal);numPreguntas=xmlDoc.getElementsByTagName("numero_preguntas_visibles")[0].childNodes[0].nodeValue;numPreguntas=parseInt(numPreguntas);preguntas=xmlDoc.getElementsByTagName("pregunta");aPreguntas=new Array();aRespuestas=new Array();var aceptar=0;var posicion=0;var colocadas=[];for(m=0;m<numPreguntasTotal;m++)
{if(orden_preguntas=="ALEATORIO")
{aceptar=0;while(aceptar==0)
{posicion=Math.floor((Math.random()*1000));if(posicion<numPreguntasTotal)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas.push(posicion);i=posicion;}
else
{i=m;}
var enunciadoP=preguntas[i].getElementsByTagName("enunciado")[0];var aPreg=new Array();aPreg["tipo"]=preguntas[i].attributes.getNamedItem("tipo").value;aPreg["obligatoria"]=preguntas[i].attributes.getNamedItem("obligatoria").value;aPreg["pregunta"]=enunciadoP.childNodes[0].nodeValue;aPreg["tipoE"]=enunciadoP.attributes.getNamedItem("tipo").value;aPreg["video"]=enunciadoP.attributes.getNamedItem("video").value;aPreg["videoT"]=enunciadoP.attributes.getNamedItem("videoStartTime").value;aPreg["audio"]=enunciadoP.attributes.getNamedItem("audio").value;if(enunciadoP.attributes.getNamedItem("image")!=undefined)aPreg["imagen"]=enunciadoP.attributes.getNamedItem("image").value;else aPreg["imagen"]="";aPreguntas[m]=aPreg;var respuestas=preguntas[i].getElementsByTagName("opciones")[0];var opciones=respuestas.getElementsByTagName("opcion");var aResp=new Array();for(j=0;j<opciones.length;j++)
{var aRespI=new Array();aRespI["respuesta"]=opciones[j].childNodes[0].nodeValue;aRespI["correcta"]=opciones[j].attributes.getNamedItem("resp").value;if(opciones[j].attributes.getNamedItem("image")!=undefined)aRespI["imagen"]=opciones[j].attributes.getNamedItem("image").value;else aRespI["imagen"]="";aResp[j]=aRespI;}
aRespuestas[m]=aResp;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtPistaAudio="Pista de audio";txtPistaVideo="Pista de video";}
function crearPrint()
{try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+":");$("#nombreAutor").html(autor);for(i=0;i<numPreguntas;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;var divPregunta=$("<div>",{id:"pregunta"+ix,"class":"preguntas"});$('#lienzo').append(divPregunta);var divEnunciadoPregunta=$("<div>",{id:"enPregunta"+ix,"class":"enPreguntas"});$("#pregunta"+ix).append(divEnunciadoPregunta);var divImagenEnunciado=$("<div>",{id:"imPregunta"+ix,"class":"imPreguntas"});$("#pregunta"+ix).append(divImagenEnunciado);var divInfo=$("<div>",{id:"info"+ix,"class":"infos"});$("#pregunta"+ix).append(divInfo);var divRespuestas=$("<div>",{id:"respuestas"+ix,"class":"respuestas"});$("#pregunta"+ix).append(divRespuestas);}
cargarElementosPrint();}
function cargarElementosPrint()
{for(k=0;k<numPreguntas;k++)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else var kx=k;if(aPreguntas[k]["imagen"]=="")
{$("#imPregunta"+kx).hide();}
else
{var rutaImagen=rutaRecursos+aPreguntas[k]["imagen"];var imgAmplia="<img id='pistaImagen' src='"+rutaImagen+"'>";$("#imPregunta"+kx).html(imgAmplia);}
if(aPreguntas[k]["tipoE"]=="texto")
{$("#enPregunta"+kx).html("<span class='numPreguntas'>"+(k+1)+". </span>"+aPreguntas[k]["pregunta"]);}
if(aPreguntas[k]["tipoE"]=="video")
{var cadena="<span class='numPreguntas'>"+(k+1)+". </span>"+"<span class='pistaPrint'>["+txtPistaVideo+"] </span>";cadena+="  "+aPreguntas[k]["pregunta"];$("#enPregunta"+kx).html(cadena);}
if(aPreguntas[k]["tipoE"]=="ambos")
{var cadena="<span class='numPreguntas'>"+(k+1)+". </span>"+"<span class='pistaPrint'>["+txtPistaAudio+"] </span>";cadena+="  "+aPreguntas[k]["pregunta"];$("#enPregunta"+kx).html(cadena);}
cargarRespuestasPrint(k,aPreguntas[k]["tipo"]);}}
function cargarRespuestasPrint(k,tipo)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else var kx=k;if(tipo=="unica")
{for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;var divRespuesta=$("<div>",{id:"respuesta"+kx+"_"+mx,"class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);var rutaImagen=rutaRecursos+aRespuestas[k][m]["imagen"];var cadena="<input type='radio' id='resp"+kx+"_"+mx+"' name='respuesta"+kx+"'> ";if(aRespuestas[k][m]["imagen"]!="")cadena+="<img src='"+rutaImagen+"' class='imgRespuesta'> ";cadena+=aRespuestas[k][m]["respuesta"];$("#respuesta"+kx+"_"+mx).html($("#respuesta"+kx+"_"+mx).html()+cadena);}}
if(tipo=="multiple")
{var cadena="";for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;var divRespuesta=$("<div>",{id:"respuesta"+kx+"_"+mx,"class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);var rutaImagen=rutaRecursos+aRespuestas[k][m]["imagen"];var cadena="<input type='checkbox' id='resp"+kx+"_"+mx+"' name='respuesta"+kx+"_"+mx+"'> ";if(aRespuestas[k][m]["imagen"]!="")cadena+="<img src='"+rutaImagen+"' class='imgRespuesta'> ";cadena+=aRespuestas[k][m]["respuesta"];$("#respuesta"+kx+"_"+mx).html($("#respuesta"+kx+"_"+mx).html()+cadena);}}
if(tipo=="escrita")
{$("#respuestas"+kx).html("<input id='resp"+kx+"_00' type='text' class='inputs'>");}
if(tipo=="escrita amplia")
{$("#respuestas"+kx).html("<textarea id='resp"+kx+"_00' class='inputs' rows='16' cols='40'></textarea>");}}