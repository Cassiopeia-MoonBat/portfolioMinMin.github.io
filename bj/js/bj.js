var Stapel = [
	["Ka2", 2],
	["Ka3", 3],
	["Ka4", 4],
	["Ka5", 5],
	["Ka6", 6],
	["Ka7", 7],
	["Ka8", 8],
	["Ka9", 9],
	["Ka10", 10],
	["KaJ", 10],
	["KaQ", 10],
	["KaK", 10],
	["KaA", 11],
	["Kr2", 2],
	["Kr3", 3],
	["Kr4", 4],
	["Kr5", 5],
	["Kr6", 6],
	["Kr7", 7],
	["Kr8", 8],
	["Kr9", 9],
	["Kr10", 10],
	["KrJ", 10],
	["KrQ", 10],
	["KrK", 10],
	["KrA", 11],
	["He2", 2],
	["He3", 3],
	["He4", 4],
	["He5", 5],
	["He6", 6],
	["He7", 7],
	["He8", 8],
	["He9", 9],
	["He10", 10],
	["HeJ", 10],
	["HeQ", 10],
	["HeK", 10],
	["HeA", 11],
	["Pi2", 2],
	["Pi3", 3],
	["Pi4", 4],
	["Pi5", 5],
	["Pi6", 6],
	["Pi7", 7],
	["Pi8", 8],
	["Pi9", 9],
	["Pi10", 10],
	["PiJ", 10],
	["PiQ", 10],
	["PiK", 10],
	["PiA", 11]
];

var DealerKarten = [];
var SpielerKarten = [];

var f = 1;


//Alles zum Spielstand
//var SpielstandAktiv = [prompt("Name:"), 100];
//console.log(SpielstandAktiv);
var Spielstaende = [["Hr. E",99]];
var Punktestand = 0;
var SpielstandAktiv = ["Test",0];

function NameBestaetigen() {
	 SpielstandAktiv = [document.getElementById("inputID").value, 100];
}

function AufrufZumNameEingeben() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("popupText").innerHTML = "Geben Sie links ihr Name ein!";
	
}


function SchonVorhanden() {
	for (var i = 0; i<Spielstaende.length; i++) {
//		console.log(Spielstaende)
//		console.log(Spielstaende[i][0])
//		console.log(SpielstandAktiv[0])
		if (Spielstaende[i][0] == SpielstandAktiv[0]) {
			SpielstandAktiv = Spielstaende[i];
			return true;

		}

	}
	return false;

}

function LogIn() {
		SchonVorhanden();
		if (SchonVorhanden() !== true) {
//			console.log("SpielstandAktiv");
			Spielstaende.push(SpielstandAktiv);

		}

		Punktestand = SpielstandAktiv[1];
//		console.log(SpielstandAktiv[1]);
	}
	// Ende Alles zum Spielstand



//Display none block

document.getElementById("schalter").style.visibility = "hidden"; //Double und Split haben noch keine Funktion

document.getElementById("Wertsk").style.visibility = "hidden";

function popupWeg() {
	document.getElementById("popup").style.visibility = "hidden";

}

function KartenWert(a) {
	var x = 0;
	
//	console.log(a);
	a.sort(sortFunction);
	//console.log(a);

	function sortFunction(b, c) {
		if (b[1] === c[1]) {
			return 0;
		} else {
			return (b[1] < c[1]) ? -1 : 1;
		}
	}

	for (var i = 0; i < a.length; i++) {
		//Wenn ausgeteilte Karte Ass und Wert höher als 21, dann Werte Ass als 1
		var x0 = 0;
		x0 = x + a[i][1];

		if (a[i][1] == 11 && x0 > 21) {
			x = x + 1;

		} else {
			x = x0;

		}

	}
	return (x);

}

//Kartenhaufen

function Kartenhaufen() {

	document.getElementById("Kstapel").innerHTML = "";

	var a = 0;
	var p = 0;
	var b = 0;

	for (var i = 0; i < Stapel.length; i++) {
		document.getElementById("Kstapel").innerHTML = document.getElementById("Kstapel").innerHTML += "<div style='right: 20%;	top: 30% ;width: 100px;height: 140px; position: absolute; margin-top: " + a + "%; margin-right: " + b + "%; z-index=  " + p + ";' class='rot';> <img src='Stapel/Ktbk.png'> </div>";

		a = a - 0.13;
		p = p + 1;
		b = b - 0.065;
		//stapel[i];

	}

}

var time = 1000;

