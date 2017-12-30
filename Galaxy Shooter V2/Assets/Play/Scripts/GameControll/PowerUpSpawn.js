#pragma strict

public class PowerUpSpawn extends MonoBehaviour {

	public var powerUps : GameObject[];
	public var spawnOffset : Vector2;

	public var minSpawnTime : float;
	public var maxSpawnTime : float;

	public var timeToLive : float;

	private var player : GameObject;
	private var currentTime : float;
	private var currentSpawnTime : float;

	function Start() {
		player = GameObject.FindWithTag("Player");
		currentTime = minSpawnTime;
	}

	function Update() {
		currentTime += Time.deltaTime;

		if (currentTime >= currentSpawnTime) {
			spawn();
			resetTimer();
		}
	}

	public function spawn() {
		var powerUp = Instantiate(powerUps[Random.Range(0, powerUps.length - 1)],
								 Vector3(Random.Range(player.transform.position.x - spawnOffset.x, player.transform.position.x + spawnOffset.x),
							 			 Random.Range(player.transform.position.y - spawnOffset.y, player.transform.position.y + spawnOffset.y),
									 	 0),
								 Quaternion.identity);

		Destroy(powerUp, timeToLive);
	}

	private function resetTimer() {
		currentTime = 0;
		currentSpawnTime = Random.Range(minSpawnTime, maxSpawnTime);
	}
}
