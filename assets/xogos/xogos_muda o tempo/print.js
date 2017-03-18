var limiteHuecos=1000;window.onload=function(){rutaRecursos="/actividades/"+$(document).data("idActividad")+"/";rutaRecursos="";cargarDatosPrint();}
function cargarDatosPrint()
{xmlDoc=cargarXMLJS();if((xmlDoc!=null)&&(xmlDoc!=undefined))
{try{extraerDatosPrint();}
catch(e){errorXML();}
crearPrint();}
else
{errorXML();}}
function errorXML()
{$.get("/avisoEstructuraXml.php");$("#lienzo").html("<div id='errorXML'>"+$(document).data("loadingXmlError")+"</div>");}
function cargarXMLJS(){return jQuery.parseXML(DatosActividad);}
function extraerDatosPrint()
{try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("tituloAplicacion")[0].childNodes[0].nodeValue;tituloTexto=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;texto=xmlDoc.getElementsByTagName("texto")[0].childNodes[0].nodeValue;forma_completar=xmlDoc.getElementsByTagName("forma_completar")[0].childNodes[0].nodeValue;ayuda=xmlDoc.getElementsByTagName("ayuda")[0].childNodes[0].nodeValue;pos=[];pa=[];var palab=xmlDoc.getElementsByTagName("palabra");for(i=0;i<palab.length;i++)
{pos[i]=palab[i].childNodes[0].nodeValue;pos[i]=parseInt(pos[i]);}
pos=pos.sort(ordAscModif);var caracteresQuitar='.,;:=*+-_{}[]¿?¡!()/&%$·|\@#"';var sumale=0;for(i=0;i<palab.length;i++)
{parteCadena=texto.substring(pos[i],texto.length);pa[i]=parteCadena.split(" ")[0];for(l=0;l<caracteresQuitar.length;l++)
{pa[i]=pa[i].split(caracteresQuitar[l])[0];}}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtTituloPalabrasParaCompletar=idioma.getElementsByTagName("txtTituloPalabrasParaCompletar")[0].childNodes[0].nodeValue;}
function ordAscModif(a,b)
{if(a<b)return-1;if(a>b)return 1;if(a=b)return 0;}
function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+" : ");$("#nombreAutor").html(autor);$('#tituloPalabras').text(txtTituloPalabrasParaCompletar);$('#tituloPalabrasOrdenar').text(tituloTexto);cargarPrint();}
function cargarPrint()
{for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;var divCuadro=$("<div>",{id:"cuadro"+ix,"class":"cuadroPalabras"});$('#palabrasDisponibles').append(divCuadro);var divPalabra=$("<div>",{id:"cajaPalabra"+ix,"class":"cajaPalabras"});$('#cuadro'+ix).append(divPalabra);}
var cadena="";var posicion=0;for(j=0;j<pa.length;j++)
{if(j<10)var jx="00"+j;else if(j<100)var jx="0"+j;else var jx=j;cadena+=texto.substring(posicion,pos[j]);posicion=pos[j]+pa[j].length;cadena+="<div id='hueco"+jx+"' class='huecos'></div>";}
cadena+=texto.substring(posicion,texto.length);cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$('#textoCompletar').html(cadena);cargar();}
function cargar()
{var colocadas=[];var aceptar=0;for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;while(aceptar==0)
{posicion=Math.floor((Math.random()*limiteHuecos));if((posicion<pa.length))
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas[i]=posicion;aceptar=0;$("#cajaPalabra"+ix).html(pa[posicion]);}
if(forma_completar=="escribir")
{if(ayuda=="no")
{$("#palabras").hide();}}}