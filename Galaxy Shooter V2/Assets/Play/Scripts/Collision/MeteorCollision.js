#pragma strict

public class MeteorCollision extends MonoBehaviour {

	public var healthAmount : float;
	public var clip : AudioClip;

	private var player : Player;

	function Start() {
		var playerObject = GameObject.FindWithTag("Player");
		player = playerObject.GetComponent(Player);
	}

	function OnCollisionEnter2D(other : Collision2D){
		if (other.gameObject.tag == "Player") {
			AudioSource.PlayClipAtPoint(clip, Vector3.zero);
			player.decreaseHealth(healthAmount);
			Destroy(gameObject);
		}
	}
}
