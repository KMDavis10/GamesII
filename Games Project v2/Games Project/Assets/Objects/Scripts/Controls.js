#pragma strict

public class Controls extends MonoBehaviour
{
	var Henry: GameObject;
	var Randall: GameObject;
	var Veronica: GameObject;
	var Player: GameObject;
	public static var levels: String[] = new String[18];
	public static var inventoryArray: String[] = new String[18];;
	public static var henryMotiveArray: String[] = new String[18];
	public static var randallMotiveArray: String[] = new String[18];
	public static var veronicaMotiveArray: String[] = new String[18];
	public static var listCount: int = 0;
	public static var emptyCount: int = 0;
	public static var maxActions: int = 0;
	public static var remainingActions: int = 0;
	public static var levelCount: int = 0;
	var print1: boolean = false;
	var endGame: boolean = false;
	var throwAway: boolean = false;
	var displayNPCs: boolean = true;
	var displayMotives: boolean = false;
	var displayMotives2: boolean = false;
	var displayMotives3: boolean = false;
	var displayEvidence: boolean = false;
	var displayEvidence2: boolean = false;
	var displayEvidence3: boolean = false;;
	var correctMurderWeapon: int = 0;	//0 is initial; 1 is true; 2 is false
	var correctMotive: int = 0;			//0 is initial; 1 is true; 2 is false
	var correctNPC: boolean = false;
	private var currentTime: float = 0.0f;
	private var executedTime: float = 0.0f;
	private var timeToWait: float = 2.0f;

	function Start () {
		
	}
	
	function Update ()
	{
	
		if (levelCount > 5) {
			endGame = true;
		}
		if (levelCount % 2 != 0) { 
			maxActions = 2;
			if (remainingActions <= 0) {
				levelCount++;
				remainingActions = 6;
				Henry.transform.position = Vector3(50,0,50);
				Randall.transform.position = Vector3(60,0,60);
				Veronica.transform.position = Vector3(70,0,70);
				Player.transform.position = Vector3(80,10,80);
			}
		} 
		else {
			maxActions = 6;
			if (remainingActions <= 0) {
				levelCount++;
				remainingActions = 2;
				Henry.transform.position = Vector3(50,0,50);
				Randall.transform.position = Vector3(60,0,60);
				Veronica.transform.position = Vector3(70,0,70);
				Player.transform.position = Vector3(125,10,10);
			}
		}
	}

	function OnGUI() {
		GUI.Box (new Rect(650, 300, 200, 25), "Action points remaining: " + remainingActions.ToString());

		/*if (endGame) {
			print1 = false;
			/** If the user picks Henry as the killer*/
			/*if (displayNPCs) { 
				if (GUI.Button (new Rect (100, 280, 100, 20), "Henry") && displayNPCs) {
					displayMotives = true;
					correctNPC = true;
					displayNPCs = false;
				}
				if (GUI.Button (new Rect (200, 280, 100, 20), "Veronica")) {
					displayMotives2 = true;
					correctNPC = false;
					displayNPCs = false;
				}
				if (GUI.Button (new Rect (300, 280, 100, 20), "Randall")) {
					displayMotives3 = true;
					correctNPC = false;
					displayNPCs = false;
				}
			}
			if (displayMotives) {
				print (henryMotiveArray.Count);
				for (int i = 0; i < henryMotiveArray.Count; i++) {
					if (GUI.Button (new Rect (200, (50*i), 500, 20), henryMotiveArray [i]) && displayMotives) {
						if (henryMotiveArray[i] == "I did it...what, you think I'm kidding?") {
							displayEvidence = true;
							correctMotive = 1;
							displayMotives = false;
						} 
						else {
							displayEvidence = true;
							correctMotive = 2;
							displayMotives = false;
						}
					} 
				}
			}
			if (displayEvidence) {
				for (int j = 0; j < Inventory.Count; j++) {
					if (inventoryArray[j].Equals ("empty") == false) {
						if (GUI.Button (new Rect ((100 * j), 280, 100, 20), Inventory.inventoryItems[j]) && displayEvidence) {
							if (Inventory.inventoryItems[j] == "knife") {
								correctMurderWeapon = 1;
								displayEvidence = false;
							}
							else {
								correctMurderWeapon = 2;
								displayEvidence = false;
							}
						}
					}
				}
			}

			if (displayMotives2) {
				print (veronicaMotiveArray.Count);
				for (int i = 0; i < veronicaMotiveArray.Count; i++) {
					if (GUI.Button (new Rect (200, (50*i), 500, 20), veronicaMotiveArray [i]) && displayMotives2) {
						if (veronicaMotiveArray[i] == "I may or may not have an STD...") {
							displayEvidence2 = true;
							correctMotive = 2;
							displayMotives2 = false;
						} 
						else {
							displayEvidence2 = true;
							correctMotive = 2;
							displayMotives2 = false;
						}
					} 
				}
			}
			if (displayEvidence2) {
				for (int j = 0; j < inventoryArray.Count; j++) {
					if (Inventory.inventoryItems[j].Equals ("empty") == false) {
						if (GUI.Button (new Rect ((100 * j), 280, 100, 20), Inventory.inventoryItems[j]) && displayEvidence2) {
							if (inventoryArray [j] == "knife") {
								correctMurderWeapon = 2;
								displayEvidence2 = false;
							}
							else {
								correctMurderWeapon = 2;
								displayEvidence2 = false;
							}
						}
					}
				}
			}
			if (displayMotives3) {
				print (randallMotiveArray.Count);
				for (int i = 0; i < randallMotiveArray.Count; i++) {
					if (GUI.Button (new Rect (200, (50*i), 500, 20), randallMotiveArray [i]) && displayMotives3) {
						if (randallMotiveArray[i] == "I hate the manager.") {
							displayEvidence3 = true;
							correctMotive = 2;
							displayMotives3 = false;
						} 
						else {
							displayEvidence3 = true;
							correctMotive = 2;
							displayMotives3 = false;
						}
					} 
				}
			}
			if (displayEvidence3) {
				for (int j = 0; j < inventoryArray.Count; j++) {
					if (Inventory.inventoryItems[j].Equals ("empty") == false) {
						if (GUI.Button (new Rect ((100 * j), 280, 100, 20), Inventory.inventoryItems[j]) && displayEvidence3) {
							if (inventoryArray [j] == "knife") {
								correctMurderWeapon = 2;
								displayEvidence3 = false;
							}
							else {
								correctMurderWeapon = 2;
								displayEvidence3 = false;
							}
						}
					}
				}
			}

			if (correctMurderWeapon == 1 && correctNPC && correctMotive == 1) {
				GUI.Box (new Rect (0, 0, Screen.width, Screen.height - 200), "You won! Go outside pls");
			}
			else if (correctMurderWeapon == 2 && correctMotive == 2 && !correctNPC){
				GUI.Box (new Rect (0, 0, Screen.width, Screen.height - 200), "You lost! Try again or die");
			}

		} */
	}
}