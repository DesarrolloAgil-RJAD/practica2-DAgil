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
	),
	
	llamar: new undum.SimpleSituation(
		"<p>Abro la agenda de mi móvil y veo que tengo a dos contactos cerrajeros</p>\
		<p>Vuelvo a mirar la agenda y pienso que a Juan (uno de los cerrajeros) le debo más de 1000 euros por otras cerraduras que me cambió en el pasado y le dejé sin pagar.</p>\
		<p>Alfonso, que el otro cerrajero, trabaja a poco más de dos horas de aquí y no creo que pueda venir así tan improvisto y menos siendo las horas que son...</p>\
		<p>En fin... tengo que decidirme...¿ <a href='./cerrajero01'>Juan</a> o <a href='cerrajero02'>Alfonso</a> ? </p>s",
		{	actions: {
			
				'cerrajero01': function( character, system, action) {
					system.setCharacterText( "<p>Juan no coge el telefono... Me estoy empezando a agobiar... Creo que tendré que esperar a que venga el vecino para poder <a href='balcon'>colarme por el balcon</a> si quiero dormir esta noche en mi casa</p>s" );
				}
				
			},
			
			enter: function( character, system, form ) {
				system.setCharacterText("<p>- Joder... ¿Y ahora a quien llamo?</p>");
			
			}
		}
		
	),
	
	
	cerrajero02: new undum.SimpleSituation( 				
		"<p>Alfonso me ha cogido el telefono, pero me ha dicho que siendo la hora que es, no podría puesto que está bastante lejos \
		y lleva todo el día fuera... Sólo me queda esperar a que venga el vecino para poder <a href='balcon'>colarme por el balcon</a> \
		si quiero dormir esta noche en mi casa </p>\
		<p>Pero por otra parte pienso que no tengo confianza con el vecino para que me deje colarme por el balcon y entrar mi casa \
		por el balcón, y eso le puede suponer a él un riesgo... Por tanto tambíen he pensado en la posibilidad de <a href='esperar'>esperar \
		al día siguiente</a> en el portal hasta que pueda venir el cerrajero</p>s"
	),
	
	esperar: new undum.SimpleSituation(
		"<p>Me hallo esperando y son las 9 de la noche y me acaba de llamar el cerrajero y dice que puede ir aunque sea tarde\
		 pero, ¿De verdad me merece la pena <a href='cerrajerosi'>aceptar que venga</a> y pagar un dineral para que me cambie la cerradura por enésima vez o\
		 decirle que <a href='cerrajerono'>no hace falta</a> y buscarme la vida de otra manera que no sea pagando? </p>s"
	),

	balcon: new undum.SimpleSituation(
		"<p>He llamado al portero del vecino y no ha contestado nadie, puede ser que sea porque no esté el hijo de mi vecina.\
		Esta vecina tiene 90 años y no puede abrir la puerta puesto que tiene un problema de cadera y está inmovilizada</p>s"
	
	),
	
	arbol: new undum.SimpleSituation(
		"<p>No iba a conseguir nada esperando, tenía que ponerme en marcha, así que me armé de valor.\
		Sabía un poco de deporte, así que comencé a escalar el árbol cercano a casa.\
		Cogí un poco de fuerza antes de saltar desde la rama hasta el balcón.\
		Pero no llegué, caí malamente y he tenido que llamar a la ambulancia, esta noche la pasaría en el hospital y con una pierna escayolada. </p>\
		<br/>\
		<h1>FIN</h1>"
	),
	
	cerrajerosi: new undum.SimpleSituation(
		"<p>Le dije que si al cerrajero, era mi oportunidad de poder volver a casa, estaba ansioso y ya me daba igual gastarme dinero en ello.\
		Así que podría dormir en casa aunque con unos cuantos euros menos en el bolsillo, pero al menos el día acabaría ya.</p>\
		<br/>\
		<h1>FIN</h1>"
	),
	cerrajerono: new undum.SimpleSituation(
		"<p>No quería gastar más dinero, no es que me sobrara mucho. Esperaría un rato en la puerta, no sabía cuánto tiempo, \
		quizás alguien encontraba las \
		llaves o el casero se acercaba, pero me quedaría junto a la puerta sentado.</p>\
		<br/>\
		<h1>FIN</h1>"
	),
	
	
	nocambiacerradura: new undum.SimpleSituation(
		"<p>Tras llamar al cerrajero, este le responde que no le va a cambiar la cerradura puesto que le debe bastante dinero y ya\
		  son demasiadas veces que le ha cambiado la cerradura. Por tanto, tengo que decidirme si pagar al cerrajero la cantidad de 1320 euros\
		  o llamar a mi casero para ver si tiene alguna llave de repuesto.</p>"
	
	),
	nollavesrespuesto: new undum.SimpleSituation(
		"<p> Responde el casero y yo le pregunto con miedo si tendría por casualidad otras llaves de repuesto ya que las que tenia, eran\
		otras de repuesto de mi casero. Él me responde que no, no tiene otras, que si he perdido las llaves que asuma mi responsabilidad \
		y llame al cerrajero y le pague todo lo que le debo. Pero pensándolo bien... y si en vez de pagarle, ¿me hago el valiente y me subo por el árbol trepando?</p>"
	),
	
	incorrecta01: new undum.SimpleSituation(
	"<p>Tras buscar por largo rato entre tus pertenencias, con voz que transmite poca tranquilidad dices a los guardias de la puerta:</p>\
	<p class='dialogo personaje'>- Fijaos que pertrechÃ© mi montura con toda suerte de abalorios, mÃ¡s olvideme el calculatorum...</p>\
	<p>Ni que decir tiene, que los guardias pasan de ti y vuelven a su quehacer en el castillo.</p>\
	<p>En fin... <a href='santoysenia'>puedes intentarlo de nuevo</a> o <a href='finalizar'>finalizar la partida</a>.</p>s"
	),
	
	incorrecta02: new undum.SimpleSituation(
	"<p>Aunque no tienes ni idea de quÃ© es una escuela, ni de si se come o no, intentas ser convincente mientras dices:</p>\
	<p class='dialogo personaje'>- Fijaos que aun frecuentando continuamente las clases de maese VÃ­ctor, \
	diose la circunstancia de que el dÃ­a que tal explicaron hallÃ¡bame cuidando de mi lobo huargo.</p>\
	<p>Ni que decir tiene, que los guardias pasan de ti y vuelven a su quehacer en el castillo.</p>\
	<p>En fin... <a href='santoysenia'>puedes intentarlo de nuevo</a> o <a href='finalizar'>finalizar la partida</a>.</p>"
	),
		
	finalizar: new undum.SimpleSituation(
	"<h1>Fin de la historia</h1>\
	<p>Pues asÃ­ acaba tu historia en Roca Rivasly. QuizÃ¡, otro dÃ­a, con mÃ¡s tiempo, decidas acabarla del todo</p>\
	<h1>Fin</h1>"
	),
	
	patiodearmas: new undum.SimpleSituation(
	"<h1>El patio de armas</h1>\
	<p>EstÃ¡s dentro del castillo, concretamente en el patio de armas</p>\
	<p>Los guardias se han quedado mÃ¡s tranquilos al saber que sabes el santo y seÃ±a, asÃ­ que se han ido a dormir... je, je, je...</p>\
	<p>A tu izquierda, <a href='zonanoble'>puedes acceder a la zona noble del castillo</a>, \
	mientras a la derecha observas que estÃ¡ <a href='caballerizas'>la entrada a las caballerizas</a>.</p>"
	),
	
	zonanoble: new undum.SimpleSituation(
	"<h1>La zona noble del castillo</h1>\
	<p>En este ala de la fortaleza se desarrolla la vida palaciega, ya sabes: la cocina, el comedor, los aposentos, el gimnasio con spa\
	y la terraza donde se ubican las placas solares... quiero decir, el solarium.</p>",
	{
		enter: function( character, system, from ) {
			if( character.qualities.antorcha ) {
				system.doLink( "zonanobleantorcha" );
			} else {
				system.write( "<p>No obstante, existe un pequeÃ±o problema y es que el arquitecto \
				en un intento por llevar a cabo la mÃ¡xima expresiÃ³n del minimalismo, \
				minimizÃ³ todas las ventanas (vamos: que se olvidÃ³ poner ventanas en las paredes)\
				y dado que no tienes ninguna fuente de luz, no ves ni un pimiento.</p>\
				<p>No tienes muchas opciones, salvo las de quedarte aquÃ­ esperando o bien <a href='patiodearmas'>salir al patio de armas</a>.</p>");
				}
			}
		}
	),

	zonanobleantorcha: new undum.SimpleSituation( 
					"<p>El insignificante error cometido por el arquitecto al no colocar ni una sola ventana\
					no es problema para ti que te has procurado una antorcha.</p>\
					<p class='transient'>Analizas la estancia y compruebas que existe una puerta en la pared norte\
					<a href='aposentos'>que te lleva a los aposentos reales</a>.</p>\
					<p class='transient'>Otra opciÃ³n es pasar del tema, que ya se te va haciendo tarde y <a href='patiodearmas'>volver por donde\
					has venido</a>.</p>"
		),
		caballerizas: new undum.SimpleSituation(
			"<h1>Las caballerizas</h1>\
			<p class='dialogo'>- Â¿CuÃ¡nto son 3+4?</p>\
			<p>El establo es el lugar ideal para encontrar caballos... Â¡Â¡y todo tipo de enseres!! \
			Ya se sabe, empieza uno con el castillo bien ordenadito, y terminas guardando aquÃ­ todo lo que no te hace falta.</p>\
			<p>No obstante, quizÃ¡ haya algo que te venga bien y que desees coger: \
			una <a href='./silladeplaya' class='once'>silla de la playa</a>, un <a href='./spectrum' class='once'>Spectrum +2 128 megas</a>, \
			una <a href='./antorcha' class='once'>antorcha</a>, un <a href='./latigo' class='once'>esplÃ©ndido lÃ¡tigo</a> de cuero negro, un <a href='./sombrero'  class='once'>sombrero mejicano</a> del anciano Ser Rodrick, el <a href='./tioserrodrick' class='once'>propio Ser Rodrick</a>...</p>\
			<p>Esta estancia es grande, pero sÃ³lo tiene una puerta de entrada y salida por la que accedes, nuevamente, <a href='patiodearmas'>al patio de armas</a>.</p>\
		",
				{
            actions: {
                'silladeplaya': function( character, system, action) {
					system.setCharacterText( "<p>Ahora ya llevas una silla de playa. \
					Te vendrÃ¡ bien cuando encuentres...eh... una playa.</p>" );
				},
                'spectrum': function( character, system, action) {
					system.setCharacterText( "<p>Â¡QuÃ© buenos salieron los Spectrum! \
					Este todavÃ­a funciona.. de hecho, estÃ¡ sin estrenar.\
					La ausencia de enchufes en esta Ã©poca podrÃ­a estar \
					relacionada con tal estado.</p>" );
				},
                'latigo': function( character, system, action) {
					system.setCharacterText( "<p>Â¡Un lÃ¡tigo puede salvarte de mil apuros! \
					Aunque por desgracia, esta aventura no estÃ¡ ambientada en \
					el personaje de Indiana Jones, por lo que te va a servir de bien poco.</p>" );
				},
                'sombrero': function( character, system, action) {
					system.setCharacterText( "<p>Te quitas el yelmo y te colocas el sombrero mejicano.\
					Sientes un irrefrenable deseo de cantar \
					rancheras, pero sabes que sin tu yelmo \
					eres mÃ¡s vulnerable al impacto de las hortalizas.</p>" );
				},
                'tioserrodrick': function( character, system, action) {
					system.setCharacterText( "<p>La compaÃ±Ã­a de Ser Rodrick te harÃ¡ mÃ¡s agradable el camino...\
					o no, teniendo en cuenta	que muriÃ³ hace mÃ¡s de 200 aÃ±os.</p>" );
				},
				'antorcha': function(character, system, action) {
					system.setQuality( "antorcha", true );
					system.setCharacterText("<p>Perfecto. Ahora tienes una antorcha con la que podrÃ¡s iluminar \
					las oscuras estancias de la zona noble</p>");
				}

            }
        }
		),
		habrey: new undum.SimpleSituation(
			"<h1>El aposento de la izquierda</h1>\
			<p>Tras subir las escaleras que quedaban a tu izquierda, accedes a uno de los aposentos... o mÃ¡s bien, a la puerta del mismo.\
			Con tiento y cuidado, intentas hacer girar el picaporte y te das cuenta de que la puerta estÃ¡ cerrada con llave.</p>",
			{
				enter:function( character, system, from ) {
					if( character.qualities.llave ) {
						system.doLink( "habreyllave");
					} else {
						system.doLink( "habnollave");
					}
				}
			}
		),	
		habnollave: new undum.SimpleSituation(
			"<p><strong>Â¡Â¡LÃ¡stima que no tengas ninguna llave!!</strong></p>\
			 <p>Pero una vez que has llegado hasta aquÃ­, no vas a cejar en tu empeÃ±o por unos mÃ­seros gramos de metal.</p>\
			<p class='transient'>Tras meditarlo unos instantes, decides que tus opciones son <a href='./llamar-puerta' class='once'>llamar a la puerta de la habitaciÃ³n</a>\
			(en plan <a href='http://www.youtube.com/watch?v=5_swaxOidGU' class='raw' target='_new'>Bob Dylan</a>),\
			<a href='./punta-lanza'  class='once'>probar a abrir la cerradura</a> con la punta de tu lanza</a> (cuentan las leyendas \
			que una vez hace tiempo a alguien le funcionÃ³), <a href='./empujar'  class='once'>dar un fuerte empujÃ³n a la puerta</a> cual si fueras Harry el sucio o <a href='aposentos'  class='once'>volver hacia atrÃ¡s sin hacer ruido</a>.</p>",
			{
				actions: {
					'llamar-puerta': function( character, system, action ) {
						system.write( '<p>Aunque intentas hacer el mÃ­nimo ruido posible, tus golpes en la puerta se escuchan en todo \
														el castillo... de hecho, se escuchan en toda la comarca.</p>\
														<p>SÃºbitamente (siempre quise decir esta palabra) aparecen cientos de miles de soldados de \
														la guardia real, los cuales te arrestan y te llevan al calabozo donde dormirÃ¡s el sueÃ±o de los justos.</p>\
													<p class="transient">Siento decirte que no tienes mÃ¡s opciÃ³n que \
													<a href="calabozo">seguirlos al calabozo</a>.</p>' );
					},
					'punta-lanza': function( character, system, action ) {
						system.write( '<p>Sin tener en cuenta que nunca has intentado, ni por tanto conseguido, abrir una cerradura con tu lanza\
													te lanzas (nunca mejor dicho) a la ardua tarea de romper el cÃ³digo por el mÃ©todo de la fuerza bruta.</p> \
													<p>Tras apenas dos horas de esfuerzo, te das cuenta de que no lo vas a conseguir, y desistes del plan.</p>\
													<p>Por desgracia para ti, los sensores de movimiento de lanzas del castillo han dado la alerta a la guardia \
													real, que hace cosa asÃ­ de 30 minutos que estÃ¡ partiÃ©ndose de risa viendo como te peleas con la cerradura.</p>\
													<p>Finalmente, se impone su profesionalidad, y te arrestan llevÃ¡ndote al calabozo, donde podrÃ¡s seguir\
													practicando el arte de la criptolanzografÃ­a...vamos, intentando abrir cerraduras con lanzas.</p>\
													<p class="transient">Siento decirte que no tienes mÃ¡s opciÃ³n que \
													<a href="calabozo">seguirlos al calabozo</a>.</p>' );
					},
					'empujar': function( character, system, action ) {
						system.write( '<p>Con ardoroso Ã­mpetu e impetuoso ardor, das seis pasos hacia atrÃ¡s, abres decididamente las piernas, \
						y colocas los brazos pegados a los costados con los puÃ±os apretados hacia abajo, mientras miras fijamente la pelota... \
						eh... la puerta.</p>\
						<p>Al grito de \'Viva mi madre\' te lanzas contra la puerta con la certeza de que en breves instantes el duro e \
						impenetrable material quedarÃ¡ reducido a aÃ±icos...<strong>Â¡Â¡Y asÃ­ es!!</strong>... al menos para los huesos \
						que forman tu hombro, brazo y antebrazo, porque lo que es la puerta apenas si consigue un araÃ±azo.</p>\
						<p>El enorme estruendo que has formado, sÃ³lo superado por el estentÃ³reo grito con el que has iniciado la carga, \
						pone en alerta al numeroso ejÃ©rcito de la guardia real que, como por encantamiendo, surge para apresarte y \
						llevarte al calabozo, donde dispondrÃ¡s de toda una vida para pensar cÃ³mo es posible que una puerta de roble macizo, \
						con marco de hierro y atrancada tanto por dentro como por fuera no haya cedido ante tu furioso ataque.</p>\
						<p class="transient">Siento decirte que no tienes mÃ¡s opciÃ³n que \
						<a href="calabozo">seguirlos al calabozo</a>.</p>' );
					}

				}
			}
		),

		habprincesallave: new undum.SimpleSituation(
			"<p>Con suma destreza, gran sigilo y la llave que te agenciaste, consigues abrir la puerta y entras cautelosamente en la estancia.</p>\
			<p>Al fondo, a la derecha, observas que hay un lecho en el que alguien duerme placenteramente; te acercas\
			<a href='./discurso' class='once'> e inicias el pequeÃ±o\
			discurso</a> que tantos meses llevas preparando:</p>",
			{
				actions: {
					'discurso': function( character, system, action ) {
						system.write( "<p class='dialogo personaje'>- Â¡La princesa estÃ¡ dormida! Â¿A quÃ© hora se habrÃ¡ acostado la princesa?<br/>\
			Â¡Mi bien, mi sol, mi estrella, mi planeta, mi satÃ©lite, mi polvo espacial, mi agujero negro, mi bosÃ³n de Higgs!\<br/>\
			Si de tu dulce boca a bien tuvieras susurrar palabras que alentaran el corazÃ³n de este, vuestro humilde servidor, \
			ante los antiguos dioses y tambiÃ©n ante los modernos, amor sin par os jurarÃ­a. Un amor puro, cual no hubo ni habrÃ¡; \
			un amor del cual se forjarÃ¡n leyendas; un amor que durarÃ¡ toda la eternidad, o en su defecto hasta que amanezca.<br/>\
			Decidme, mi pequeÃ±o pastel de fresa con guinda de chocolate: Â¿me amÃ¡is?</p>\
			<p>Al tiempo que terminas tu discurso, una enorme figura de 150 kilos se gira en la cama, y su barbuda cara se\
			acerca a la tuya para decir:</p>\
			<p class='dialogo'><strong>- Â¡Â¡Eres tÃº mi prÃ­ncipe azul que yo soÃ±Ã©!!</strong></p>\
			<p>Efectivamente: has acertado en la habitaciÃ³n de la princesa; no obstante y asÃ­, como el que no quiere la cosa, \
			recuerdas que habÃ­as quedado con los seÃ±ores de OtoÃ±olandia para jugaros vuestras tierras al padel.</p>\
			<p>De esa forma, antes de que la princesa pueda seguir con su grÃ¡cil canto, le sueltas de golpe y porrazo toda la \
			teorÃ­a que aprendiste en clase de ProgramaciÃ³n Orientada a Objetos consiguiendo que tu bella dama caiga de nuevo \
			en brazos de Morfeo... el cual a duras penas puede sujetarla. Mientras ella duerme, tÃº sales precipitadamente del castillo.</p>");
						system.doLink( 'happyend' );
					} 
				}
			}),
		
		happyend: new undum.SimpleSituation(
			"<h1>Final feliz</h1>\
			<p>Y asÃ­ acaba esta caballeresca aventura: entraste al castillo, recuperaste los objetos necesarios y juraste tu amor \
			eterno a la hermosa... a la dama...</p>\
			<p>Tu heroica figura avanza hacia el poniente, mientras el anaranjado sol desdibuja sombras pÃºrpuras a tu espalda y \
			entonces comprendes a quÃ© hacen referencia cuando hablan de la soledad del poder. En este caso, no obstante, tÃº \
			agradeces el poder volver en soledad.</p>\
			<p>En realidad, el camino del castillo deberÃ­a estar jalonado de promociones de chalets y urbanizaciones con piscina, pero \
			debido a un pequeÃ±o error del arquitecto ... bla, bla, bla.</p>\
			<h1>Â¡Fin</h1>"
		)
};


