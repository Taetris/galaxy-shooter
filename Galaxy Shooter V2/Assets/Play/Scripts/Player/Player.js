#pragma strict

public class Player extends MonoBehaviour {

	public var health : float;
	public var speed : float;
	public var fuel : float;
	public var laser : GameObject;
	public var shield : GameObject;

	public var healthUpClip : AudioClip;
	public var healthDownClip : AudioClip;
	public var shieldUpClip : AudioClip;
	public var shieldDownClip : AudioClip;

	private var rigidBody : Rigidbody2D;
	private var mouseX : float;
	private var mouseY : float;

	private var maxFuel : float;
	private var maxHealth : float;
	private var isShieldActive = false;

	function Start() {
		maxFuel = fuel;
		maxHealth = health;
		rigidBody = GetComponent(Rigidbody2D);
	}

	public function move() {
		if (fuel <= 0) {
			return;
		}

		var direction = Vector2(mouseX - transform.position.x,
		                        mouseY - transform.position.y).normalized;

		rigidBody.AddForce(direction * speed, ForceMode2D.Force);

		decreaseFuel();
	}

	public function rotate() {
		var mouse = Input.mousePosition;

		var objectPosition = Camera.main.WorldToScreenPoint(transform.position);
		mouseX = mouse.x - objectPosition.x;
		mouseY = mouse.y - objectPosition.y;

		var angle = Mathf.Atan2(mouseY, mouseX) * Mathf.Rad2Deg;
		transform.rotation = Quaternion.Euler(Vector3(0, 0, angle));
	}

	public function shoot() {
		var laserCopy : GameObject = Instantiate(laser, transform.position, transform.rotation);
		laserCopy.GetComponent(Laser).move(transform.right);
	}

	public function decreaseFuel() {
		if (fuel > 0) {
			fuel -= 0.1;
		} else {
			fuel = 0;
		}
	}

	public function increaseFuel(amount : float) {
		if (fuel + amount <= maxFuel) {
			fuel += amount;
		} else {
			fuel = maxFuel;
		}
	}

	public function decreaseHealth(amount : float) {
		AudioSource.PlayClipAtPoint(healthDownClip, Vector3.zero);
		if (!isShieldActive) {
			if (health >= amount) {
				health -= amount;
			} else {
				health = 0;
			}
		}
	}

	public function increaseHealth(amount : float) {
		AudioSource.PlayClipAtPoint(healthUpClip, Vector3.zero);
		if (health + amount <= maxHealth) {
			health += amount;
		} else {
			health = maxHealth;
		}
	}

	public function instantiateShield() {
		AudioSource.PlayClipAtPoint(shieldUpClip, Vector3.zero);

		var shieldCopy = Instantiate(shield, transform.position, transform.rotation);
		shieldCopy.transform.SetParent(transform);
		isShieldActive = true;
	}

	public function deactivateShield() {
		AudioSource.PlayClipAtPoint(shieldDownClip, Vector3.zero);

		isShieldActive = false;
	}

	public function getFuel() : float {
		return fuel;
	}

	public function getHealth() : float {
		return health;
	}
}
