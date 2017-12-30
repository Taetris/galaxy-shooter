#pragma strict

import UnityEngine.UI;

public class Scoreboard extends MonoBehaviour {

	function Update() {
	 	if (Input.GetKey(KeyCode.Escape)) {
			SceneManagement.SceneManager.LoadScene("MainMenu");
		}
	}
}
