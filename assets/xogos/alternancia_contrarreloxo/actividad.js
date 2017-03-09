var DatosActividad = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><actividad tipo="Test">\n	\n<!-- Parte generica -->	\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Completa as seguintes formas verbais</descripcionUsuario>\n    <descripcionUsuarioLimpio>Completa as seguintes formas verbais</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/87/2812619/</xorigen_recursos>\n	\n	<globalFeedback>1</globalFeedback>\n	\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>si</sensible_mayusculas>\n	<sensible_acentos>si</sensible_acentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="60">si</tiempo>\n     <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<titulo>Instrucións</titulo>\n	<tituloActividad>Contrarreloxo de verbos</tituloActividad>\n	<enunciado>Responde a estas preguntas</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Contrarreloxo de verbos</enunciado_edu>\n    \n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Responde ás preguntas do test. Pode parecer que deba responder a algunhas preguntas para ir ao seguinte. Cando chegar ao final das preguntas, pode dar para acabar coa actividade, para que poidan ser corrixidos ea súa puntuación.</descripcion>\n	<!-- Indica el porcentaje de preguntas que deberan seran correctas para superar la actividad -->\n	<porcentaje_superar_actividad>50</porcentaje_superar_actividad>\n	<preguntas>\n		<!-- El atributo tipo indica las posibles preguntas que el profesor ha definido, hacen referencia a los cuatro tipos de preguntas:\n		- Respuesta escrita\n		- Respuesta escrita amplia\n		- Respuesta unica\n		- Respuesta multiple\n		-->\n                \n                        \n		<pregunta id="1" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Que forma verbal é correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Acudes</opcion>\n        		\n                <opcion resp="1">Acodes [&amp;#596;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="2" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Ac__dides</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">u</opcion>\n        		\n                <opcion resp="0">o [&amp;#596;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="3" tipo="escrita" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do singular do verbo \'bulir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Bole</opcion>\n        		\n                <opcion resp="1">Bole</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="4" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Dormo [&amp;#596;]</opcion>\n        		\n                <opcion resp="1">Durmo</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="5" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >F__xen</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">u</opcion>\n        		\n                <opcion resp="1">o [&amp;#596;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="6" tipo="escrita" obligatoria="si" feedback="Lembra que o imperativo non ten alternancia vocálica">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 2ª persoa do singular do imperativo de \'fuxir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Fuxe</opcion>\n        		\n                <opcion resp="1">Fuxe</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="7" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Olen [&amp;#596;]</opcion>\n        		\n                <opcion resp="0">Ulen</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="8" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cons__mes</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">u</opcion>\n        		\n                <opcion resp="1">o [&amp;#596;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="9" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como son a 1ª, 2ª e 3ª persoa do singular do verbo \'ruxir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Roxo [&amp;#596;], roxes [&amp;#596;], roxe [&amp;#596;]</opcion>\n        		\n                <opcion resp="0">Ruxo, ruxes, ruxe</opcion>\n        		\n                <opcion resp="1">Ruxo, roxes [&amp;#596;], roxe [&amp;#596;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="10" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'subir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">lucimos</opcion>\n        		\n                <opcion resp="0">Locimos</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="11" tipo="unica" obligatoria="si" feedback="Ten coidado co imperativo que non leva [&amp;#596;]">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Eng__le (imperativo)</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">o [&amp;#596;]</opcion>\n        		\n                <opcion resp="1">u</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="12" tipo="escrita" obligatoria="no" feedback="Ollo ao piollo! Resumir é un verbo que non deriva de \'sumir\' e, polo tanto, non ten alternancia vocálica">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do plural do verbo \'resumir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Resumen</opcion>\n        		\n                <opcion resp="1">Resomen</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="13" tipo="multiple" obligatoria="si" feedback="Ollo que tanto \'engole [&amp;#596;]\' (3ª persoa do singular do presente) como \'engule\' (2ª persoa do singular do imperativo) son correctas">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Engule</opcion>\n        		\n                <opcion resp="1">Engole</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="14" tipo="unica" obligatoria="si" feedback="Ten coidado que \'afundir\' non é un derivado de \'fundir\'. Polo tanto, non ten alternancia vocálica">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Af__ndes</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">o</opcion>\n        		\n                <opcion resp="1">u</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="15" tipo="escrita" obligatoria="si" feedback="Lembra que o verbo \'fundir\' só ten alternancia vocálica cando significa \'render\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 2ª persoa do plural do verbo \'fundir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Fundides</opcion>\n        		\n                <opcion resp="1">fundides</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="16" tipo="unica" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Somen [&amp;#596;]</opcion>\n        		\n                <opcion resp="0">Sumen</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="17" tipo="unica" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Que forma verbal é correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Repeto</opcion>\n        		\n                <opcion resp="1">Repito</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="18" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Div__rtes</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">i</opcion>\n        		\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="19" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do singular do verbo \'advertir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Advirte</opcion>\n        		\n                <opcion resp="1">advirte</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="20" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Arrepintimos</opcion>\n        		\n                <opcion resp="1">Arrepentimos</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="21" tipo="unica" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Comp__tides</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        		\n                <opcion resp="1">e</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="22" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do plural do verbo \'despedir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Despedides</opcion>\n        		\n                <opcion resp="1">despedides</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="23" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Divirto</opcion>\n        		\n                <opcion resp="0">Diverto</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="24" tipo="unica" obligatoria="si" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" > __spes</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e</opcion>\n        		\n                <opcion resp="1">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="25" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como son a 1ª, 2ª e 3ª persoa do singular do verbo \'impedir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Impido, empedes, empede</opcion>\n        		\n                <opcion resp="0">Impedo, impedes, impede</opcion>\n        		\n                <opcion resp="1">Impido, impides, impide</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="26" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Inserimos</opcion>\n        		\n                <opcion resp="0">Insirimos</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="27" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >M__dides</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        		\n                <opcion resp="1">e</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="28" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do plural do verbo \'preferir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Prefiren</opcion>\n        		\n                <opcion resp="1">prefiren</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="29" tipo="unica" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Vesto</opcion>\n        		\n                <opcion resp="1">Visto</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="30" tipo="unica" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Transf__res</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e</opcion>\n        		\n                <opcion resp="1">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="31" tipo="escrita" obligatoria="no" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a 3ª persoa do singular do verbo \'agredir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Agride</opcion>\n        		\n                <opcion resp="1">agride</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="32" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Invisten</opcion>\n        		\n                <opcion resp="0">Investen</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="33" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >F__res (2ª persoa do verbo \'ferir)</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">i</opcion>\n        		\n                <opcion resp="1">e [&amp;#603;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="34" tipo="unica" obligatoria="no" feedback="Desculpa, pero algunha pequena trampa tiña que pór, ou!">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Constr___en (3ª persoa do plural do verbo \'construír\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">o</opcion>\n        		\n                <opcion resp="1">ú</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="35" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >F__ro (1ª persoa do singular do verbo \'ferir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">i</opcion>\n        		\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="36" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >M__ntimos (1ª persoa do plural do verbo \'mentir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">i</opcion>\n        		\n                <opcion resp="1">e</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="37" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >S__nte (3ª persoa do singular do verbo \'sentir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">e [&amp;#603;]</opcion>\n        		\n                <opcion resp="0">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="38" tipo="unica" obligatoria="no" feedback="Este verbo non segue o mesmo model có verbo \'ferir\', senón o de \'pedir\' ">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Pref___ro (1ª persoa do singular do verbo \'preferir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        		\n                <opcion resp="1">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="39" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Malf__res (2ª persoa do singular do verbo \'malferir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e</opcion>\n        		\n                <opcion resp="1">e [&amp;#603;]</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="40" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a 2ª persoa do plural do verbo \'seguir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Seguides</opcion>\n        		\n                <opcion resp="1">seguides</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="41" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'pedir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como é a (3ª persoa do singular do verbo \'interferir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Interfire</opcion>\n        		\n                <opcion resp="1">interfire</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="42" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Consent__mos (2ª persoa do plural do verbo \'consentir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e [&amp;#603;]</opcion>\n        		\n                <opcion resp="1">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="43" tipo="escrita" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Consegu__des (tes que escribir a forma verbal completa)</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Conseguides</opcion>\n        		\n                <opcion resp="1">conseguides</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="44" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Fer__mos (1ª persoa do plural do verbo \'ferir\')</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">e</opcion>\n        		\n                <opcion resp="1">i</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="45" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >É correcto \'sigues\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Non</opcion>\n        		\n                <opcion resp="1">Si</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="46" tipo="unica" obligatoria="no" feedback="Segue o modelo do verbo \'servir\'">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Como son a 1ª, 2ª e 3ª persoa do singular do verbo \'presentir\'?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Presente, presentes, presente</opcion>\n        		\n                <opcion resp="0">Presinto, presintes, presinte</opcion>\n        		\n                <opcion resp="1">Presinto, prese[&amp;#603;]ntes, prese[&amp;#603;]nte</opcion>\n        		\n                <opcion resp="0">Prese[&amp;#603;]to, prese[&amp;#603;]ntes, prese[&amp;#603;]nte</opcion>\n        					</opciones>\n		</pregunta>\n                	</preguntas>\n    \n    	<!-- Indica el numero de posibles preguntas que el profesor ha definido para el ejercicio -->\n	<numero_preguntas_totales>46</numero_preguntas_totales>\n	<!-- Indica el numero de preguntas que apareceran, seleccionadas de forma aleatoria -->\n	<numero_preguntas_visibles>15</numero_preguntas_visibles>\n	<orden_preguntas>ALEATORIO</orden_preguntas>\n    <!-- Indica el tipo de ordenacion usado-->\n	<puntos>100</puntos>\n    <!-- Indica los margenes para la puntuación por valoración-->\n    <margenes activo=\'no\'>\n                            	</margenes>\n    \n    <idioma>\n\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtResultado>Resultado</txtResultado>\n		<txtPreguntas>Preguntas</txtPreguntas>\n		<txtHasAprobado>Aprobou!!</txtHasAprobado>\n		<txtHasSuspendido>Non superou a actividad</txtHasSuspendido>\n		<txtPorcentajeMinimo1>É necesario acadar un </txtPorcentajeMinimo1>\n		<txtPorcentajeMinimo2> para aprobar</txtPorcentajeMinimo2>\n		<txtContestadas>respondeu</txtContestadas>\n		<txtNoContestadas>Sen resposta</txtNoContestadas>\n		<txtNumObligatoria1>Contestou</txtNumObligatoria1>\n		<txtNumObligatoria2>pregunta obrigatoria</txtNumObligatoria2>\n		<txtNumObligatorias1>Contestou</txtNumObligatorias1>\n		<txtNumObligatorias2>preguntas obrigatorias</txtNumObligatorias2>\n		<txtTuPuntuacionEs>A súa puntuación é</txtTuPuntuacionEs>\n		<txtMal>Mal</txtMal>\n		<txtBien>Ben</txtBien>\n		<txtObligatoria>pregunta obrigatoria</txtObligatoria>\n		<txtProgreso>Progreso</txtProgreso>\n		<txtFinalizar>Final</txtFinalizar>\n		<txtVerCorregir>Vexa a corrección</txtVerCorregir>\n		\n		<txtRespuestaIncorrecta>Resposta incorrecta</txtRespuestaIncorrecta>\n		<txtTituloActividadNoSuperada>Non superaches esta actividade</txtTituloActividadNoSuperada>\n		<txtActividadNoSuperada>Non superaches esta actividade</txtActividadNoSuperada>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns por superar esta actividade</txtActividadSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtCerrar>Pechar</txtCerrar>\n		<txtRespuestaCorrecta>Resposta correcta</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Outras respostas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtPosiblesRespuestas>Posibles respostas</txtPosiblesRespuestas>\n		<txtTuRespuesta>A súa resposta</txtTuRespuesta>\n\n   		<txtSensibleMayusculas>É sensible a maiúsculas.</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>Non diferencia entre maiúsculas e minúsculas.</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos.</txtSensibleAcentos>\n		<txtNoSensibleAcentos>Non é sensíbel a acentos.</txtNoSensibleAcentos>\n\n		<txtTituloErrorAudio>Erro na Actividade</txtTituloErrorAudio>\n		<txtErrorAudioSoportado>Audio non atopado ou non soportado polo teu navegador</txtErrorAudioSoportado>\n		\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Case Superior/Inferior</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xogar outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtSiguiente>Seguinte</txtSiguiente>\n		<txtAnterior>Anterior</txtAnterior>\n		<txtInfoAdicional>Información adicional</txtInfoAdicional>\n		\n	</idioma>\n\n</actividad>';