#pragma strict

import UnityEngine.UI;

public class Credits extends MonoBehaviour {

	function Update() {
	 	if (Input.GetKey(KeyCode.Escape)) {
			SceneManagement.SceneManager.LoadScene("MainMenu");
		}
	}
}
