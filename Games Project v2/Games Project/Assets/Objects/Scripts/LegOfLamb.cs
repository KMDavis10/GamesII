using UnityEngine;
using System.Collections;

public class LegOfLamb : MonoBehaviour {
	public string lambWords;
	bool displayText = false;
	public bool yesButtonClick = false;
	bool noButtonClick = false;
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
					Destroy(gameObject);
				}
				executedTime = 0.0f;
				yesButtonClick = false;
				noButtonClick = false;
				
			}
		} 
		
	}
	
	void OnMouseDown() {
		displayText = true;
		clickCount++;
	}
	
	void OnMouseUp() {
		if (clickCount % 2 == 0) {
			displayText = false;
		}
	}
	
	void OnGUI() {
		if (displayText) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), lambWords + " Should you take it?");
			if (GUI.Button (new Rect (20,40,220,20), "Well... I did skip lunch.")){
				yesButtonClick = true;
				executedTime = Time.time;
			}
			if (GUI.Button (new Rect (20,80,200,20), "I'm a vegetarian.")){
				noButtonClick = true;
				executedTime = Time.time;
			}
		}
		if (yesButtonClick) {
			displayText = false;
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "You got some delicious lamb!");
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