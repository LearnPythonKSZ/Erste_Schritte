var points=0;
var pointgap = 0;
var pointanswerfunction1 = 0;
var pointanswerfunction2 = 0;
var pointsimagemap=0;
var pointquestion1=0;
var pointquestion2=0;
var pointsneeded=1;
var differenz= pointsneeded-points;
function number(){
	document.getElementById("point").innerHTML= points;
	if(pointsneeded-points>0){
		differenz= pointsneeded-points;
		document.getElementById("diff").innerHTML=differenz;
	}
	else{
		document.getElementById("unlocked").innerHTML="Du hast das nächste Kapitel freigeschaltet";
	}
}
function pointunlock() {
	points = pointgap + pointanswerfunction1 + pointanswerfunction2 + pointquestion1 + pointquestion2  + pointsimagemap;
	differenz= pointsneeded-points;
	number();
	if (points >= pointsneeded){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
		document.getElementById("buttonhref").href="/IDE"
	}
}
function Question1(name){
	var elements = document.getElementsByName(name);
	var bool = elements[0].getAttribute( 'id' );
	if (bool=="true"){
		document.getElementById("answer1").className="answer";
		document.getElementById("answer2").className="answer";
		document.getElementById("answer3").className="answer";
		document.getElementById("answer4").className="answertrue";
		number();
		pointquestion1=1;
		pointunlock();
	}else{
		switch(name){
			case "button1":
				document.getElementById("answer1").className="answercrossed";
				break;
			case "button2":
				document.getElementById("answer2").className="answercrossed";
				break;
			case "button3":
				document.getElementById("answer3").className="answercrossed";
				break;
			case "button4":
				document.getElementById("answer4").className="answercrossed";
				break;
		}
	}
}

function Question2(name){
	var elements = document.getElementsByName(name);
	var bool = elements[0].getAttribute( 'id' );
	if (bool=="true"){
		document.getElementById("answer5").className="answer";
		document.getElementById("answer6").className="answertrue";
		document.getElementById("answer7").className="answer";
		document.getElementById("answer8").className="answer";
		number();
		pointquestion2=1;
		pointunlock();
	}else{
		switch(name){
			case "button5":
				document.getElementById("answer5").className="answercrossed";
				break;
			case "button6":
				document.getElementById("answer6").className="answercrossed";
				break;
			case "button7":
				document.getElementById("answer7").className="answercrossed";
				break;
			case "button8":
				document.getElementById("answer8").className="answercrossed";
				break;
		}
	}
}
function answerfunction1() {
    var answer=document.getElementById("answercheck").value;
	if (answer=="18"){
		pointanswerfunction1 = 1;
		pointunlock();

	}
}
function answerfunction2() {
    var answer=document.getElementById("answercheck").value;
	if (answer=="2.0"||answer=="2,0"){
		pointanswerfunction2 = 1;
		pointunlock();

	}
}
function gap() {
	var answer=document.getElementById("codebox1").value;
	var solution=document.getElementById("codebox1").name;
	if (answer==solution){
		pointgap = 1;
		pointunlock();
	}
}
function imagemapsolved(){
	pointsimagemap=1;
	pointunlock();
}