// Ejemplo de declaraciÃ³n separada
undum.game.situations["calabozo"]=new undum.SimpleSituation(
			"<h1>Calabozo</h1>\
			<p>En el proyecto original del arquitecto, el calabozo era con diferencia la sala mÃ¡s grande del castillo.</p>\
			Estaba formado por tres estancias comunicadas entre si por aperturas diÃ¡fanas. La primera estancia contenÃ­a una\
			completa cocina, con dos ambientes separados que distinguÃ­an la zona de trabajo del <em>living</em>.\
			La segunda, aÃºn mayor, era el recinto seleccionado para incluir un baÃ±o completo con jacuzzi, sauna turca y ducha\
			de aromas. Finalmente, la tercera, albergaba una habitaciÃ³n de estilo colonial cuya principal \
			joya era la cÃ³moda cama <em>king size</em>, autocalefactable.</p>\
			<p>Desgraciadamente, en un pequeÃ±o despiste del ayudante del arquitecto, los planos dieron a parar al foso de los cocodrilos.\
			Por mÃ¡s que el pobre muchacho se afanÃ³ en convencer a los reptiles de que soltaran de sus fauces los importantes pergaminos,\
			el resultado fue nulo.</p>\
			<p>Finalmente, se optÃ³ por hacer un profundo agujero en la tierra que hiciera las funciones de calabozo. \
			Por supuesto, era una soluciÃ³n temporal... por lo que es lo Ãºnico del castillo que sigue intacto tras varios siglos.</p>\
			<p>Por tanto aquÃ­ acaba tu aventura. Fue un notable intento, pero has acabado con tus huesos \
			en el calabozo por los siglos de los siglos.</p>\
			<h1>Fin</h1>"
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

