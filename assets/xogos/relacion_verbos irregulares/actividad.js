var DatosActividad = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><actividad tipo="Parejas">\n\n<!-- Parte generica -->\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF0F0F0</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF0F0F0</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>3</numero_intentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estaria definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Relaciona as formas verbais do presente de indicativo coa súa descrición</descripcionUsuario>\n    <descripcionUsuarioLimpio>Relaciona as formas verbais do presente de indicativo coa súa descrición</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/67/2164011/</xorigen_recursos>\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<!-- La forma de realizar la actividad, 2 opciones:\n		- relacionar -> formar grupos (parejas, trios, etc)\n		- grupo -> formar uno de los grupos, como si de una pregunta se tratase\n	-->\n	<forma>grupo</forma>\n	<titulo>Instrucións</titulo>\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Formar os grupos de palabras correctamente. Para iso pulsa sobre un dos elementos e a continuación completa o seu grupo segundo o criterio que che indique o exercicio, así ata completar todos os grupos,una vez elixido o elemento poderás eliminar a devandita selección volvendo pulsar sobre o devandito elemento.</descripcion>\n	<enunciado>Relaciona as formas do presente do indicativo coa súa descrición</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Formas verbais do presente</enunciado_edu>\n    \n	<tituloApli>Formas verbais do presente</tituloApli>\n    <parejas>\n    		<pareja id="1" nombre="1_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="1">1ª persoa do singular do verbo facer</elemento>\n        			<elemento id="1">fago</elemento>\n        		</pareja>\n    		<pareja id="2" nombre="2_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="2">2ª persoa do singular do verbo facer</elemento>\n        			<elemento id="2">fas</elemento>\n        		</pareja>\n    		<pareja id="3" nombre="3_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="3">3ª persoa do singular do verbo facer</elemento>\n        			<elemento id="3">fai</elemento>\n        		</pareja>\n    		<pareja id="4" nombre="4_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="4">1ª persoa do plural do verbo facer</elemento>\n        			<elemento id="4">facemos</elemento>\n        		</pareja>\n    		<pareja id="5" nombre="5_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="5">2ª persoa do plural do verbo facer</elemento>\n        			<elemento id="5">facedes</elemento>\n        		</pareja>\n    		<pareja id="6" nombre="6_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="6">3ª persoa do plural do verbo facer</elemento>\n        			<elemento id="6">fan</elemento>\n        		</pareja>\n    		<pareja id="7" nombre="7_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="7">1ª persoa do singular do verbo ter</elemento>\n        			<elemento id="7">teño</elemento>\n        		</pareja>\n    		<pareja id="8" nombre="8_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="8">2ª persoa do singular do verbo ter</elemento>\n        			<elemento id="8">tes</elemento>\n        		</pareja>\n    		<pareja id="9" nombre="9_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="9">3ª persoa do singular do verbo ter</elemento>\n        			<elemento id="9">ten</elemento>\n        		</pareja>\n    		<pareja id="10" nombre="10_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="10">1ª persoa do plural do verbo ter</elemento>\n        			<elemento id="10">temos</elemento>\n        		</pareja>\n    		<pareja id="11" nombre="11_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="11">2ª persoa do plural do verbo ter</elemento>\n        			<elemento id="11">tendes ou tedes</elemento>\n        		</pareja>\n    		<pareja id="12" nombre="12_1484826819" numero_elementos="2" texto="" respuesta="Grupo Certo">\n        			<elemento id="12">3ª persoa do plural do verbo ter</elemento>\n        			<elemento id="12">teñen</elemento>\n        		</pareja>\n        </parejas>\n	<puntos>100</puntos>\n	<puntos_resta>33</puntos_resta>\n    \n	<idioma>\n		<nIntentos>intentos</nIntentos>\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtTituloActividadNoSuperada>Actividade non superada</txtTituloActividadNoSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtCerrar>Pechar</txtCerrar>\n    	<txtSuperadoNumeroIntentos>Unha mágoa, para a próxima superarás esta actividade</txtSuperadoNumeroIntentos>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns por superar esta actividade</txtActividadSuperada>\n		<txtRespuestaIncorrecta>Non completou correctamente o grupo</txtRespuestaIncorrecta>\n  		<txtTituloRespuestaIncorrecta>Resposta incorrecta</txtTituloRespuestaIncorrecta>\n  		\n  		<txtGrupoCorrecto>Grupo Certo</txtGrupoCorrecto>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtTituloSuperadoNumeroIntentos>Actividade non superada</txtTituloSuperadoNumeroIntentos>    \n			\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Maiúsculas e minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xoga outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtGrupo>Grupo</txtGrupo>\n		<txtHuecos>Buratos</txtHuecos>\n		<txtNormal>Normal</txtNormal>\n		<txtElementos>Elementos</txtElementos>\n		<txtTradicional>Tradicional</txtTradicional>\n	</idioma>\n\n</actividad>';