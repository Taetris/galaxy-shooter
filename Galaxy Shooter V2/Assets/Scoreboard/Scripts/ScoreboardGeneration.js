#pragma strict

import UnityEngine.UI;

public class ScoreboardGeneration extends MonoBehaviour {

	public var scoreboardEntry : GameObject;

	function Start() {
		var storage : SessionStorage = SessionStorage.getInstance();

		for(var item in storage.getAll()) {
			var entry : GameObject = Instantiate(scoreboardEntry);
			entry.transform.SetParent(transform);
			entry.transform.Find("Name").GetComponent(Text).text = item.Key;
			entry.transform.Find("Score").GetComponent(Text).text = item.Value.ToString();
		}
	}
}
