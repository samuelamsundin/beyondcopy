let selectElement = document.getElementById("class");
let selectedClass = selectElement.value;

if(selectedClass === "barbarian"){
    hit_dice = "d12"
}

else if(selectedClass === "paladin" || "ranger" || "fighter"){
    hit_dice = "d10"
}

else if(selectedClass === "bard" || "cleric" || "druid" || "monk" || "rogue" || "warlock"){
    hit_dice = "d8"
}

else if(selectedClass === "wizard" || "sorcerer"){
    hit_dice = "d6"
}
