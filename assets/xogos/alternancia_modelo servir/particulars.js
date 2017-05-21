var idInterval=0;function crear()
{for(i=0;i<numPreguntas+1;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;var divPregunta=$("<div>",{id:"pregunta"+ix,"class":"preguntas"});$('#lienzo').append(divPregunta);var divEnunciado=$("<div>",{"class":"enunciado"});var divNumTest=$("<div>",{id:"numTest"+ix,"class":"numTest celda"});$(divEnunciado).append(divNumTest);var divImagenEnunciado=$("<div>",{id:"imPregunta"+ix,"class":"imPreguntas celda"});$(divEnunciado).append(divImagenEnunciado);var divContenidoPregunta=$("<div>",{"class":"contentPregunta celda"});var divEnTitulo=$("<div>",{id:"tituloResponder"+ix,"class":"enTitulo"});$(divEnTitulo).html(txtTituloResponder);$(divContenidoPregunta).append(divEnTitulo);var divPreguntaMultimedia=$("<div>",{id:"pMultimedia"+ix,"class":"preguntaMultimedia"});$(divContenidoPregunta).append(divPreguntaMultimedia);var divEnunciadoPregunta=$("<div>",{id:"enPregunta"+ix,"class":"enPreguntas"});$(divContenidoPregunta).append(divEnunciadoPregunta);$(divEnunciado).append(divContenidoPregunta);var divPadRight=$("<div>",{"class":"padRight celda"});$(divEnunciado).append(divPadRight);$("#pregunta"+ix).append(divEnunciado);var divRespuestas=$("<div>",{id:"respuestas"+ix,"class":"respuestas"});$("#pregunta"+ix).append(divRespuestas);}
cargarElementos();}
var rutasVideos=[];function cargarElementos()
{for(k=0;k<numPreguntas+1;k++)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else var kx=k;if(k!=numPreguntas)
{if(aPreguntas[k]["imagen"]!="")
{var rutaImagen=rutaRecursos+aPreguntas[k]["imagen"];var imgAmplia="<a href='"+rutaImagen+"' class='fancybox'><div class='image-overlay'><div class='image-overlay-zoom'></div></div><img id='pistaImagen' src='"+rutaImagen+"'></a>";$("#imPregunta"+kx).html(imgAmplia);$('.fancybox').fancybox();}
else
{$("#imPregunta"+kx).hide();}
if(aPreguntas[k]["tipoE"]=="texto")
{$("#enPregunta"+kx).html(aPreguntas[k]["pregunta"]);$("#pMultimedia"+kx).hide();}
if((aPreguntas[k]["tipoE"]=="video")||(aPreguntas[k]["tipoE"]=="textovideo"))
{$("#enPregunta"+kx).html(aPreguntas[k]["pregunta"]);var video=aPreguntas[k]["video"]+"?autoplay=0&controls=0&showinfo=0&rel=0&start="+aPreguntas[k]["videoT"];aVideo=video.split("/");video=aVideo[aVideo.length-1];if(video.substring(0,3)=="fsa")video=video.substring(3,video.length);var rutaVideo="//www.youtube.com/embed/"+video;rutasVideos[k]=rutaVideo;var cadenaVideo="<iframe id='iframe"+kx+"' class='iframes' type='text/html' src='"+rutaVideo+"' width='400' height='300'></iframe>";var divVideo=$("<div>",{id:"video"+kx,"class":"videos"});$(divVideo).html(cadenaVideo);$(divVideo).insertBefore("#respuestas"+kx);$("#video"+kx).hide();$("#pMultimedia"+kx).html("<a class='fancybox btn verVideo' id='enlaceVideo"+kx+"' href='#video"+kx+"'><span id='enSpanVideo"+kx+"' class='iMultimedia'></span></a>");$('.fancybox').fancybox();$("#enlaceVideo"+kx).click(function(e){var cadId=e.target.getAttribute('id').substring(11,14);setTimeout(function(){$('.fancybox-close').click(function(){var contenido=$("#video"+cadId).html();$("#video"+cadId).html("");$("#video"+cadId).html(contenido);});$('.fancybox-overlay').click(function(){var contenido=$("#video"+cadId).html();$("#video"+cadId).html("");$("#video"+cadId).html(contenido);});},2000);});}
if((aPreguntas[k]["tipoE"]=="ambos")||(aPreguntas[k]["tipoE"]=="textoaudio")||(aPreguntas[k]["tipoE"]=="audio"))
{$("#enPregunta"+kx).html(aPreguntas[k]["pregunta"]);var audio=aPreguntas[k]["audio"];var rutaAudio=rutaRecursos+audio;var rutaAudioOgg=rutaRecursosInicio+audio;var cadenaAudio="<div class='pistaAudio' id='pAudio"+kx+"'>";cadenaAudio+="<div id='audioTag"+kx+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio"+kx+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio"+kx+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK"+kx+"'><span id='iconoAudio"+kx+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#pMultimedia"+kx).html(cadenaAudio);var audioCadena="<audio id='pistaAudio"+kx+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioTag'+kx).html(audioCadena);$('#btnAudio'+kx).show();$('#btnAudio'+kx).click(function(e){e.preventDefault();var num=e.target.getAttribute('id').substring(e.target.getAttribute('id').length-3,e.target.getAttribute('id').length);gestionReproducir("pistaAudio"+num,"iconoAudio"+num);});}
cargarRespuestas(k,aPreguntas[k]["tipo"]);}}
$("input:checkbox").click(activarChequedCB);$("input:radio").click(activarChequedR);$("input:text").click(pulsarEscribir);$("textarea").click(pulsarEscribir);$(".preguntaMultimedia").click(pulsarReproducir);}
function cargarRespuestas(k,tipo)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else var kx=k;if(tipo=="unica")
{$("#respuestas"+kx).addClass("resOptions");for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;var divRespuesta=$("<div>",{id:"respuesta"+kx+"_"+mx,"class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);var rutaImagen=rutaRecursos+aRespuestas[k][m]["imagen"];var cadena="<label class='labelFull' for='resp"+kx+"_"+mx+"' id='respL"+kx+"_"+mx+"'>";cadena+="<div class='celda check'>";cadena+="<input type='radio' id='resp"+kx+"_"+mx+"' name='respuesta"+kx+"'>";cadena+="</div>";if(aRespuestas[k][m]["imagen"]!="")cadena+="<div class='celda imagenRespuesta'><a href='"+rutaImagen+"' class='fancybox'><div class='image-overlay'><div class='image-overlay-zoom'></div></div><img src='"+rutaImagen+"' class='imgRespuesta'></a></div>";cadena+="<div class='celda txtOption' id='respC"+kx+"_"+mx+"'>"+aRespuestas[k][m]["respuesta"]+"</div>";cadena+="</label>";$("#respuesta"+kx+"_"+mx).html(cadena);}
$('.fancybox').fancybox();}
if(tipo=="multiple")
{$("#respuestas"+kx).addClass("resOptions");var cadena="";for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;var divRespuesta=$("<div>",{id:"respuesta"+kx+"_"+mx,"class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);var rutaImagen=rutaRecursos+aRespuestas[k][m]["imagen"];var cadena="<label class='labelFull' for='resp"+kx+"_"+mx+"' id='respL"+kx+"_"+mx+"'>";cadena+="<div class='celda check'>";cadena+="<input type='checkbox' id='resp"+kx+"_"+mx+"' name='respuesta"+kx+"_"+mx+"'>";cadena+="</div>";if(aRespuestas[k][m]["imagen"]!="")cadena+="<div class='celda imagenRespuesta'><a href='"+rutaImagen+"' class='fancybox'><div class='image-overlay'><div class='image-overlay-zoom'></div></div><img src='"+rutaImagen+"' class='imgRespuesta'></a></div>";cadena+="<div class='celda txtOption' id='respC"+kx+"_"+mx+"'>"+aRespuestas[k][m]["respuesta"]+"</div>";cadena+="</label>";$("#respuesta"+kx+"_"+mx).html(cadena);}
$('.fancybox').fancybox();}
if(tipo=="escrita")
{$("#respuestas"+kx).addClass("resEscrita");var divRespuesta=$("<div>",{id:"respuesta"+kx+"_00","class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);$("#respuesta"+kx+"_00").html("<input id='resp"+kx+"_00' type='text' class='inputs' placeholder='"+txtTuRespuesta+"'>");$("#resp"+kx+"_00").keyup(function(){comprobarRespuesta("escrita");});}
if(tipo=="escrita amplia")
{$("#respuestas"+kx).addClass("resEscrita");var divRespuesta=$("<div>",{id:"respuesta"+kx+"_00","class":"respuesta"});$("#respuestas"+kx).append(divRespuesta);$("#respuesta"+kx+"_00").html("<textarea id='resp"+kx+"_00' class='inputs' rows='12' cols='40' placeholder='"+txtTuRespuesta+"'></textarea>");$("#resp"+kx+"_00").keyup(function(){comprobarRespuesta("escrita");});}};function extraerDatos()
{tipo_actividad="Test";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
numero_intentos=0;if((xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=null))sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;else sensible_mayusculas="no";if((xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=null))sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;else sensible_acentos="no";tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;globalFeedback=xmlDoc.getElementsByTagName("globalFeedback")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloActividad")[0].childNodes[0].nodeValue;txtTituloResponder=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;orden_preguntas=xmlDoc.getElementsByTagName("orden_preguntas")[0].childNodes[0].nodeValue;numPreguntasTotal=xmlDoc.getElementsByTagName("numero_preguntas_totales")[0].childNodes[0].nodeValue;numPreguntasTotal=parseInt(numPreguntasTotal);numPreguntas=xmlDoc.getElementsByTagName("numero_preguntas_visibles")[0].childNodes[0].nodeValue;numPreguntas=parseInt(numPreguntas);porcentaje_superar_actividad=xmlDoc.getElementsByTagName("porcentaje_superar_actividad")[0].childNodes[0].nodeValue;preguntas=xmlDoc.getElementsByTagName("pregunta");aPreguntas=new Array();aRespuestas=new Array();var aceptar=0;var posicion=0;var colocadas=[];for(m=0;m<numPreguntasTotal;m++)
{if(orden_preguntas=="ALEATORIO")
{aceptar=0;while(aceptar==0)
{posicion=Math.floor((Math.random()*1000));if(posicion<numPreguntasTotal)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas.push(posicion);i=posicion;}
else
{i=m;}
var enunciadoP=preguntas[i].getElementsByTagName("enunciado")[0];var aPreg=new Array();aPreg["tipo"]=preguntas[i].attributes.getNamedItem("tipo").value;aPreg["obligatoria"]=preguntas[i].attributes.getNamedItem("obligatoria").value;aPreg["feedback"]=preguntas[i].attributes.getNamedItem("feedback").value;if((enunciadoP.childNodes[0]!=undefined)&&(enunciadoP.childNodes[0]!=null))aPreg["pregunta"]=enunciadoP.childNodes[0].nodeValue;else aPreg["pregunta"]="";aPreg["tipoE"]=enunciadoP.attributes.getNamedItem("tipo").value;aPreg["video"]=enunciadoP.attributes.getNamedItem("video").value;aPreg["videoT"]=enunciadoP.attributes.getNamedItem("videoStartTime").value;aPreg["audio"]=enunciadoP.attributes.getNamedItem("audio").value;if(enunciadoP.attributes.getNamedItem("image")!=undefined)aPreg["imagen"]=enunciadoP.attributes.getNamedItem("image").value;else aPreg["imagen"]="";aPreguntas[m]=aPreg;var respuestas=preguntas[i].getElementsByTagName("opciones")[0];var opciones=respuestas.getElementsByTagName("opcion");var aResp=new Array();for(j=0;j<opciones.length;j++)
{var aRespI=new Array();aRespI["respuesta"]=opciones[j].childNodes[0].nodeValue;aRespI["correcta"]=opciones[j].attributes.getNamedItem("resp").value;if(opciones[j].attributes.getNamedItem("image")!=undefined)aRespI["imagen"]=opciones[j].attributes.getNamedItem("image").value;else aRespI["imagen"]="";aResp[j]=aRespI;}
aRespuestas[m]=aResp;}
gMargenes=xmlDoc.getElementsByTagName("margenes")[0];mActivo=gMargenes.attributes.getNamedItem("activo").value;margenes=gMargenes.getElementsByTagName("margen");if(mActivo=='si')
{aMargenes=new Array();for(k=0;k<margenes.length;k++)
{aMargen=new Array();aMargen["ini"]=margenes[k].attributes.getNamedItem("ini").value;aMargen["fin"]=margenes[k].attributes.getNamedItem("fin").value;aMargen["mensaje"]=margenes[k].attributes.getNamedItem("mensaje").value;aMargenes[k]=aMargen;}}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtTituloActividadNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSensibleMayusculas=idioma.getElementsByTagName("txtSensibleMayusculas")[0].childNodes[0].nodeValue;txtNoSensibleMayusculas=idioma.getElementsByTagName("txtNoSensibleMayusculas")[0].childNodes[0].nodeValue;txtSensibleAcentos=idioma.getElementsByTagName("txtSensibleAcentos")[0].childNodes[0].nodeValue;txtNoSensibleAcentos=idioma.getElementsByTagName("txtNoSensibleAcentos")[0].childNodes[0].nodeValue;txtTituloErrorAudio=idioma.getElementsByTagName("txtTituloErrorAudio")[0].childNodes[0].nodeValue;txtErrorAudio=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtObligatoria=idioma.getElementsByTagName("txtObligatoria")[0].childNodes[0].nodeValue;txtProgreso=idioma.getElementsByTagName("txtProgreso")[0].childNodes[0].nodeValue;txtPorcentajeMinimo1=idioma.getElementsByTagName("txtPorcentajeMinimo1")[0].childNodes[0].nodeValue;txtPorcentajeMinimo2=idioma.getElementsByTagName("txtPorcentajeMinimo2")[0].childNodes[0].nodeValue;txtPreguntas=idioma.getElementsByTagName("txtPreguntas")[0].childNodes[0].nodeValue;txtContestadas=idioma.getElementsByTagName("txtContestadas")[0].childNodes[0].nodeValue;txtNoContestadas=idioma.getElementsByTagName("txtNoContestadas")[0].childNodes[0].nodeValue;txtNumObligatoria1=idioma.getElementsByTagName("txtNumObligatoria1")[0].childNodes[0].nodeValue;txtNumObligatorias1=idioma.getElementsByTagName("txtNumObligatorias1")[0].childNodes[0].nodeValue;txtNumObligatorias2=idioma.getElementsByTagName("txtNumObligatorias2")[0].childNodes[0].nodeValue;txtFinalizar=idioma.getElementsByTagName("txtFinalizar")[0].childNodes[0].nodeValue;txtMal=idioma.getElementsByTagName("txtMal")[0].childNodes[0].nodeValue;txtBien=idioma.getElementsByTagName("txtBien")[0].childNodes[0].nodeValue;txtVerCorregir=idioma.getElementsByTagName("txtVerCorregir")[0].childNodes[0].nodeValue;txtHasAprobado=idioma.getElementsByTagName("txtHasAprobado")[0].childNodes[0].nodeValue;txtHasSuspendido=idioma.getElementsByTagName("txtHasSuspendido")[0].childNodes[0].nodeValue;txtTuPuntuacionEs=idioma.getElementsByTagName("txtTuPuntuacionEs")[0].childNodes[0].nodeValue;txtPosiblesRespuestas=idioma.getElementsByTagName("txtPosiblesRespuestas")[0].childNodes[0].nodeValue;txtTuRespuesta=idioma.getElementsByTagName("txtTuRespuesta")[0].childNodes[0].nodeValue;txtActividadNoSuperada=idioma.getElementsByTagName("txtActividadNoSuperada")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtAnterior=idioma.getElementsByTagName("txtAnterior")[0].childNodes[0].nodeValue;txtSiguiente=idioma.getElementsByTagName("txtSiguiente")[0].childNodes[0].nodeValue;txtInfoAdicional=idioma.getElementsByTagName("txtInfoAdicional")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();inicializarBotones();}
function inicializarBotones()
{$("#btnAtras").html(txtAnterior);$("#btnAdelante").html(txtSiguiente);$("#btnAtras").click(function(e){e.preventDefault();cambiarPregunta("AT");});$("#btnAdelante").click(function(e){e.preventDefault();cambiarPregunta("AD");});};function inicializarVariablesXapi(){}
function inicializarCorregir(){}
function inicializarXapi(){}
function completarXapi(tipoFinal){}
function abandonarXapi(){}
function responderUnicaXapi(testcorrecta,respuesta,testrespondida,exito){}
function responderMultipleXAPI(correcta,respuesta,testrespondida,exito){}
function responderEscritaXapi(correcta,testrespondida,exito){}
function pulsar(sentido){var origen="";if(sentido=="siguiente"){origen="#btnAdelante"}
else{origen="#btnAtras"}
$(origen).click(function(e){e.preventDefault();if(sentido=="siguiente"){cambiarPregunta("AD");}
else{cambiarPregunta("AT");}});}
function pulsarRadio(){}
function pulsarEscribir(e){}
function pulsarReproducir(e){}
function desmarcarCheck(){}
function marcarCheck(){};function comenzar()
{inicializarVariablesXapi();inicializarXapi();abandonarXapi();$('#contentPreActividad').hide();$('#contentAct').css('top',0);$(".preguntas").hide();$("#pregunta"+cadenaBtn).show();setTimeout(function(){if($("#pistaAudio"+cadenaBtn).length!=0)$('#btnAudio'+cadenaBtn).click();},500);$("#numTest00").html((numBtn+1)+".");$("#indica").html((numBtn+1)+"/"+numPreguntas);$("#avance").css("width",(numBtn+1)*100/numPreguntas+"%");$("#btnAtras").unbind("click").addClass("disable").bind("click",function(e){e.preventDefault();});if(aPreguntas[numBtn]["obligatoria"]=="si")
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}
idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();}
function gestionReproducir(e)
{var id=e.target.getAttribute('id');var cadenaId=id.substring(10,12);var numId=parseInt(cadenaId);if(numId<10)var numIdx="00"+numId;else if(numId<100)var numIdx="0"+numId;else var numIdx=numId;reproducir("audioR"+numIdx);}
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
{$('#errorAudio').show();$('#audioOK').hide();$('#errorAudio').attr("title",txtErrorAudioSoportado);}
else
{$('#errorAudio_'+tipo).show();$('#audioOK_'+tipo).hide();$('#errorAudio_'+tipo).attr("title",txtErrorAudioSoportado);}}
var numBtn=0;var numBtnAnterior=0;var cadenaBtn="000";var respondida=0;var respondido=[];var saltar="no";var correccionActivada=0;function cambiarPregunta(dir)
{numBtnAnterior=numBtn;if(numBtnAnterior<10)cadenaBtnAnterior="00"+numBtnAnterior;else if(numBtnAnterior<100)cadenaBtnAnterior="0"+numBtnAnterior;else cadenaBtnAnterior=numBtnAnterior;if(dir=="AD")
{if(aPreguntas[numBtnAnterior]["tipo"]=="unica")
{respondida=0;respondido[numBtnAnterior]=0;for(m=0;m<aRespuestas[numBtnAnterior].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+cadenaBtnAnterior+"_"+mx+":checked").val()=="on")
{respondida=1;respondido[numBtnAnterior]=1;}}}
if(aPreguntas[numBtnAnterior]["tipo"]=="multiple")
{respondida=0;respondido[numBtnAnterior]=0;for(m=0;m<aRespuestas[numBtnAnterior].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+cadenaBtnAnterior+"_"+mx).is(':checked'))
{respondida=1;respondido[numBtnAnterior]=1;}}}
if(aPreguntas[numBtnAnterior]["tipo"].substring(0,7)=="escrita")
{respondida=0;respondido[numBtnAnterior]=0;if($("#resp"+cadenaBtnAnterior+"_00").val()!="")
{respondida=1;respondido[numBtnAnterior]=1;}}
if(((respondida==1)&&(aPreguntas[numBtnAnterior]["obligatoria"]=="si"))||(aPreguntas[numBtnAnterior]["obligatoria"]!="si"))
{saltar="si";if(numBtn<numPreguntas)
{numBtn++;if(numBtn<10)cadenaBtn="00"+numBtn;else if(numBtn<100)cadenaBtn="0"+numBtn;else cadenaBtn=numBtn;}
if(numBtn==numPreguntas)
{cargarProgreso();}}
else
{saltar="no";}}
else
{respondida=2;if(numBtn>0)
{numBtn--;if(numBtn<10)cadenaBtn="00"+numBtn;else if(numBtn<100)cadenaBtn="0"+numBtn;else cadenaBtn=numBtn;}
saltar="si";}
if(saltar=="si")
{$(".preguntas").hide();$("#pregunta"+cadenaBtn).show();if($("#pistaAudio"+cadenaBtnAnterior).length!=0)document.getElementById('pistaAudio'+cadenaBtnAnterior).pause();$('#iconoAudio'+cadenaBtnAnterior).removeClass("iPause").addClass("iPlay");$('#btnAudio'+cadenaBtn).click();if((aPreguntas[numBtn]!=undefined)&&(numBtn!=numPreguntas))
{if(aPreguntas[numBtn]["obligatoria"]=="si")
{if(aPreguntas[numBtn]["tipo"]=="unica")
{for(m=0;m<aRespuestas[numBtn].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+cadenaBtn+"_"+mx+":checked").val()=="on")
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");$("#btnAdelante").click(function(e){e.preventDefault();cambiarPregunta("AD");});$("#btnAdelante").removeClass("disable").addClass("btn-primary");break;}
else
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}}}
if(aPreguntas[numBtn]["tipo"]=="multiple")
{for(m=0;m<aRespuestas[numBtn].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+cadenaBtn+"_"+mx).is(':checked'))
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");$("#btnAdelante").removeClass("disable").addClass("btn-primary");break;}
else
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}}}
if(aPreguntas[numBtn]["tipo"].substring(0,7)=="escrita")
{if($("#resp"+cadenaBtn+"_00").val().length!=0)
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");$("#btnAdelante").removeClass("disable").addClass("btn-primary");}
else
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}}}
else
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");$("#btnAdelante").removeClass("disable").addClass("btn-primary");}
pulsar("siguiente");}
if(numBtn==0)
{$("#btnAtras").unbind("click").addClass("disable").bind("click",function(e){e.preventDefault();});}
else
{$("#btnAtras").removeClass("disable");$("#btnAtras").unbind("click");pulsar("anterior");}
if(numBtn!=numPreguntas)
{$("#indica").html((numBtn+1)+"/"+numPreguntas);$("#avance").css("width",(numBtn+1)*100/numPreguntas+"%");$("#numTest"+cadenaBtn).html((numBtn+1)+".");}
if(correccionActivada==1)
{if(numBtn==numPreguntas)
{$('#resumen').show();$('#contentAct').hide();$("#btnVerCorreccion").unbind("click");$("#btnVerCorreccion").click(function(e){e.preventDefault();$('#resumen').hide();$('#contentAct').show();numBtn=0;cadenaBtn="000";$("#indica").html((numBtn+1)+"/"+numPreguntas);$("#avance").css("width",(numBtn+1)*100/numPreguntas+"%");$("#numTest"+cadenaBtn).html((numBtn+1)+".");$(".preguntas").hide();$("#pregunta"+cadenaBtn).show();$("#btnAtras").unbind("click").click(function(e){e.preventDefault();cambiarPregunta("AT");});$("#btnAdelante").unbind("click").click(function(e){e.preventDefault();cambiarPregunta("AD");});$("#btnAtras").addClass("disable");$("#btnAdelante").removeClass("disable").addClass("btn-primary");});}}}}
function activarChequedR(e)
{var id=e.target.getAttribute('id');var cadenaIdP=id.substring(4,7);var cadenaId=id.substring(4,11);$("#respuestas"+cadenaIdP+" .respuesta").removeClass("activa");$("#respuesta"+cadenaId).addClass("activa");pulsarRadio();comprobarRespuesta("unica");}
function activarChequedCB(e)
{var id=e.target.getAttribute('id');var cadenaId=id.substring(4,11);if($("#respuesta"+cadenaId).hasClass("activa")){$("#respuesta"+cadenaId).removeClass("activa");desmarcarCheck();comprobarRespuesta("multiple");}
else{$("#respuesta"+cadenaId).addClass("activa");marcarCheck();comprobarRespuesta("multiple");}}
function comprobarRespuesta(tipo)
{if(tipo=="unica")
{if(aPreguntas[numBtn]["obligatoria"]=="si")
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");pulsar("siguiente")
$("#btnAdelante").removeClass("disable").addClass("btn-primary");}}
if(tipo=="multiple")
{if(aPreguntas[numBtn]["obligatoria"]=="si")
{for(m=0;m<aRespuestas[numBtn].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+cadenaBtn+"_"+mx).is(':checked'))
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");pulsar("siguiente");$("#btnAdelante").removeClass("disable").addClass("btn-primary");break;}
else
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}}}}
if(tipo=="escrita")
{if(aPreguntas[numBtn]["obligatoria"]=="si")
{if($("#resp"+cadenaBtn+"_00").val().length!=0)
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click");pulsar("siguiente")
$("#btnAdelante").removeClass("disable").addClass("btn-primary");}
else
{$("#btnAdelante").html("<div class='tooltip derecha'>"+txtObligatoria+"</div>"+$("#btnAdelante").html());$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});}}}}
function cargarProgreso()
{$("#btnAdelante").html(txtSiguiente);$("#btnAdelante").unbind("click").addClass("disable").removeClass("btn-primary").bind("click",function(e){e.preventDefault();});var numContestadas=0;var numNoContestadas=0;var numObligatorias=0;for(l=0;l<respondido.length;l++)
{if(respondido[l]==1)numContestadas++;}
numNoContestadas=numPreguntas-numContestadas;for(l=0;l<aPreguntas.length;l++)
{if(aPreguntas[l]["obligatoria"]=="si")numObligatorias++;}
if(numPreguntas<10)var numPreguntasx="00"+numPreguntas;else if(numPreguntas<100)var numPreguntasx="0"+numPreguntas;else var numPreguntasx=numPreguntas;$("#imPregunta"+numPreguntasx).hide();$("#pMultimedia"+numPreguntasx).hide();$("#tituloResponder"+numPreguntasx).addClass("titFinalizar");$("#respuestas"+numPreguntasx).html("");var porcentaje=(numContestadas*100/numPreguntas);var cadena="";cadena+="<div class='contentFinalizar'>";cadena+="<div class='infoAprobar'>"+txtPorcentajeMinimo1+" "+porcentaje_superar_actividad+"% "+txtPorcentajeMinimo2+"</div>";cadena+="<div id='numPreguntasF' class='numPreguntasF'>"+txtPreguntas+" <strong>["+numPreguntas+"]</strong></div>";cadena+="<div class='graFinalizar'>";cadena+="<div id='barraF' class='barFinalizar'>";cadena+="<div id='numContestadasF' class='numContestadasF' style='width:"+porcentaje+"%;'></div>";cadena+="</div>";cadena+="<div id='numContestadasTxtF' class='numContestadasTxtF numGrafica'>"+numContestadas+" "+txtContestadas+"</div>";cadena+="<div id='numNoContestadasTxtF' class='numNoContestadasTxtF numGrafica'>"+numNoContestadas+" "+txtNoContestadas+"</div>";cadena+="</div>";cadena+="<div class='clear'></div>";cadena+="</div></div>";cadena+="<div class='btnFinalar'>";cadena+="<a href='#' class='btn btn-primary' id='btnFinalizar'>"+txtFinalizar+"</a>";cadena+="</div>";$("#respuestas"+numPreguntasx).html(cadena);$("#btnFinalizar").click(function(e){e.preventDefault();corregir();});}
var correccion=[];var puntosReg=100;function corregir()
{enlace=$("#resp"+kx+"_"+mx+":checked").val();inicializarCorregir();for(k=0;k<numPreguntas;k++)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else var kx=k;if(aPreguntas[k]["tipo"]=="unica")
{respcorrecta="";idpregunta=0;for(x=0;x<preguntas.length;x++){if(preguntas[x].getElementsByTagName("enunciado")[0].innerHTML==aPreguntas[k]["pregunta"]){idpregunta=preguntas[x].id;}}
var respuesta=new Array();var testcorrecta="";for(y=0;y<aRespuestas[k].length;y++){respuesta[y]={"id":"likert_"+y,"description":{"es":aRespuestas[k][y]['respuesta']}};if(aRespuestas[k][y]['correcta']=="1"){testcorrecta="likert_"+y;respcorrecta=aRespuestas[k][y]['respuesta'];}}
var testrespondida="";var exito=0;for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+kx+"_"+mx+":checked").val()=="on")
{if($("#respC"+kx+"_"+mx)[0].innerHTML==respcorrecta){exito=1;}
testrespondida=$("#respC"+kx+"_"+mx)[0].innerHTML;if(aRespuestas[k][m]["correcta"]==1)
{correccion[k]="OK";}
else
{correccion[k]="MAL";}}}
responderUnicaXapi(testcorrecta,respuesta,testrespondida,exito)}
if(aPreguntas[k]["tipo"]=="multiple")
{respcorrecta="";idpregunta=0;for(x=0;x<preguntas.length;x++){if(preguntas[x].getElementsByTagName("enunciado")[0].innerHTML==aPreguntas[k]["pregunta"]){idpregunta=preguntas[x].id;}}
var correcta="";var testrespondida="";var respuesta=new Array();;var exito=0;for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+kx+"_"+mx).is(':checked'))
{if(aRespuestas[k][m]["correcta"]==1)
{correccion[k]="OK";}
else
{correccion[k]="MAL";break;}}
else
{if(aRespuestas[k][m]["correcta"]==1)
{correccion[k]="MAL";break;}}}
for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+kx+"_"+mx).is(':checked'))
{testrespondida+=$("#respC"+kx+"_"+mx)[0].innerHTML+"[,]";}
if(aRespuestas[k][m]["correcta"]==1){correcta+=$("#respC"+kx+"_"+mx)[0].innerHTML+"[,]";}
respuesta[m]={"id":$("#respC"+kx+"_"+mx)[0].innerHTML,"description":{"es":$("#respC"+kx+"_"+mx)[0].innerHTML}};}
if(correccion[k]=="OK"){exito=1;}
responderMultipleXAPI(correcta,respuesta,testrespondida,exito);}
if(aPreguntas[k]["tipo"].substring(0,7)=="escrita")
{respcorrecta="";idpregunta=0;for(x=0;x<preguntas.length;x++){if(preguntas[x].getElementsByTagName("enunciado")[0].innerHTML==aPreguntas[k]["pregunta"]){idpregunta=preguntas[x].id;}}
var respuesta="";var correcta="";var testrespondida="";var exito=0;for(m=0;m<aRespuestas[k].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;var cont=$("#resp"+kx+"_00").val();var resp=aRespuestas[k][m]["respuesta"];correcta=resp;testrespondida=cont;cont=cont.trim();resp=resp.trim();if(sensible_mayusculas=="no")
{cont=cont.toUpperCase();resp=resp.toUpperCase();}
if(sensible_acentos=="no")
{cont=borraAcentos(cont);resp=borraAcentos(resp);}
if(cont==resp)
{correccion[k]="OK";break;}
else
{correccion[k]="MAL";}}
if(correccion[k]=="OK"){exito=1;}
responderEscritaXapi(correcta,testrespondida,exito);}}
correctas=0;incorrectas=0;for(j=0;j<correccion.length;j++)
{if(correccion[j]=="OK")correctas++;}
incorrectas=numPreguntas-correctas;porcentajeAcierto=correctas*100/numPreguntas;if(porcentajeAcierto>=parseInt(porcentaje_superar_actividad))
{var tipoFinal="OK";}
else
{var tipoFinal="noSuperada";}
completarXapi(tipoFinal);puntosReg=parseInt(porcentajeAcierto);$("#numPuntos").html(parseInt(porcentajeAcierto));$("#btnFinalizar").unbind("click");$("#btnAtras").unbind("click");$("#btnAdelante").unbind("click");cargarPantallaFinal(tipoFinal);}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function completarPantallaFinal()
{if(mActivo=='no')
{$("#correccion").addClass("resultadosTest");var cadena="<div class='grafCorrecion'>";cadena+="<div class='titGrafica'>"+txtTuPuntuacionEs+"</div>";cadena+="<div class='contentBarGrafCorreccion'>";cadena+="<div class='barGrafCorreccion'>";cadena+="<div class='numPuntuacion'>"+parseInt(porcentajeAcierto)+"%</div>";cadena+="<div class='barBienGrafCorreccion' style='width:"+parseInt(porcentajeAcierto)+"%'></div>";cadena+="</div>";cadena+="<div class='numBien numGrafica'>"+correctas+" "+txtBien+"</div>";cadena+="<div class='numMal numGrafica'>"+incorrectas+" "+txtMal+"</div>";cadena+="</div>";cadena+="<div class='clear'></div>";cadena+="</div>";cadena+="<div class='btnsExtraResumen'>";cadena+="<a href='#' class='btn btn-large btn-primary' id='btnVerCorreccion'>"+txtVerCorregir+"</a>";cadena+="<a href='#' class='btn' id='btnReiniciar'>"+txtVolverJugar+"</a>";$("#correccion").html(cadena);$("#btnVerCorreccion").click(function(e){e.preventDefault();verCorreccion();});$("#btnReiniciar").click(function(e){e.preventDefault();location.reload();});}
else
{$("#resumen").addClass("valoracionActiva");var indicaFin=0;var mensaje="<ul class='respuestaRangos'>";for(i=0;i<aMargenes.length;i++)
{if((correctas>=aMargenes[i]['ini'])&&(correctas<=aMargenes[i]['fin'])){mensaje+="<li class='valoracionActiva'><span class='numMsgFinal numMsgFinalActiva'>"+aMargenes[i]['ini']+"</span><ul><li>"+aMargenes[i]['mensaje']+"</li></ul></li>";indicaFin=1;}
else if(indicaFin==1){mensaje+="<li><span class='numMsgFinal numMsgFinalActiva'>"+aMargenes[i]['ini']+"</span><ul><li>"+aMargenes[i]['mensaje']+"</li></ul></li>";indicaFin=0;}
else mensaje+="<li><span class='numMsgFinal'>"+aMargenes[i]['ini']+"</span><ul><li>"+aMargenes[i]['mensaje']+"</li></ul></li>";if(i==aMargenes.length-1)
{if(indicaFin==1){mensaje+="<li><span class='numMsgFinal numMsgFinalActiva'>"+aMargenes[i]['fin']+"</span></li>";indicaFin=0;}
else mensaje+="<li><span class='numMsgFinal'>"+aMargenes[i]['fin']+"</span></li>";}}
mensaje+="</ul>";var headTxt="<div class='tituloMensaje'>";if($(document).data("idioma")=="en")headTxt+="Activity completed";else if($(document).data("idioma")=="fr")headTxt+="Activité terminée";else headTxt+="Has completado la actividad";headTxt+="</div>";headTxt+="<div class='tituloActividad'>";headTxt+=enunciado;headTxt+="</div>";var cadena="<div class='grafCorrecionAct'>";cadena+=mensaje;cadena+="<a href='#' class='btn btn-large' id='btnReiniciar'>"+txtVolverJugar+"</a>";cadena+="</div>";$("#correccion").html(cadena).addClass('resultadosTest');$(headTxt).insertBefore($("#correccion"));$("#btnReiniciar").click(function(e){e.preventDefault();location.reload();});}}
function verCorreccion()
{correccionActivada=1;$('#resumen').hide();$('#contentAct').show();$("input").attr("disabled","true");$("textarea").attr("disabled","true");$(".respuesta").removeClass("activa");for(i=0;i<numPreguntas;i++)
{aPreguntas[i]["obligatoria"]="no";if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;if(aPreguntas[i]["tipo"]=="unica")
{for(m=0;m<aRespuestas[i].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+ix+"_"+mx+":checked").val()=="on")
{if(aRespuestas[i][m]["correcta"]==1)
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeOk'></span>");$("#respC"+ix+"_"+mx).addClass("optionOk");}
else
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeError'></span>");}}
else
{if(aRespuestas[i][m]["correcta"]==1)
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeRadioOk'></span>");}
else
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeRadioClear'></span>");}}
var contenidoLabel=$("#respL"+ix+"_"+mx).html();var divLabel=$("<div>",{id:"respL"+ix+"_"+mx,"class":"labelFull"});$(divLabel).html(contenidoLabel);$("#respL"+ix+"_"+mx).replaceWith(divLabel);}
if(correccion[i]=="OK")$("#pregunta"+ix).prepend("<div class='alertTop correcta'>"+txtRespuestaCorrecta+"</div>");else $("#pregunta"+ix).prepend("<div class='alertTop incorrecta'>"+txtRespuestaIncorrecta+"</div>");}
if(aPreguntas[i]["tipo"]=="multiple")
{for(m=0;m<aRespuestas[i].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;if($("#resp"+ix+"_"+mx).is(':checked'))
{if(aRespuestas[i][m]["correcta"]==1)
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeOk'></span>");$("#respC"+ix+"_"+mx).addClass("optionOk");}
else
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeError'></span>");}}
else
{if(aRespuestas[i][m]["correcta"]==1)
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeCheckboxOk'></span>");}
else
{$("#resp"+ix+"_"+mx).replaceWith("<span class='elemenForm typeCheckboxClear'></span>");}}
var contenidoLabel=$("#respL"+ix+"_"+mx).html();var divLabel=$("<div>",{id:"respL"+ix+"_"+mx,"class":"labelFull"});$(divLabel).html(contenidoLabel);$("#respL"+ix+"_"+mx).replaceWith(divLabel);}
if(correccion[i]=="OK")$("#pregunta"+ix).prepend("<div class='alertTop correcta'>"+txtRespuestaCorrecta+"</div>");else $("#pregunta"+ix).prepend("<div class='alertTop incorrecta'>"+txtRespuestaIncorrecta+"</div>");}
if(aPreguntas[i]["tipo"].substring(0,7)=="escrita")
{var cadenaPosibles="<div class='posiblesRespuestas'>";cadenaPosibles+="<div class='titPosiblesRespuestas'>"+txtPosiblesRespuestas+"</div>";cadenaPosibles+="<div class='contentRespuestas'>";cadenaPosibles+="<ol>";for(m=0;m<aRespuestas[i].length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else var mx=m;cadenaPosibles+="<li>"+aRespuestas[i][m]["respuesta"]+"</li>";}
cadenaPosibles+="</ol>";cadenaPosibles+="</div></div>";$("#pregunta"+ix).append(cadenaPosibles);if(correccion[i]=="OK")
{$("#resp"+ix+"_00").addClass("inputOk");}
else
{$("#resp"+ix+"_00").addClass("inputError");}
if(correccion[i]=="OK")$("#pregunta"+ix).prepend("<div class='alertTop correcta'>"+txtRespuestaCorrecta+"</div>");else $("#pregunta"+ix).prepend("<div class='alertTop incorrecta'>"+txtRespuestaIncorrecta+"</div>");}
if(globalFeedback==1)
{if(aPreguntas[i]["feedback"]!="")
{var cadenaAdicional="<div id='divInfoAdicional_"+ix+"' class='contentInfoAdicional'>";cadenaAdicional+="<div class='iconInfoAdicional'>";cadenaAdicional+="<div class='titInfoAdicional'>"+txtInfoAdicional+"</div>";cadenaAdicional+="<div class='txtInfoAdicional' id='textoAdicional_"+ix+"'>"+aPreguntas[i]["feedback"]+"</div>";cadenaAdicional+="</div>";cadenaAdicional+="</div>";cadenaAdicional+="</div>";$("#pregunta"+ix).append(cadenaAdicional);}}}
numBtn=0;cadenaBtn="000";$("#indica").html((numBtn+1)+"/"+numPreguntas);$("#avance").css("width",(numBtn+1)*100/numPreguntas+"%");$("#numTest"+cadenaBtn).html((numBtn+1)+".");$(".preguntas").hide();$("#pregunta"+cadenaBtn).show();setTimeout(function(){if($("#pistaAudio"+cadenaBtn).length!=0)$('#btnAudio'+cadenaBtn).click();},500);$("#btnAtras").unbind("click").click(function(e){e.preventDefault();cambiarPregunta("AT");});$("#btnAdelante").unbind("click").click(function(e){e.preventDefault();cambiarPregunta("AD");});$("#btnAtras").addClass("disable");$("#btnAdelante").removeClass("disable").addClass("btn-primary");}