function KarteAusteilen(a, b) {
	if (Stapel.length === 0) {
		Stapel = [
			["Ka2", 2],
			["Ka3", 3],
			["Ka4", 4],
			["Ka5", 5],
			["Ka6", 6],
			["Ka7", 7],
			["Ka8", 8],
			["Ka9", 9],
			["Ka10", 10],
			["KaJ", 10],
			["KaQ", 10],
			["KaK", 10],
			["KaA", 11],
			["Kr2", 2],
			["Kr3", 3],
			["Kr4", 4],
			["Kr5", 5],
			["Kr6", 6],
			["Kr7", 7],
			["Kr8", 8],
			["Kr9", 9],
			["Kr10", 10],
			["KrJ", 10],
			["KrQ", 10],
			["KrK", 10],
			["KrA", 11],
			["He2", 2],
			["He3", 3],
			["He4", 4],
			["He5", 5],
			["He6", 6],
			["He7", 7],
			["He8", 8],
			["He9", 9],
			["He10", 10],
			["HeJ", 10],
			["HeQ", 10],
			["HeK", 10],
			["HeA", 11],
			["Pi2", 2],
			["Pi3", 3],
			["Pi4", 4],
			["Pi5", 5],
			["Pi6", 6],
			["Pi7", 7],
			["Pi8", 8],
			["Pi9", 9],
			["Pi10", 10],
			["PiJ", 10],
			["PiQ", 10],
			["PiK", 10],
			["PiA", 11]
		];

	}

	var idx = Math.floor(Math.random() * Stapel.length);
	a.push(Stapel[idx]);
	document.getElementById(b).innerHTML = document.getElementById(b).innerHTML += "<div class='karte' id='" + Stapel[idx][0] + "Div'> <img src='Stapel/" + Stapel[idx][0] + ".png' id=" + Stapel[idx][0] + " /> </div>";

	Stapel.splice(idx, 1);
	Kartenhaufen();

	document.getElementById("Wert" + b).innerHTML = KartenWert(a);

}

function PunktestandAnzeigen() {
//	console.log(Spielstaende);
	//Spielstaende[ SpielstandAktiv[1] ] = Punktestand;
	SpielstandAktiv[1] = Punktestand;
//	console.log(Spielstaende);
//	document.getElementById("punktestand").innerHTML = Spielstaende;

	Spielstaende.sort(sortFunction);

	function sortFunction(d, e) {
		if (d[1] === e[1]) {
			return 0;
		} else {
			return (d[1] < e[1]) ? 1 : -1;
		}
	}
	
	
	var html = "";
	for(i=0; i<Spielstaende.length; i++) {
		html += "<p>"+Spielstaende[i][0] + ": " + Spielstaende[i][1] +"</p>";
	}
//	console.log("marker"+Spielstaende);
	document.getElementById("punktestand").innerHTML = html;
//	console.log(html);
	
}

//PunktestandAnzeigen();

function changeFunktion(a, b) {
	//Funktion ändern von Button von Popup
	document.getElementById(a).setAttribute("onclick", b);
}

function reStart() {
	//Karten abräumen, Spiel neustarten
	f = 1;

	document.getElementById("dk").innerHTML = "";
	document.getElementById("sk").innerHTML = "";

	changeFunktion("submit3", "popupWeg()");
	document.getElementById("popup").style.visibility = "hidden";

	document.getElementById("submit").style.visibility = "visible";
	document.getElementById("schalter").style.visibility = "hidden";
	document.getElementById("Wertdk").style.visibility = "hidden";
	document.getElementById("Wertsk").style.visibility = "hidden";

	DealerKarten = [];
	SpielerKarten = [];

	document.getElementById("Wertdk").style.color = "yellow";
	document.getElementById("Wertsk").style.color = "yellow";

}

function verloren() {
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("Wertdk").style.visibility = "visible";

	for (var i = 0; i < DealerKarten.length; i++) {
		if (document.getElementById(DealerKarten[i][0]).getAttribute("src") == "Stapel/Ktbk.png") {
			document.getElementById(DealerKarten[i][0]).setAttribute("src", "Stapel/"+DealerKarten[i][0] + ".png")
		}

		/*
		if (document.getElementById(document.getElementById(DealerKarten[i][0])).getAttribute("source") == "Stapel/Ktbk.png") {
			document.getElementById(DealerKarten[i][0]).setAttribute("src", "Stapel/" + DealerKarten[i][0] + ".png");
		}*/
	}


	document.getElementById("hit").style.visibility = "hidden";
	document.getElementById("stand").style.visibility = "hidden";
	document.getElementById("double").style.visibility = "hidden";

}

function DealerDran() {
	document.getElementById("popup").style.visibility = "hidden";

	while (KartenWert(DealerKarten) < 17) {
		KarteAusteilen(DealerKarten, "dk");

	}

	document.getElementById("popup").style.visibility = "visible";

	if (KartenWert(DealerKarten) > 21 && KartenWert(SpielerKarten) < 22) {
		verloren();
		document.getElementById("popupText").innerHTML = "Dealer hat mehr als 21, Spieler gewinnt.";
		document.getElementById("Wertdk").style.color = "red";
		changeFunktion("submit3", "reStart()");

		Punktestand = Punktestand + 2 * f;
		PunktestandAnzeigen();

	}

	if (KartenWert(DealerKarten) < 22 && KartenWert(SpielerKarten) > 21) {
		verloren();
		document.getElementById("popupText").innerHTML = "Spieler hat mehr als 21, Spieler verliert.";
		changeFunktion("submit3", "reStart()");

	}

	if (KartenWert(DealerKarten) < 22 && KartenWert(SpielerKarten) < 22) {
		if (KartenWert(SpielerKarten) > KartenWert(DealerKarten)) {
			verloren();
			document.getElementById("popupText").innerHTML = "Spieler hat mehr als Dealer, Spieler gewinnt";
			changeFunktion("submit3", "reStart()");

			Punktestand = Punktestand + 2 * f;
			PunktestandAnzeigen();

		}

		if (KartenWert(SpielerKarten) < KartenWert(DealerKarten)) {
			verloren();
			document.getElementById("popupText").innerHTML = "Dealer hat mehr als Spieler, Spieler verliert";
			changeFunktion("submit3", "reStart()");

		}

		if (KartenWert(SpielerKarten) == KartenWert(DealerKarten)) {
			verloren();
			document.getElementById("popupText").innerHTML = "Dealer und Spieler haben gleich viel, Unentschieden";
			changeFunktion("submit3", "reStart()");

			Punktestand = Punktestand + 1 * f;
			PunktestandAnzeigen();

		}

	}





}

