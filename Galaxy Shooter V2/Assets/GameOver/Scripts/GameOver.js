#pragma strict

import UnityEngine.UI;

public class GameController extends MonoBehaviour {

	function Update() {
	 	if (Input.GetKey(KeyCode.Enter)) {
			storeScore();
			SceneManagement.SceneManager.LoadScene("Scoreboard");
		}
	}

	private function storeScore() {

	}
}
