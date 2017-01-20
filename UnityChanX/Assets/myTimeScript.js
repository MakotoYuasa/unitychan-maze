static var time:float;
var msg : GameObject;
function Start () {
	time = 90;
}
function Update () {
	myGoal();
}
function myGoal()
{
	var msg = GameObject.Find("msg");
	if (GoalArea.myGoal==false && time > 0){
		time -= Time.deltaTime;
	}else if(time <= 0){
		//var msg = GameObject.Find("msg");
		msg.GetComponent.<GUIText>().text = "GameOver!";
		yield WaitForSeconds (5.0);
		Application.LoadLevel("title");
	}else{
		//var msg = GameObject.Find("msg");
		msg.GetComponent.<GUIText>().text = "Goal!";
		yield WaitForSeconds (5.0);
		Application.LoadLevel("title");
	}

	var now:int=time;
	GetComponent.<GUIText>().text = "<Color=red>TIME:" + now.ToString() + " </Color>";
}