function showHitStand() {
	document.getElementById("hit").style.visibility = "visible";
	document.getElementById("stand").style.visibility = "visible";
	document.getElementById("double").style.visibility = "visible";

	changeFunktion("submit3", "popupWeg()");
	document.getElementById("popup").style.visibility = "hidden";

}

function hit() {
	document.getElementById("double").style.visibility = "hidden";
	KarteAusteilen(SpielerKarten, "sk");

	if (KartenWert(SpielerKarten) > 21) {
		document.getElementById("Wertsk").style.color = "red";
		document.getElementById("popup").style.visibility = "visible";
		verloren();
		document.getElementById("popupText").innerHTML = "Spieler hat mehr als 21, Spieler verliert.";
		changeFunktion("submit3", "reStart()");

	}

}

function double() {

	f = 2;
	Punktestand = Punktestand - 1;
	PunktestandAnzeigen();

	KarteAusteilen(SpielerKarten, "sk");

	if (KartenWert(SpielerKarten) > 21) {
		document.getElementById("Wertsk").style.color = "red";
		document.getElementById("popupText").innerHTML = "Spieler hat mehr als 21, Spieler verliert.";
		changeFunktion("submit3", "reStart()");

	} else {
		document.getElementById("popupText").innerHTML = "Spieler gezogen, Dealer an der Reihe.";
		changeFunktion("submit3", "DealerDran()");

	}

	verloren();

}

function stand() {
	DealerDran();
}

Kartenhaufen();


function Start() {
	
NameBestaetigen();

if (document.getElementById("inputID").value != "") {
	
	//Spiel beginnt, Delaer und Spieler erhalten zwei Karten.

	
	LogIn();

	Punktestand = Punktestand - 1;
	PunktestandAnzeigen();

	document.getElementById("submit").style.visibility = "hidden";
	document.getElementById("Wertsk").style.visibility = "visible";

	KarteAusteilen(SpielerKarten, "sk");
	KarteAusteilen(DealerKarten, "dk");
	KarteAusteilen(SpielerKarten, "sk");
	KarteAusteilen(DealerKarten, "dk");

	document.getElementById(DealerKarten[1][0]).setAttribute("src", "Stapel/Ktbk.png");

	if (KartenWert(DealerKarten) < 21 && KartenWert(SpielerKarten) < 21) {
		//Spiel geht wie gehabt weiter, da niemand Blackjack hat.
		document.getElementById("popupText").innerHTML = "Spieler hat " + KartenWert(SpielerKarten) + ", Spieler ist an der Reihe.";
		document.getElementById("popup").style.visibility = "visible";

		changeFunktion("submit3", "showHitStand()");



	} else {
		//Dealer oder/und Spieler hat Blackjack, prüfe wer Blackjack hat:
		if (KartenWert(DealerKarten) == 21 && KartenWert(SpielerKarten) < 21) {
			//Dealer hat Blackjack, Spieler verliert.
			PunktestandAnzeigen();

			verloren();

			document.getElementById("popupText").innerHTML = "Dealer hat Blackjack, Spieler verliert. Runde beendet.";

			changeFunktion("submit3", "reStart()");

		}

		if (KartenWert(SpielerKarten) == 21 && KartenWert(DealerKarten) < 21) {
			//Spieler hat Blackjack, Spieler gewinnt.
			Punktestand = Punktestand + 2.5;
			PunktestandAnzeigen();

			verloren();

			document.getElementById("popupText").innerHTML = "Spieler hat Blackjack, Spieler gewinnt. Runde beendet.";

			changeFunktion("submit3", "reStart()");

		}

		if (KartenWert(SpielerKarten) == 21 && KartenWert(DealerKarten) == 21) {
			//Dealer und Spieler haben Blackjack, Unentschieden.
			Punktestand = Punktestand + 1;
			PunktestandAnzeigen();

			verloren();

			document.getElementById("popupText").innerHTML = "Spieler und Dealer haben Black Jack, Keine Gewinner. Runde beendet.";

			changeFunktion("submit3", "reStart()");

		}

	}

} else {AufrufZumNameEingeben()}
}