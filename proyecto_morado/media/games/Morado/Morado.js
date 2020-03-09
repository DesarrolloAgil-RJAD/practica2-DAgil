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
	"<h1>Vuelta a casa</h1>\
    <p>Volvía de hacer unas compras, pesaban un poco pero no era algo que molestase mucho.  \
    Llegué a casa y me dispuse a abrir la puerta, pero surgió un problema, no encontraba las llaves.<br/>\
	Estaba completamente seguro que las había cogido por la mañana.<br/>\
	Necesitaba entrar, porque es demasiado tarde y es de noche. Supongo que podría <a href='./bolsas' class='once'>buscar en las bolsas de la compra</a>, tambien miré mi móvil, tenía el número de teléfono \
	del cerrajero para <a href='llamar'>llamarlo</a> o podría ir a casa de la vecina, quizás me puede dejar <a href='balcon'>colarme por el balcón</a>.</p>",
	  {
	    actions: {
                'bolsas': function( character, system, action) {
					system.setCharacterText( "<p>No las encuentro aquí, no tiene sentido que las guardase con la compra</p>" );
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

