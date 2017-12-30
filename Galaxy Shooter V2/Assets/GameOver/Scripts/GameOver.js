#pragma strict

import UnityEngine.UI;

public class GameOver extends MonoBehaviour {

	public var playerName : Text;

	function Update() {
	 	if (Input.GetKey(KeyCode.Return)) {
			routeToScoreboard();
			SceneManagement.SceneManager.LoadScene("Scoreboard");
		}
	}

	private function routeToScoreboard() {
		var score : int = PlayerPrefs.GetInt("Player Score");
		var storage : SessionStorage = SessionStorage.getInstance();
		storage.storeScore(playerName.text, score);
	}
}
