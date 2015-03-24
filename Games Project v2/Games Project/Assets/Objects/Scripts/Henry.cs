using UnityEngine;
using System.Collections;

public class Henry : MonoBehaviour {

		private string[] npcWords = new string[6];
		bool[] presentEvidence = new bool[10];
		bool evidence, cashWad, buds, displayText, present, dialog, NPCLike = false;
		int randomNum = 0;
		private float currentTime = 0.0f, executedTime = 0.0f, timeToWait = 2.0f;
		private float currentTime1 = 0.0f, executedTime1 = 0.0f, timeToWait1 = 4.0f;
		int clickCount = 0;
		int talkCounter = 0;
		int likedWordCount = 0;
		int dislikedWordCount = 0;
	// Use this for initialization
		void Start () {
			npcWords[0] = "I really like parkour.";
			npcWords[1] = "Veronica’s cute and all, but I could never like a girl who loves vegetables.";
			npcWords[2] = "Randall’s got some nerve saying his dog is better than my cats.";
			npcWords[3] = "I did it...what, you think I'm kidding?";
			npcWords[4] = "I heard Veronica got into a heated argument with a customer the other day.";
			npcWords[5] = "Randall doesn’t trust the banks.";
		}
		
		// Update is called once per frame
		void Update () {
			currentTime = Time.time;
			currentTime1 = Time.time;
			if(executedTime != 0.0f)
			{
				if(currentTime - executedTime > timeToWait)
				{
					executedTime = 0.0f;
					present = false;
					dialog = false;
					displayText = false;
					evidence = false;
				}
			}
			if(executedTime1 != 0.0f)
			{
				if(currentTime1 - executedTime1 > timeToWait1)
				{
					executedTime1 = 0.0f;
					present = false;
					if (dialog) {
						if (randomNum == 3 && npcWords[randomNum] != "empty"){
							//Inventory.henryMotiveArray.Add(npcWords[randomNum]); 
							likedWordCount++;
						}
						if (randomNum == 4 && npcWords[randomNum] != "empty") {
							//Inventory.veronicaMotiveArray.Add(npcWords[randomNum]);
							likedWordCount++;
						}
						if (randomNum == 5 && npcWords[randomNum] != "empty") {
							//Inventory.randallMotiveArray.Add(npcWords[randomNum]);
							likedWordCount++;
						}
						npcWords[randomNum] = "empty";
						dislikedWordCount++;
						dialog = false;
					}
					displayText = false;
					evidence = false;
					if (cashWad) {
						/** int temp = Inventory.inventoryArray.IndexOf("cash");
						Inventory.inventoryArray.Remove("cash");
						Inventory.inventoryArray.Insert(temp, "empty");
						Inventory.emptyCount++;
						cashWad = false; */
					}
					if (buds) {
						/**int temp = Inventory.inventoryArray.IndexOf("earbuds");
						Inventory.inventoryArray.Remove("earbuds");
						Inventory.inventoryArray.Insert(temp, "empty");
						Inventory.emptyCount++;
						buds = false; */
					}
					
				}
			}
	}
	
	void OnMouseDown() {
			displayText = true;
			clickCount++;
			do {
				if (NPCLike) { 
					randomNum = Random.Range (3, 6);
				} else {
					randomNum = Random.Range (0, 3);
				}
		} while((npcWords[randomNum].Equals("empty") && likedWordCount < 3 && NPCLike) || (npcWords[randomNum].Equals("empty") && dislikedWordCount < 3));
	}
	
	void OnMouseUp() {
			if (clickCount % 2 == 0) {
				displayText = false;
			}
		}
		
	void OnGUI() {
		/** if (displayText && Inventory.listCount != Inventory.emptyCount) {
			GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "Present evidence or ask stuff:");
			if (GUI.Button (new Rect (20,40,220,20), "Present evidence")){
				present = true;
				executedTime = Time.time;
			}
		}
		if (displayText) {
			if (GUI.Button (new Rect (20, 80, 200, 20), "Talk to Henry")) {
				dialog = true;
				executedTime1 = Time.time;
				if (talkCounter < 3)
				{
					Inventory.remainingActions = Inventory.remainingActions - 1;
					talkCounter= talkCounter+1;
				}
			}
		}
		//If the user has chosen to present evidence, then all of the items in their inventory are displayed
		//a for loop goes through and determines which evidence button has been presented - a flag is set in 
	    // a boolean array to determine what evidence to display a response to. 
		if (present) {
			displayText = false;
			for (int i = 0; i < Inventory.inventoryArray.Count; i++) {
				if (!Inventory.inventoryArray[i].Equals("empty")) {
					if (GUI.Button(new Rect(20, i*20, 200, 20), Inventory.inventoryArray[i])) {
						presentEvidence[i] = true;
						evidence = true;
					}
				}	
			}
		}
			//If the user chooses to talk, then a random dialog option from the NPC's string array is displayed
		if (dialog) {
			displayText = false;
			if (!npcWords[randomNum].Equals("empty")) { 
				executedTime = Time.time;
				GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), npcWords[randomNum]);
			}
		}
		for (int i = 0; i < Inventory.listCount; i++) {
			if (presentEvidence[i]) {
				presentEvidence[i] = evidence;
				if (evidence && Inventory.inventoryArray[i] == "cash") {
					executedTime1 = Time.time;
					cashWad = true;
					GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "Henry snatches the cash wad. Ha-ha!");
				}
				else if (evidence && Inventory.inventoryArray[i] == "earbuds") { 
					executedTime1 = Time.time;
					buds = true;
					GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "Oh, thanks! I lost these!");
					NPCLike = true;
					talkCounter = 0;
				}
				else {
					executedTime1 = Time.time;
					GUI.Box(new Rect(0, 0, Screen.width, Screen.height-200), "You presented " + Inventory.inventoryArray[i] + ". They didn't like it.");
				}
			}

		} */
	} 
}