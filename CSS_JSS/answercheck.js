function answerfunction() {
    var answer=document.getElementById("answercheck").value;
	if (answer=="2.0"||answer=="2,0"){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
		document.getElementById("buttonhref").href="/Aufbau";
	}
}
