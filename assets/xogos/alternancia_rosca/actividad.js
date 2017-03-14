var DatosActividad = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><actividad tipo="RuletaPalabras">\n<!-- Parte generica -->\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>5</numero_intentos>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos -->\n	<sensible_mayusculas>si</sensible_mayusculas>\n	<sensible_acentos>si</sensible_acentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estaria definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Completa cos verbos de alternancia vocálica</descripcionUsuario>\n	<!--<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/89/2873412/</xorigen_recursos>-->\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<titulo>Instrucións</titulo>\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Adiviñar a palabra que se esconde detrás de cada carta. A resposta comeza coa letra correspondente ou, se así fose indicado, conter a letra correspondente. Prema en Cambiar se quere mover á seguinte letra e responder máis tarde. Completar todas as letras para rematar o partido.</descripcion>\n	<enunciado>Descubre la palabra que hay tras cada letra</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Rosca dos verbos</enunciado_edu>\n    \n	<tituloApli>Rosca dos verbos</tituloApli>\n    <palabras>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>A</letra>\n            <palabra>Adhires,adhires</palabra>\n            <definicion>2ª persoa do singular, presente de indicativo, adherir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>B</letra>\n            <palabra>Bolen,bolen</palabra>\n            <definicion>3ª persoa do plural, presente de indicativo, bulir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>C</letra>\n            <palabra>Comemos,comemos</palabra>\n            <definicion>1ª persoa do plural, presente de indicativo, comer</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>D</letra>\n            <palabra>Descobres,descobres</palabra>\n            <definicion>2ª persoa do singular, presente de indicativo, descubrir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>E</letra>\n            <palabra>Engoles,engoles</palabra>\n            <definicion>2ª persoa do singular, presente de indicativo, engulir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>F</letra>\n            <palabra>Foxe,foxe</palabra>\n            <definicion>3ª persoa do singular, presente de indicativo, fuxir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>G</letra>\n            <palabra>Consigo,consigo</palabra>\n            <definicion>1ª persoa do singular, presente de indicativo, conseguir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>H</letra>\n            <palabra>cheirades,Cheirades</palabra>\n            <definicion>2ª persoa do plural, presente de indicativo, cheirar</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>I</letra>\n            <palabra>Ispen,ispen</palabra>\n            <definicion>3ª persoa do plural, presente de indicativo, espir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>emp</opcion>\n            <letra>J</letra>\n            <palabra></palabra>\n            <definicion></definicion>\n            <palActiva>0</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>emp</opcion>\n            <letra>K</letra>\n            <palabra></palabra>\n            <definicion></definicion>\n            <palActiva>0</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>L</letra>\n            <palabra>lucimos,Lucimos</palabra>\n            <definicion>1ª persoa do plural, presente de indicativo, lucir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>M</letra>\n            <palabra>Miden,miden</palabra>\n            <definicion>3ª persoa do plural, presente de indicativo, medir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>N</letra>\n            <palabra>Investides,investides</palabra>\n            <definicion>2ª persoa do plural, presente de indicativo, investir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>O</letra>\n            <palabra>Toque,toque</palabra>\n            <definicion>3ª persoa do singular, presente de subxuntivo, tocar</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>P</letra>\n            <palabra>Prefires,prefires</palabra>\n            <definicion>2ª persoa do singular, presente de indicativo, preferir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>Q</letra>\n            <palabra>queremos,Queremos</palabra>\n            <definicion>1ª persoa do plural, presente de indicativo, querer</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>R</letra>\n            <palabra>serves,Serves</palabra>\n            <definicion>2ª persoa do singular, presente de indicativo, servir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>S</letra>\n            <palabra>Sinto,sinto</palabra>\n            <definicion>1ª persoa do singular, presente de indicativo, sentir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>T</letra>\n            <palabra>Tusides,tusides</palabra>\n            <definicion>2ª persoa do plural, presente de indicativo, tusir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>U</letra>\n            <palabra>ulimos,Ulimos</palabra>\n            <definicion>1ª persoa do plural, presente de indicativo, ulir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>V</letra>\n            <palabra>Visto,visto</palabra>\n            <definicion>1ª persoa do singular, presente de indicativo, vestir</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>emp</opcion>\n            <letra>W</letra>\n            <palabra></palabra>\n            <definicion></definicion>\n            <palActiva>0</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>con</opcion>\n            <letra>X</letra>\n            <palabra>xoguedes,Xoguedes</palabra>\n            <definicion>2ª persoa do plural, presente de indicativo, xogar</definicion>\n            <palActiva>1</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>emp</opcion>\n            <letra>Y</letra>\n            <palabra></palabra>\n            <definicion></definicion>\n            <palActiva>0</palActiva>\n		</pal>\n    		<pal>\n			<deftipo>TEXTO</deftipo>\n			<opcion>emp</opcion>\n            <letra>Z</letra>\n            <palabra></palabra>\n            <definicion></definicion>\n            <palActiva>0</palActiva>\n		</pal>\n        </palabras>\n	<puntos>100</puntos>\n	<puntos_resta>20</puntos_resta>\n    \n	<idioma>\n		<nIntentos>Número de intentos</nIntentos>\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtTituloActividadNoSuperada>Actividade non superada</txtTituloActividadNoSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtCerrar>Pechar</txtCerrar>\n    	<txtSuperadoNumeroIntentos>Superaches o número de intentos</txtSuperadoNumeroIntentos>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns por superar esta actividade</txtActividadSuperada>\n		<txtRespuestaIncorrecta>Non completou correctamente o grupo</txtRespuestaIncorrecta>\n  		<txtTituloRespuestaIncorrecta>Resposta incorrecta</txtTituloRespuestaIncorrecta>\n  		<txtPistaEnFormatoAudio>Pista en formato de audio</txtPistaEnFormatoAudio>\n  		<txtGrupoCorrecto>Grupo Certo</txtGrupoCorrecto>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtTituloSuperadoNumeroIntentos>Actividade non superada</txtTituloSuperadoNumeroIntentos>    \n			\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Maiúsculas e minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xoga outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtGrupo>Grupo</txtGrupo>\n		<txtHuecos>Buratos</txtHuecos>\n		<txtNormal>Normal</txtNormal>\n		<txtElementos>Elementos</txtElementos>\n		<txtTradicional>Tradicional</txtTradicional>\n    <txtEmpieza>Comeza con </txtEmpieza>\n    <txtContiene>Contén a letra </txtContiene>\n    <txtSiguente>Cambiar</txtSiguente>\n    <txtComprobar>Comprobar</txtComprobar>\n	</idioma>\n\n</actividad>';