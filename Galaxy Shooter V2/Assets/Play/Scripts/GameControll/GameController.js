#pragma strict

import UnityEngine.UI;

public class GameController extends MonoBehaviour {

	public var score : int;
	public var healthSlider : Slider;
	public var fuelSlider : Slider;
	public var scoreText : Text;

	private var player : Player;

	function Start() {
		var playerObject = GameObject.FindWithTag("Player");
		player = playerObject.GetComponent(Player);
	}

	function Update() {
		updateUI();

		player.rotate();
		if(Input.GetMouseButtonDown(0)) {
			player.shoot();
		}
		if(Input.GetKey(KeyCode.W)) {
			player.move();
		} else if (Input.GetKey(KeyCode.Escape)) {
			SceneManagement.SceneManager.LoadScene("MainMenu");
		}
	}

	public function increaseScore(amount : float) {
		score += amount;
	}

	private function updateUI() {
		if (player.getHealth() <= 0) {
			endGame();
		}

		healthSlider.value = player.getHealth();
		fuelSlider.value = player.getFuel();
		scoreText.text = score.ToString();
	}

	private function endGame() {
		PlayerPrefs.SetInt("Player Score", score);
		SceneManagement.SceneManager.LoadScene("MainMenu");
	}
}
