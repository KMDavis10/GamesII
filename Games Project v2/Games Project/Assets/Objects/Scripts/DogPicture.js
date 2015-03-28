﻿#pragma strict
public class DogPicture extends MonoBehaviour {
	public var pictureWords;
	var displayText = false;
	static var yesButtonClick = false;
	var pictureTake = false;
	var noButtonClick = false;
	private var currentTime = 0.0f; 
	var executedTime = 0.0f; 
	var timeToWait = 2.0f;
	var clickCount = 0;
	// Use this for initialization
	function Start () {
		
	}
	
	// Update is called once per frame
	function Update () {
		currentTime = Time.time;
		gameObject.tag = "I am a dog picture, ooooooh!";
		
		if(executedTime != 0.0f)
		{
			if(currentTime - executedTime > timeToWait)
			{
				if (yesButtonClick == true && noButtonClick == false) {
					//Destroy(gameObject);
				}
				executedTime = 0.0f;
				//yesButtonClick = false;
				noButtonClick = false;
				
			}
		} 
		if (pictureTake) {
			Destroy(gameObject);
		}
	}
	
	function OnMouseDown() {
		displayText = true;
		clickCount++;
	}
	
	function OnMouseUp() {
		if (clickCount % 2 == 0) {
			displayText = false;
		}
	}
	
	function OnGUI() {
		if (displayText) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), pictureWords + " Should you take it?");
			if (GUI.Button (new Rect (20,40,220,20), "Sure, why the heck not?")){
				yesButtonClick = true;
				executedTime = Time.time;
			}
			if (GUI.Button (new Rect (20,80,200,20), "I don't want this garbage.")){
				noButtonClick = true;
				executedTime = Time.time;
			}
		}
		if (yesButtonClick) {
			displayText = false;
		}
		if (noButtonClick) {
			displayText = false;
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "Fair enough!");
			
		}
	}
	
}