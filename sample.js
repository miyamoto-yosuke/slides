icon = new Array();
text = new Array("","tuna","shrimp","cuttlefish","octopus","conger","egg","salmon roe","sea urchin eggs"); //*2

for (n=0; n<9; n++) {
	icon[n] = new Image();
}

icon[0].src = "ita.gif";
icon[1].src = "maguro.gif";
icon[2].src = "ebi.gif";
icon[3].src = "ika.gif";
icon[4].src = "tako.gif";
icon[5].src = "anago.gif";
icon[6].src = "tamago.gif";
icon[7].src = "ikura.gif";
icon[8].src = "uni.gif";

function msg(onoff) {
	document.sushi.src = icon[onoff].src;
	document.FM.TX.value = text[onoff]; //*3

