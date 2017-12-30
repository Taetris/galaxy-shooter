#pragma strict

public class PillCollision extends MonoBehaviour {

	public var healthAmount : float;
	public var clip : AudioClip;

	private var player : Player;

	function Start() {
		var playerObject = GameObject.FindWithTag("Player");
		player = playerObject.GetComponent(Player);
	}

    function OnTriggerEnter2D(other : Collider2D) {
		if (other.tag == "Player") {
			AudioSource.PlayClipAtPoint(clip, Vector3.zero);
			player.increaseHealth(healthAmount);
			Destroy(gameObject);
		}
	}
}
