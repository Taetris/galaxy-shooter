#pragma strict

public class GameMenu extends MonoBehaviour { 

	function onPlayButtonClicked() {
		SceneManagement.SceneManager.LoadScene("PlayScene");
	}

	function onScoreboardButtonClicked() {
		SceneManagement.SceneManager.LoadScene("ScoreboardScene");
	}

	function onExitButtonClicked() {
		Application.Quit();
	}
}

