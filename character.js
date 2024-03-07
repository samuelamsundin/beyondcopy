//Imports the different variables from the form that creates your character.
let selectElementClass = document.getElementById("class");
let selectedClass = selectElementClass.value;

let selectElementLevel = document.getElementById("level");
let selectedLevel = selectElementLevel.value;

let selectElementHP = document.getElementById("hp");
let selectedHP = selectElementHP

//Creates arrays for every class by their hit dice. The program then checks through all arrays to see what the hit dice variable is.
let d_10 = ["fighter", "paladin", "ranger"]
let d_8 = ["bard", "cleric", "druid", "monk", "rogue", "warlock"]
let d_6 = ["sorcerer", "wizard"]


//if statement that checks what class you are and determines your hit dice type. 
if(selectedClass ==="barbarian"){
    hit_dice = "d12"
}

else if(d_10.includes(selectedClass)){
    hit_dice = "d10"
}

else if(d_8.includes(selectedClass)){
    hit_dice = "d8"
}

else if(d_6.includes(selectedClass)){
    hit_dice = "d6"
}

//Determines your total hit dice 
let hit_dice = selectedLevel * hit_dice


//Allows the player who have chosen the Barbarian class and the level 3 or higher to select a subclass, or more specific: Primal Path.  
if(selectedClass ==="barbarian" && selectedLevel >= 3){

}

//Allows the player who have chosen the Bard class and the level 3 or higher to select a subclass, more specific: a College.  
if(selectedClass ==="bard" && selectedLevel >= 3){

}

//Allows the player who have chosen the Cleric class and the level 1 or higher to select a subclass, more specific: a domain.  
if(selectedClass ==="cleric" && selectedLevel >= 1){

}

//Allows the player who have chosen the Druid class and the level 2 or higher to select a subclass, or more specific: a Druid Circle.  
if(selectedClass ==="druid" && selectedLevel >= 2){

}

//Allows the player who have chosen the Fighter class and the level 3 or higher to select a subclass, or more specific: a Martial Archetype.  
if(selectedClass ==="fighter" && selectedLevel >= 3){

}

//Allows the player who have chosen the Monk class and the level 3 or higher to select a subclass, or more specific: a Monastic Tradition.  
if(selectedClass ==="monk" && selectedLevel >= 3){

}

//Allows the player who have chosen the Paladin class and the level 3 or higher to select a subclass, or more specific: an Oath.  
if(selectedClass ==="paladin" && selectedLevel >= 3){

}

//Allows the player who have chosen the Ranger class and the level 3 or higher to select a subclass, or more specific: a Ranger Archetype.  
if(selectedClass ==="ranger" && selectedLevel >= 3){

}

//Allows the player who have chosen the Rogue class and the level 3 or higher to select a subclass, or more specific: a Roguish Archetype.  
if(selectedClass ==="rogue" && selectedLevel >= 3){

}

//Allows the player who have chosen the Sorcerer class and the level 1 or higher to select a subclass, or more specific: your Sorcerous Origin.  
if(selectedClass ==="sorcerer" && selectedLevel >= 1){

}

//Allows the player who have chosen the Warlock class and the level 1 or higher to select a subclass.  
if(selectedClass ==="warlock" && selectedLevel >= 1){

}

//Allows the player who have chosen the Wizard class and the level 3 or higher to select a subclass, or more specific: your School.  
if(selectedClass ==="wizard" && selectedLevel >= 2){

}
