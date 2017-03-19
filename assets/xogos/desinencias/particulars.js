var idInterval=0;var limiteHuecos=1000;function crear()
{for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;var divCuadro=$("<div>",{id:"cuadro"+ix,"class":"cuadroPalabras"});$('#palabrasDisponibles').append(divCuadro);var divPalabra=$("<div>",{id:"cajaPalabra"+ix,"class":"cajaPalabras res"});$('#cuadro'+ix).append(divPalabra);if(forma_completar!="escribir")
{var divPalabra=$("<div>",{id:"cajaPalabraFondo"+ix,"class":"cajaPalabras pFondo"});$('#cuadro'+ix).append(divPalabra);}}
var cadena="";var posicion=0;for(j=0;j<pa.length;j++)
{if(j<10)var jx="00"+j;else if(j<100)var jx="0"+j;else var jx=j;cadena+=texto.substring(posicion,pos[j]);posicion=pos[j]+pa[j].length;if(forma_completar=="escribir")cadena+="<input type='text' id='hueco"+jx+"' class='huecos'/>";else cadena+="<div id='hueco"+jx+"' class='huecos'></div>";}
cadena+=texto.substring(posicion,texto.length);cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$('#textoCompletar').html(cadena);cargar();}
function cargar()
{var colocadas=[];var aceptar=0;for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;while(aceptar==0)
{posicion=Math.floor((Math.random()*limiteHuecos));if(posicion<pa.length)
{aceptar=1;for(k=0;k<colocadas.length;k++)
{if(colocadas[k]==posicion)
{aceptar=0;}}}}
colocadas[i]=posicion;aceptar=0;$("#cajaPalabra"+ix).html(pa[posicion]);if(forma_completar!="escribir")$("#cajaPalabraFondo"+ix).html(pa[posicion]);}
definir();}
function definir()
{$("body").addClass("unselectable");if(forma_completar=="clickar")
{$("#palabras").addClass("click");$("#palabrasOrdenar").addClass("click");for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;$("#cajaPalabra"+ix).click(mover);}}
else if(forma_completar=="escribir")
{$(".huecos").blur(compruebaPalabraEscribir);$(".huecos").focus(borraOnFocus);$("#palabras").addClass("escribir");$("#palabrasOrdenar").addClass("escribir");}};function extraerDatos()
{tipo_actividad="Completar";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
forma_completar=xmlDoc.getElementsByTagName("forma_completar")[0].childNodes[0].nodeValue;if(forma_completar=="escribir")
{if((xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=null))sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;else sensible_mayusculas="no";if((xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=undefined)&&(xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=null))sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;else sensible_acentos="no";}
else
{sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;puntos_resta=xmlDoc.getElementsByTagName("puntos_resta")[0].childNodes[0].nodeValue;autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("tituloAplicacion")[0].childNodes[0].nodeValue;tituloTexto=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;texto=xmlDoc.getElementsByTagName("texto")[0].childNodes[0].nodeValue;if(texto.indexOf("&amp;#269;")>'0')try{texto=xmlDoc.getElementsByTagName("textoLimpio")[0].childNodes[0].nodeValue;}catch(e){texto=xmlDoc.getElementsByTagName("texto")[0].childNodes[0].nodeValue;}
if(texto.indexOf("&amp;#268;")>'0')try{texto=xmlDoc.getElementsByTagName("textoLimpio")[0].childNodes[0].nodeValue;}catch(e){texto=xmlDoc.getElementsByTagName("texto")[0].childNodes[0].nodeValue;}
ayuda=xmlDoc.getElementsByTagName("ayuda")[0].childNodes[0].nodeValue;pos=[];pa=[];var palab=xmlDoc.getElementsByTagName("palabra");for(i=0;i<palab.length;i++)
{pos[i]=palab[i].childNodes[0].nodeValue;pos[i]=parseInt(pos[i]);}
pos=pos.sort(ordAscModif);var caracteresQuitar='.,;:=*+-_{}[]¿?¡!()/&%$·|\@#"';var sumale=0;for(i=0;i<palab.length;i++)
{parteCadena=texto.substring(pos[i],texto.length);parteCadena=parteCadena.replace("\n"," ");pa[i]=parteCadena.split(" ")[0];for(l=0;l<caracteresQuitar.length;l++)
{pa[i]=pa[i].split(caracteresQuitar[l])[0];}}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;comprobar=idioma.getElementsByTagName("comprobar")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtActNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtTituloSuperadoNumeroIntentos=idioma.getElementsByTagName("txtTituloSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtSensibleMayusculas=idioma.getElementsByTagName("txtSensibleMayusculas")[0].childNodes[0].nodeValue;txtNoSensibleMayusculas=idioma.getElementsByTagName("txtNoSensibleMayusculas")[0].childNodes[0].nodeValue;txtSensibleAcentos=idioma.getElementsByTagName("txtSensibleAcentos")[0].childNodes[0].nodeValue;txtNoSensibleAcentos=idioma.getElementsByTagName("txtNoSensibleAcentos")[0].childNodes[0].nodeValue;txtTituloPalabrasParaCompletar=idioma.getElementsByTagName("txtTituloPalabrasParaCompletar")[0].childNodes[0].nodeValue;txtMsgNoCompleta=idioma.getElementsByTagName("txtMsgNoCompleta")[0].childNodes[0].nodeValue;txtMsgNoCorrecta=idioma.getElementsByTagName("txtMsgNoCorrecta")[0].childNodes[0].nodeValue;txtPalabraYaIntroducida=idioma.getElementsByTagName("txtPalabraYaIntroducida")[0].childNodes[0].nodeValue;txtPalabraIncorrecta=idioma.getElementsByTagName("txtPalabraIncorrecta")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtAumentar=idioma.getElementsByTagName("txtAumentar")[0].childNodes[0].nodeValue;txtReducir=idioma.getElementsByTagName("txtReducir")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;}
function ordAscModif(a,b)
{if(a<b)return-1;if(a>b)return 1;if(a=b)return 0;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarTitulosCajas();inicializarParametros();inicializarTituloAct();inicializarAyudaPalabras();inicializarBtnComprobar();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});}
function inicializarTitulosCajas()
{$("#tituloPalabras").text(txtTituloPalabrasParaCompletar);$("#tituloPalabrasOrdenar").text(tituloTexto);}
function inicializarAyudaPalabras()
{if(forma_completar=="escribir")
{if(ayuda=="no")
{$("#palabras").hide();$("#wrapper").addClass("width100");}}}
function inicializarBtnComprobar()
{$('#btnComprobar').text(comprobar);$('#btnComprobar').click(function(e){e.preventDefault();compruebaTexto();});};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();}
var control=[];function mover(ev)
{var encontrado=0;var mueveId=ev.target.getAttribute('id');var mueveEle=document.getElementById(mueveId);var mueveCad=mueveId.substring(11,14);for(i=0;i<control.length;i++)
{if(control[i]==mueveId)
{$(mueveEle).insertBefore("#cajaPalabraFondo"+mueveCad);$(mueveEle).addClass("cajaPalabras");control[i]="";encontrado=1;}}
if(encontrado==0)
{var cantidad=control.length;for(i=0;i<cantidad;i++)
{if(control[i]=="")
{cantidad=i;break;}}
if(cantidad<10)var cantidadx="00"+cantidad;else if(cantidad<100)var cantidadx="0"+cantidad;else var cantidadx=cantidad;$("#hueco"+cantidadx).append(mueveEle).addClass("huecosContenido");$(mueveEle).removeClass("cajaPalabras");control[cantidad]=mueveId;cantidad++;}
for(p=0;p<pa.length;p++)
{if(p<10)var px="00"+p;else if(p<100)var px="0"+p;else px=p;if(!$("#hueco"+px).find("div").html())$("#hueco"+px).removeClass("huecosContenido").removeClass("malP");}}
var controlP=[];var controlH=[];function compruebaPalabraEscribir()
{var pal=[];for(m=0;m<pa.length;m++)
{pal[m]=pa[m];}
var contenido=$(this).val();if(sensible_mayusculas=="no")
{contenido=contenido.toUpperCase();for(u=0;u<pal.length;u++)
{pal[u]=pal[u].toUpperCase();}}
if(sensible_acentos=="no")
{contenido=borraAcentos(contenido);for(c=0;c<pal.length;c++)
{pal[c]=borraAcentos(pal[c]);}}
var encontrado=0;for(j=0;j<pal.length;j++)
{if(contenido==pal[j])
{encontrado=1;}}
if(encontrado==0&&contenido!="")
{$(this).addClass("malP");}
controlL=[];controlH=[];$(".cajaPalabras").removeClass("used");for(m=0;m<pal.length;m++)
{if(m<10)var mx="00"+m;else if(m<100)var mx="0"+m;else mx=m;for(p=0;p<pal.length;p++)
{if(p<10)var px="00"+p;else if(p<100)var px="0"+p;else px=p;if(controlH[p]==1)continue;contenidoC=$("#hueco"+px).val();respuestaC=$("#cajaPalabra"+mx).html();if(contenidoC=="&nbsp;")contenidoC=" ";if(sensible_mayusculas=="no")
{contenidoC=contenidoC.toUpperCase();respuestaC=respuestaC.toUpperCase();}
if(sensible_acentos=="no")
{contenidoC=borraAcentos(contenidoC);respuestaC=borraAcentos(respuestaC);}
if(respuestaC==contenidoC)
{if(controlL[m]!=1)
{$("#cajaPalabra"+mx).addClass("used");controlL[m]=1;controlH[p]=1;}}}}}
function borraOnFocus()
{$(this).removeClass("malP");}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function actualizarIntentos()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<=numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
if(numeroIntentos==numero_intentos)
{$('#btnComprobar').unbind("click");cargarPantallaFinal('intentos');}}
var puntosReg=100;var arrayDescuento=[];function actualizaPuntos(tipo)
{if(arrayDescuento.length==0)
{for(k=0;k<=pa.length-1;k++)
{arrayDescuento[k]=0;}}
var actuales=parseInt(puntosReg);var puntosPorPalabra=100/pa.length;for(i=0;i<=controlCorreccion.length-1;i++)
{if(controlCorreccion[i]==0)
{if(tipo=="tiempo")arrayDescuento[i]=puntosPorPalabra;else arrayDescuento[i]+=puntosPorPalabra/numero_intentos;}}
var totalDescuento=0;for(j=0;j<=arrayDescuento.length-1;j++)
{totalDescuento+=arrayDescuento[j];}
var cantidadActual=100-totalDescuento;if(cantidadActual<0)cantidadActual=0;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
var controlCorreccion=[];function compruebaTexto(op)
{var error=0;var contenido="";for(k=0;k<pa.length;k++)
{if(k<10)var kx="00"+k;else if(k<100)var kx="0"+k;else kx=k;if(forma_completar=="escribir")contenido=$("#hueco"+kx).val();else if(forma_completar=="clickar")contenido=$("#hueco"+kx).find("div").html();respuestaF=pa[k];if(forma_completar=="escribir")
{if(sensible_mayusculas=="no")
{contenido=contenido.toUpperCase();respuestaF=respuestaF.toUpperCase();}
if(sensible_acentos=="no")
{contenido=borraAcentos(contenido);respuestaF=borraAcentos(respuestaF);}}
else
{if(contenido!=undefined)contenido=contenido.toUpperCase();respuestaF=respuestaF.toUpperCase();}
if(respuestaF!=contenido)
{controlCorreccion[k]=0;if(forma_completar=="escribir"){if($("#hueco"+kx).val()!="")$("#hueco"+kx).addClass("malP");}
else{if($("#hueco"+kx).html()!="")$("#hueco"+kx).addClass("malP");}
error=1;}
else
{controlCorreccion[k]=1;if(forma_completar=="escribir"){if($("#hueco"+kx).val()!="")$("#hueco"+kx).addClass("bienP");}
else{if($("#hueco"+kx).html()!="")$("#hueco"+kx).addClass("bienP");}}}
if(error==1)
{if(op!="finIntentos")
{if(op!="finTiempo")
{actualizaPuntos();}
else
{actualizaPuntos("tiempo");}
actualizarIntentos();}}
else if(error==0)
{$('#btnComprobar').unbind("click");cargarPantallaFinal('OK');}}
function completarPantallaFinal()
{var cadena="";var posicion=0;for(j=0;j<pa.length;j++)
{if(j<10)var jx="00"+j;else if(j<100)var jx="0"+j;else var jx=j;cadena+=texto.substring(posicion,pos[j]);posicion=pos[j]+pa[j].length;cadena+="<div id='cuadroFinalC"+jx+"' class='cuadroPalabras'>";if((controlCorreccion[j]==0)||(controlCorreccion[j]==undefined))
{cadena+="<div id='cuadroFinalE"+jx+"' class='palabraCorreccion'></div>";}
cadena+="<div id='cuadroFinalR"+jx+"' class='cajaPalabras'></div>";cadena+="</div>";}
cadena+=texto.substring(posicion,texto.length);cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$('#correccion').html(cadena);cargarFinal();}
function cargarFinal()
{for(i=0;i<pa.length;i++)
{if(i<10)var ix="00"+i;else if(i<100)var ix="0"+i;else var ix=i;if((controlCorreccion[i]==0)||(controlCorreccion[i]==undefined))
{if(forma_completar=="escribir")contenido=$("#hueco"+ix).html();else if(forma_completar=="clickar")contenido=$("#hueco"+ix).find("div").html();$('#cuadroFinalE'+ix).html(contenido);}
else
{$('#cuadroFinalC'+ix).addClass("finalBien");}
$('#cuadroFinalR'+ix).html(pa[i]);}}