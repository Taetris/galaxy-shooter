#pragma strict

import System.Collections.Generic;

public class CacheManager {

	private var data = new Dictionary.<String, int>();

	public function storeScore(name : String, score : int) {
		data.Add(name, score);
	}

	public function getAll() : Dictionary.<String, int> {
		return data;
	}
}
