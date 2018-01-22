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
function solution(idbutton){
 	if (idbutton.getAttribute("id")=="solutionbutton1"){
 		var solutiontag=document.getElementById("solutiontag1");
 		var solutionbutton=document.getElementById("solutionbutton1");
 		var solutionspan=document.getElementById("solution1");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}else if(idbutton.getAttribute("id")=="solutionbutton2"){
 		var solutiontag=document.getElementById("solutiontag2");
 		var solutionbutton=document.getElementById("solutionbutton2");
 		var solutionspan=document.getElementById("solution2");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}else if(idbutton.getAttribute("id")=="solutionbutton3"){
		var solutiontag=document.getElementById("solutiontag3");
 		var solutionbutton=document.getElementById("solutionbutton3");
 		var solutionspan=document.getElementById("solution3");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
	}
 }
 function help(idtext,idbutton,scroll){
	var idh = idbutton.getAttribute("id");
 	if (idh == "helpbutton1") {
 	idbutton.style.display = "none" ;
 	idtext.style.display = "block";
 	} else if (idh=="helpbutton2") {
 	idbutton.style.display = "none" ;
 	idtext.style.backgroundColor = "yellow";
	location.href = "#scrollto"; 
	}else if(idh == "helpbutton3"){	
	idbutton.style.display = "none" ;
 	idtext.style.display = "block";	 
	}else{ 
     alert("an error occured pls contact system admin #1");
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
    var answer=document.getElementById("answercheck1").value;
	if (answer=="18"){
		document.getElementById("answerchec1k").style.border = "solid 3px green";
		pointanswerfunction1 = 1;
		pointunlock();
	
	}else{
	document.getElementById("answercheck1").style.border = "solid 3px red";
	}
}
function answerfunction2() {
    var answer=document.getElementById("answercheck2").value;
	if (answer=="2.0"){
		document.getElementById("answercheck2").style.border = "solid 3px green";
		pointanswerfunction2 = 1;
		pointunlock();

	}else{
	document.getElementById("answercheck2").style.border = "solid 3px red";
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
