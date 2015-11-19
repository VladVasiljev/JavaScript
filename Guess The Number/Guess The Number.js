var random = Math.floor((Math.random() * 10) + 1);
var count = 0;
while (guess != random)
{
    count++;
    var guess = prompt("Please enter your guess");
    document.write("Your Guess " + guess + "<br/>");
    if (random == guess)
    {
        alert("You guessed the number");
        document.write("You Tried " + count + " Times!");
    }
    else if (guess < 1 || guess > 10)
    {
        alert("Number Needs To Be Between 1 and 10");
        count--;
    }
    else if (guess < random)
    {
        alert("Your Number is Too Low");
    }
    else if (guess > random)
    {
        alert("Your Number is Too High");
    }
    else
    {
        alert("Please Enter A Number");
    }
}