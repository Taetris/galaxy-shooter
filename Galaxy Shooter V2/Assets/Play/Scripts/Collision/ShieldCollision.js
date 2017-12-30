#pragma strict

public class ShieldCollision extends MonoBehaviour {

	private var player : Player;
	public var clip : AudioClip;

	function Start() {
		var playerObject = GameObject.FindWithTag("Player");
		player = playerObject.GetComponent(Player);
	}

	function OnTriggerEnter2D(other : Collider2D) {
		if (other.tag == "Player") {
			AudioSource.PlayClipAtPoint(clip, Vector3.zero);
			player.instantiateShield();
			Destroy(gameObject);
		}
	}
}
