var DatosActividad = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><actividad tipo="Test">\n	\n<!-- Parte generica -->	\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Averigua cal é a forma correcta</descripcionUsuario>\n    <descripcionUsuarioLimpio>Averigua cal é a forma correcta</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/89/2858861/</xorigen_recursos>\n	\n	<globalFeedback>1</globalFeedback>\n	\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>no</sensible_mayusculas>\n	<sensible_acentos>no</sensible_acentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n     <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<titulo>Instrucións</titulo>\n	<tituloActividad>Alternancia na 1ª conxugación</tituloActividad>\n	<enunciado>Responde a esta pregunta</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Alternancia na 1ª conxugación</enunciado_edu>\n    \n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Responde ás preguntas do test. Pode parecer que deba responder a algunhas preguntas para ir ao seguinte. Cando chegar ao final das preguntas, pode dar para acabar coa actividade, para que poidan ser corrixidos ea súa puntuación.</descripcion>\n	<!-- Indica el porcentaje de preguntas que deberan seran correctas para superar la actividad -->\n	<porcentaje_superar_actividad>50</porcentaje_superar_actividad>\n	<preguntas>\n		<!-- El atributo tipo indica las posibles preguntas que el profesor ha definido, hacen referencia a los cuatro tipos de preguntas:\n		- Respuesta escrita\n		- Respuesta escrita amplia\n		- Respuesta unica\n		- Respuesta multiple\n		-->\n                \n                        \n		<pregunta id="1" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">L&amp;#603;vo </opcion>\n        		\n                <opcion resp="0">Levo</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="2" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Xogamos </opcion>\n        		\n                <opcion resp="0">X&amp;#596;gamos</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="3" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">X&amp;#596;gan</opcion>\n        		\n                <opcion resp="0">Xogan</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="4" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">B&amp;#603;rres </opcion>\n        		\n                <opcion resp="0">Berres</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="5" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Regades</opcion>\n        		\n                <opcion resp="0">R&amp;#603;gades</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="6" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Choque </opcion>\n        		\n                <opcion resp="1">Ch&amp;#596;que </opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="7" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1"> N&amp;#603;gan</opcion>\n        		\n                <opcion resp="0">Negan</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="8" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">M&amp;#603;dredes</opcion>\n        		\n                <opcion resp="1">Medredes </opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="9" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="0">Entrego</opcion>\n        		\n                <opcion resp="1">Entr&amp;#603;go</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="10" tipo="unica" obligatoria="no" feedback="Os verbos da primeira conxugación con alternancia vocálica teñen as mudanzas na 1ª , 2ª e 3ª persoa do singular e 3ª persoa do plural do  presente de indicativo e de subxuntivo">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Cal é a forma correcta?</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Esp&amp;#603;rtas</opcion>\n        		\n                <opcion resp="0">Espertas</opcion>\n        					</opciones>\n		</pregunta>\n                	</preguntas>\n    \n    	<!-- Indica el numero de posibles preguntas que el profesor ha definido para el ejercicio -->\n	<numero_preguntas_totales>10</numero_preguntas_totales>\n	<!-- Indica el numero de preguntas que apareceran, seleccionadas de forma aleatoria -->\n	<numero_preguntas_visibles>10</numero_preguntas_visibles>\n	<orden_preguntas>ALEATORIO</orden_preguntas>\n    <!-- Indica el tipo de ordenacion usado-->\n	<puntos>100</puntos>\n    <!-- Indica los margenes para la puntuación por valoración-->\n    <margenes activo=\'no\'>\n                            	</margenes>\n    \n    <idioma>\n\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtResultado>Resultado</txtResultado>\n		<txtPreguntas>Preguntas</txtPreguntas>\n		<txtHasAprobado>Aprobou!!</txtHasAprobado>\n		<txtHasSuspendido>Non superaches esta actividad</txtHasSuspendido>\n		<txtPorcentajeMinimo1>É necesario acadar un </txtPorcentajeMinimo1>\n		<txtPorcentajeMinimo2> para aprobar</txtPorcentajeMinimo2>\n		<txtContestadas>respondeu</txtContestadas>\n		<txtNoContestadas>Sen resposta</txtNoContestadas>\n		<txtNumObligatoria1>Contestou</txtNumObligatoria1>\n		<txtNumObligatoria2>pregunta obrigatoria</txtNumObligatoria2>\n		<txtNumObligatorias1>Contestou</txtNumObligatorias1>\n		<txtNumObligatorias2>preguntas obrigatorias</txtNumObligatorias2>\n		<txtTuPuntuacionEs>A túa puntuación é</txtTuPuntuacionEs>\n		<txtMal>Mal</txtMal>\n		<txtBien>Ben</txtBien>\n		<txtObligatoria>pregunta obrigatoria</txtObligatoria>\n		<txtProgreso>Progreso</txtProgreso>\n		<txtFinalizar>Final</txtFinalizar>\n		<txtVerCorregir>Vexa a corrección</txtVerCorregir>\n		\n		<txtRespuestaIncorrecta>Resposta incorrecta</txtRespuestaIncorrecta>\n		<txtTituloActividadNoSuperada>Actividade non superada</txtTituloActividadNoSuperada>\n		<txtActividadNoSuperada>Non superaches esta actividade</txtActividadNoSuperada>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns ten superado a actividade</txtActividadSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtCerrar>Pechar</txtCerrar>\n		<txtRespuestaCorrecta>Resposta correcta</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Outras respostas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtPosiblesRespuestas>Posibles respostas</txtPosiblesRespuestas>\n		<txtTuRespuesta>A túa resposta</txtTuRespuesta>\n\n   		<txtSensibleMayusculas>É sensible a maiúsculas.</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>Non diferencia entre maiúsculas e minúsculas.</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos.</txtSensibleAcentos>\n		<txtNoSensibleAcentos>Non é sensíbel a acentos.</txtNoSensibleAcentos>\n\n		<txtTituloErrorAudio>Erro en Actividade</txtTituloErrorAudio>\n		<txtErrorAudioSoportado>Audio non atopado ou non soportado polo teu navegador</txtErrorAudioSoportado>\n		\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Maiúsculas/ minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xoga outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtSiguiente>Seguinte</txtSiguiente>\n		<txtAnterior>Anterior</txtAnterior>\n		<txtInfoAdicional>Información adicional</txtInfoAdicional>\n		\n	</idioma>\n\n</actividad>';