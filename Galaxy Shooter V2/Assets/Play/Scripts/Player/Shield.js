#pragma strict

public class Shield extends MonoBehaviour {

	public var timeToLive : float;

	function Start() {
		Destroy(gameObject, timeToLive);
	}

	function OnDestroy() {
		var playerObject = GameObject.FindWithTag("Player");
		var player = playerObject.GetComponent(Player);
		player.deactivateShield();
	}
}
