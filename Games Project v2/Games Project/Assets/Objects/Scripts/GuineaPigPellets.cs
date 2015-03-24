using UnityEngine;
using System.Collections;

public class GuineaPigPellets: MonoBehaviour {
	public string guineaPigPelletsWords;
	bool displayText = false;
	public bool yesButtonClick = false;
	bool noButtonClick = false;
	bool guineaPigPelletsTake;
	private float currentTime = 0.0f, executedTime = 0.0f, timeToWait = 2.0f;
	int clickCount = 0;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		currentTime = Time.time;
		
		if(executedTime != 0.0f)
		{
			if(currentTime - executedTime > timeToWait)
			{
				if (yesButtonClick == true && noButtonClick == false) {
					/**if(Inventory.remainingActions >= 2){
						if (Inventory.inventoryArray.Contains("guineaPigPellets") == false) {
							Inventory.remainingActions = Inventory.remainingActions - 2;
							Inventory.inventoryArray.Insert(Inventory.listCount, "guineaPigPellets");
							Inventory.listCount++;
							guineaPigPelletsTake = true;
						}
					}*/
				}
				executedTime = 0.0f;
				//yesButtonClick = false;
				noButtonClick = false;
				
			}
		}
		/**if (guineaPigPelletsTake || Inventory.inventoryArray.Contains("guineaPigPellets") == true) {
			Destroy(gameObject);
		}*/
		
	}
	
	void OnMouseDown() {
		displayText = true;
		clickCount++;;
	}
	
	void OnMouseUp() {
		if (clickCount % 2 == 0) {
			displayText = false;
		}
	}
	
	void OnGUI() {
		if (displayText) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), guineaPigPelletsWords + " Should you take it?");
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
