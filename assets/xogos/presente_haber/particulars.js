var idInterval=0;function crear()
{var divContentElementos=$("<div>",{id:"contentElementos"});var divContentElementosA=$("<div>",{id:"contentElementosA","class":"col-left"});$(divContentElementos).append(divContentElementosA);var divContentElementosB=$("<div>",{id:"contentElementosB","class":"col-right"});$(divContentElementos).append(divContentElementosB);var divContentElementosMedio=$("<div>",{id:"contentElementosMedio","class":"container-canvas"});$(divContentElementos).append(divContentElementosMedio);$('#lienzo').append(divContentElementos);cargar();}
function cargar()
{var countAudio=0;var mostrados=[];var repetido=0;for(i=0;i<grupos.length;i++){repetido=1;aleatorio=0;while(aleatorio>=grupos.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var btnElementoA=$("<div>",{id:"elementoA"+i,"class":"btn"});$('#contentElementosA').append(btnElementoA);var divElementoA=$("<div>",{id:"divElementoA"+i,"class":"container-btn"});$('#elementoA'+i).append(divElementoA);var divContElementoA=$("<div>",{id:"divContElementoA"+i});$('#divElementoA'+i).append(divContElementoA);var divBgElementoA=$("<div>",{id:"divBgElementoA"+i,"class":"bgActive"});$('#divElementoA'+i).append(divBgElementoA);var bullElementoA=$("<div>",{id:"bullElementoA"+i,"class":"bull-active"});$('#elementoA'+i).append(bullElementoA);if(grupos[aleatorio]["elementoA_Tipo"]=="TEXTO"){$("#divContElementoA"+i).addClass("btn-txt").html(grupos[aleatorio]["elementoA_Valor"]);}
else if(grupos[aleatorio]["elementoA_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[aleatorio]["elementoA_Valor"];$("#divContElementoA"+i).addClass("btn-image").html("<img src='"+src+"'>");}
else if(grupos[aleatorio]["elementoA_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudio_A"+countAudio+"' style='display:none'>";cadenaAudio+="<div id='audioTag_A"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio_A"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio_A"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK_A"+countAudio+"'><span id='iconoAudio_A"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#divContElementoA"+i).addClass("btn-sound").attr('data-idaudio','A'+countAudio).html(cadenaAudio);var rutaAudio=rutaRecursos+grupos[aleatorio]["elementoA_Valor"];var rutaAudioOgg=rutaRecursosInicio+grupos[aleatorio]["elementoA_Valor"];var audioCadena="<audio id='pistaAudio_A"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",0,1);' type='audio/ogg'></source></audio>";$('#audioTag_A'+countAudio).html(audioCadena);$('#btnAudio_A'+countAudio).show();$('#btnAudio_A'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_A"+$(this).attr('data-orden'),"iconoAudio_A"+$(this).attr('data-orden'),1);});countAudio++;}
numAudiosA=countAudio;}
mostradosA=mostrados;countAudio=0;mostrados=[];repetido=0;for(i=0;i<grupos.length;i++){repetido=1;aleatorio=0;while(aleatorio>=grupos.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var btnElementoB=$("<div>",{id:"elementoB"+i,"class":"btn"});$('#contentElementosB').append(btnElementoB);var divElementoB=$("<div>",{id:"divElementoB"+i,"class":"container-btn"});$('#elementoB'+i).append(divElementoB);var divContElementoB=$("<div>",{id:"divContElementoB"+i});$('#divElementoB'+i).append(divContElementoB);var divBgElementoB=$("<div>",{id:"divBgElementoB"+i,"class":"bgActive"});$('#divElementoB'+i).append(divBgElementoB);var bullElementoB=$("<div>",{id:"bullElementoB"+i,"class":"bull-active"});$('#elementoB'+i).append(bullElementoB);if(grupos[aleatorio]["elementoB_Tipo"]=="TEXTO"){$("#divContElementoB"+i).addClass("btn-txt").html(grupos[aleatorio]["elementoB_Valor"]);}
else if(grupos[aleatorio]["elementoB_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[aleatorio]["elementoB_Valor"];$("#divContElementoB"+i).addClass("btn-image").html("<img src='"+src+"'>");}
else if(grupos[aleatorio]["elementoB_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudio_B"+countAudio+"' style='display:none'>";cadenaAudio+="<div id='audioTag_B"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio_B"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio_B"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK_B"+countAudio+"'><span id='iconoAudio_B"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#divContElementoB"+i).addClass("btn-sound").attr('data-idaudio','B'+countAudio).html(cadenaAudio);var rutaAudio=rutaRecursos+grupos[aleatorio]["elementoB_Valor"];var rutaAudioOgg=rutaRecursosInicio+grupos[aleatorio]["elementoB_Valor"];var audioCadena="<audio id='pistaAudio_B"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",0,2);' type='audio/ogg'></source></audio>";$('#audioTag_B'+countAudio).html(audioCadena);$('#btnAudio_B'+countAudio).show();$('#btnAudio_B'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_B"+$(this).attr('data-orden'),"iconoAudio_B"+$(this).attr('data-orden'),1);});countAudio++;}
numAudiosB=countAudio;}
mostradosB=mostrados;$('#contentElementos .btn').bind("click",gestionEleccion);$('.btn-sound').bind("click",function(e){if($(this).hasClass('sound-active')){$('#contentElementos .btn').bind("click",gestionEleccion);$(".correctaEl").unbind('click');}
else $('#contentElementos .btn').unbind("click");e.stopPropagation();$(this).toggleClass('sound-active');var eleF=$(this).attr('data-idaudio');gestionReproducir("pistaAudio_"+eleF,"iconoAudio_"+eleF,1);});setTimeout(function(){$("#contentElementosMedio").append("<canvas id='canvas' width='"+$("#contentElementosMedio").width()+"' height='"+Math.max($(".col-left").height(),$(".col-right").height())+"'></canvas>");anchuraCanvas=$("#contentElementosMedio").width();},500);};function extraerDatos()
{tipo_actividad="RelacionarColumnas";sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
if($(document).data("PRMO")=='3'){colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;}else{colorFondo='0x7cb139';}
colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);if($(document).data("PRMO")=='3'){colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;}else{colorBotones='0xFCA800';}
colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;pregunta=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;txtGrupo=xmlDoc.getElementsByTagName("idioma")[0].getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;grupos=new Array();var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{var datosPareja=new Array();datosPareja["id"]=parejas[i].attributes.getNamedItem("id").value;elementoA=parejas[i].getElementsByTagName("elementoA")[0];elementoB=parejas[i].getElementsByTagName("elementoB")[0];datosPareja["elementoA_Tipo"]=elementoA.attributes.getNamedItem("tipo").value;datosPareja["elementoA_Valor"]=elementoA.childNodes[0].nodeValue;datosPareja["elementoB_Tipo"]=elementoB.attributes.getNamedItem("tipo").value;datosPareja["elementoB_Valor"]=elementoB.childNodes[0].nodeValue;grupos[i]=datosPareja;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloActividadNoSuperada=idioma.getElementsByTagName("txtTituloActividadNoSuperada")[0].childNodes[0].nodeValue;txtTituloActividadSuperada=idioma.getElementsByTagName("txtTituloActividadSuperada")[0].childNodes[0].nodeValue;txtActividadSuperada=idioma.getElementsByTagName("txtActividadSuperada")[0].childNodes[0].nodeValue;txtTituloRespuestaIncorrecta=idioma.getElementsByTagName("txtTituloRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtGrupoCorrecto=idioma.getElementsByTagName("txtGrupoCorrecto")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();dibujaTodos();}
function gestionEleccion()
{var tipo=$(this).attr('id').substring(8,9);if($(this).hasClass('btn-active')){$("#contentElementos"+tipo+" .btn").removeClass('btn-active').removeClass('select'+tipo);}else{$("#contentElementos"+tipo+" .btn").removeClass('btn-active').removeClass('select'+tipo);$(this).addClass('btn-active').addClass('select'+tipo);}
var numSel=$(".btn-active").length;if(numSel==2)compruebaPareja();}
var arrayDibujados=new Array();function dibuja()
{var arrayDibuja=new Array($('.btn-active:first').attr('id'),$('.btn-active:last').attr('id'));arrayDibujados.push(arrayDibuja);var pInicio=$('.btn-active:first').position().top+$('.btn-active:first .bull-active').position().top+2;var pFin=$('.btn-active:last').position().top+$('.btn-active:last .bull-active').position().top+2;$('.btn-active').addClass('btn-solution').addClass('btn-active-color').removeClass('btn-active');linea(pInicio,pFin,'#6ba118');}
function linea(inicio,fin,color)
{var c=document.getElementById("canvas");var ctx=c.getContext("2d");ctx.beginPath();ctx.moveTo(16,inicio);ctx.lineTo(anchuraCanvas-16,fin);ctx.strokeStyle=color;ctx.stroke();}
function dibujaTodos()
{setTimeout(function(){$("#contentElementosMedio").html("").append("<canvas id='canvas' width='"+$("#contentElementosMedio").width()+"' height='"+Math.max($(".col-left").height(),$(".col-right").height())+"'></canvas>");anchuraCanvas=$("#contentElementosMedio").width();var c=document.getElementById("canvas");var ctx=c.getContext("2d");for(i=0;i<arrayDibujados.length;i++){var pInicio=$('#'+arrayDibujados[i][0]).position().top+$('#'+arrayDibujados[i][0]+" .bull-active").position().top+2;var pFin=$('#'+arrayDibujados[i][1]).position().top+$('#'+arrayDibujados[i][1]+" .bull-active").position().top+2;linea(pInicio,pFin,'#6ba118');}},100);}
var parejasCorrectas=[];function compruebaPareja()
{var parejaCorrecta=0;var idA=$(".selectA").attr("id");var idB=$(".selectB").attr("id");var posA=idA.substring(9,idA.length);var posB=idB.substring(9,idB.length);if(mostradosA[posA]==mostradosB[posB])parejaCorrecta=1;else parejaCorrecta=0;if(parejaCorrecta){parejasCorrectas[parejasCorrectas.length]=mostradosA[posA];$(".selectA,.selectB").addClass('correctaEl');$(".selectA").unbind("click").removeClass('selectA');$(".selectB").unbind("click").removeClass('selectB');dibuja();compruebaFinal();}
else{actualizarIntentos();actualizaPuntos();$(".selectA,.selectB").addClass("btnError").removeClass('btn-active');$('#contentElementos .btn').unbind("click");setTimeout(function(){$(".selectA,.selectB").removeClass("btnError");$(".selectA").removeClass('selectA');$(".selectB").removeClass('selectB');$('#contentElementos .btn').bind("click",gestionEleccion);$(".correctaEl").unbind('click');},500);}}
function compruebaFinal()
{if(mostradosA.length==$(".correctaEl").length/2){cargarPantallaFinal('OK');}}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$(".elementos").unbind("click");cargarPantallaFinal('intentos');puntosReg=0;$("#numPuntos").html("0");}}
var puntosReg=100;function actualizaPuntos()
{var actuales=parseInt(puntosReg);var descuento=parseInt(puntosReg/numero_intentos);var cantidadActual=actuales-descuento;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
var compruebaFin=0;function reproducir(media,icono)
{try{document.getElementById(media).currentTime=0;}catch(e){}
document.getElementById(media).pause();if(document.getElementById(media).currentTime!=0)document.getElementById(media).load();document.getElementById(media).play();$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");clearInterval(compruebaFin);compruebaFin=setInterval(function(){controlFinalAudio(media,icono);},500);}
function gestionReproducir(media,icono,tipo)
{if(tipo==1)$(".elementos").unbind("click");if($("#"+icono).hasClass("iPlay"))
{if(tipo==1)pararTodosAudios();else pararTodosAudiosFinal();$(".btn-sound[data-idaudio='"+media.substring(11,media.length)+"']").addClass('sound-active');$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");reproducir(media,icono);}
else
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");document.getElementById(media).pause();}
if(tipo==1)setTimeout(function(){$(".elementos").bind("click",gestionEleccion);},200);}
function pararTodosAudios()
{$('.btn-sound').removeClass('sound-active');for(m=0;m<numAudiosA;m++){if($("#iconoAudio_A"+m).hasClass("iPause")){$("#iconoAudio_A"+m).addClass("iPlay");$("#iconoAudio_A"+m).removeClass("iPause");document.getElementById("pistaAudio_A"+m).pause();}}
for(m=0;m<numAudiosB;m++){if($("#iconoAudio_B"+m).hasClass("iPause")){$("#iconoAudio_B"+m).addClass("iPlay");$("#iconoAudio_B"+m).removeClass("iPause");document.getElementById("pistaAudio_B"+m).pause();}}}
function pararTodosAudiosFinal()
{$('.btn-sound').removeClass('sound-active');for(m=0;m<numAudiosA;m++){if($("#iconoAudio_AF"+m).hasClass("iPause")){$("#iconoAudio_AF"+m).addClass("iPlay");$("#iconoAudio_AF"+m).removeClass("iPause");document.getElementById("pistaAudio_AF"+m).pause();}}
for(m=0;m<numAudiosB;m++){if($("#iconoAudio_BF"+m).hasClass("iPause")){$("#iconoAudio_BF"+m).addClass("iPlay");$("#iconoAudio_BF"+m).removeClass("iPause");document.getElementById("pistaAudio_BF"+m).pause();}}}
function controlFinalAudio(media,icono)
{if(document.getElementById(media).ended)
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");$(".sound-active").toggleClass('sound-active');$('#contentElementos .btn').bind("click",gestionEleccion);clearInterval(compruebaFin);}}
function errores(n,tipo,col)
{var colN='A';if(col==2)colN='B';if(tipo==0)$(".btn-sound[data-idaudio='"+colN+n+"']").removeClass('sound-active').addClass('sound-error').unbind('click');if(tipo==1)$(".btn-sound[data-idaudio='"+colN+"F"+n+"']").removeClass('sound-active').addClass('sound-error').unbind('click');}
function completarPantallaFinal()
{pararTodosAudios();var divContentElementosFinal=$("<div>",{id:"contentElementosFinal"});$("#correccion").append(divContentElementosFinal);$(".groupInfoRespuestas").prepend($("#correccion"));for(k=0;k<grupos.length;k++){var divCajaPareja=$("<div>",{id:"cajaPareja"+k,"class":"cajaPareja"});$('#contentElementosFinal').append(divCajaPareja);var divArrow=$("<div>",{id:"arrowCardF"+k,"class":"arrowCard"});$('#cajaPareja'+k).prepend(divArrow);}
var countAudio=0;for(i=0;i<grupos.length;i++){var divElementoAFinal=$("<div>",{id:"elementoAFinal"+i,"class":"cardContainerCorreccion"});$("#contentElementosFinal").append(divElementoAFinal);if(grupos[i]["elementoA_Tipo"]=="TEXTO"){$("#elementoAFinal"+i).html("<div class='cardTxt'><div class='scrollbox'>"+grupos[i]["elementoA_Valor"]+"</div></div>");}
else if(grupos[i]["elementoA_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[i]["elementoA_Valor"];$("#elementoAFinal"+i).html("<div class='cardImage'><img src='"+src+"'></div>");}
else if(grupos[i]["elementoA_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudio_AF"+countAudio+"' style='display:none'>";cadenaAudio+="<div id='audioTag_AF"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio_AF"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio_AF"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK_AF"+countAudio+"'><span id='iconoAudio_AF"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#elementoAFinal"+i).html("<div class='cardSound btn-sound' data-idaudio='AF"+countAudio+"'>"+cadenaAudio+"</div>");var rutaAudio=rutaRecursos+grupos[i]["elementoA_Valor"];var rutaAudioOgg=rutaRecursosInicio+grupos[i]["elementoA_Valor"];var audioCadena="<audio id='pistaAudio_AF"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",1,1);' type='audio/ogg'></source></audio>";$('#audioTag_AF'+countAudio).html(audioCadena);$('#btnAudio_AF'+countAudio).show();$('#btnAudio_AF'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_AF"+$(this).attr('data-orden'),"iconoAudio_AF"+$(this).attr('data-orden'),2);});countAudio++;}}
countAudio=0;for(i=0;i<grupos.length;i++){var divElementoBFinal=$("<div>",{id:"elementoBFinal"+i,"class":"cardContainerCorreccion"});$("#contentElementosFinal").append(divElementoBFinal);if(grupos[i]["elementoB_Tipo"]=="TEXTO"){$("#elementoBFinal"+i).html("<div class='cardTxt'><div class='scrollbox'>"+grupos[i]["elementoB_Valor"]+"</div></div>");}
else if(grupos[i]["elementoB_Tipo"]=="IMAGEN"){var src=rutaRecursos+grupos[i]["elementoB_Valor"];$("#elementoBFinal"+i).html("<div class='cardImage'><img src='"+src+"'></div>");}
else if(grupos[i]["elementoB_Tipo"]=="AUDIO"){var cadenaAudio="<div class='pistaAudio' id='pAudio_BF"+countAudio+"' style='display:none'>";cadenaAudio+="<div id='audioTag_BF"+countAudio+"'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio_BF"+countAudio+"' data-orden='"+countAudio+"'>";cadenaAudio+="<div class='errorSound' id='errorAudio_BF"+countAudio+"'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK_BF"+countAudio+"'><span id='iconoAudio_BF"+countAudio+"' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#elementoBFinal"+i).html("<div class='cardSound btn-sound' data-idaudio='BF"+countAudio+"'>"+cadenaAudio+"</div>");var rutaAudio=rutaRecursos+grupos[i]["elementoB_Valor"];var rutaAudioOgg=rutaRecursosInicio+grupos[i]["elementoB_Valor"];var audioCadena="<audio id='pistaAudio_BF"+countAudio+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+countAudio+",1,2);' type='audio/ogg'></source></audio>";$('#audioTag_BF'+countAudio).html(audioCadena);$('#btnAudio_BF'+countAudio).show();$('#btnAudio_BF'+countAudio).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_BF"+$(this).attr('data-orden'),"iconoAudio_BF"+$(this).attr('data-orden'),2);});countAudio++;}}
for(j=0;j<grupos.length;j++){$('#cajaPareja'+j).append($("#elementoAFinal"+j));$('#cajaPareja'+j).append($("#elementoBFinal"+j));for(m=0;m<parejasCorrectas.length;m++){if(parejasCorrectas[m]==j){$('#cajaPareja'+j).addClass('parejaOk');}}}
$('.btn-sound').bind("click",function(e){e.stopPropagation();$(this).toggleClass('sound-active');var eleF=$(this).attr('data-idaudio');gestionReproducir("pistaAudio_"+eleF,"iconoAudio_"+eleF,0);});}