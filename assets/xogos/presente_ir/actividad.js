var DatosActividad = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><actividad tipo="RelacionarColumnas">\n<!-- Parte generica -->\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>3</numero_intentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estaria definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Relaciona a persoa co tempo verbal</descripcionUsuario>\n    <descripcionUsuarioLimpio>Relaciona a persoa co tempo verbal</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/86/2779047/</xorigen_recursos>\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<titulo>Instrucións</titulo>\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Fornar as parellas correctamente. Para este clic sobre un dos elementos da primeira columna e, a continuación, sobre un dos elementos da segunda columna. Deben completar os pares para completar o exercicio.</descripcion>\n	<enunciado>Relaciona estos elementos</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Presente do verbo ir</enunciado_edu>\n    \n	<tituloApli>Presente do verbo ir</tituloApli>\n    <parejas>\n    		<pareja id="1">\n			<elementoA tipo="TEXTO">Eu</elementoA>\n            <elementoB tipo="TEXTO">vou</elementoB>\n		</pareja>\n    		<pareja id="2">\n			<elementoA tipo="TEXTO">Ti</elementoA>\n            <elementoB tipo="TEXTO">vas</elementoB>\n		</pareja>\n    		<pareja id="3">\n			<elementoA tipo="TEXTO">El ou ela</elementoA>\n            <elementoB tipo="TEXTO">vai</elementoB>\n		</pareja>\n    		<pareja id="4">\n			<elementoA tipo="TEXTO">Nós</elementoA>\n            <elementoB tipo="TEXTO">imos</elementoB>\n		</pareja>\n    		<pareja id="5">\n			<elementoA tipo="TEXTO">Vós</elementoA>\n            <elementoB tipo="TEXTO">ides</elementoB>\n		</pareja>\n    		<pareja id="6">\n			<elementoA tipo="TEXTO">Eles ou elas</elementoA>\n            <elementoB tipo="TEXTO">van</elementoB>\n		</pareja>\n        </parejas>\n	<puntos>100</puntos>\n	<puntos_resta>33</puntos_resta>\n    \n	<idioma>\n		<nIntentos>intentos</nIntentos>\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtTituloActividadNoSuperada>Mágoa, non superaches esta actividade</txtTituloActividadNoSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtCerrar>Pechar</txtCerrar>\n    	<txtSuperadoNumeroIntentos>Superou o número de intentos desta actividade</txtSuperadoNumeroIntentos>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns ten superado a actividade</txtActividadSuperada>\n		<txtRespuestaIncorrecta>Non completou correctamente o grupo</txtRespuestaIncorrecta>\n  		<txtTituloRespuestaIncorrecta>Resposta incorrecta</txtTituloRespuestaIncorrecta>\n  		\n  		<txtGrupoCorrecto>Grupo Certo</txtGrupoCorrecto>\n		<txtBoxRespuestaCorrecta>Parabéns por ter superado esta actividade</txtBoxRespuestaCorrecta>\n		<txtTituloSuperadoNumeroIntentos>Actividade non superada</txtTituloSuperadoNumeroIntentos>    \n			\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Case Superior/Inferior</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xogar outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtGrupo>Grupo</txtGrupo>\n		<txtHuecos>Buratos</txtHuecos>\n		<txtNormal>Normal</txtNormal>\n		<txtElementos>Elementos</txtElementos>\n		<txtTradicional>Tradicional</txtTradicional>\n	</idioma>\n\n</actividad>';