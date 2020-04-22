// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";
let ayuda="<p></p>";
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
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
//caminaba es un enlace de prueba que he usado para saltar rápido a la escena a probar =D
undum.game.situations = {
	
    start: new undum.SimpleSituation (
		"<h1 class='transient'>Un color que no se olvida</h1>\
		<p class='transient'>Caminaba con mi hija pequeña de vuelta a casa y decidimos tomar un pequeño atajo,\
		una calle poco transitada que nos ahorraba un par de semáforos que hacían esperar mucho.</p>\
		</br>\
		<p class='dialogo transient'> ¿Qué hace una chica tan bonita como tú en un lugar como este? Será mejor que unos caballeros te guíen y escolten.</p>\
		</br>\
		<p class='transient'>Una voz masculina me habló acentuando la última palabra, no era una voz agradable. Al girarme vi como había\
		varios hombres juntos, miré al fondo de la calle y otro par había aparecido.</br> Tenía miedo de lo que pudiese pasar, \
		no tenían buenas intenciones, pero asentí con miedo. No quería que hiciesen daño a mi hija. </br></br>\
		Noté un fuerte dolor en la cabeza, <a href='./pensamiento1' class='once'>todo se volvió oscuro y morado</a> </p>",
		{
			actions: {
					'pensamiento1': function( character, system, action) {
						system.setCharacterText( ayuda+"<p>Sólo veo luces moradas distorsionadas, no sé si son luces de neón. ¿Qué me pasa?<a href='situacion1' class='once'>¿Dónde estoy?</a> Tengo la cabeza confusa, parece que me he dado un golpe. No recuerdo nada. </p>" );
					}
			}   
		}
	),
	
	situacion1: new undum.SimpleSituation (
		"<h1>UN LUGAR DESCONOCIDO</h1>\
		<p>Noto un dolor en el brazo, y en las piernas. Me noto tumbada y me incomoda esa <a href='./lugar' class='once'> luz morada </a> que hay en lo alto.\
		Me percato que esa luz no está en mi habitación de mi casa y me pregunto dónde coño estoy y cómo he llegado hasta aquí.</br>\
		<p>¿Es esto un secuestro? ¿Una violación? ¿Un ajuste de cuentas? ¡Qué cojones un ajuste de cuentas! ¿A quién le debo \
		dinero yo? Mi cabeza ahora mismo rondaban entre 1 y 100 preguntas y ninguna de ellas con respuesta.</br> \
		Desconcertada, me siento en la cama mientras intento mirar a mi alrededor, hay luces moradas en todas las paredes, tan brillantes que \
		casi ocultan el deterioro de los azulejos. Me siento muy mareada, pero no es momento para descansar, al contrario, aún no sé \
		si mi hija Thalia, está a salvo. Tan pronto como pienso en ponerme de pie, me doy cuenta de que mi brazo izquierdo está esposado \
		a la cama, la cadena parece bastante oxidada, podría <a href='situacion12'>intentar romperla</a> de un tirón o <a href='situacion11'>buscar la llave</a> si por suerte está en la cama.<\p> ",
		{
			actions: {
					'lugar': function( character, system, action) {
						system.setCharacterText( "<p>Tengo miedo de lo que me pueda \
						llegar a encontrar. No es habitual amanecer (¡O atardecer!) en un sitio desconocido. </p>" );
						system.setQuality('puntos', character.qualities.puntos+1 );
					}
			}   
		}
	),
		
	situacion11: new undum.SimpleSituation(
		"<p>Con un solo brazo para maniobrar, comienzo a palpar sobre la cama en busca de bultos que puedan ser la llave, sin éxito. \
		Sigo tanteando con la mano hasta llegar al borde de la cama y dar con una mesita, dentro de la cual hay una llave, ¡Sorpresa!. \
		La introduzco en las esposas para liberarme, pero no consigue entrar, será la llave de otra cosa. Tendré que <a href='situacion12'>intentar romperlas</a>.</p>"
	),
		
	situacion12: new undum.SimpleSituation(
		"<p>Hago acopio de las pocas fuerzas que me quedan y estiro con las dos manos de la cadena, consiguiendo partir un eslabón \
		y separarme de la cama. Una vez en pie, consigo distinguir lo que parece ser la puerta de la habitación. Puedo <a href='situacion13'>correr a abrirla</a> o \
		<a href='situacion14'>mirar la habitación</a> con más detalle.</p>"
	),
		
	situacion13: new undum.SimpleSituation(
		"",
		{
			enter: function(character,system,to){
				if(character.qualities.llave==1){
					system.write( "<p>Me acerco tambaleándome a la puerta, solo para descubrir que no se mueve ni un milímetro, está cerrada con llave. \
									<a href='situacion14'>Volver a mirar por la habitación</a> o <a href='situacion2'>probar la llave</a> que he encontrado antes. </p>" );	
				}else{
					system.write( "<p>Me acerco tambaleándome a la puerta, solo para descubrir que no se mueve ni un milímetro, está cerrada con llave. \
									<a href='situacion14'>Volver a mirar por la habitación</a></p>" );	
				}
			}   
		}
	),
		
	situacion14: new undum.SimpleSituation(
		"<p>Cuando despierto, miro a mi alrederor pero con mucho cuidado. Aparte de la cama vieja, distingo una mesita al lado,\
		me acerco y encuentro una llave en su interior, puede ser la que necesite para <a href='situacion2'>abrir la puerta</a>. Pero me quedo con \
		la esperanza de encontrar algo más en la habitación... Algo que me sirva como luz en este camino morado que me está poniendo la vida como prueba.</p>",
		{
			enter: function(character,system,to){
				system.setQuality('llave',1);	
			}   
		}
	),

	situacion2: new undum.SimpleSituation(
		"<h1>EL PASILLO INFINITO</h1>\
		<p>El escalofrío que recorre mi piel es signo de miedo, desolación, desconcertancia... Aún no encuentro respuestas a las tantas\
		preguntas que me planteo a cada minuto. Ni un rastro ni prueba de nada... ¿Y si son pruebas que me están poniendo y tengo que resolverlas?\
		No sé... Aún no estoy asimilando lo que me está pasando y es lo que más miedo me da. </br>\
		¿Esto es algo seguro? Mi pie descalzo anda con desconfianza y miedo. Pero no debo perder la conciencia ni la fuerza que me empuja a seguir intentándolo. </br>\
		No sé si debería estar andando <a href='./rapido' class='once' >deprisa</a> o ir <a href='situacion21'>despacio</a> por todo lo que se puede venir encima... </p>",
		{
			enter: function(character,system,to){
				system.setQuality('llave',0);	
			}, 
			actions: {
				'rapido': function( character, system, action) {
						system.setCharacterText("<p>Debo hacer algo, no sé si ha sido buena idea ir más rápido... Creo que lo mejor es ir <a href='situacion21' class='once'>despacio</a> </p>");
						system.setQuality('puntos', character.qualities.puntos+1 );

				}
				
			}
		}
	),
	
	situacion21: new undum.SimpleSituation(
		"<p>Andar despacio no me está ayudando... pero creo que debo andarme con cuidado por lo que pueda pasar. </br>\
		Mi entorno se comprende entre luces moradas, papeles sanitarios tirados por el suelo y maquinaria totalmente destrozada. Esto tiene\
		pinta de un hospital. Me agacho con cautela para mirar de qué tratan estos <a href='situacion22'>documentos</a> e intentar entender algo. Pero nada... No encuentro \
		ningún tipo de información relevante que pueda ser de ayuda en este caso, además no entiendo la jerga sanitaria y todo lo relacionado con ella \
		cuando yo realmente me dedico al tema empresarial de marketing. </p>",
		{
			enter: function(character,system,to){
				system.setCharacterText("");	
			} 
		}
	),
	
	situacion22: new undum.SimpleSituation(
		"<p> Miro a través de estos documentos y encuentro una carta un tanto extraña, porque se deja destacar de todos los demás documentos.</br>\
		Ahora sí que tengo miedo. Totalmente es una <a href='./carta' class='once'>carta</a>. ¡PERO POR QUÉ ME DA MIEDO SI NI SIQUIERA SÉ SI ES PARA MÍ! Estoy un poco alterada y confusa\
		todo me da vueltas y todo me parece desconcertante. Ahora seguro que la carta es una carta de amor entre los enfermeros que trabajaban aquí. Alterarse es de cobardes.\
		</p>",
        {
			actions: {
				'carta': function( character, system, action) {
						system.setQuality('carta',1);
						system.setCharacterText( "<p> El contenido de la carta es difícilmente legible '... habitación... escuchó que... clausurar... ilegal... escapar...'\
						No se entiende muy bien. Solo está clara la firma. Pone el número de habitación:<a href='situacion3' class='once'> 213</a>. Veamos si encuentro algo de utilidad</p>" );
				}
			}
        
		}
	),
	
	situacion3: new undum.SimpleSituation(
	"<h1>EL RECORRIDO</h1>\
	<p>Todas las habitaciones me parecen iguales, algunas no tienen ni número y otras son números sin sentido... No sé si estos nÚmeros significarán algo o serán imaginaciones mías\
	la palabra clave que me ha llamado la atención ha sido escapar. Eso es lo que ahora necesito yo. ESCAPAR. </br>\
	Pero, ¿Adónde voy, si ni siquiera se dónde estoy? Este sitio no me suena, quién sabe, puede ser que esté hasta en el extranjero.\
	Por un momento me ahogo en mis lágrimas buscando una habitación que no tiene sentido por una carta al azar que he cogido. </br>\
	Paso por el pasillo y encuentro una <a href='./botella' class='once'>botella</a> de agua en el suelo, junto a esta botella hay escrita una <a href='./nota'>nota</a>. </p>",
	{
		actions: {
			'botella': function(character, system, action){
					system.setQuality('botella',1);
			},
			'nota': function (character, system, action){
					system.setQuality('nota',1);
					system.setCharacterText("<p>Esta nota está metida en un <a href='situacion31' class='once'>sobre</a>...Espera un momento, TIENE MI NOMBRE POR LA PARTE DE DETRÁS</p>");
			}
		}
	}
	),
	
	situacion31: new undum.SimpleSituation(
	"<p>No sé si me da más miedo no abrirlo o ver qué pone... </br>\
	Está claro que es necesario que lo lea porque todo esto esconde un misterio que tengo derecho a saber por qué. Me dispongo a <a href='situacion32'>abrir el sobre</a></p>"
	,
	{
		enter: function(character,system,to){
			system.setCharacterText("");	
	    } 
		
	}),
	
	situacion32: new undum.SimpleSituation(
	"<p class = 'dialogo'>Esto no es un aviso. Es una obligación que debes de cumplir si quieres ver a tu hija alguna vez en tu vida. \
	No sé cuándo leerás esto, pero tarde o temprano tendrás desesperación, sufrirás alucinaciones y desmayos. El tiempo corre y sobre todo tú, corre\
	todo lo que puedas hasta encontrar esa habitación. El tiempo corre... Tú decides, el destino está en tus manos.</p> </br>\
	<p>No, no puede ser verdad, ¿TIENE A MI HIJA? ¿LA TIENE SECUESTRADA? Pero, ¡¡¡¡¡¿por qué?!!!!! ¿Qué he hecho para <a href='situacion33'>sufrir</a> todo esto?</p>"
	),
	
	situacion33: new undum.SimpleSituation(
	"<p>¿Se referirá a la habitación 213? ¿Por qué esa habitación exactamente? Tengo que buscarla como sea. Pero no sé todo esto no me cuadra mucho\
	¿No es mucha casualidad que justamente sea esta habitación? ¿Qué esconderá esa tal habitación? ¿Será una habitación de la tortura? \
	No me queda otra en ir en busca de esta habitación. Tengo que coger fuerzas e ir a rescatar a mi hija, que es lo único que importa ahora mismo. </br>\
	Nada ni nadie me podrá parar hasta ir a por mi hija. Cojo el coraje que llevo dentro, me levanto de un impulso y me dirijo a la <a href='situacion4'>habitación 213</a>.</p>"
	),

	situacion4: new undum.SimpleSituation (
	"<div class='transient'>\</br> \
    <h1>LA 213</h1>\
    <p>La cabeza comenzó a pesarme más y más y más y ... más<\p> </br>\
	<p><a class='once' href='./uno'>¿Por qué se movían las cosas solas?</a>\
	</br> </br> &nbsp &nbsp \
	<a class='once' href='./dos'>¿dónde estoy?</a>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp \
	<a class='once' href='./tres'>¿dónde?</a></br> </br> &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./cuatro'>¿qué hago?</a> </br> <a class='once' href='./cinco'> ¿quiénes son?</a></br>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a class='once' href='./seis'>quiero salir</a></br> \
	<a class='once' href='./siete'>quiero irme a casa</a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./ocho'>no quiero esto</a>\
	&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp\
	<a href='./nueve'>quiero volver</a></br> <a class='once' href='./diez'>no quiero que me hagan nada</a></p></br>\
	<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a class='once' href='./once'>¿Dónde está Thalia?</a></p></div>",
	  {
	      actions: {
                'uno': function( character, system, action) {
					system.setCharacterText("<p>Debo hacer algo</p>");
					system.setQuality('puntos', character.qualities.puntos+1 );

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
					system.setCharacterText( "<p>A mí me gusta el morado</p>" );
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
	<p class='dialogo'> ¿Cuánto tiempo llevo aquí? Me duele la cabeza...</p> \
    <p>Parece que he vuelto a desmayarme, este infierno parece no tener fin. Ni siquiera recuerdo cuándo fue la última vez que\
	me llevé algo de comida a la boca. Tengo que buscar una salida, aunque encontrar un poco de sustento puede ser una buena idea. \
	En esta sala hay algunas ventanas rotas, las han tapado con tablas. Pero hay rendijas, podría <a href='situacion52'>mirar al exterior</a>. \
	También hay una puerta doble a la izquierda con una mortecina luz verde parpadeante: <p class='dialogo'> 'Salida de Emergencia' </p>\
	<p>A la derecha, otra puerta, por la que se ven unas escaleras. No dispongo de mucho tiempo, puede que me estén buscando. \
	<p class='transient'><a href='situacion53'>Saldré por la primera puerta</a> o quizás debería volver a subir por esas <a href='presituacion'>escaleras</a>.</p>"
          
    ),
        
	situacion52: new undum.SimpleSituation(
    "<p>El Sol me ciega por un momento y cuando vislumbro lo que me rodea solo alcanzo a ver ventanas. Todas ellas también cerradas,\
	rodeando un patio interior. Es un jardín, cuadrado, con una fuente en medio llena de agua estancada y ranas saltando de un lado a otro. \
	La vegetación es tan frondosa debido al abandono que no se puede apreciar dónde acaba un árbol y empieza el siguiente.\
    </br>\ <p><a href='situacion53'>Saldré por la primera puerta</a> o quizás debería volver a subir por esas <a href='presituacion'>escaleras</a>.</p>"
    ),
	
    situacion53: new undum.SimpleSituation(
    "</br>\<p>Con cierta ansiedad, me dispongo a empujar la puerta:\
    <p class='dialogo'>Esta dichosa puerta tiene que llegar hasta alguna salida. Tengo que intentarlo</p>\
	Al abrirla, el chirrido que producen las oxidadas visagras hacen saltar las ranas de sus hojas y un pequeño grupo de pájaros alza el vuelo con sorpresa.\
	Me acerco a lo que parece ser una gran enredadera. Tiene una forma un tanto peculiar, es como si hubiese abrazado algo en su interior.\<p>Voy a <a href='situacion54' class='once'>ver qué hay ahí dentro</a> o mejor <a href='situacion55' class='once'>no tocar nada</a>, tengo que darme prisa.</p>\
     </p>"
        
    ),
    
    situacion54: new undum.SimpleSituation(
        "<p>Me acerco a la enorme montaña de hojas y comienzo a rebuscar. Es una silla vieja, no tiene mucho \interés...</br> Un momento...\ </br><p>¿Qué es <a href='./colgante' class='once'>esto</a>?</p>",
        {
            actions: {
                    'colgante': 
                            function( character, system, action) {
                            system.setQuality('colgante',1);	
                            system.setQuality('puntos', character.qualities.puntos+1 );
                            system.setCharacterText( "<p>¡Es un colgante! Tiene una foto muy descolorida, apenas se distingue. Tiene un grabado en la parte de atrás:</br> 'A.D.R. Hab. 213.' </br> Bueno, pensé que habría algo de mayor utilidad. Miraré qué más puedo <a href='situacion55' class='once'>encontrar</a></p>" );
                          
                }
            }
        }
    ),
    situacion55: new undum.SimpleSituation(
    "<p>En el patio hay 3 puertas más, todas están cerradas, no tengo más remedio que <a href='presituacion' class='once'>volver por las escaleras</a></p>"
    ),

	presituacion: new undum.SimpleSituation(
	"<p>Continuo mi trayecto por las escaleras hasta que veo algo que me causó fatiga. UNA NOTA.</br>\
	Junto a esta nota, había 2 objetos muy parecidos entre sí, enganchados por una serie de engranajes y cuerdas. Me daba bastante miedo. No sabía muy bien si era una trampa \
	pero me dispuse a <a href='nota'>leer la nota</a>.  </p>"
	),
	
	nota: new undum.SimpleSituation(
	"<p class='dialogo'> Si has llegado hasta aqui, enhorabuena. Se nota que tienes ganas de ver a tu hija y poder escapar. Pero no todo es tan fácil como lo has tenido todo siempre tu vida.\
	Veamos hasta dónde eres capaz de llegar. ¿Arriesgar o poder morir sin ver a tu hija y por consiguiente, que muera tu hija tambien?\
	Como podrás ver, al lado de esta preciosa carta he dejado un par de objetos que te pueden sonar y que has tenido en tu vida y son bastante valiosos. Se me olvidaba comentarte, que uno \
	es el correcto, es decir, estos objetos están enganchados a una serie de engranajes con una serie de armas encima de tu cabeza. Una escopeta está disparada, en cambio... la otra no. \
	¿Ahora, que es lo más importante para ti? ¿Todo lo que has tenido en tu vida o la vida en si? ¿Vivir o  morir? <Esa es la cuestión. \
	El primer objeto es un cuchillo que puede que te sirva a lo largo del recorrido y el otro objeto es un documento que falsificaste en la empresa con tal de que no fuera a la quiebra \
	y solo pensar en dinero y engañar a las personas. Con estos objetos puedes ir a la cárcel.</p>  <p class='dialogo'>... Asi que elige bien... o sino.. Morirás. Si eliges bien, te veré pronto. El tiempo sigue corriendo. </p> \
	<p><a href='eleccionq'>Tú tienes la última palabra</a> </p>"
	),
	
	eleccionq: new undum.SimpleSituation(
	"<p>No puede ser... Este documento puede implicarme la ruina para todo el mundo... ¿Por qué hice eso? el ser humano es corruptible... No tengo tiempo para discursos filosóficos \
	Mi hija está secuestrada y yo aquí decidiendo... Pero ¿Qué es mejor, que coja este documento para salvar mi vida o con este documento si lo dejo me arruinará la vida? Creo que ahora mismo \
	todo me abruma. Si cogo el cuchillo, podre salvar mi vida y sin coger el documento puede que sea la mayor ruina pero los cañones me apuntan y solo sufro un pequeño grito por si elijo la opcion incorrecta. <a href='cuchillo'>Cuchillo</a> o <a href='documento'>Documento</a></p>"
	),
	

	cuchillo: new undum.SimpleSituation(
	"<p>Cojo con suavidad el cuchillo y veo que no pasa nada. Miro hacia arriba y el cañon no hace nada extraño. Esta era la buena elección. Debo <a href='situacion6'> continuar mi camino </a> pero aún así mi cabeza sigue dando muchas vueltas \
	y no me encuentro nada bien. Espero encontrar a mi hija porque creo que cada vez estoy más cerca de encontrarla. Espero. </p>"
	,{
		enter: function(character,system,to){
			system.setQuality('cuchillo',1);	
		},
		
		
	}
	),
	
	documento: new undum.SimpleSituation(
	"<p>Al coger con suavidad los documentos, veo que los engranajes se mueven de una forma extraña y solo puedo oir el ruido del cañon y caer mientras que una bala ha atravesado mi cráneo. Todo ha acabado aquí. Mi egoismo tiene la culpa de todo \
	Nunca supe elegir bien en mi vida. Espero encontrarte en alguna parte Thalia. Te quiero</p> </br> \
	<h1>FIN</h1> </br>\
	<p><a href='eleccionqu'>Volver a intentarlo</a></p>"
	),
	
	eleccionqu: new undum.SimpleSituation(
	"<p>No puede ser... Este documento puede implicarme la ruina para todo el mundo... ¿Por qué hice eso? el ser humano es corruptible... No tengo tiempo para discursos filosóficos \
	Mi hija está secuestrada y yo aquí decidiendo... Pero ¿Qué es mejor, que coja este documento para salvar mi vida o con este documento si lo dejo me arruinará la vida? Creo que ahora mismo \
	todo me abruma. Si cogo el cuchillo, podre salvar mi vida y sin coger el documento puede que sea la mayor ruina pero los cañones me apuntan y solo sufro un pequeño grito por si elijo la opcion incorrecta. <a href='cuchillo'>Cuchillo</a> o <a href='documento'>Documento</a></p>"
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
	dice que ya es 'una niña muy grande' para eso). Estamos más que preparadas para <a href='prepuzzle'>continuar</a>.</p>",
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
	<p>Después de abrazarnos un poco más, me pongo de pie y cojo a Thalia de la mano. Estamos más que preparadas para <a href='prepuzzle'>continuar</a>.</p>",
	{
	    enter: function(character,system,to){
			system.setQuality('hija',1);	
	    }   
	  }
	 
	),
	
	prepuzzle: new undum.SimpleSituation(
		"<p>Juntas, saldremos de esta, pero debemos permanecer unidas ante esta extraña situación. Sigo recordando cosas de mi pasado que sean todos las causas \
		de porque estoy aqui. Aprieto fuerte la mano de mi hija y le susurro al oido que la quiero muchisimo y no iba a permitir que nada ni nadie le iba a hacer daño.\
		Pero... No todo queda ahi. En el fondo sabía que nadie por amor al arte me iba a dejar a encerrada por la nada, ni para hacerme daño... Sigo pensando en mi pasado, en el cuchillo o en el documento de antes... \
		Cojo en brazos a mi hija para poder ir mas rápido, y poder encontrar una salida, como objetivo de esto. Sabía que si antes había tenido una trampa, ¿Por qué no iba a tenerla otra vez? \
		Cojo aire continuo mi camino por el <a href='pasillopuzzle'>pasillo</a>. </p>"
    ),
	
	pasillopuzzle: new undum.SimpleSituation(
		"<p>Siempre me muevo por los pasillos, por que son clave para encontrar alguna salida. Pero hubo algo que captó mi atención. Llevaba en brazos a Thalia pero me detuve poco a poco \
		y la solte en el suelo para asimilarlo. Había un cartel luminoso con una flecha para seguir hacia adelante. La flecha llevaba hacia una habitación con llave, esta llave estaba en el suelo y otra nota al lado. \
		Las notas eran algo ya normal en este sitio... - Pensé. La nota ponía lo siguiente: </p>\
		</br>\
		<p class='dialogo'>Abre la puerta y me encontrarás.</p>\
		<p>Cogí la llave y abrí la puerta con cuidado. La habitación estaba iluminada del color habitual de este sitio: morado. \
		Entramos a la situación y le dije a mi hija que tuviera cuidado, que no tocara nada. Habia otra nota en el suelo con 2 objetos un poco peculiares... Esta historia me suena... </p>\
		</br>\
		<p class='dialogo'>Bienvenidas a vuestro juego, no es de disfrute para mí tener que realizar todo esto para que aprendas la lección o valores lo que es la vida un poco más. \
		Siento por meter a tu hija en todo esto, ya que ella no tiene la culpa de nada... Pobrecita, en fín. Te estuve vigilando cuando estafaste a una empresa por puro marketing en beneficio para la empresa que trabajabas, \
		solo por seguir las indicaciones del cabrón de tu jefe, y no seguir tu puro instinto. Yo se que no eres mala gente, pero una lección para decidir sobre tí misma nunca está de más. \
		Lo primero es indicarte que significan estos objetos. Lo primero tenemos unos documentos que te implican de correlación por haber estafado a la empresa para beneficio de tu jefe. Y lo segundo es un bolígrafo. \
		La prueba es sencilla. Tienes que coger uno de los objetos. Uno de los dos está conectado a una pequeña granada. Vuestro futuro está en tus manos. Piensate muy bien si de verdad quieres destruir ese documento antes que la granada os destruya a vosotras. \
		</br>\
		<a href='eleccion'>Continuar</a> </p>"

	),
	
	eleccion: new undum.SimpleSituation(
		"<p> No podía creerme lo que estaba viendo, estaba claro que si cogía esos documentos para destruirlos iba a acabar con nosotras, pero, ¿he de pensar ahora mismo en vivir o en el furuto nuestro? \
		¿<a href='boligrafo'>boligrafo</a> o <a href='doc'>documento</a>?  ¿Por qué un boligrafo? ¿Acaso voy a firmar algo más adelante en esta mierda de sitio? </p>\ "
	),
	
	
	
	boligrafo: new undum.SimpleSituation(
	"<p>Cojo el boligrafo con cautela puesto que no me fio de nada de aqui. Veo que no pasa nada y me sale un suspiro de alivio y miro a mi hija con ojos de esperanza. No sé para qué cojones es el puto boligrafo pero debemos <a href='situacion7'> continuar nuestro camino de salida </a> pero aún así mi cabeza sigue dando muchas vueltas \
	y no me encuentro nada bien. Ojalá y sea esto la última prueba que superar, si a esto se le puede llamar prueba. </p>"
	,{
		enter: function(character,system,to){
			system.setQuality('boligrafo',1);	
		},
	}
	),
	
	doc: new undum.SimpleSituation(
	"<p>Al coger con suavidad los documentos, veo que hay debajo un hueco con algo extraño, la granada. Con un hijo sostenía los documentos pero nada puro parar aquello.  \
	Nunca supe elegir bien en mi vida. Espero encontrarte en alguna parte Thalia. Te quiero</p> </br> \
	<h1>FIN</h1> </br>\
	<p><a href='intento'>Volver a intentarlo</a></p>"
	),
	
	intento: new undum.SimpleSituation(
		"<p> No podía creerme lo que estaba viendo, estaba claro que si cogía esos documentos para destruirlos iba a acabar con nosotras, pero, ¿he de pensar ahora mismo en vivir o en el furuto nuestro? \
		¿<a href='boligrafo'>boligrafo</a> o <a href='doc'>documento</a>? ¿Por qué un boligrafo? ¿Acaso voy a firmar algo más adelante en esta mierda de sitio? </p>\ "
	),
	

    situacion7: new undum.SimpleSituation(
		"<h1>HACIA LA SALIDA</h1> \
		<p>Unas luces moradas parpadeantes que iluminan todo un pasillo lleno de puertas. Parece que son habitaciones. Al final del pasillo \
		hay una de esas puertas con un cartel verde indicando la salida de emergencia. No entiendo cómo la gente puede orientarse en estos lugares.\ <p class='dialogo'>Vamos a \
		jugar a un juego Thalia, vamos a ir abriendo puertas y tú vas contando cuántas llevamos abiertas, ¿si?</p>\
		No se ha dado cuenta, pero la puerta está con una cadena, no podemos salir por ahí si no encuentro con qué romperla...\
		<p class='dialogo'> ¿Por qué lado quieres empezar Thalia? ¿<a href='situacion71'>izquierda</a> o <a href='situacion71'>derecha</a>?</p>"
    ),
    
    situacion71: new undum.SimpleSituation(
		"<p class='transient'>Abro la puerta en silencio. Tal y como pensaba, solo hay una cama desvencijada y un escuálido escritorio bajo una ventana tapiada.\
		<p class='dialogo transient'>Bueno, lo hemos intentado, deberíamos <a href='situacion712'>mirar la siguiente habitación</a>,\
		¿ o <a href='situacion712'>miramos al otro lado</a>?</p></p>"
    ),
    
    situacion712: new undum.SimpleSituation(
		"<p class='transient'>Me dirijo hacia la siguiente habitación. Es una reproducción de la anterior, no cambia nada.\
		<p class='dialogo transient'>Bueno, lo hemos intentado, deberíamos <a href='situacion713'>mirar la siguiente habitación</a>,\
		¿o <a href='situacion713' class='once'>miramos al otro lado</a>?</p></p>"
    ),
    situacion713: new undum.SimpleSituation(
		"<p class='transient'>Voy a la siguiente habitación. Es una reproducción de la anterior, no cambia nada.\
		<p class='dialogo transient'>Bueno, lo hemos intentado, deberíamos <a href='situacion714'>mirar la siguiente habitación</a>,\
		¿Y si <a href='situacion712'>miramos al otro lado</a>?</p></p>"
    ),
    situacion714: new undum.SimpleSituation(
		"<p class='transient'>Corro a la siguiente habitación. Abro la puerta de un golpe. Es exactamente una reproducción de la anterior, no cambia nada a lo que llevamos visto.\
		<p class='dialogo transient'>Bueno, lo hemos intentado, deberíamos <a href='situacion715'>mirar la siguiente habitación</a>,\
		¿o <a href='situacion713'>miramos al otro lado</a>?</p></p>"
    ),
    situacion715: new undum.SimpleSituation(
		"<p class='transient'>Me adentro en la siguiente habitación. Abro la puerta de un golpe. Es igual que la otra, no cambia nada.\
		<p class='dialogo transient'>Maldita sea, aquí tampoco, deberíamos <a href='situacion716'>mirar en otra habitación</a>,\
		¿o <a href='situacion714'>miramos al otro lado</a>?</p></p>"
    ),
    situacion716: new undum.SimpleSituation(
		"<p class='transient'>Me lanzo a la siguiente habitación. Abro la puerta de un golpe. Es una reproducción de la anterior, no cambia nada.\
		<p class='dialogo transient'>¿Por dónde vamos Thalia? deberíamos <a href='situacion717'>ir a la siguiente habitación</a>,\
		¿o <a href='situacion715'>miramos al otro lado</a>?</p></p>"
    ),
    situacion717: new undum.SimpleSituation(
		"<p class='transient'>Abro la siguiente puerta de un golpe. Es una reproducción de la anterior. Thalia está señalando <a href='./navaja' class='once'>algo</a> encima del escritorio.\
		<p class='dialogo transient'>Vamos a <a href='situacion718'>mirar la siguiente habitación</a>,\
		¿Y si <a href='situacion718'>miramos al otro lado</a>?</p></p>",
        {
            actions: {
                    'navaja': 
                            function( character, system, action) {
                            system.setQuality('navaja',1);	
                            system.setQuality('puntos', character.qualities.puntos+1 );
                            system.setCharacterText( "<p> Parece ser una navaja vieja, aunque no está demasiado oxidada, la guardaré por si me es útil</p>" );
                          
                }
            }
        }
    ),

    situacion718: new undum.SimpleSituation(
		"<p class='transient'>Corro a la siguiente habitación. Abro la puerta de un golpe. Estoy de los nervios. Todas las habitaciones son iguales.\
		<p class='dialogo transient'>Démonos prisa, ¿<a href='situacion719'>miramos la siguiente habitación</a>?,\
		¿o <a href='situacion719'> echamos un vistazo al otro lado</a>?</p></p>" 
    ),
    situacion719: new undum.SimpleSituation(
		"<p><p class='dialogo'>Por fin.<a href='situacion72'>Aquí</a> está. </p></p>"
    ),
    situacion72: new undum.SimpleSituation(
		"<p>Una cama rota. Sí. Con esa <a href='./barra' class='once'>barra de metal</a> podríamos forzar la puerta y <a href='situacion8'>salir de aquí</a>. </p>",
        {
			actions: {
			'barra': function( character, system, action) {
					system.setQuality('barra',1);		
			}
		}
    }
    
    ),
	
	situacion8: new undum.SimpleSituation(
		"<h1>UN NUEVO COMIENZO</h1>\
		<p>Empujo con la barra de metal que hemos cogido hasta abrir la puerta, aunque con cautela puesto que no queremos forzar y romper la barra de metal antes que la puerta.\
		Comienza a abrirse la puerta, pero falta un poco más. Con ayuda de mi hija y yo podremos salir de aquí. </br>\
		Aún no me lo creo. He conseguido rescatar a mi hija en este sitio de mierda. ¿Ahora qué queda? ¿Una psicosis que tendremos que superar?\
		No sé. es todo demasiado extraño, Aún no le encuentro explicación a por qué ha sucedido todo esto y quiero mis motivos aparentes. \
		¿Denunciar a la policía? ¿Qué pruebas tenemos? ¿O es mejor olvidarlo todo y hacer como si no ha pasado nada? </br>\
		Conseguimos abrir la puerta del todo. Es un lugar totalmente desconocido en el que nunca podría haberme imaginado. Ahora toda correr a toda velocidad\
		con mi hija y todo pasará... Espera... Hay otra nota en el suelo que pone el nombre de mi hija y el mío...</p>\
		<p class='dialogo'>-No puede ser verdad... <a href='situacion81'>Otra nota</a> ¿QUÉ ES LO QUE QUIERE AHORA DE NOSOTRAS?</p>"
	),
    

	situacion81: new undum.SimpleSituation(
		"<p>En la nota pone lo siguiente</p>\
		<p class='dialogo'>Nunca pude llegar a creer que saldrías de aquí, y menos con tu hija. Te veo muy pronto. Puede que sea una amenanza... O no. Soy quien menos te lo \
		esperas. Ahora empieza a valorar lo que es la vida y más con tu hija.</p>\
		<p>Una rabia creció dentro de mí que hizo que derramase una lágrima en mi rostro. Creo que solo me quedan fuerzas para correr con mi hija y dejar todo esto atrás.</p></br>\
		<p class='dialogo'>-Te quiero Thalia, nunca te separes de mí.</p> </br>\
		<h1>FIN</h1>"
	),
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
    barra: new undum.OnOffQuality(
        "Barra de metal", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
	
	botella: new undum.OnOffQuality(
		"Botella de agua", {priority: "0002", group:'inventario', onDisplay:"&#10003;"}
	),
	nota: new undum.OnOffQuality(
		"Nota", {priority: "0002", group:'inventario', onDisplay:"&#10003;"}
	),
    carta: new undum.OnOffQuality(
        "Carta antigua", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
    colgante: new undum.OnOffQuality(
        "Colgante", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
    navaja: new undum.OnOffQuality(
        "Navaja", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
	cuchillo: new undum.OnOffQuality(
        "Cuchillo", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    ),
	boligrafo: new undum.OnOffQuality(
        "Boligrafo", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
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
	system.setQuality( "boligrafo" , false );
    system.setQuality( "hija" , false );
    system.setQuality( "llave" , false );
	system.setQuality( "barra" , false );
	system.setQuality( "carta" , false );
	system.setQuality( "colgante" , false );
	system.setQuality( "navaja" , false );
	character.qualities.puntos=0;
    system.setCharacterText("<p> </p>");
};

