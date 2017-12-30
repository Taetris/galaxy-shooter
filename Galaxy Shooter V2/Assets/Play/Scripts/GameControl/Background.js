#pragma strict

public class Background extends MonoBehaviour {
	
	private var playerRigidBody : Rigidbody2D;
	private var material : Material;
	private var offset : Vector2;

	function Start() {
		var playerObject = GameObject.FindWithTag("Player");
		playerRigidBody = playerObject.GetComponent(Rigidbody2D);

		material = GetComponent(Renderer).material;
		offset = material.mainTextureOffset;
	}

	function Update() {
		offset.x += playerRigidBody.velocity.x * Time.deltaTime;
		offset.y += playerRigidBody.velocity.y * Time.deltaTime;
		material.mainTextureOffset = offset;
	}
}
