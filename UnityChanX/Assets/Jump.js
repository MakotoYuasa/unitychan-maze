#pragma strict

function Start () {

}

function Update () {
	var myAnimator=GetComponent(Animator);

	if (Input.GetKey(KeyCode.Space))
	{
		myAnimator.SetBool("Jump",true);
	}

	var state:AnimatorStateInfo=myAnimator.GetCurrentAnimatorStateInfo(0);

	if(state.IsName("Locomotion.jump"))
	{
    	myAnimator.SetBool("Jump",false);
	}
}