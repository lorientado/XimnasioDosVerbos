var idInterval=0;function crear()
{var divCabecero=$("<div>",{id:"cabecero"});var divIndicador=$("<div>",{id:"indicador"});$(divCabecero).append(divIndicador);var divPista=$("<div>",{id:"pista"});$(divCabecero).append(divPista);var divAciertoError=$("<div>",{id:"aciertoError"});$(divCabecero).append(divAciertoError);$('#lienzo').append(divCabecero);var divContentElementos=$("<div>",{id:"contentElementos"});$('#lienzo').append(divContentElementos);cargar();}
function cargar()
{if(forma=="grupo")
{contadorElementos=0;var aleatorio=Math.floor((Math.random()*100));while(aleatorio>grupos.length-1)
{aleatorio=Math.floor((Math.random()*100));}
$("#pista").html(grupos[aleatorio]["texto"]);idGrupoActivo=grupos[aleatorio]["id"]
for(i=0;i<elementos.length;i++)
{if(elementos[i]["id"]==grupos[aleatorio]["id"])
{contadorElementos++;}}
$("#indicador").html("0/"+contadorElementos);}
else if(forma=="relacionar")
{$("#indicador").hide();$("#pista").hide();}
var colocadas=[];var aceptar=0;for(i=0;i<elementos.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;while(aceptar==0)
{posicion=Math.floor((Math.random()*100));if(posicion<elementos.length)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas[i]=posicion;aceptar=0;if(posicion<10)var posicionx="0"+posicion;else var posicionx=posicion;var divElemento=$("<div>",{id:"elemento"+posicionx,"class":"elementos"});$('#contentElementos').append(divElemento);$("#elemento"+posicionx).html(elementos[posicion]["contenido"]);}
$(".elementos").click(gestionEleccion);var anchura=$("#contentElementos").width();var col=0;if(anchura>650){col=4;}else if(anchura>500){col=3;}else if(anchura>290){col=2;}else{col=1;}
$('#contentElementos').BlocksIt({numOfCol:col,blockElement:'.elementos'});};function extraerDatos()
{tipo_actividad="Relacionar";sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
if($(document).data("PRMO")=='3'){colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;}else{colorFondo='0x7cb139';}
colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);if($(document).data("PRMO")=='3'){colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;}else{colorBotones='0xFCA800';}
colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;forma=xmlDoc.getElementsByTagName("forma")[0].childNodes[0].nodeValue;txtGrupo=xmlDoc.getElementsByTagName("idioma")[0].getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;var todosTitulo=1;grupos=new Array();var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{var datosPareja=new Array();datosPareja["id"]=parejas[i].attributes.getNamedItem("id").value;datosPareja["nombre"]=parejas[i].attributes.getNamedItem("nombre").value;datosPareja["num_elementos"]=parejas[i].attributes.getNamedItem("numero_elementos").value;datosPareja["texto"]=parejas[i].attributes.getNamedItem("texto").value;if(datosPareja["texto"]==""){todosTitulo=0;}
datosPareja["respuesta"]=parejas[i].attributes.getNamedItem("respuesta").value;grupos[i]=datosPareja;}
if(todosTitulo==0)forma="relacionar";elementos=new Array();var datos=xmlDoc.getElementsByTagName("elemento");for(i=0;i<datos.length;i++)
{var datosElemento=new Array();datosElemento["id"]=datos[i].attributes.getNamedItem("id").value;datosElemento["contenido"]=datos[i].childNodes[0].nodeValue;elementos[i]=datosElemento;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloActividadNoSuperada=idioma.getElementsByTagName("txtTituloActividadNoSuperada")[0].childNodes[0].nodeValue;txtTituloActividadSuperada=idioma.getElementsByTagName("txtTituloActividadSuperada")[0].childNodes[0].nodeValue;txtActividadSuperada=idioma.getElementsByTagName("txtActividadSuperada")[0].childNodes[0].nodeValue;txtTituloRespuestaIncorrecta=idioma.getElementsByTagName("txtTituloRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtGrupoCorrecto=idioma.getElementsByTagName("txtGrupoCorrecto")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();var anchura=$("#contentElementos").width();var col=0;if(anchura>650){col=4;}else if(anchura>500){col=3;}else if(anchura>290){col=2;}else{col=1;}
$('#contentElementos').BlocksIt({numOfCol:col,blockElement:'.elementos'});}
var cacheElementos=[];function gestionEleccion(e)
{$("#aciertoError").removeClass("respuestaBien").removeClass("respuestaMal").hide();clearTimeout(idTimeoutE);if(forma=="grupo")
{$("#indicador").show();$("#pista").show();$("#indicador").html(cacheElementos.length+"/"+contadorElementos);}
id=e.target.getAttribute('id');cadenaId=id.substring(8,10);numId=parseInt(cadenaId,10);if($("#elemento"+cadenaId).hasClass("seleccionado"))
{for(j=0;j<cacheElementos.length;j++)
{if(cacheElementos[j]==numId)
{cacheElementos.splice(j,1);}}
$("#elemento"+cadenaId).removeClass("seleccionado");}
else
{$("#elemento"+cadenaId).addClass("seleccionado");cacheElementos[cacheElementos.length]=numId;}
if(forma=="grupo")
{$("#indicador").html(cacheElementos.length+"/"+contadorElementos);}
else if(forma=="relacionar")
{if($("#indicador").css("display")=="none")
{contadorElementos=0;var k=elementos[numId]["id"];idGrupoActivo=k;$("#pista").html(grupos[k-1]["texto"]);for(i=0;i<elementos.length;i++)
{if(elementos[i]["id"]==grupos[k-1]["id"])
{contadorElementos++;}}
$("#indicador").show();if(grupos[k-1]["texto"]!="")$("#pista").show();}
$("#indicador").html(cacheElementos.length+"/"+contadorElementos);if(cacheElementos.length==0)
{$("#indicador").hide();$("#pista").hide();}}
if(cacheElementos.length==contadorElementos)
{compruebaElementos();}}
var idTimeoutE=0;var gestionGrupos=[];function compruebaElementos()
{var error=0;for(i=0;i<cacheElementos.length;i++)
{if(elementos[cacheElementos[i]]["id"]!=idGrupoActivo)
{error=1;break;}}
cacheElementos=[];$("#indicador").hide();$("#pista").hide();if(error==0)
{gestionGrupos[idGrupoActivo]=1;$("#aciertoError").html(txtTituloRespuestaCorrecta+"<br>"+txtGrupoCorrecto).addClass("respuestaBien").show();idTimeoutE=setTimeout(function(){$("#aciertoError").removeClass("respuestaBien").hide();},3000);$(".seleccionado").addClass("bien");$(".seleccionado").unbind("click");$(".elementos").removeClass("seleccionado");if(forma=="grupo")
{$(".elementos").unbind("click");cargarPantallaFinal('OK');}
else if(forma=="relacionar")
{var final=1;for(i=0;i<elementos.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;if(!$("#elemento"+ix).hasClass("bien"))
{final=0;break;}}
if(final==1)
{$(".elementos").unbind("click");cargarPantallaFinal('OK');}}}
else
{$("#aciertoError").html(txtTituloRespuestaIncorrecta+"<br>"+txtRespuestaIncorrecta).addClass("respuestaMal").show();idTimeoutE=setTimeout(function(){$("#aciertoError").removeClass("respuestaMal").hide();if(forma=="grupo")
{$("#indicador").show();$("#pista").show();$("#indicador").html(cacheElementos.length+"/"+contadorElementos);}},3000);$(".seleccionado").addClass("mal");setTimeout(function(){$(".mal").removeClass("mal");},500);$(".elementos").removeClass("seleccionado");actualizarIntentos();actualizaPuntos();}}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$(".elementos").unbind("click");cargarPantallaFinal('intentos');puntosReg=0;$("#numPuntos").html("0");}}
var puntosReg=100;function actualizaPuntos()
{var actuales=parseInt(puntosReg);var descuento=puntos_resta;var cantidadActual=actuales-descuento;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
function completarPantallaFinal()
{var cadena="";for(i=0;i<grupos.length;i++)
{var claseColor="";if(gestionGrupos[i+1]==1)claseColor="correcto";idGrupoF=grupos[i]["id"];cadena+="<div id='grupoFinal"+i+"' class='gruposFinal "+claseColor+"'>";if(grupos[i]["texto"]=="")var titulo=txtGrupo+" "+(i+1);else var titulo=grupos[i]["texto"];cadena+="<div id='tituloGrupoFinal"+i+"' class='tituloGruposFinal'>"+titulo+"</div>";for(j=0;j<elementos.length;j++)
{if(elementos[j]["id"]==idGrupoF)
{cadena+="<div id='elementoFinal"+i+"_"+j+"' class='elementosFinal'>"+elementos[j]["contenido"]+"</div>";}}
cadena+="</div>";}
$("#correccion").html(cadena);}
;(function(a){var b={numOfCol:5,offsetX:5,offsetY:5,blockElement:"div"};var c,d;var e=[];if(!Array.prototype.indexOf){Array.prototype.indexOf=function(a){var b=this.length>>>0;var c=Number(arguments[1])||0;c=c<0?Math.ceil(c):Math.floor(c);if(c<0)c+=b;for(;c<b;c++){if(c in this&&this[c]===a)return c}return-1}}var f=function(){e=[];for(var a=0;a<b.numOfCol;a++){g("empty-"+a,a,0,1,-b.offsetY)}};var g=function(a,c,d,f,g){for(var h=0;h<f;h++){var i=new Object;i.x=c+h;i.size=f;i.endY=d+g+b.offsetY*2;e.push(i)}};var h=function(a,b){for(var c=0;c<b;c++){var d=i(a+c,"x");e.splice(d,1)}};var i=function(a,b){for(var c=0;c<e.length;c++){var d=e[c];if(b=="x"&&d.x==a){return c}else if(b=="endY"&&d.endY==a){return c}}};var j=function(a,b){var c=[];for(var d=0;d<b;d++){c.push(e[i(a+d,"x")].endY)}var f=Math.min.apply(Math,c);var g=Math.max.apply(Math,c);return[f,g,c.indexOf(f)]};var k=function(a){if(a>1){var b=e.length-a;var c=false;var d,f;for(var g=0;g<e.length;g++){var h=e[g];var i=h.x;if(i>=0&&i<=b){var k=j(i,a);if(!c){c=true;d=k;f=i}else{if(k[1]<d[1]){d=k;f=i}}}}return[f,d[1]]}else{d=j(0,e.length);return[d[2],d[0]]}};var l=function(a,c){if(!a.data("size")||a.data("size")<0){a.data("size",1)}else if(a.data("size")>b.numOfCol){a.data("size",b.numOfCol)}var e=k(a.data("size"));var f=d*a.data("size")-(a.outerWidth()-a.width());a.css({width:f-b.offsetX*2,left:e[0]*d,top:e[1],position:"absolute"});var i=a.outerHeight();h(e[0],a.data("size"));g(a.attr("id"),e[0],e[1],a.data("size"),i)};a.fn.BlocksIt=function(g){if(g&&typeof g==="object"){a.extend(b,g)}c=a(this);d=c.width()/b.numOfCol;f();c.children(b.blockElement).each(function(b){l(a(this),b)});var h=j(0,e.length);c.height(h[1]+b.offsetY);return this}})(jQuery)