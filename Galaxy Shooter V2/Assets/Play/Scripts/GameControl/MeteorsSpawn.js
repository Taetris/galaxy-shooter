#pragma strict

import System.Collections.Generic;

public class MeteorsSpawn extends MonoBehaviour {

	public var meteors : GameObject[];
	public var spawnOffset : Vector2;
	public var spawnAmount : int;

	public var minSpawnTime : float;
	public var maxSpawnTime : float;

	public var minSpeed : float;
	public var maxSpeed : float;
	public var minRotationSpeed : float;
	public var maxRotationSpeed : float;

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
			for (var i = 0; i < spawnAmount; i++) {
				spawn();
			}
			resetTimer();
		}
	}

	public function spawn() {
		var meteor = Instantiate(meteors[Random.Range(0, meteors.length - 1)],
								 Vector3(Random.Range(player.transform.position.x - spawnOffset.x, player.transform.position.x + spawnOffset.x),
							 			 Random.Range(player.transform.position.y - spawnOffset.y, player.transform.position.y + spawnOffset.y),
									 	 0),
								 Quaternion.identity);

		var speed = Random.Range(minSpeed, maxSpeed);
		var direction = Vector2(player.transform.position.x - meteor.transform.position.x,
								player.transform.position.y - meteor.transform.position.y).normalized;
		meteor.GetComponent(Rigidbody2D).velocity = direction * speed;
		meteor.GetComponent(Rigidbody2D).angularVelocity = Random.Range(minRotationSpeed, maxRotationSpeed);

		Destroy(meteor, timeToLive);
	}

	private function resetTimer() {
		currentTime = 0;
		currentSpawnTime = Random.Range(minSpawnTime, maxSpawnTime);
	}
}
