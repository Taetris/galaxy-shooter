#pragma strict

public class Laser extends MonoBehaviour {

	public var speed : float;
	public var timeToLive : float;
	public var clip : AudioClip;

	function Start() {
		Destroy(gameObject, timeToLive);
		AudioSource.PlayClipAtPoint(clip, Vector3.zero);
	}

	public function move(playerSpeed : Vector3) {
		GetComponent(Rigidbody2D).velocity = playerSpeed * speed;
	}
}
