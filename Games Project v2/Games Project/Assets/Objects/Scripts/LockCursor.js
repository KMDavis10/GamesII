#pragma strict

var toggle: boolean = false;
var henry: Henry;
var randall: Randall;
var scissors: Scissors;
var knife: Knife;
var earbuds: Earbuds;
var legoflamb: LegOfLamb;
var carrots: Carrots; 
//var veronica: Veronica;

var player: GameObject;
function Start () {
	Screen.lockCursor = true;
}

function Update () {
	OnMouseDown();
}

function OnMouseDown()
{
	Screen.lockCursor = false;
	if (randall.displayText || henry.displayText || scissors.displayText || knife.displayText || earbuds.displayText || legoflamb.displayText || carrots.displayText)
	{
		Screen.lockCursor = false;
	}
	else
		Screen.lockCursor = true;

}

function OnGUI () {
	if (Screen.lockCursor) {
	    var centeredStyle = GUI.skin.GetStyle("Label");
	    centeredStyle.alignment = TextAnchor.UpperCenter;
	    GUI.Label (Rect (Screen.width/2-50, Screen.height/2-25, 100, 50), "+", centeredStyle);
	}
}
