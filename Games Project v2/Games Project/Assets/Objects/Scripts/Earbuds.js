#pragma strict
public class Earbuds extends MonoBehaviour {
	public var earWords = "A lost pair of earbuds!";
	var displayText = false;
	static var yesButtonClick = false;
	var noButtonClick = false;
	private var currentTime = 0.0f; 
	var executedTime = 0.0f; 
	var timeToWait = 2.0f;
	var clickCount = 0;
	var earCam: Camera;
	var playerCam: Camera;  
	// Use this for initialization
	function Start () {
		
	}
	
	// Update is called once per frame
	function Update () {
		currentTime = Time.time;
		gameObject.tag = "I am earbuds, ooooooh!";
		
		if(executedTime != 0.0f)
		{
			if(currentTime - executedTime > timeToWait)
			{
				if (Screen.lockCursor == false) {
					earCam.enabled = false;
					playerCam.enabled = true;
				}
				if (yesButtonClick == true && noButtonClick == false) {
					//Destroy(gameObject);
				}
				executedTime = 0.0f;
				//yesButtonClick = false;
				noButtonClick = false;
				
			}
		} 
		/**if (legTake) {
			Destroy(gameObject);
		}*/
		if(Input.GetKey(KeyCode.Escape)) {
			earCam.enabled = false;
			playerCam.enabled = true;
			displayText = false;
		}
	}
	
	function OnMouseDown() {
	if (earCam.enabled != true)
		{
			earCam.enabled = true;
			playerCam.enabled = false;
			displayText = true;
			clickCount++;
		}
	else
	{
		earCam.enabled = false;
		playerCam.enabled = true;
	}
	}
	
	function OnMouseUp() {
		if (clickCount % 2 == 0) {
			displayText = false;
		}
	}
	
	function OnGUI() {
		if (displayText) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), earWords + " Should you take them?");
			if (GUI.Button (new Rect (20,40,220,20), "Why the heck not!")){
				yesButtonClick = true;
				executedTime = Time.time;
			}
			if (GUI.Button (new Rect (20,80,200,20), "Ew, nasty!")){
				noButtonClick = true;
				executedTime = Time.time;
			}
		}
		if (yesButtonClick) {
			displayText = false;
			//GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "You got some delicious lamb!");
			/**if (Inventory.inventoryArray.Contains("leg of lamb") == false) {
				Inventory.inventoryArray.Insert(Inventory.listCount, "leg of lamb");
				Inventory.listCount++;
			} */
			
		}
		if (noButtonClick) {
			displayText = false;
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "Fair enough!");
			
		}
	}
	
}