var DatosActividad = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><actividad tipo="Completar">\n\n<!-- Parte generica -->\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>4</numero_intentos>\n    <puntos>100</puntos>\n	<puntos_resta>25</puntos_resta>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>no</sensible_mayusculas>\n	<sensible_acentos>no</sensible_acentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Completa os seguintes verbos coas desinencias verbais que lles corresponda</descripcionUsuario>\n    <descripcionUsuarioLimpio>Completa os seguintes verbos coas desinencias verbais que lles corresponda</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/87/2798320/</xorigen_recursos>\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<!-- Indica si se mostrara al alumno las palabras que estan ocultas -->\n	<ayuda>si</ayuda>\n	<!-- Indica la forma de completar los huecos, 2 opciones:\n	- escribir\n	- clickar, esta forma conlleva a que la ayuda este activada\n	-->\n	<forma_completar>clickar</forma_completar>\n	<titulo>Instrucións</titulo>\n	\n	<tituloAplicacion>O LEGO dos verbos</tituloAplicacion>\n	\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Tente completar o texto coas palabras que faltan.\n        Para facer isto, prema sobre as palabras do fondo na orde correcta para completar as lagoas.\n    \n</descripcion>\n	<enunciado>Complete este texto</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>O LEGO dos verbos</enunciado_edu>\n    \n	<texto>1. (presente, nós, estar) Est a mos \n2. (imperfecto de indicativo, vós, ser) Er a des \n3. (perfecto de indicativo, ti, ter) Tiv e ches \n4. (pluscuamperfecto, eu, haber) Houb e ra \n5. (condicional, nós, ver) Ver i amos \n6. (futuro de indicativo, el, caber) Cab e rá \n7. (presente de subxuntivo, eles, facer) Fag an \n8. (imperfecto de subxuntivo, ti, saber) Soub e ses \n9. (futuro de subxuntivo, nós, traer) Troux e rmos \n10. (perfecto de indicativo, vós, ir) Fo stes</texto>\n    <textoLimpio>1. (presente, nós, estar) Est a mos \n2. (imperfecto de indicativo, vós, ser) Er a des \n3. (perfecto de indicativo, ti, ter) Tiv e ches \n4. (pluscuamperfecto, eu, haber) Houb e ra \n5. (condicional, nós, ver) Ver i amos \n6. (futuro de indicativo, el, caber) Cab e rá \n7. (presente de subxuntivo, eles, facer) Fag an \n8. (imperfecto de subxuntivo, ti, saber) Soub e ses \n9. (futuro de subxuntivo, nós, traer) Troux e rmos \n10. (perfecto de indicativo, vós, ir) Fo stes</textoLimpio>\n	<!-- Las palabras que seran eliminadas del texto -->\n	<palabras>\n    		<palabra>32</palabra>\n    		<palabra>82</palabra>\n    		<palabra>130</palabra>\n    		<palabra>176</palabra>\n    		<palabra>213</palabra>\n    		<palabra>262</palabra>\n    		<palabra>311</palabra>\n    		<palabra>363</palabra>\n    		<palabra>414</palabra>\n    		<palabra>461</palabra>\n    		<palabra>30</palabra>\n    		<palabra>80</palabra>\n    		<palabra>128</palabra>\n    		<palabra>211</palabra>\n    		<palabra>260</palabra>\n    		<palabra>361</palabra>\n    		<palabra>412</palabra>\n    	</palabras>\n	\n    \n        <idioma>\n		<nIntentos>Número de intentos</nIntentos>\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<comprobar>Comprobar</comprobar>\n\n		<txtRespuestaIncorrecta>Resposta incorrecta</txtRespuestaIncorrecta>\n		<txtActNoSuperada>Esta actividade non foi superada</txtActNoSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtCerrar>Pechar</txtCerrar>\n		<txtRespuestaCorrecta>A resposta correcta é</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Outras respostas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtTituloOtrasRespuestas>Outras posibles respostas</txtTituloOtrasRespuestas>\n		<txtSuperadoNumeroIntentos>Unha mágoa, para a próxima superarás esta actividade</txtSuperadoNumeroIntentos>\n		<txtTituloSuperadoNumeroIntentos>Actividade non superada</txtTituloSuperadoNumeroIntentos>\n        \n   		<txtAceptar>Aceptar</txtAceptar>\n   		<txtTituloPalabrasParaCompletar>Desinencias para cubrir os espazos</txtTituloPalabrasParaCompletar>\n   		<txtMsgNoCompleta>Non completou todos os ocos polo que a resposta non é correcta</txtMsgNoCompleta>\n		<txtMsgNoCorrecta>A resposta que escribiu e incorrecta</txtMsgNoCorrecta>\n		<txtPalabraYaIntroducida>A palabra introducida xa foi introducida noutro oco</txtPalabraYaIntroducida>\n		<txtPalabraIncorrecta>A palabra escritas non está entre as opcións restantes</txtPalabraIncorrecta>\n\n   		<txtSensibleMayusculas>É sensible a maiúsculas.</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>Non diferencia entre maiúsculas e minúsculas.</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos.</txtSensibleAcentos>\n		<txtNoSensibleAcentos>Non é sensíbel a acentos.</txtNoSensibleAcentos>\n		\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Maiúsculas/ minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xoga outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtAumentar>Achegarse</txtAumentar>\n		<txtReducir>Afastarse</txtReducir>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n\n	</idioma>\n\n\n</actividad>';