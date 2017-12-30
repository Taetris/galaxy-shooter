#pragma strict

import System.Collections.Generic;

public class SessionStorage {

	private static var instance : SessionStorage;

	private var data = new Dictionary.<String, int>();

	public static function getInstance() : SessionStorage {
		if (instance == null) {
			instance = new SessionStorage();
		}
		return instance;
	}

	private function SessionStorage() {}

	public function storeScore(name : String, score : int) {
		data.Add(name, score);
	}

	public function getAll() : Dictionary.<String, int> {
		return data;
	}
}
