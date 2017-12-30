#pragma strict

public class StarCollision extends MonoBehaviour {

	public var scoreAmount : float;
	public var clip : AudioClip;

	private var gameController : GameController;

	function Start() {
		var gameControllerObject = GameObject.FindWithTag("GameController");
		gameController = gameControllerObject.GetComponent(GameController);
	}

	function OnTriggerEnter2D(other : Collider2D) {
		if (other.tag == "Player") {
			AudioSource.PlayClipAtPoint(clip, Vector3.zero);
			gameController.increaseScore(scoreAmount);
			Destroy(gameObject);
		}
	}
}
