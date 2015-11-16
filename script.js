
confirm("You are about to play this decision-based game.\nAre you ready to play?");
var characterName = prompt("What is you name?");
alert("So, it all started when I was a kid... We call it \"The Event\". Some people said it was the end... some people said it was the begining of something new... You probloby know it as the Apocalypse. My name is" + " " + characterName + ".")
alert("Now 16 years later I'm still here with our group, struggling to not get eaten by \"Walkers\", as we tend to call them...");
alert("I'm currently on my way to the lake to get some water. I brought my knife with me... Just in case... But I'm still afraid to go alone. Should I ask Wiliam to come along?");
var comeWiliam = prompt("Do you want Wiliam to come along? [Yes/No]")
if(comeWiliam === "Yes")
{
  alert("I collected courage and asked him...");
  alert("Sure! he said. I'll go and tell dad, just give me a minute. We then headed to the lake.");
  alert("On our way, we spotted a carwreck")
  var carWreck = prompt("Should we examine the car? [Yes/No]")
}
else {
  alert("Nah, I thought to myself. He would probloby reject that offer...");
  alert("I started to head to the lake")
  alert("On my way to the lake I spotted a carwreck")
  var carWreckTwo = prompt("Should I examine the carwreck? [Yes/No]")
}
if(carWreck === "Yes")
{
  alert(characterName + ": Let's check it out! (1.ja)")
  alert("")
}
if(carWreck === "No") {
  alert(characterName + ": Let's not take any risks! (1.nej")
  alert("Wiliam: Yeah, I guess so.")
}


if(carWreckTwo === "Yes") {
  alert(characterName + ": Let's take a look! (2.ja)")
  alert("When I open the front passenger seat, I noticed three things: A box, ") //här Avslutade jag senast
}
if(carWreckTwo === "No") {
    alert(characterName + ": I shouldn't take any risks... (2.nej)")
}
alert("Avslut")
