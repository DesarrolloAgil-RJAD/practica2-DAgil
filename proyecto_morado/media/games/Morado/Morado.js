// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

// En modo depuraciÃ³n, que no haya efectos de jquery
jQuery.fx.off=true

/* The situations that the game can be in. Each has a unique ID. */
//caminaba es un enlace de prueba que he usado para saltar rápido a la escena a probar =D
undum.game.situations = {
    start: new undum.SimpleSituation (
	"<h1>Un color que no se olvida</h1>\
    <p><a href='situacion4'>Caminaba</a> con mi pequeña hija de vuelta a casa y decidimos tomar un pequeño atajo,\
	una calle poco transitada que nos ahorraba un par de semáforos que hacían esperar mucho.</p>\
	</br>\
	<p class='dialogo'> ¿Que hace una chica tan bonita como tu en un lugar como este?, será mejor que unos caballeros te guíen y escolten</p>\
	</br>\
	<p>Una voz masculina me habló acentuándo la última palabra, no era una voz agradable. Al girarme vi como había\
	varios hombres juntos, miré al fondo de la calle y otro par había aparecido.</br> Tenía miedo de lo que pudiese pasar\
	no tenían buenas intenciones, pero asentí con miedo. No quería que hiciesen daño a mi hija. </br></br>\
	Noté un fuerte dolor en la cabeza, <a href='./pensamiento1' class='once'> todo se volvió oscuro y morado</a> </p>\
	<p><a href='comienzo'>Adéntrate en la historia</a></p>",
	  {
	      actions: {
                'pensamiento1': function( character, system, action) {
					system.setCharacterText( "<p>Sólo veo luces moradas distorsionadas, no se si son luces de neón. ¿Qué me pasa? ¿Dónde estoy? Tengo la cabeza confusa, parece que me he dado un golpe. Solo sé que no recuerdo nada. </p>" );
				}
	    }   
	  }
	),
	
	comienzo: new undum.SimpleSituation (
	"<h1>UN LUGAR DESCONOCIDO</h1>\
	<p>Noto el dolor del brazo, de piernas. Me noto tumbada y me incomoda esa <a href='./lugar'> luz morada </a> que hay en lo alto.\
	Me percato que esa luz no está en mi habitación de mi casa y me pregunto donde coño estoy y como he llegado hasta aqui.</br>\
	<p>¿Es esto un secuestro? ¿Una violación? ¿Un ajuste de cuentas? ¡Qué cojones un ajuste de cuentas! ¿A quién le iba a deber \
	dinero yo?. Mi cabeza ahora mismo rondaban entre 1 y 100 preguntas y ninguna de ellas sin respuesta.</br> \
	Desconcertada, me siento en la cama mientras miro a tu alrededor, hay luces moradas en todas las paredes, tan brillantes que \
	casi ocultan el deterioro de los azulejos. Me siento muy mareada, pero no es momento para descansar, al contrario, aún no sé \
	si mi hija Thalia, está a salvo. Tan pronto como pienso en ponerme de pie me doy cuenta de que mi brazo izquierdo está esposado \
	a la cama, la cadena parece bastante oxidada, podría <a href='romper'>intentar romperla</a> de un tirón o <a href='llave'>buscar la llave</a> por la cama.<\p> ",
	  {
	      actions: {
                'lugar': function( character, system, action) {
					system.setCharacterText( "<p>Tengo miedo de lo que me pueda \
					llegar a encontrar. No es habitual amanecer (¡O atardecer!) en un sitio desconocido. </p>" );
				}
	    }   
	  }
	),
	
	llave: new undum.SimpleSituation(
	"<p>Con un solo brazo para maniobrar, comienzo a palpar sobre la cama en busca de bultos que puedan ser la llave, sin éxito. \
	Sigo tanteando con la mano hasta llegar al borde de la cama y dar con una mesita, dentro de la cual hay una llave para mi sorpresa. \
	La introduzco en las esposas para liberarme, pero no consigue entrar, tendré que <a href='romper'>intentar romperlas</a>.</p>"
	),
	
	romper: new undum.SimpleSituation(

	"<p>Hago acopio de las pocas fuerzas que me quedan y estiro con las dos manos de la cadena, consiguiendo partir un eslabón \
	y separarme de la cama. Una vez en pie, consigo distinguir lo que parece ser la puerta de la habitación. Puedo <a href='puerta'>correr a abrirla</a> o \
	<a href='buscar'>mirar la habitación</a> con más detalle.</p>"
	),
	
	puerta: new undum.SimpleSituation(
	""
	,{
	    enter: function(character,system,to){
			if(character.qualities.llave==1){
				system.write( "<p>Me acerco tambaleándome a la puerta, solo para descubrir que no se mueve ni un milímetro, está cerrada con llave. \
	<a href='buscar'>Volver a mirar por la habitación</a> o <a href='situacion2'>probar la llave</a> que he encontrado antes. </p>" );
			system.setQuality('llave',0);	
			}else{
				system.write( "<p>Me acerco tambaleándome a la puerta, solo para descubrir que no se mueve ni un milímetro, está cerrada con llave. \
	<a href='buscar'>Volver a mirar por la habitación</a></p>" );	
			}
	    }   
	  }
	),
	
	buscar: new undum.SimpleSituation(
	"\
	<p>Como al despertar pero con más cuidado, miro a mi alrededor. Aparte de la cama vieja, distingo una mesita al lado,\
	me acerco y encuentro una llave en su interior, puede ser la que necesito para <a href='situacion2'>abrir la puerta</a>. Pero me quedo con \
	la esperanza de encontrar algo más en la habitación... Algo que me sirva como luz en este camino morado que me está poniendo la vida como prueba.</p>"
	,{
	    enter: function(character,system,to){
			system.setQuality('llave',1);	
	    }   
	  }),

<<<<<<< HEAD
	
	situacion2: new undum.SimpleSituation(
	"<h1>EL PASILLO INFINITO</h1>\
	<p>El escalofrio que recorre mi piel es signo de miedo, desolación, desconcertancia... Aún no encuentro respuestas a las tantas\
	preguntas que me planteo a cada minuto. Ni un rastro y prueba de nada... ¿Y si son pruebas que me están poniendo y tengo que resolverlas?\
	No sé... Aún no estoy asimilando lo que me está pasando y es lo que más miedo me da. </br>\
	¿Esto es algo seguro? Mi pie descalzo anda con desconfianza y miedo. Pero no debo perder la conciencia ni la fuerza que me empuja a seguir intentándolo. </br>\
	No sé si deberia estar andando <a href='./rapido' >deprisa</a> o ir <a href='situacion21'>despacio</a> por todo lo que se puede venir encima... </p>"
	,{
		actions: {
			'rapido': function( character, system, action) {
					system.setCharacterText("<p>Debo hacer algo, no sé si ha sido buena idea ir más rapido... Creo que lo mejor es ir <a href='situacion21'>despacio</a> </p>");
					system.setQuality('puntos', character.qualities.puntos+100 );
			}
			
		}
	}
	),
	
	situacion21: new undum.SimpleSituation(
	"<p>Andar despacio no me está ayudando... pero creo que debo andarme con cuidado por lo que pueda pasar. </br>\
	Mi entorno se comprende entre luces moradas, papeles sanitarios tirados por el suelo y maquinaria totalmente destrozada. Esto tiene\
	pinta de un hospital. Me agacho con cautrela para mirar de qué tratan estos <a href='situacion22'>documentos</a> e intentar entender algo. Pero nada... No encuentro \
	Ningún tipo de información relevante que pueda ser de ayuda en este caso, además no entiendo la jerga sanitaria y todo lo relacionado con ella \
	cuando yo realmente me dedico al tema empresarial de marketing. </p>"
	),
	
	situacion22: new undum.SimpleSituation(
	"<p> Miro a través de estos documentos y encuentro una carta un tanto extraña, porque se deja destacar de todos los demás documentos.</br>\
	Ahora sí que tengo miedo. Totalmente es una <a href='situacion3'>carta</a>. ¡PERO POR QUÉ ME DA MIEDO SI NI SI QUIERA SE SI ES PARA MÍ! Estoy un poco alterada y confusa\
	todo me da vueltas y todo me parece desconcertante. Ahora seguro que la carta es una carta de amor entre los enfermeros que trabajaban aquí. Alterarse es de cobardes.\
	</p>"
	),
	
	situacion3: new undum.SimpleSituation(
	
	),
	
	alucinacion: new undum.SimpleSituation (
=======

	situacion4: new undum.SimpleSituation (
>>>>>>> origin/develop
	"<p>La cabeza comenzó a pesarme más y más y más y ... más<\p> </br>\
	<p><a class='once' href='./uno'>¿Porque se movían las cosas solas?</a>\
	</br> </br> &nbsp &nbsp \
	<a class='once' href='./dos'>¿donde estoy?</a>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp \
	<a class='once' href='./tres'>¿donde?</a></br> </br> &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./cuatro'>¿que hago?</a> </br> <a class='once' href='./cinco'> ¿quien son?</a></br>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./seis'>quiero salir</a></br> \
	<a class='once' href='./siete'>quiero irme a casa</a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./ocho'>no quiero esto</a>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a href='./nueve'>quiero volver</a></br> <a class='once' href='./diez'>no quiero que me hagan nada</a></p></br>\
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./once'>¿Donde esta Thalia?</a></p>",
	  {
	      actions: {
                'uno': function( character, system, action) {
					system.setCharacterText("<p>Debo hacer algo</p>");
					system.setQuality('puntos', character.qualities.puntos+1 );
					system.setQuality('llave',1);
				},
				'dos': function( character, system, action) {
					system.setCharacterText("<p></p>");
					system.setQuality('llave',0);
				},
				'tres': function( character, system, action) {
					system.setCharacterText( "<p></p>" );
				},
				'cuatro': function( character, system, action) {
					system.setCharacterText( "<p>No me gusta el ruido</p>" );
				},
				'cinco': function( character, system, action) {
					system.setCharacterText( "<p></p>" );
				},
				'seis': function( character, system, action) {
					system.setCharacterText( "<p></p>" );
				},
				'siete': function( character, system, action) {
					system.setCharacterText( "<p>A mi me gusta el morado</p>" );
				},
				'ocho': function( character, system, action) {
					system.setCharacterText( "<p>¿está?¿donde?</p>" );
				},
				'nueve': function( character, system, action) {
					system.setCharacterText( "<p><a class='once' href='situacion5'>¿La salida?</a></p>" );
				},
				'diez': function( character, system, action) {
					system.setCharacterText( "<p></p>" );
				},
				'once': function( character, system, action) {
					system.setCharacterText( "<p>MI HIJA</br> MI ¡HIJA!</p>" );
				}
			}
	    }   
	  ),
          
    situacion5: new undum.SimpleSituation(
          
    "<h1>ADELANTE</h1>\
	<p></p>\
	<p class='dialogo'> ¿Cuanto tiempo llevo aquí? Me duele la cabeza...</p> \
    <p>Parece que has vuelto a desmayarte, este infierno parece no tener fin. Ni si quiera recuerdas cuándo fue la última vez que\
	te llevaste algo a la boca. Tienes que buscar una salida, aunque encontrar algo de comer puede ser una buena idea. \
	En esta sala hay algunas ventanas rotas, las han tapado. Pero hay rendijas, podrías <a href='situacion52'>mirar al exterior</a>. \
	También hay una puerta doble a tu izquierda con una mortecina luz verde parpadeante: <p class='dialogo'> 'Salida de Emergencia' </p>\
	<p>A tu derecha, una puerta, por la que se ven unas escaleras. No dispones de mucho tiempo, puede que te estén buscando. \
	Puedes  <a href='situacion53'>salir por esa puerta</a> o quizás deberías volver a subir por esas <a href='situacion6'>escaleras</a></p>"
          
    ),
        
	situacion52: new undum.SimpleSituation(
    "<p>El sol te ciega por un momento y cuando vislumbras lo que te rodea solo  ves ventanas, también cerradas,\
	asomadas a un patio interior. Es un jardín, cuadrado, con una fuente en medio llena de agua estancada y ranas saltando de un lado a otro. \
	La vegetación es tan frondosa debido al abandono que no puede apreciarse donde acaba un árbol y empieza el siguiente</p>"
    ),
	
    situacion53: new undum.SimpleSituation(
<<<<<<< HEAD
    "<p> Con cierta ansiedad de dispones a abrir la puerta\ <p class='dialogo'>Esta dichosa puerta tiene que llegar hasta alguna salida. Tengo que intentarlo</p> \  Al abrir la puerta el chirrido que producen las oxidads visagras hacen saltar las ranas de sus hojas y un pequeño grupo de pájaros alza el vuelo con sorpresa.\ </p>"
=======
    "<p> Con cierta ansiedad de dispones a abrir la puerta</p>\
	<p class='dialogo'>Esta dichosa puerta tiene que llegar hasta alguna salida. Tengo que intentarlo</p>\
	<p>Al abrir la puerta el chirrido que producen las oxidads visagras hacen saltar las ranas de sus hojas y un pequeño grupo de pájaros alza el vuelo con sorpresa. </p>"
>>>>>>> origin/develop
    ),


	situacion6: new undum.SimpleSituation(
	"<h1>ENCUENTRO INESPERADO</h1> \
	<p>De una vez todo deja de dar vueltas, me cuesta seguir en línea recta pero no dejo de avanzar. Esto no puede seguir así, \
	debería intentar mantener mi mente ocupada. Quizá <a href='hablar'>hablar en voz alta</a> me ayude a mantener la cordura; o algo \
	tan simple como <a href='cantar'>tararear una canción</a>, la que sea… (<a href='ignorar'>No hacer nada</a>)</p>"
	),

	hablar:  new undum.SimpleSituation(
	"<p>Decido empezar a hablar sobre el futuro, necesito autoconvencerme para no perder la esperanza: </p>\
	<p class='dialogo'>-En cuanto encuentre a mi hija, saldremos pitando de aquí juntas, volveremos a nuestra rutina de siempre y recordaremos todo esto \
	como solo un mal sueño. Sí, -afirmo mientras empiezan a brotar lágrimas de mis ojos- una simple pesadilla. Por favor Thalia, espero que estés sana y sal- \
	-¿M-mami? </p>\
	<p>Freno en seco, mirando hacia el habitáculo cerrado del que parecía provenir el sonido. ¡¿Qué?! ¿He escuchado bien? ¡Oh no, otra vez no! \
	Espera, esta vez no hay ruidos extraños ni destellos violentos.. ¿Debería <a href='investigar'>investigar la habitación</a> o <a href='ignorar'>ignorar el ruido</a>?</p>"
	),

	cantar: new undum.SimpleSituation(
	"<p>Sin apenas pensarlo, empiezo a tararear la nana favorita de Thalia, deseando con toda mi alma que se encuentre bien.</p> \
	<p class='dialogo'>-La, lará, laralá, la, lalá, lara lalá -comienzan a caer lágrimas por mis mejillas, pero no dejo de tararear- la la, la la lá.. \
	-¿Mami? ¿Mamá? </p>\
	<p>Freno en seco, mirando hacia el habitáculo cerrado del que parecía provenir el sonido. ¡¿Qué?! ¿He escuchado bien? ¡Oh no, otra vez no! Espera, \
	esta vez no hay ruidos extraños ni destellos violentos.. ¿Debería <a href='investigar'>investigar la habitación</a> o <a href='ignorar'>ignorar el ruido</a>?</p>"
	),

	investigar: new undum.SimpleSituation(
	"<p>Me acerco en silencio y con cuidado a la puerta cerrada. Se escuchan sollozos de fondo, ¿podrá ser..?</p> \
	<p class='dialogo'>-¿T-Thalia? ¿Eres tú? </p>\
	<p>Los sollozos se detienen, a la vez que comienzan a sonar pasitos. Me alejo de la puerta cautelosamente mientras se abre \
	muy despacio, dejando asomar una pequeña silueta que me mira con recelo. </p>\
	<p class='dialogo'>-¿Mamá? ¿De verdad eres mamá? \
	-¡Thalia, amor mío! -grito de alegría mientras me abalanzo a abrazarla- ¡¿Estás bien?! ¿Te duele algo vida mía? \
	-Mami -dice mientras sonríe con los ojos llorosos-, estoy bien, pero te he echado mucho de menos… \
	-Y yo a ti cariño, ¿has estado sola mucho tiempo? \
	-No.. me desperté hace poco y al ver que no estabas decidí esperarte aquí. \
	-Muy bien Thalia -le digo mientras acaricio su pequeña cabeza-, has sido una niña muy valiente. \
	-Gracias mamá, ¿podemos volver a casa? Tengo sueño. \
	-No te preocupes mi amor, ahora que estamos juntas encontraremos la salida en un periquete. </p>\
	<p>Después de abrazarnos un poco más, me pongo de pie y cojo a Thalia de la mano (no le gusta que la lleve en brazos, \
	dice que ya es 'una niña muy grande' para eso). Estamos más que preparadas para <a href='situacion7'>continuar</a>.</p>",
	{
	    enter: function(character,system,to){
			system.setQuality('hija',1);	
	    }   
	  }
	),

	ignorar: new undum.SimpleSituation(
	"<p>No puede ser real, estoy convencida. No voy a perder tiempo en investigar un ruido que puede ni ser real. Tras avanzar unos cuantos \
	pasos más, escucho como la puerta que acabo de pasar se abre muy lentamente, y de ella sale una pequeña figura, que empieza a mirar a su alrededor, hasta que me encuentra.</p>\
	<p class='dialogo'>-¿Mamá? </p>\
	<p>¡Es ella! ¡Es Thalia! </p>\
	<p class='dialogo'>-¡Thalia, amor mío! -grito de alegría mientras me abalanzo a abrazarla- ¡¿Estás bien?! ¿Te duele algo vida mía? \
	-Mami -dice mientras sonríe con los ojos llorosos-, estoy bien, pero te he echado mucho de menos… \
	-Y yo a ti cariño, ¿has estado sola mucho tiempo? \
	-No.. me desperté hace poco y al ver que no estabas decidí esperarte aquí. \
	-Muy bien Thalia -le digo mientras acaricio su pequeña cabeza-, has sido una niña muy valiente. \
	-Gracias mamá, ¿podemos volver a casa? Tengo sueño. \
	-No te preocupes mi amor, ahora que estamos juntas encontraremos la salida en un periquete. </p>\
	<p>Después de abrazarnos un poco más, me pongo de pie y cojo a Thalia de la mano. Estamos más que preparadas para <a href='situacion7'>continuar</a>.</p>",
	{
	    enter: function(character,system,to){
			system.setQuality('hija',1);	
	    }   
	  }
	)
};

// Ejemplo de declaraciÃ³n separada
undum.game.situations["calabozo"]=new undum.SimpleSituation(
			
		);

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    hija: new undum.OnOffQuality(
        "Hija rescatada", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),
	llave: new undum.OnOffQuality(
        "Llave", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
	puntos: new undum.IntegerQuality(
		"Puntuación", {priority:"0003", group:'progress', onDisplay:"&#10003;"}
	)
	
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0002"}),
	progress: new undum.QualityGroup('&nbsp', {priority: "0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality( "hija" , false );
    system.setQuality( "llave" , false );
	character.qualities.puntos=0;
    system.setCharacterText("<p> </p>");
};

