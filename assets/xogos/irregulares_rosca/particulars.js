var idInterval=0;var finalizado=0;function crear()
{var divPrincipal=$("<div>",{id:"principal"});$('#lienzo').append(divPrincipal);var divwp=$("<div>",{id:"wrapperPasapalabraI","class":"wrapperPasapalabra"});$('#principal').append(divwp);var divcb=$("<div>",{id:"questionBoxI","class":"questionBox"});$('#wrapperPasapalabraI').append(divcb);var divcb2=$("<div>",{id:"questionBoxI2","class":"questionBox2"});$('#questionBoxI').append(divcb2);var divqb=$("<div>",{id:"topQuestionBoxI","class":"topQuestionBox"});$('#questionBoxI2').append(divqb);var divqba=$("<div>",{id:"letterBeginI","class":"letterBegin"});$('#topQuestionBoxI').append(divqba);var divqbb=$("<div>",{id:"questionTxtI","class":"questionTxt"});$('#topQuestionBoxI').append(divqbb);var reproductor='<div class="pistaSonido" id="pistaSonidoPrincipal"><div id="imageSound"></div><div class="timeSound"><span id="tiempo_0" class="infoTime">00:00</span> | <span id="duracion_0" class="infoTime">00:00</span></div></div>';$('#topQuestionBoxI').append(reproductor);var divab=$("<div>",{id:"answerBoxI","class":"answerBox"});$('#questionBoxI2').append(divab);var divaba=$("<div>",{id:"inputAnswerI","class":"inputAnswer"});$('#answerBoxI').append(divaba);var divabaa=$("<input>",{id:"answer",name:"answer",type:"text",autofocus:"on"});$('#inputAnswerI').append(divabaa);var divabb=$("<div>",{id:"submitAnswerI","class":"submitAnswer"});$('#answerBoxI').append(divabb);var divabba=$("<button>",{id:"siguiente","class":"btn"});$('#submitAnswerI').append(divabba);$("#siguiente").html(txtSiguiente);var divabbb=$("<button>",{id:"comprobar","class":"btn btn-primary"});$('#submitAnswerI').append(divabbb);$("#comprobar").html(txtComprobar);var divcl=$("<div>",{id:"containerLettersI","class":"containerLetters"});$('#wrapperPasapalabraI').append(divcl);var divi=$("<div>",{id:"innerI","class":"inner"});$('#containerLettersI').append(divi);var arrayGrad=['172.8','159','145.2','131.4','117.6','103.8','90','76.2','62.4','48.6','34.8','21','7.2','-7.2','-21','-34.8','-48.6','-62.4','-76.2','-90','-103.8','-117.6','-131.4','-145.2','-159','-172.8'];var letras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];for(i=0;i<arrayGrad.length;i++){var extra="";if(elementos[i]['Activa']=='0')extra="turnOff";var divElemento=$("<div>",{id:"circle"+i,"class":"circle "+extra,"data-angle":arrayGrad[i]});$('#innerI').append(divElemento);$("#circle"+i).html(letras[i]);}
var divElementoLet=$("<div>",{id:"letterSelectI","class":"letterSelect"});$('#innerI').append(divElementoLet);}
$(window).load(function(e){$("#comprobar").click(comprobarPalabra);$("#siguiente").click(function(){if(parseInt(elementoActivo)+1==26)activaElemento(0);else activaElemento(parseInt(elementoActivo)+1);});colocarRuleta();colocarTamanoCirculos();colocarLetras();$(".inner").fitText();});$(window).on("resize",function(event){colocarRuleta();colocarTamanoCirculos();colocarLetras();});function colocarTamanoCirculos(){var tamano=$(".inner").width();tamano=parseInt(tamano*0.0781);$(".circle").width(tamano);$(".circle").height(tamano);}
function colocarRuleta(){var tamano;var margenX=0;var margenY=0;if(parseInt($(window).width())>=480){var distanciaX=parseInt($(window).width()*0.55);var distanciaY=$(window).height()-100;if(distanciaX>distanciaY){tamano=distanciaY;var diferencia=distanciaX-tamano;margenX=parseInt(diferencia/2);}else{tamano=distanciaX;var diferencia=distanciaY-tamano;margenY=parseInt(diferencia/2);}}else{tamano=$(window).width();}
$(".inner").width(tamano);$(".inner").height(tamano);$(".inner").css('margin-left',margenX);$(".inner").css('margin-top',margenY);}
var colocarLetras=function(){!jQuery.easing&&(jQuery.easing={});!jQuery.easing.easeOutQuad&&(jQuery.easing.easeOutQuad=function(p){return 1-Math.pow(1-p,2);});var circleController={create:function(circle){var obj={angle:circle.data('angle'),element:circle,measure:$('<div />').css('width',360*8+parseFloat(circle.data('angle'))),update:circleController.update,reposition:circleController.reposition,};obj.reposition();return obj;},update:function(angle){this.angle=angle;this.reposition();},reposition:function(){var sizebox=$(".inner").width()*0.8;var sizecircle=$(".circle").width()/2;var radians=this.angle*Math.PI/180,radius=sizebox/2;this.element.css({marginLeft:(Math.sin(radians)*radius-sizecircle)+'px',marginTop:(Math.cos(radians)*radius-sizecircle)+'px'});}};var spin={circles:[],prep:function(circles){for(var i=0,circle;i<circles.length;i++){this.circles.push(circleController.create($(circles[i])));}}};spin.prep($('.circle'));};;function extraerDatos()
{tipo_actividad="RuletaPalabras";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e){origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=undefined)
{sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;}
else
{sensible_mayusculas="no";}
if(xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=undefined)
{sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;}
else
{sensible_acentos="no";}
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;pregunta=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;txtGrupo=xmlDoc.getElementsByTagName("idioma")[0].getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;elementos=new Array();var palabras=xmlDoc.getElementsByTagName("palabras")[0].getElementsByTagName("pal");for(i=0;i<palabras.length;i++)
{var datosPalabra=new Array();palabra=palabras[i];datosPalabra["Deftipo"]=palabra.getElementsByTagName("deftipo")[0].childNodes[0].nodeValue;datosPalabra["Opcion"]=palabra.getElementsByTagName("opcion")[0].childNodes[0].nodeValue;datosPalabra["Letra"]=palabra.getElementsByTagName("letra")[0].childNodes[0].nodeValue;if(palabra.getElementsByTagName("definicion")[0].childNodes[0]==undefined){datosPalabra["Definicion"]="";}
else{datosPalabra["Definicion"]=palabra.getElementsByTagName("definicion")[0].childNodes[0].nodeValue;}
if(datosPalabra["Palabra"]=palabra.getElementsByTagName("palabra")[0].childNodes[0]==undefined){datosPalabra["Palabra"]="";}
else{datosPalabra["Palabra"]=palabra.getElementsByTagName("palabra")[0].childNodes[0].nodeValue;}
datosPalabra["Activa"]=palabra.getElementsByTagName("palActiva")[0].childNodes[0].nodeValue;elementos[i]=datosPalabra;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloActividadNoSuperada=idioma.getElementsByTagName("txtTituloActividadNoSuperada")[0].childNodes[0].nodeValue;txtTituloActividadSuperada=idioma.getElementsByTagName("txtTituloActividadSuperada")[0].childNodes[0].nodeValue;txtActividadSuperada=idioma.getElementsByTagName("txtActividadSuperada")[0].childNodes[0].nodeValue;txtTituloRespuestaIncorrecta=idioma.getElementsByTagName("txtTituloRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtGrupoCorrecto=idioma.getElementsByTagName("txtGrupoCorrecto")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtEmpieza=idioma.getElementsByTagName("txtEmpieza")[0].childNodes[0].nodeValue;txtContiene=idioma.getElementsByTagName("txtContiene")[0].childNodes[0].nodeValue;txtSiguiente=idioma.getElementsByTagName("txtSiguente")[0].childNodes[0].nodeValue;txtComprobar=idioma.getElementsByTagName("txtComprobar")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});};var elementoActivo=0;var totalActivos=0;var timeoutCanvas=0;const ACT_SUMARINTENTOSFINAL=0;function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);activaElemento(elementoActivo);totalActivos=totalElementosActivos();idInterval=setInterval(contador,1000);document.onkeypress=function(e){var esIE=(document.all);var esNS=(document.layers);tecla=(esIE)?event.keyCode:e.which;if(tecla==13){comprobarPalabra();}}
inicializarPos();}
function totalElementosActivos(){total=0;for(i=0;i<elementos.length;i++){if(elementos[i]["Activa"]==1){total++;}}
return total;}
function redimensionar()
{cargarDescripcionInicio();}
function activaElemento(elem)
{if(reproduciendo){reiniciarReproductor('audio_0');}
if(!finalizado){$("#answer").focus().val("");var contControl=0;while(($("#circle"+elem).hasClass('LetterOK')||$("#circle"+elem).hasClass('LetterError')||$("#circle"+elem).hasClass('turnOff'))&&(contControl<26)){contControl++;elem++;if(elem==26)elem=0;}
if(contControl!=26){elementoActivo=elem;$("#letterSelectI").html(elementos[elem]['Letra']);$(".circle").removeClass('current');$("#circle"+elem).addClass('current');var opcion=txtContiene;if(elementos[elem]['Opcion']=='emp')opcion=txtEmpieza;$("#letterBeginI").html(opcion+elementos[elem]['Letra']);switch(elementos[elem]['Deftipo']){case'IMAGEN':var errorImagen=0;var rutaPista=rutaRecursos+elementos[elem]['Definicion'];$("#pistaSonidoPrincipal").hide();$("#questionTxtI").show();$('#questionTxtI').html("<img src='img_html5/loader.gif'>");var img=new Image();img.src=rutaPista;img.id='imagenPista';img.onload=function(){errorImagen=1;$("#questionTxtI").html('');$("#questionTxtI").append(img);}
setTimeout(function(){if(errorImagen==0)errores(0,-1);},5000);break;case'AUDIO':var rutaPista=rutaRecursos+elementos[elem]['Definicion'];var rutaPistaOgg=rutaRecursosInicio+elementos[elem]['Definicion'];clearTimeout(timeoutCanvas);$(".timeSound").show();$("#pistaSonidoPrincipal").show();$("#questionTxtI").text("");$("#questionTxtI").hide();var cadena="<audio id='audio_0'><source src='"+rutaPista+"' type='audio/mpeg'></source><source src='"+rutaPista.substring(0,rutaPista.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaPistaOgg.substring(0,rutaPistaOgg.length-3)+"ogg' onError='errores(1,-1);' type='audio/ogg'></source></audio>";cadena+="<div class='groupPlayer' id='contenedorPlayer_0'>";cadena+="<div id='iconoAudio_0' class='iPlayer pPlay'></div>";cadena+="<div class='playerEduca'></div>";cadena+="<canvas id='reproductor_0' class='canvasPlayer' width='131' height='131'></canvas>";cadena+="<div class='bgPlayer'></div>";cadena+="</div>";$("#imageSound").html(cadena);$('#contenedorPlayer_0').click(function(){reproducirClick("audio_0");});controlDuracion("audio_0");break;default:$("#pistaSonidoPrincipal").hide();$("#questionTxtI").show();$("#questionTxtI").html(elementos[elem]['Definicion']);}}else{$("#letterBeginI").hide();$("#questionTxtI").hide();$("#answerBoxI").hide();cargarPantallaFinal('OK');}}}
function controlDuracion(media){var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);if(!isNaN(audio.duration))
{controlDuracion2(media);reproducir(media);}
else
{setTimeout(function(){controlDuracion(media);},50);}}
var audiosControlados=[];function controlDuracion2(media){audiosControlados[media]=true;var numElemento=parseInt(media.substring(6,8),10);duracion=document.getElementById(media).duration;var seg=duracion;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;if(isNaN(min))document.getElementById('duracion_'+numElemento).innerHTML="--:--";else document.getElementById('duracion_'+numElemento).innerHTML=min+":"+seg;controlTiempo(media);actualizarReproductor(numElemento);}
function controlTiempo(media)
{var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);var seg=audio.currentTime;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;document.getElementById('tiempo_'+numElemento).innerHTML=min+":"+seg;if(!audio.ended)
{setTimeout(function(){controlTiempo(media);},1000);}
else
{pos[numElemento]=-Math.PI/2;posS[numElemento]=pos[numElemento]+salto;$('#iconoAudio_'+numElemento).removeClass('pPause');$('#iconoAudio_'+numElemento).addClass('pPlay');var miLienzo=document.getElementById('reproductor_'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.clearRect(0,0,240,240);clearTimeout(timeoutCanvas);document.getElementById('tiempo_'+numElemento).innerHTML="00:00";try{audio.currentTime=0;}catch(e){}
audio.pause();reproduciendo=false;if(audio.currentTime!=0)document.getElementById(media).load();}}
function reiniciarReproductor(media){var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);pos[numElemento]=-Math.PI/2;posS[numElemento]=pos[numElemento]+salto;$('#iconoAudio_'+numElemento).removeClass('pPause');$('#iconoAudio_'+numElemento).addClass('pPlay');var miLienzo=document.getElementById('reproductor_'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.clearRect(0,0,240,240);clearTimeout(timeoutCanvas);document.getElementById('tiempo_'+numElemento).innerHTML="00:00";try{audio.currentTime=0;}catch(e){}
audio.pause();reproduciendo=false;}
var salto=2*Math.PI/100;var pos=[];var posS=[];function inicializarPos(){pos[0]=-Math.PI/2;posS[0]=pos[0]+salto;for(i=0;i<elementos.length;i++){if(elementos[i]["Activa"]==1){switch(elementos[i]["Deftipo"]){case'AUDIO':pos[i+1]=-Math.PI/2;posS[i+1]=pos[i+1]+salto;break;}}}}
function actualizarReproductor(numElemento)
{var audio=document.getElementById("audio_"+numElemento);duracion=audio.duration;tiempoSalto=duracion/100*1000;var miLienzo=document.getElementById('reproductor_'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.beginPath();lienzo.strokeStyle='#99CC33';lienzo.lineCap='round';lienzo.shadowOffsetX=0;lienzo.shadowOffsetY=0;lienzo.shadowBlur=10;lienzo.shadowColor="rgba(153, 204, 51, 0.6)";lienzo.lineWidth=10.0;lienzo.arc(65,65,60,pos[numElemento],posS[numElemento],false);lienzo.stroke();pos[numElemento]=posS[numElemento];posS[numElemento]=posS[numElemento]+salto;if(posS[numElemento]<=3*Math.PI/2)
{timeoutCanvas=setTimeout(function(){actualizarReproductor(numElemento)},tiempoSalto);}
else
{pos[numElemento]=-Math.PI/2;posS[numElemento]=pos[numElemento]+salto;}}
var reproduciendo=false;function reproducir(media)
{var numElemento=parseInt(media.substring(6,8),10);document.getElementById(media).play();reproduciendo=true;$('#iconoAudio_'+numElemento).removeClass('pPlay');$('#iconoAudio_'+numElemento).addClass('pPause');}
function reproducirClick(media)
{var numElemento=parseInt(media.substring(6,8),10);if($('#iconoAudio_'+numElemento).hasClass("pPlay"))
{document.getElementById(media).play();reproduciendo=true;$('#iconoAudio_'+numElemento).removeClass("pPlay");$('#iconoAudio_'+numElemento).addClass("pPause");setTimeout(function(){actualizarReproductor(numElemento)},tiempoSalto);controlTiempo(media);}
else
{$('#iconoAudio_'+numElemento).removeClass("pPause");$('#iconoAudio_'+numElemento).addClass("pPlay");document.getElementById(media).pause();reproduciendo=false;clearTimeout(timeoutCanvas);}}
var palabrasCorrectas=[];var palabrasErroneas=[];function comprobarPalabra()
{if(!finalizado){if($("#answer").val().length){cont=$("#answer").val();contOriginal=cont;resp=elementos[elementoActivo]['Palabra'];if(sensible_mayusculas=="no"){cont=cont.toUpperCase();resp=resp.toUpperCase();}
if(sensible_acentos=="no"){cont=borraAcentos(cont);resp=borraAcentos(resp);}
arrayResp=resp.split(",");var correcta=0;for(i=0;i<arrayResp.length;i++){if(cont==arrayResp[i]){correcta=1;}}
if(correcta){palabrasCorrectas[elementos[elementoActivo]["Letra"]]=contOriginal;$("#circle"+elementoActivo).addClass('LetterOK');}else{palabrasErroneas[elementos[elementoActivo]["Letra"]]=contOriginal;actualizaPuntos();actualizarIntentos();$("#circle"+elementoActivo).addClass('LetterError');}
var sig=parseInt(elementoActivo)+1;if(sig==26)sig=0;activaElemento(sig);}}}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function compruebaFinal()
{if(mostradosA.length==$(".correctaEl").length){cargarPantallaFinal('OK');}}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var mpos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,mpos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$(".elementos").unbind("click");cargarPantallaFinal('intentos');puntosReg=0;$("#numPuntos").html("0");}}
var puntosReg=100;function actualizaPuntos()
{puntosPregunta=100/numero_intentos;puntosReg=parseInt(puntosReg-puntosPregunta);if(puntosReg<=0){puntosReg=0;}
$("#numPuntos").html(puntosReg);}
function completarPantallaFinal(){for(i=0;i<elementos.length;i++){if(elementos[i]["Activa"]==1){var mcorrecto;var mpalabraerronea;var clase;if(palabrasCorrectas[elementos[i]["Letra"]]==undefined){mcorrecto=false;clase=' respuestaIncorrecta';if(palabrasErroneas[elementos[i]["Letra"]]==undefined){mpalabraerronea='';}else{mpalabraerronea=palabrasErroneas[elementos[i]["Letra"]];}}else{mcorrecto=true;clase='';}
var cadenaHTML="";cadenaHTML+="<li>";cadenaHTML+="<div class='accordionButton' id='accordion_"+i+"'>";cadenaHTML+="<div class='contentRespuesta"+clase+"' id='contentRespuesta_"+i+"'>";cadenaHTML+="<span class='numRespuesta' id='numRespuesta_"+i+"'>"+elementos[i]["Letra"]+"</span>";cadenaHTML+="<span class='txtRespuesta'>";if((!mcorrecto)&&(mpalabraerronea!='')){cadenaHTML+="<span class='tachado' id='pEscrita_"+i+"'>"+mpalabraerronea+"</span>";}
cadenaHTML+="<span id='pCorrecta_"+i+"'>"+elementos[i]["Palabra"]+"</span></span>";cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="<div class='accordionContent'>";cadenaHTML+="<div class='contentInfoRespuesta'>";cadenaHTML+="<div class='contentPista'>";switch(elementos[i]["Deftipo"]){case'TEXTO':cadenaHTML+="<div class='pistaTexto'><span id='pista_"+i+"'>"+elementos[i]["Definicion"]+"</span></div>";break;case'IMAGEN':cadenaHTML+="<div class='pistaImagen' id='pistaImagenFinal_"+i+"'>";cadenaHTML+="<img src='"+rutaRecursos+elementos[i]['Definicion']+"'>";cadenaHTML+="</div>";break;case'AUDIO':var num=i+1;var rutaPista=rutaRecursos+elementos[i]['Definicion'];var rutaPistaOgg=rutaRecursosInicio+elementos[i]['Definicion'];cadenaHTML+="<div class='pistaSonido'>";cadenaHTML+="<div class='imageSound' id='imageSound_"+num+"'>";cadenaHTML+="<audio id='audio_"+num+"'><source src='"+rutaPista+"' type='audio/mpeg'></source><source src='"+rutaPista.substring(0,rutaPista.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaPistaOgg.substring(0,rutaPistaOgg.length-3)+"ogg' onError='errores(1,-1);' type='audio/ogg'></source></audio>";cadenaHTML+="<div class='groupPlayer' id='contenedorPlayer_"+num+"'>";cadenaHTML+="<div id='iconoAudio_"+num+"' class='iPlayer pPlay'></div>";cadenaHTML+="<div class='playerEduca'></div>";cadenaHTML+="<canvas id='reproductor_"+num+"' class='canvasPlayer' width='131' height='131'></canvas>";cadenaHTML+="<div class='bgPlayer'></div>";cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="<div class='timeSound'><span id='tiempo_"+num+"' class='infoTime'>00:00</span> | <span id='duracion_"+num+"' class='infoTime'>00:00</span></div>";cadenaHTML+="</div>";break;}
cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="</div>";cadenaHTML+="</li>";$("#listaFinal").html($("#listaFinal").html()+cadenaHTML);}}
for(i=0;i<elementos.length;i++){if(elementos[i]["Activa"]==1){switch(elementos[i]["Deftipo"]){case'AUDIO':var num=i+1;$('#contenedorPlayer_'+num).click(function(parametro){var ID=this.id;var parcial=ID.split('_');reproducirClick("audio_"+parcial[1]);});break;}}}
$('.accordionButton').click(function(){$('.accordionButton').removeClass('on');$('.accordionContent').slideUp('slow');if($(this).next().is(':hidden')==true){$(this).addClass('on');$(this).next().slideDown('slow');var ID=this.id;var parcial=ID.split('_');var mID=parseInt(parcial[1]);mID++;switch(elementos[mID-1]["Deftipo"]){case'AUDIO':if(typeof(audiosControlados["audio_"+mID])=='undefined'){controlDuracion2("audio_"+mID);}
break;}
pararAudio();}
else
{pararAudio();}});$('.accordionContent').hide();}
function pararAudio(){for(i=0;i<elementos.length;i++){if(elementos[i]["Activa"]==1){switch(elementos[i]["Deftipo"]){case'AUDIO':reiniciarReproductor("audio_"+(i+1));break;}}}
inicializarPos();}