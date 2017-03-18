var DatosActividad = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><actividad tipo="Test">\n	\n<!-- Parte generica -->	\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8199d0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xF3F3F3</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x8199d0</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xF3F3F3</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n	\n	<!-- Parametros nuevos - dic 2012 -->\n	<autor>Gabriel Durán</autor>\n	<descripcionUsuario>Muda os tempos de futuro para presente de indicativo. Exercicio tirado de galego.eu</descripcionUsuario>\n    <descripcionUsuarioLimpio>Muda os tempos en futuro para pasado. Exercicio tirado de galego.eu</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://d3c41a1a64ri6i.cloudfront.net/recursos/90/2881600/</xorigen_recursos>\n	\n	<globalFeedback>1</globalFeedback>\n	\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>si</sensible_mayusculas>\n	<sensible_acentos>si</sensible_acentos>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n     <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<titulo>Instrucións</titulo>\n	<tituloActividad>Muda o tempo</tituloActividad>\n	<enunciado>Muda ao presente de indicativo</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>Muda o tempo</enunciado_edu>\n    \n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Responde ás preguntas do test. Pode parecer que deba responder a algunhas preguntas para ir ao seguinte. Cando chegar ao final das preguntas, pode dar para acabar coa actividade, para que poidan ser corrixidos ea súa puntuación.</descripcion>\n	<!-- Indica el porcentaje de preguntas que deberan seran correctas para superar la actividad -->\n	<porcentaje_superar_actividad>50</porcentaje_superar_actividad>\n	<preguntas>\n		<!-- El atributo tipo indica las posibles preguntas que el profesor ha definido, hacen referencia a los cuatro tipos de preguntas:\n		- Respuesta escrita\n		- Respuesta escrita amplia\n		- Respuesta unica\n		- Respuesta multiple\n		-->\n                \n                        \n		<pregunta id="1" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Logo virei polos resultados</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Logo veño polos resultados</opcion>\n        		\n                <opcion resp="1">logo veño polos resultados</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="2" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Non caberá todo dentro da caixa</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Non cabe todo dentro da caixa</opcion>\n        		\n                <opcion resp="1">non cabe todo dentro da caixa</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="3" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Xa dará o Paio o sinal acordado</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Xa dá o Paio o sinal acordado</opcion>\n        		\n                <opcion resp="1">xa dá o Paio o sinal acordado</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="4" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Dirano todo, sen ocultaren nada</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Dino todo, sen ocultaren nada</opcion>\n        		\n                <opcion resp="1">dino todo, sen ocultaren nada</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="5" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Farás unha ponte para acurtar o camiño</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Fas unha ponte para acurtar o camiño</opcion>\n        		\n                <opcion resp="1">fas unha ponte para acurtar o camiño</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="6" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Estes farán sempre as cousas ao revés</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Estes fan sempre as cousas ao revés</opcion>\n        		\n                <opcion resp="1">estes fan sempre as cousas ao revés</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="7" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Non terei máis remedio que esquecelo</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Non teño máis remedio que esquecelo</opcion>\n        		\n                <opcion resp="1">non teño máis remedio que esquecelo</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="8" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Saberán moito, máis non o demostran</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Saben moito, mais non o demostran</opcion>\n        		\n                <opcion resp="1">saben moito, mais non o demostran</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="9" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Irei en avión que é moito máis rápido</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Vou en avión que é moito máis rápido</opcion>\n        		\n                <opcion resp="1">vou en avión que é moito máis rápido</opcion>\n        					</opciones>\n		</pregunta>\n                \n                        \n		<pregunta id="10" tipo="escrita" obligatoria="si" feedback="">\n                	                \n		<enunciado tipo="texto" video="" videoStartTime="" audio="" >Proporemos que renuncie á directiva actual</enunciado>\n			<opciones>\n            	\n            	\n                <opcion resp="1">Propomos que renuncie á directiva actual</opcion>\n        		\n                <opcion resp="1">propomos que renuncie á directiva actual</opcion>\n        					</opciones>\n		</pregunta>\n                	</preguntas>\n    \n    	<!-- Indica el numero de posibles preguntas que el profesor ha definido para el ejercicio -->\n	<numero_preguntas_totales>10</numero_preguntas_totales>\n	<!-- Indica el numero de preguntas que apareceran, seleccionadas de forma aleatoria -->\n	<numero_preguntas_visibles>10</numero_preguntas_visibles>\n	<orden_preguntas>ALEATORIO</orden_preguntas>\n    <!-- Indica el tipo de ordenacion usado-->\n	<puntos>100</puntos>\n    <!-- Indica los margenes para la puntuación por valoración-->\n    <margenes activo=\'no\'>\n                            	</margenes>\n    \n    <idioma>\n\n		<txtPuntos>Puntuación</txtPuntos>\n		<txtTiempo>Tempo</txtTiempo>\n		<txtTiempoRestante>Tempo Restante</txtTiempoRestante>\n		<txtResultado>Resultado</txtResultado>\n		<txtPreguntas>Preguntas</txtPreguntas>\n		<txtHasAprobado>Aprobou!!</txtHasAprobado>\n		<txtHasSuspendido>Non superou a actividad</txtHasSuspendido>\n		<txtPorcentajeMinimo1>É necesario acadar un </txtPorcentajeMinimo1>\n		<txtPorcentajeMinimo2> para aprobar</txtPorcentajeMinimo2>\n		<txtContestadas>respondeu</txtContestadas>\n		<txtNoContestadas>Sen resposta</txtNoContestadas>\n		<txtNumObligatoria1>Contestou</txtNumObligatoria1>\n		<txtNumObligatoria2>pregunta obrigatoria</txtNumObligatoria2>\n		<txtNumObligatorias1>Contestou</txtNumObligatorias1>\n		<txtNumObligatorias2>preguntas obrigatorias</txtNumObligatorias2>\n		<txtTuPuntuacionEs>A súa puntuación é</txtTuPuntuacionEs>\n		<txtMal>Mal</txtMal>\n		<txtBien>Ben</txtBien>\n		<txtObligatoria>pregunta obrigatoria</txtObligatoria>\n		<txtProgreso>Progreso</txtProgreso>\n		<txtFinalizar>Final</txtFinalizar>\n		<txtVerCorregir>Vexa a corrección</txtVerCorregir>\n		\n		<txtRespuestaIncorrecta>Resposta incorrecta</txtRespuestaIncorrecta>\n		<txtTituloActividadNoSuperada>Actividade non superada</txtTituloActividadNoSuperada>\n		<txtActividadNoSuperada>Unha mágoa! Será para a próxima vez</txtActividadNoSuperada>\n		<txtTituloActividadSuperada>Actividade Pasado</txtTituloActividadSuperada>\n		<txtActividadSuperada>Parabéns por superar esta actividade</txtActividadSuperada>\n		<txtTiempoSuperado>Superou o tempo máximo para esta actividade</txtTiempoSuperado>\n		<txtCerrar>Pechar</txtCerrar>\n		<txtRespuestaCorrecta>Resposta correcta</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Outras respostas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Resposta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Parabéns por superar esta actividade</txtBoxRespuestaCorrecta>\n		<txtPosiblesRespuestas>Posibles respostas</txtPosiblesRespuestas>\n		<txtTuRespuesta>A súa resposta</txtTuRespuesta>\n\n   		<txtSensibleMayusculas>É sensible a maiúsculas.</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>Non diferencia entre maiúsculas e minúsculas.</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos.</txtSensibleAcentos>\n		<txtNoSensibleAcentos>Non é sensíbel a acentos.</txtNoSensibleAcentos>\n\n		<txtTituloErrorAudio>Erro en Actividade</txtTituloErrorAudio>\n		<txtErrorAudioSoportado>Audio non atopado ou non soportado polo teu navegador</txtErrorAudioSoportado>\n		\n		<txtAceptar>Aceptar</txtAceptar>\n		<txtTiempoMaximo>Tempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Maiúsculas e minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comezar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Axuda</txtAyuda>\n		<txtMostrarMas>Amosar máis</txtMostrarMas>\n		<txtMostrarMenos>Amosar menos</txtMostrarMenos>\n		<txtReiniciar>Reinicie</txtReiniciar>\n		<txtVolverJugar>Xogar outra vez</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Rexistrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Comparte os resultados</txtCompartirResultado>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtSiguiente>Seguinte</txtSiguiente>\n		<txtAnterior>Anterior</txtAnterior>\n		<txtInfoAdicional>Información adicional</txtInfoAdicional>\n		\n	</idioma>\n\n</actividad>';