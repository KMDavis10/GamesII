#pragma strict
public class Knife extends MonoBehaviour { 
	public var knifeWords = "Dang, yo! It's a knife!";
	var displayText = false;
	static var yesButtonClick = false;
	var noButtonClick = false;
	var knifeTake = false; 
	private var currentTime = 0.0f;
	var executedTime = 0.0f;
	var timeToWait = 2.0f;
	var clickCount = 0;

	// Use this for initialization
	function Start () {
		
	}
	
	function Awake () {
		DontDestroyOnLoad (this);
	}

	// Update is called once per frame
	function Update () {
		currentTime = Time.time;
		gameObject.tag = "I am a knife, ooooooh!";

		if(executedTime != 0.0f)
		{
			if(currentTime - executedTime > timeToWait)
			{
				if (yesButtonClick == true && noButtonClick == false) {
					if(Controls.remainingActions >= 2){
						for (var i = 0; i < Inventory.inventoryItems.length; i++) {
							if (Inventory.inventoryItems[i] == "Knife") {
								Debug.Log("eyyyy");
								Controls.remainingActions = Controls.remainingActions - 2;
								knifeTake = true;
							}
						}
					}
				}  
			}
			executedTime = 0.0f;
			//yesButtonClick = false;
			noButtonClick = false;

		}
		if (knifeTake) {
			Destroy(gameObject);
		}

	}

	function OnMouseDown() {
		displayText = true;
		clickCount++;;
	}

	function OnMouseUp() {
		if (clickCount % 2 == 0) {
			displayText = false;
		}
	}

	function OnGUI() {
		if (displayText) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), knifeWords + " Should you take it?");
			if (GUI.Button (new Rect (20,40,220,20), "Don't mind if I do! *wiggles fingers*")){
				yesButtonClick = true;
				executedTime = Time.time;
			}
			if (GUI.Button (new Rect (20,80,200,20), "Nah man, that ain't me.")){
				noButtonClick = true;
				executedTime = Time.time;
			}
		}
		if (yesButtonClick) {
			displayText = false;
		}
		if (noButtonClick) {
			displayText = false;
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "You are a fine person.");

		}
	}
}
