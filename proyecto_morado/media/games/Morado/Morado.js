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
undum.game.situations = {
    start: new undum.SimpleSituation (
	"<h1>Un color que no se olvida</h1>\
    <p>Caminaba con mi pequeña hija de vuelta a casa y decidimos tomar un pequeño atajo,\
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
	Me noto inmovilizada, no \
	puedo mover nada de mi cuerpo; es como si estuviera sufriendo una parálisis del sueño, pero me aseguro que no lo es porque en otras\
	ocasiones he sufrido algunas. </br>\
	No se que debo hacer, si <a href='fuerza'>levantarme</a> y arriesgarme al peligro o <a href='miedo'>quedarme dónde estoy </a> sin ninguna explicación. Se que no es facil \
	mi situación, pero creo que debo encontrar alguna explicación ante todo esto...</br>\
	¿Y mi hija? Entro en un momento de pánico dónde la situación puede conmigo. No encuentro ninguna explicación\
	y solo quiero gritar y pedir ayuda.<\p> ",
	  {
	      actions: {
                'lugar': function( character, system, action) {
					system.setCharacterText( "<p>Comienzo a abrir los ojos despacio, pero con miedo de lo que me pueda \
					llegar a encontrar. No es habitual amanecer (¡O atardecer!) en un sitio desconocido. </p>" );
				}
	    }   
	  }
	),
	
	fuerza: new undum.SimpleSituation(
	"<h1>ENCONTRAR RESPUESTAS</h1>"
	),
	
	miedo: new undum.SimpleSituation(
	"<h1>MIEDO</h1>"
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

