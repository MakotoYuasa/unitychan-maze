static var myGoal:boolean;
myGoal=false;

function OnTriggerEnter(myCol:Collider)
{
	if(myCol.tag=="Player")
	{
		myGoal=true;
	}
}
