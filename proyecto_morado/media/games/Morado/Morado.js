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
    <p><a href='alucinacion'>Caminaba</a> con mi pequeña hija de vuelta a casa y decidimos tomar un pequeño atajo,\
	una calle poco transitada que nos ahorraba un par de semáforos que hacían esperar mucho.</p>\
	</br>\
	<p class='dialogo'> ¿Que hace una chica tan bonita como tu en un lugar como este?, será mejor que unos caballeros te guíen y es col ten</p> </br>\
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
	"<h1>SITIO DESCONOCIDO</h1>\
	<p>Noto el dolor del brazo, de piernas. Me noto tumbada y me incomoda esa <a href='./lugar'> luz morada </a> que hay en lo alto.\
	Me percato que esa luz no está en mi habitación de mi casa y me pregunto donde coño estoy y como he llegado hasta aqui.</br>\
	<p>¿Es esto un secuestro? ¿Una violación? ¿Un ajuste de cuentas? ¡Qué cojones un ajuste de cuentas! ¿A quién le iba a deber \
	dinero yo?. Mi cabeza ahora mismo rondaban entre 1 y 100 preguntas y ninguna de ellas sin respuesta.</br> \
	Desconcertada, me siento en la cama mientras miro a tu alrededor, hay luces moradas en todas las paredes, tan brillantes que \
	casi ocultan el deterioro de los azulejos. Me siento muy mareada, pero no es momento para descansar, al contrario, aún no sé \
	si mi hija Thalia, está a salvo. Tan pronto como pienso en ponerme de pie me doy cuenta de que mi brazo izquierdo está esposado \
	a la cama, la cadena parece bastante oxidada, podría <a href=’romper’>intentar romperla</a> de un tirón o <a href=’llave’>buscar la llave</a> por la cama.<\p> ",
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
	"<h1>BÚSQUEDA</h1>\
	<p>Con un solo brazo para maniobrar, comienzo a palpar sobre la cama en busca de bultos que puedan ser la llave, sin éxito. \
	Sigo tanteando con la mano hasta llegar al borde de la cama y dar con una mesita, dentro de la cual hay una llave para mi sorpresa. \
	La introduzco en las esposas para liberarme, pero no funcionan, tendré que <a href='romper'>intentar romperlas</a>.</p>"
	),
	
	romper: new undum.SimpleSituation(
	"<h1>TIRÓN</h1> \
	Hago acopio de las pocas fuerzas que me quedan y estiro con las dos manos de la cadena, consiguiendo partir un eslabón \
	y separarme de la cama. Una vez en pie, consigo distinguir lo que parece ser la puerta de la habitación. Puedo <a href='puerta'>correr a abrirla</a> o \
	<a href='habitacion'>mirar la habitación</a> con más detalle.</p>"
	),
	
	puerta: new undum.SimpleSituation(
	"<h1>PUERTA</h1> \
	Me acerco tambaleándome a la puerta, solo para descubrir que no se mueve ni un milímetro, está cerrada con llave. \
	<a href='buscar'>Volver a mirar por la habitación</a> (ESTO SOLO SALE SI TIENES LA LLAVE PERO NO SÉ CÓMO PONER EL IF) o <a href='SITUACION2'>probar la llave</a> que he encontrado antes.</p>"
	),
	
	buscar: new undum.SimpleSituation(
	"<h1>BÚSQUEDA</h1> \
	Como al despertar pero con más cuidado, miro a mi alrededor. Aparte de la cama vieja, distingo una mesita al lado, \
	me acerco y encuentro una llave en su interior, puede ser la que necesito para <a href='SITUACION2'>abrir la puerta</a>.</p>
	),

	alucinacion: new undum.SimpleSituation (
	"<p>La cabeza comenzó a pesarme más y más y más y ... más<\p> </br>\
	<p><a class='once' href='./uno'>¿Porque se movían las cosas solas?</a>\
	</br> </br> &nbsp &nbsp \
	<a class='once' href='./dos'>¿donde estoy?</a>,\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp \
	<a class='once' href='./tres'>¿donde?</a></br> </br> &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./cuatro'>¿que hago?</a> </br> <a class='once' href='./cinco'> ¿quien son?</a></br>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./seis'>quiero salir</a></br> \
	<a class='once' href='./siete'>quiero irme a casa</a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./ocho'>no quiero esto</a>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a href='./nueve'>quiero volver</a></br> <a class='once' href='./diez'>no quiero que me hagan nada</a></p></br>\
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./once'>Donde esta [nombre de la hija]</a></p>",
	  {
	      actions: {
                'uno': function( character, system, action) {
					system.setCharacterText("<p>Debo hacer algo</p>");
				},
				'dos': function( character, system, action) {
					system.setCharacterText("<p></p>");
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
					system.setCharacterText( "<p><a class='once' href='unaescena'>¿La salida?</a></p>" );
				},
				'diez': function( character, system, action) {
					system.setCharacterText( "<p></p>" );
				},
				'once': function( character, system, action) {
					system.setCharacterText( "<p>MI HIJA</br> MI ¡HIJA!</p>" );
				}
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
    antorcha: new undum.OnOffQuality(
        "Antorcha", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),
	  llave: new undum.OnOffQuality(
        "Llave", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality( "antorcha" , false )
    system.setQuality( "llave" , false )
    system.setCharacterText("<p> </p>");
};

