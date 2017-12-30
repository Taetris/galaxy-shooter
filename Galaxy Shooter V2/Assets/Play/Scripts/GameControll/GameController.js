#pragma strict

import UnityEngine.UI;

public class GameController extends MonoBehaviour {

	public var score : float;
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
		}
	}

	public function increaseScore(amount : float) {
		score += amount;
	}

	private function updateUI() {
		healthSlider.value = player.getHealth();
		fuelSlider.value = player.getFuel();
		scoreText.text = score.ToString();
	}
}
