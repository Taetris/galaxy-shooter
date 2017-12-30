#pragma strict

public class CameraFollow extends MonoBehaviour {

	private var player : GameObject;

	function Start() {
		player = GameObject.FindWithTag("Player");
	}

	function Update() {
		transform.position = new Vector3(player.transform.position.x,
		                                 player.transform.position.y,
		                                 -10);
	}
}
