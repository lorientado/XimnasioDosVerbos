var idInterval=0;function crear()
{for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;var divCuadro=$("<div>",{id:"cuadro"+ix,"class":"cuadroPalabras"});$('#palabrasDisponibles').append(divCuadro);var divPalabra=$("<div>",{id:"cajaPalabra"+ix,"class":"cajaPalabras res"});$('#cuadro'+ix).append(divPalabra);if(forma_completar!="escribir")
{var divPalabra=$("<div>",{id:"cajaPalabraFondo"+ix,"class":"cajaPalabras pFondo"});$('#cuadro'+ix).append(divPalabra);}}
var divHueco=$("<div>",{id:"hueco00","class":"cuadroPalabras huecoPalabras"});$('#palabrasOrdenar').append(divHueco);if(forma_completar=="escribir")
{var divLetraRes=$("<div>",{id:"campoEscribir"});$('#hueco00').append(divLetraRes);}
if($("#all").width()>460)
{$("#hueco00").css("height","64px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height","64px");$("#ctrlInput").css("margin-top","-64px");}}
else
{$("#hueco00").css("height","56px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height","56px");$("#ctrlInput").css("margin-top","-56px");}}
cargar();}
function cargar()
{var colocadas=[];var aceptar=0;for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;while(aceptar==0)
{posicion=Math.floor((Math.random()*100));if(posicion<respuesta.length)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas[i]=posicion;aceptar=0;$("#cajaPalabra"+ix).html(respuesta[posicion]);if(forma_completar!="escribir")$("#cajaPalabraFondo"+ix).html(respuesta[posicion]);}
definir();}
function definir()
{$("body").addClass("unselectable");if(forma_completar=="arrastrar")
{$("#palabras").addClass("dragPalabras");$("#palabrasOrdenar").addClass("dragPalabras");for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;var dDrop=1;if((navigator.appVersion.indexOf("Mac")==-1)&&(navigator.userAgent.toLowerCase().indexOf('safari/')!=-1)&&(navigator.userAgent.toLowerCase().indexOf('chrome/')==-1))var dDrop=0;if(dDrop==0)
{$("#cajaPalabra"+ix).mousedown(comienzaArrastre);$("#cajaPalabra"+ix).mouseup(terminaArrastre);}
else
{$("#cajaPalabra"+ix).attr("draggable","true");document.getElementById("cajaPalabra"+ix).ondragstart=empezar;document.getElementById("cajaPalabra"+ix).ondragend=terminar;document.getElementById("cajaPalabraFondo"+ix).ondragover=encima;document.getElementById("cajaPalabraFondo"+ix).ondrop=soltar;}}
if(dDrop==0)
{$("#hueco00").mouseover(activarSoltar);$("#hueco00").mouseout(desactivarSoltar);$("#palabras").mouseover(activarSoltar);$("#palabras").mouseout(desactivarSoltar);}
else
{document.getElementById("hueco00").ondragover=encima;document.getElementById("hueco00").ondrop=soltar;document.getElementById("palabrasDisponibles").ondragover=encima;document.getElementById("palabrasDisponibles").ondrop=soltar;}}
else if(forma_completar=="clickar")
{$("#palabras").addClass("click");$("#palabrasOrdenar").addClass("click");for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;$("#cajaPalabra"+ix).click(mover);}}
else if(forma_completar=="escribir")
{$("#palabras").addClass("escribir");$("#palabrasOrdenar").addClass("escribir");$("#correccion").addClass("escribir");$("#palabrasOrdenar").html($("#palabrasOrdenar").html()+"<input type='password' id='ctrlInput'>");if(is_touch_device())$("#ctrlInput").bind("touchstart",function(){$(".res").removeClass("mal");ponerAlFinal();});else $("#ctrlInput").click(function(){$(".res").removeClass("mal");ponerAlFinal();});$("#ctrlInput").keydown(limitar);$("#ctrlInput").keyup(function(){$("#campoEscribir").html($("#ctrlInput").val());});$("#ctrlInput").focus(function(){$("#campoEscribir").addClass("foco");});$("#ctrlInput").blur(function(){$("#campoEscribir").removeClass("foco");});$("#hueco00").click(function(){$("#ctrlInput").focus();});}};function extraerDatos()
{tipo_actividad="OPalabras";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
forma_completar=xmlDoc.getElementsByTagName("forma_completar")[0].childNodes[0].nodeValue;if((is_touch_device())&&(forma_completar=="arrastrar"))forma_completar="clickar";if((navigator.userAgent.toLowerCase().indexOf('msie 9.0')!=-1)&&(forma_completar=="arrastrar"))forma_completar="clickar";if(forma_completar=="escribir")
{if((xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=null))sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;else sensible_mayusculas="no";if((xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=null))sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;else sensible_acentos="no";}
else
{sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;pregunta=xmlDoc.getElementsByTagName("pregunta")[0].childNodes[0].nodeValue;audio=xmlDoc.getElementsByTagName("pregunta")[0].attributes.getNamedItem("audio").value;if((xmlDoc.getElementsByTagName("imagen")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("imagen")[0].childNodes[0]!=null))imagen=xmlDoc.getElementsByTagName("imagen")[0].childNodes[0].nodeValue;else imagen="";respuestaT=xmlDoc.getElementsByTagName("respuesta")[0].childNodes[0].nodeValue;respuestaCH=respuestaT.split(" ");var k=0;respuesta=[];for(i=0;i<respuestaCH.length;i++)
{if(respuestaCH[i]!="")
{respuesta[k]=respuestaCH[i];k++;}}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;comprobar=idioma.getElementsByTagName("comprobar")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtActNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtOpcionIncorrecta=idioma.getElementsByTagName("txtOpcionIncorrecta")[0].childNodes[0].nodeValue;txtAquiEstanLasPalabras=idioma.getElementsByTagName("txtAquiEstanLasPalabras")[0].childNodes[0].nodeValue;txtSensibleMayusculas=idioma.getElementsByTagName("txtSensibleMayusculas")[0].childNodes[0].nodeValue;txtNoSensibleMayusculas=idioma.getElementsByTagName("txtNoSensibleMayusculas")[0].childNodes[0].nodeValue;txtSensibleAcentos=idioma.getElementsByTagName("txtSensibleAcentos")[0].childNodes[0].nodeValue;txtNoSensibleAcentos=idioma.getElementsByTagName("txtNoSensibleAcentos")[0].childNodes[0].nodeValue;txtErrorAudio=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtAumentar=idioma.getElementsByTagName("txtAumentar")[0].childNodes[0].nodeValue;txtReducir=idioma.getElementsByTagName("txtReducir")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarPista();inicializarParametros();inicializarTituloAct();inicializarTituloPalabras();inicializarBtnComprobar();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});}
function inicializarPista()
{$('#pTexto').html(pregunta);if(audio=="")
{$("#pAudio").hide();}
else
{var rutaAudio=rutaRecursos+audio;var rutaAudioOgg=rutaRecursosInicio+audio;var audioCadena="<audio id='pistaAudio'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioTag').html(audioCadena);$('#btnAudio').show();$('#btnAudio').click(function(e){e.preventDefault();$(".huecoPalabras").removeClass("foco");gestionReproducir("pistaAudio","iconoAudio");});}
if(imagen=="")
{$("#pImagen").hide();}
else
{$("#contenidoPista").addClass("conImagen");var rutaImagen=rutaRecursos+imagen;var imagenCadena="<a href='"+rutaImagen+"' class='fancybox'><div class='image-overlay'><div class='image-overlay-zoom'></div></div><img id='pistaImagen' src='"+rutaImagen+"' width='40px' height='40px'></a>";$("#pImagen").html(imagenCadena);$(document).ready(function(){$('.fancybox').fancybox();});}}
function inicializarTituloPalabras()
{$('#tituloPalabras').text(txtAquiEstanLasPalabras);}
function inicializarBtnComprobar()
{$('#btnComprobar').text(comprobar);$('#btnComprobar').click(function(e){e.preventDefault();actualizaIds();compruebaFrase();});};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);if((forma_completar=="escribir")&&(!is_touch_device()))$("#ctrlInput").focus();idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();if($("#all").width()>460)
{$("#hueco00").css("height","64px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height","64px");}}
else
{$("#hueco00").css("height","56px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height","56px");}}
calculaAltura();}
var compruebaFin=0;function reproducir(media,icono)
{try{document.getElementById(media).currentTime=0;}catch(e){}
document.getElementById(media).pause();if(document.getElementById(media).currentTime!=0)document.getElementById(media).load();document.getElementById(media).play();$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");clearInterval(compruebaFin);compruebaFin=setInterval(function(){controlFinalAudio(media,icono);},500);}
function gestionReproducir(media,icono)
{if($("#"+icono).hasClass("iPlay"))
{$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");reproducir(media,icono);}
else
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");document.getElementById(media).pause();}}
function controlFinalAudio(media,icono)
{if(document.getElementById(media).ended)
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");clearInterval(compruebaFin);}}
function errores(tipo)
{if(tipo==-1)
{$('#errorAudio').show();$('#audioOK').hide();$('#errorAudio').attr("title",txtErrorAudio);}
else if(tipo==-2)
{$('#errorAudioF').show();$('#audioOKF').hide();$('#errorAudioF').attr("title",txtErrorAudio);}}
function empezar(ev)
{ev.dataTransfer.effectAllowed='move';ev.dataTransfer.setData("Text",ev.target.getAttribute('id'));return true;}
function encima(ev)
{return false;}
function soltar(ev)
{var arrastraId=ev.dataTransfer.getData("Text");var contenedorId=ev.target.getAttribute('id');var contenedorPadreId=$("#"+contenedorId).parent().attr("id");if(contenedorId=="hueco00")
{$("#"+arrastraId).css("display","inline-block");ev.target.appendChild(document.getElementById(arrastraId));}
else if((contenedorId.substring(0,16)=="cajaPalabraFondo")||(contenedorId=="palabrasDisponibles"))
{$("#"+arrastraId).css("top",0).css("left",0);$("#"+arrastraId).appendTo($("#cuadro"+arrastraId.substring(11,13)));}
else if((contenedorPadreId=="hueco00")&&(contenedorId.substring(0,11)=="cajaPalabra"))
{$("#"+arrastraId).insertBefore("#"+contenedorId);}
calculaAltura();ev.stopPropagation();return false;}
function terminar(ev)
{ev.dataTransfer.clearData("Data");return true;}
function comienzaArrastre(ev)
{$(".res").removeClass("mal");idArrastre=ev.target.getAttribute('id');posX0=ev.clientX;posY0=ev.clientY;$("#contentAct").mousemove(mueveElemento);$("#contentAct").mouseout(devuelveElemento);}
function mueveElemento(ev)
{var posX=ev.clientX-posX0;var posY=ev.clientY-posY0;$("#"+idArrastre).css("top",posY).css("left",posX).css("z-index","10");}
function devuelveElemento()
{$("#"+idArrastre).appendTo($("#cuadro"+idArrastre.substring(11,13)));$("#"+idArrastre).css("top",0).css("left",0);$("#contentAct").unbind("mousemove");$("#contentAct").unbind("mouseout");}
function terminaArrastre(ev)
{var asignado=0;$("#all").unbind("mousemove");$("#"+idArrastre).css("z-index","8");$("#"+idArrastre).hide();var posXS=parseInt($("#"+idArrastre).css("left"),10)-50;var posYS=parseInt($("#"+idArrastre).css("top"),10)-50;$("#"+idArrastre).css("top",posYS).css("left",posXS);setTimeout(function(){$("#"+idArrastre).show();if(idArrastre==idSoltar)
{$("#"+idArrastre).appendTo($("#cuadro"+idArrastre.substring(11,13)));$("#"+idArrastre).css("top",0).css("left",0);}
else
{$("#"+idArrastre).css("display","inline-block");if(activadoContenedor==0)
{$("#"+idArrastre).css("top",0).css("left",0);}
else
{if(idSoltar=="palabras")
{$("#"+idArrastre).appendTo($("#cuadro"+idArrastre.substring(11,13)));$("#"+idArrastre).css("top",0).css("left",0);}
else if(idSoltar.substring(0,4)=="caja")
{if(idSoltarPadre.substring(0,6)!="cuadro")
{$("#"+idArrastre).css("top",0).css("left",0);$("#"+idArrastre).insertBefore("#"+idSoltar);}
else
{$("#"+idArrastre).appendTo($("#cuadro"+idArrastre.substring(11,13)));$("#"+idArrastre).css("top",0).css("left",0);}}
else
{$("#"+idArrastre).appendTo($("#"+idSoltar));$("#"+idArrastre).css("top",0).css("left",0);}}}
$("#contentAct").unbind("mousemove");$("#contentAct").unbind("mouseout");calculaAltura();},20);}
var activadoContenedor=0;function activarSoltar(ev)
{idSoltar=ev.target.getAttribute('id');idSoltarPadre=$("#"+idSoltar).parent().attr("id");if((idSoltar=="tituloPalabras")||(idSoltar=="palabrasDisponibles")||(idSoltar.substring(0,6)=="cuadro")||(idSoltar.substring(0,16)=="cajaPalabraFondo"))idSoltar="palabras";activadoContenedor=1;}
function desactivarSoltar()
{activadoContenedor=0;}
var control=[];function mover(ev)
{$(".res").removeClass("mal");var encontrado=0;var mueveId=ev.target.getAttribute('id');var mueveEle=document.getElementById(mueveId);var mueveCad=mueveId.substring(11,13);for(i=0;i<control.length;i++)
{if(control[i]==mueveId)
{$(mueveEle).insertBefore("#cajaPalabraFondo"+mueveCad);control[i]="";encontrado=1;}}
if(encontrado==0)
{var cantidad=control.length;for(i=0;i<cantidad;i++)
{if(control[i]=="")
{cantidad=i;break;}}
if(cantidad<10)var cantidadx="0"+cantidad;else var cantidadx=cantidad;$("#hueco00").append(mueveEle);control[cantidad]=mueveId;cantidad++;}
for(p=0;p<respuesta.length;p++)
{if(p<10)var px="0"+p;else px=p;if(!$("#hueco"+px).find("div").html())$("#hueco"+px).removeClass("completo");}
calculaAltura();}
function limitar(e)
{var evento=e||window.e;key=evento.keyCode;if(evento.keyCode==39)
{e.preventDefault();mueve("d");return true;}
else if(evento.keyCode==37)
{e.preventDefault();mueve("i");return true;}
else if((evento.keyCode==32)||(evento.keyCode==13))
{e.preventDefault();compruebaPalabra(key);return false;}
else if(evento.keyCode==8)
{if($("#campoEscribir").html()==""){e.preventDefault();borra();}
compruebaPalabra(key);return true;}
else
{return true;}}
function borra(e)
{contadorp=controlIds[controlIds.length-1];if(controlPosicion!=-1){contadorp=controlIds[controlPosicion-1];controlPosicion--;}
if(contadorp<10)var contadorx="00"+contadorp;else if(contadorp<100)var contadorx="0"+contadorp;else contadorx=contadorp;$("#campoEscribir").html($("#cajaPalabraF"+contadorx).html());$("#ctrlInput").val($("#cajaPalabraF"+contadorx).html());$("#ctrlInput").focus();$("#cajaPalabraF"+contadorx).remove();controlCajas[contadorp]=0;actualizaIds();}
var controlPosicion=-1;function cambiarContenido(e)
{if($("#campoEscribir").html()!="")
{compruebaPalabra(0);}
setTimeout(function(){var idA=e.target.getAttribute('id');var cadenaIdA=idA.substring(12,15);var numIdA=parseInt(cadenaIdA,10);for(i=0;i<controlIds.length;i++)
{if(controlIds[i]==numIdA)
{controlPosicion=i;}}
$("#campoEscribir").html($("#cajaPalabraF"+cadenaIdA).html());$("#campoEscribir").insertBefore(("#cajaPalabraF"+cadenaIdA));$("#cajaPalabraF"+cadenaIdA).remove();controlCajas[numIdA]=0;actualizaIds();$("#ctrlInput").val($("#campoEscribir").html());$("#ctrlInput").focus();},20);}
function ponerAlFinal()
{if($("#campoEscribir").html()!="")
{compruebaPalabra(0);}
var final=controlIds[controlIds.length-1];if(final<10)var finalx="00"+final;else if(final<100)var finalx="0"+final;else finalx=final;$("#campoEscribir").insertAfter(("#cajaPalabraF"+finalx));controlPosicion=-1;}
function mueve(dir)
{if(dir=="d")
{if((controlPosicion!=-1)&&(controlPosicion<controlIds.length))controlPosicion++;}
contadorp=controlIds[controlIds.length-1];if(controlPosicion!=-1){contadorp=controlIds[controlPosicion-1];}
if(contadorp<10)var contadorx="00"+contadorp;else if(contadorp<100)var contadorx="0"+contadorp;else contadorx=contadorp;$("#cajaPalabraF"+contadorx).click();}
var controlP=[];var controlH=[];var controlCajas=[];var controlIds=[];var contadorp=0;function compruebaPalabra(key)
{if((key!=8)&&($("#campoEscribir").html()!=""))
{var contenido=$("#campoEscribir").html();contadorp=controlCajas.length;if(contadorp<10)var contadorx="00"+contadorp;else if(contadorp<100)var contadorx="0"+contadorp;else contadorx=contadorp;var divPalabra=$("<div>",{id:"cajaPalabraF"+contadorx,"class":"cajaPalabras res"});$('#hueco00').append(divPalabra);$("#cajaPalabraF"+contadorx).insertBefore("#campoEscribir");$("#cajaPalabraF"+contadorx).html(contenido);$(".res").click(cambiarContenido);if(sensible_mayusculas=="no")
{contenido=contenido.toUpperCase();respuestaT=respuestaT.toUpperCase();}
if(sensible_acentos=="no")
{contenido=borraAcentos(contenido);respuestaT=borraAcentos(respuestaT);}
var respuestaOriginal=respuesta;respuesta=respuestaT.split(" ");var encontrado=0;for(j=0;j<respuesta.length;j++)
{if(contenido==respuesta[j])
{encontrado=1;}}
if(encontrado==1)
{$("#cajaPalabraF"+contadorx).addClass("completo");}
else
{$("#cajaPalabraF"+contadorx).addClass("mal");}
$("#campoEscribir").html("");$("#ctrlInput").val("");controlCajas[contadorp]=1;actualizaIds();respuesta=respuestaOriginal;}
controlL=[];controlH=[];$(".cajaPalabras").removeClass("used");for(m=0;m<respuesta.length;m++)
{if(m<10)var mx="0"+m;else mx=m;for(p=0;p<controlCajas.length;p++)
{if(controlCajas[p]==0)continue;if(p<10)var px="00"+p;else if(p<100)var px="0"+p;else px=p;if(controlH[p]==1)continue;contenidoC=$("#cajaPalabraF"+px).html();respuestaC=$("#cajaPalabra"+mx).html();if(contenidoC=="&nbsp;")contenidoC=" ";if(sensible_mayusculas=="no")
{contenidoC=contenidoC.toUpperCase();respuestaC=respuestaC.toUpperCase();}
if(sensible_acentos=="no")
{contenidoC=borraAcentos(contenidoC);respuestaC=borraAcentos(respuestaC);}
if(respuestaC==contenidoC)
{if(controlL[m]!=1)
{$("#cajaPalabra"+mx).addClass("used");controlL[m]=1;controlH[p]=1;}}}}}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function actualizaIds()
{var i=0;var inicio=11;var final=13;if(forma_completar=="escribir"){inicio=12;final=15;}
controlIds=[];$("#hueco00 .res").each(function(){controlIds[i]=$(this).attr("id");controlIds[i]=parseInt(controlIds[i].substring(inicio,final),10);i++;})
calculaAltura();}
function calculaAltura()
{var anchura=0;var filas=1;$("#hueco00 .res").each(function(){anchura=anchura+$(this).width()+23;if(anchura>$("#hueco00").width()){filas++;anchura=$(this).width();}})
filas++;if(filas>=2)
{if($("#all").width()>460)
{$("#hueco00").css("height",(32*filas)+"px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height",(32*filas)+"px");$("#ctrlInput").css("margin-top",(-32*filas)+"px");}}
else
{$("#hueco00").css("height",(28*filas)+"px");if(forma_completar=="escribir")
{$("#ctrlInput").css("height",(28*filas)+"px");$("#ctrlInput").css("margin-top",(-28*filas)+"px");}}}}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$('#btnComprobar').unbind("click");cargarPantallaFinal('intentos');puntosReg=0;$("#numPuntos").html("0");}}
var puntosReg=100;function actualizaPuntos()
{var actuales=parseInt(puntosReg);var descuento=puntos_resta;var cantidadActual=actuales-descuento;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
var controlCorreccion=[];function compruebaFrase()
{if(forma_completar=="escribir")
{if($("#campoEscribir").html()!="")compruebaPalabra(0);}
var error=0;var i=0;var contenido="";$("#hueco00 .res").each(function(){contenido=$(this).html();if(i>=respuesta.length)respuestaF="";else respuestaF=respuesta[i];if(forma_completar=="escribir")
{if(sensible_mayusculas=="no")
{contenido=contenido.toUpperCase();respuestaF=respuestaF.toUpperCase();}
if(sensible_acentos=="no")
{contenido=borraAcentos(contenido);respuestaF=borraAcentos(respuestaF);}}
else
{if(contenido!=undefined)contenido=contenido.toUpperCase();respuestaF=respuestaF.toUpperCase();}
if(respuestaF!=contenido)
{controlCorreccion[i]=0;error=1;}
else
{controlCorreccion[i]=1;}
i++;});if((error==1)||(i!=respuesta.length))
{for(i=0;i<controlCorreccion.length;i++)
{if(forma_completar=="escribir")
{var pos=controlIds[i];if(pos<10)var posx="00"+pos;else if(pos<100)var posx="0"+pos;else var posx=pos;if(controlCorreccion[i]==0)$("#cajaPalabraF"+posx).addClass("mal");}
else
{var pos=controlIds[i];if(pos<10)var posx="0"+pos;else var posx=pos;if(controlCorreccion[i]==0)$("#cajaPalabra"+posx).addClass("mal");}}
actualizarIntentos();actualizaPuntos();}
else if(error==0)
{$('#btnComprobar').unbind("click");cargarPantallaFinal('OK');}}
function completarPantallaFinal()
{for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;var divCorrecto=$("<div>",{id:"cuadroFinalC"+ix,"class":"cuadroPalabras"});$('#correccion').append(divCorrecto);if((controlCorreccion[i]==0)||(controlCorreccion[i]==undefined))
{var divError=$("<div>",{id:"cuadroFinalE"+ix,"class":"palabraCorreccion"});$('#cuadroFinalC'+ix).append(divError);}
var divRespuesta=$("<div>",{id:"cuadroFinalR"+ix,"class":"cajaPalabras"});$('#cuadroFinalC'+ix).append(divRespuesta);}
cargarFinal();cargarPistaF();}
function cargarFinal()
{for(i=0;i<respuesta.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;if(forma_completar=="escribir")
{var pos=controlIds[i];if(pos<10)var posx="00"+pos;else if(pos<100)var posx="0"+pos;else var posx=pos;var contenidoI=$("#cajaPalabraF"+posx).html();}
else
{var pos=controlIds[i];if(pos<10)var posx="0"+pos;else var posx=pos;var contenidoI=$("#cajaPalabra"+posx).html();}
if((controlCorreccion[i]==0)||(controlCorreccion[i]==undefined))
{if(pos==undefined)$('#cuadroFinalE'+ix).html("");else $('#cuadroFinalE'+ix).html(contenidoI);$("#cuadroFinalC"+ix).addClass("mal");}
$('#cuadroFinalR'+ix).html(respuesta[i]);}}
function cargarPistaF()
{$('#pTextoF').html(pregunta);if(audio=="")
{$("#pAudioF").hide();}
else
{var rutaAudio=rutaRecursos+audio;var rutaAudioOgg=rutaRecursosInicio+audio;var audioCadena="<audio id='pistaAudioF'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-2);' type='audio/ogg'></source></audio>";$('#audioTagF').html(audioCadena);$('#btnAudioF').show();$('#btnAudioF').click(function(e){e.preventDefault();gestionReproducir("pistaAudioF","iconoAudioF");});}
if(imagen=="")
{$("#pImagenF").hide();}
else
{$("#contenidoPistaF").addClass("conImagen");var rutaImagen=rutaRecursos+imagen;var imagenCadena="<img id='pistaImagenF' src='"+rutaImagen+"' width='40px' height='40px'></a>";$("#pImagenF").html(imagenCadena);}}