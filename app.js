
var Name = prompt("Enter your name");





function oldCheck()
{
    var old = prompt("How old are you?");
    if (old <= 0)
    {alert("IT not sance")}
};
function welcomeMasg(){
    var Gender = prompt("Your gender is (male/female)");
    //confirm("welcoming message");
    if (confirm("welcoming message")) 
    {
        if(Gender=="male")
        {
            alert("Hi Mr." + Name);
        }
        else if (Gender=="female") {
           alert("Hi Ms." + Name);
            
        } else {
            alert("input is not correct");             
        } 
    }

};

function threeQ()
{
    var asking= ["Are you ok?" , "Do you like coffee?", "Are you smailing?"];
    var data = [];
     for (let i= 0 ; i < asking.length ; i++)
     {
        var answer = confirm(asking[i]);
        if(answer){
        data.push("Yes") ;}
        else{
            data.push("No");
        }
    }
    console.log(data);
     };
oldCheck();
welcomeMasg();
threeQ();