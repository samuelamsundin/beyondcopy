let selectElementClass = document.getElementById("character_class");
selectElementClass.addEventListener("change", function (e) {
  if (
    selectElementClass.value === "choose class" ||
    selectElementLevel.value === "choose level"
  ) {
    return;
  } else {
    showSubclass();
  }
});

let selectElementLevel = document.getElementById("level");
selectElementLevel.addEventListener("change", function (e) {
  if (
    selectElementClass.value === "choose class" ||
    selectElementLevel.value === "choose level"
  ) {
    return;
  } else {
    showSubclass();
    showSkills();
    asi();
  }
});

let selectElementBackground = document.getElementById("background");
selectElementClass.addEventListener("change", function (e) {
  if (selectElementBackground.value === "choose background") {
    return;
  } else {
  }
});

let selectElementName = document.getElementById("name");
let name = selectElementName;

//Imports the HP the user inputs.
let selectElementHP = document.getElementById("hp");
let selectedHP = selectElementHP;

//Imports Strength score
let selectElementSTR = document.getElementById("str_score");
let inputed_str = selectElementSTR;

//Imports Dexterity score
let selectElementDEX = document.getElementById("dex_score");
let inputed_dex = selectElementDEX;

//Imports Constitution score
let selectElementCON = document.getElementById("con_score");
let inputed_con = selectElementCON;

//Imports Intelligence score
let selectElementINT = document.getElementById("int_score");
let inputed_int = selectElementINT;

//Imports Wisdom score
let selectElementWIS = document.getElementById("wis_score");
let inputed_wis = selectElementWIS;

//Imports Charisma score
let selectElementCHA = document.getElementById("cha_score");
let inputed_cha = selectElementCHA;

// Imports backround choice
let selectedBackground = document.getElementById("background");

function showSubclass() {
  //Creates arrays for every class by their hit dice. The program then checks through all arrays to see what the hit dice variable is.
  let d_10 = ["fighter", "paladin", "ranger"];
  let d_8 = ["bard", "cleric", "druid", "monk", "rogue", "warlock"];
  let d_6 = ["sorcerer", "wizard"];
  let selectedClass = selectElementClass.value;
  let selectedLevel = selectElementLevel.value;

  let characterClasses = [
    {
      name: "barbarian",
      levelThreshold: 3,
      class_features: {
        1: [
          "Rage: In battle you fight with primal ferocity. On your turn, you can enter a rage as a bonus action While raging you gain the following benefits if you are'nt wearing any armor: You have advantage on Strenght checks and Strenght saving throws. When you make a melee weapon attack using Strenght, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing and slashing damage. If you are able to cast spells, you can't cast them or concetrate on them while raging. Your rage lasts for one minute. It ends early if you are knocked unconsious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.",
          "Unarmored Defense: While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit",
        ],
        2: [
          "Reckless Attack: Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
          "Danger Sense: At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.",
        ],
        5: [
          "Extra Attack: Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
          "Fast Movement: Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.",
        ],
        7: [
          "Feral Instinct: By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
        ],
        9: [
          "Brutal Critical: Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.",
        ],
        11: [
          "Relentless Rage: Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
        ],
        13: [
          "Brutal Critical: At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack. This increases to three additional dice at 17th level.",
        ],
        15: [
          "Persistent Rage: Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        ],
        17: [
          "Brutal Critical: At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.",
        ],
        18: [
          "Indomitable Might: Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        ],
        20: [
          "Primal Champion: At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        ],
      },
      subclass_features: {
        ancestral_guardian: {
          3: [
            "Ancestral Protectors: Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you’re raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn’t against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
          ],
          6: [
            "Spirit Shield: Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6. When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.",
          ],
          10: [
            "Consult the Spirits: At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the augury or clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells. After you cast either spell in this way, you can’t use this feature again until you finish a short or long rest.",
          ],
          14: [
            "Vengeful Ancestors: At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents.",
          ],
        },
        beserker: {
          3: [
            "Frenzy: Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
          ],
          6: [
            "Mindless Rage: Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
          ],
          10: [
            "Intimidating Presence: Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can’t use this feature on that creature again for 24 hours.",
          ],
          14: [
            "Retaliation: Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
          ],
        },
        zealot: {
          3: [
            "Divine Fury: Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you’re raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature.",
            "Warrior of the Gods: At 3rd level, your soul is marked for endless battle. If a spell, such as raise dead, has the sole effect of restoring you to life (but not undeath), the caster doesn’t need material components to cast the spell on you.",
          ],
          6: [
            "Fanatical Focus: Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while you’re raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage.",
          ],
          10: [
            "Zealous Presence: At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn. Once you use this feature, you can’t use it again until you finish a long rest.",
          ],
          14: [
            "Rage beyond Death: Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows. While you’re raging, having 0 hit points doesn’t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don’t die until your rage ends, and you die then only if you still have 0 hit points.",
          ],
        },
      },
    },
    {
      name: "bard",
      levelThreshold: 3,
      class_features: {
        1: [
          "Bardic Inspiration: You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.",
        ],
        2: [
          "Jack of All Trades: Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.",
          "Song of Rest: Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.",
        ],
        5: [
          "Font of Inspiration: Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.",
        ],
        6: [
          "Countercharm: At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).",
        ],
        10: [
          "Magical Secrets: By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. You learn two additional spells from any classes at 14th level and again at 18th level.",
        ],
        14: [
          "Magical Secrets: At 14th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. You learn two additional spells from any classes at 18th level.",
        ],
        18: [
          "Magical Secrets: At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
        ],
        20: [
          "Superior Inspiration: At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",
        ],
      },
      subclass_features: {
        lore: {
          3: [
            "Cutting Words: Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being charmed.",
          ],
          6: [
            "Additional Magical Secrets: At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know.",
          ],
          14: [
            "Peerless Skill: Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.",
          ],
        },
        sword: {
          3: [
            "Blade Flourish: At 3rd level, you learn to perform impressive displays of martial prowess and speed. Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn. Defensive Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn. Slashing Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die. Mobile Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.",
          ],
          6: [
            "Extra Attack: Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
          ],
          14: [
            "Master’s Flourish: Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.",
          ],
        },
        valor: {
          3: [
            "Combat Inspiration: Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
          ],
          6: [
            "Extra Attack: Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
          ],
          14: [
            "Battle Magic: At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.",
          ],
        },
      },
    },
    {
      name: "cleric",
      levelThreshold: 1,
    },
    {
      name: "druid",
      levelThreshold: 2,
    },
    {
      name: "fighter",
      levelThreshold: 3,
    },
    {
      name: "monk",
      levelThreshold: 3,
    },
    {
      name: "paladin",
      levelThreshold: 3,
    },
    {
      name: "ranger",
      levelThreshold: 3,
    },
    {
      name: "rogue",
      levelThreshold: 3,
    },
    {
      name: "sorcerer",
      levelThreshold: 1,
    },
    {
      name: "warlock",
      levelThreshold: 1,
    },
    {
      name: "wizard",
      levelThreshold: 2,
    },
  ];

  let levelThreshold = characterClasses.find(function (characterClass) {
    return characterClass.name === selectedClass;
  }).levelThreshold;
  console.log(levelThreshold);

  //if statement that checks what class you are and determines your hit dice type. Because different classes have different hit dice types.
  if (selectedClass === "barbarian") {
    hit_dice = "d12";
  } else if (d_10.includes(selectedClass)) {
    hit_dice = "d10";
  } else if (d_8.includes(selectedClass)) {
    hit_dice = "d8";
  } else if (d_6.includes(selectedClass)) {
    hit_dice = "d6";
  }

  //Determines your total hit dice
  let dice_roll = selectedLevel.toString() * hit_dice;

  //Allows the player who have chosen a class and the level 3 or higher to select a subclass.
  if (parseInt(selectedLevel) >= levelThreshold) {
    let divWithSettings = document.getElementById(selectedClass);
    divWithSettings.style.display = "block";
  }
}

function showSkills() {
  let selectedClass = selectElementClass.value;

  // Hide all skills
  let allSkillSections = document.getElementsByClassName("skills-section");
  console.log(allSkillSections);
  for (let i = 0; i < allSkillSections.length; i++) {
    const element = allSkillSections[i];
    element.classList.add("hidden");
  }

  //Show selected skills
  document.getElementById(selectedClass + "-skills").classList.remove("hidden");
}

let characterBackgrounds = [
  {
    name: "acolyte",
    backgroundFeature:
      "Shelter of the Faithful: As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.",
  },
  {
    name: "charlatan",
    backgroundFeature:
      "False Identity: You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.",
  },
  {
    name: "criminal",
    backgroundFeature:
      "Criminal Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
  },
  {
    name: "hermit",
    backgroundFeature:
      "Discovery: The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.",
  },
  {
    name: "sage",
    backgroundFeature:
      "Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
  },
  {
    name: "soldier",
    backgroundFeature:
      "Military Rank: You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.",
  },
  {
    name: "Urchin",
    backgroundFeature:
      "City Secrets: You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.",
  },
];

function asi(selectElementLevel) {
  let numberofAsi;
  if (selectElementLevel < 4) {
    numberofAsi = 0;
  } else if (selectElementLevel < 8) {
    numberofAsi = 1;
  } else if (selectElementLevel < 12) {
    numberofAsi = 2;
  } else if (selectElementLevel < 16) {
    numberofAsi = 3;
  } else if (selectElementLevel < 19) {
    numberofAsi = 4;
  } else if (selectElementLevel >= 19) {
    numberofAsi = 5;
  }

  let divMedId = document.getElementById("asiHolder");
  divMedId.innerHTML = ""; //Töm diven
  while (numberofAsi > 0) {
    let html = `<label for="type-of-asi" class="">Ability Score Improvement</label>
    <select name="type-of-asi" class="">
      <option value="none">-</option>
      <option value="asi">Ability Score Improvement</option>
      <option value="feat">Feat</option>
    </select>
  
    <br /><br />
  
    <label for="ability-score-improvement" class="hidden"
      >Choose two scores</label
    >
    <select name="ability-score-improvement" class="hidden">
      <option value="strenght">Strenght</option>
      <option value="dexterity">Dexterity</option>
      <option value="constitution">Constitution</option>
      <option value="intelligence">Intelligence</option>
      <option value="wisdom">Wisdom</option>
      <option value="charisma">Charisma</option>
    </select>
  
    <label for="feat" class="hidden">Feats</label>
    <select name="feat" class="hidden">
      <option value="none">-</option>
      <option value="Keen Mind">Keen mind</option>
    </select>`;

    divMedId.insertAdjacentHTML("beforeend", html);
    numberofAsi--;
  }
}

document
  .getElementById("create-button")
  .addEventListener("click", function (e) {
    let name = document.getElementById("name").value;
    let race = document.getElementById("race").value;
    let strength = document.getElementById("str_score").value;
    let dexterity = document.getElementById("dex_score").value;
    let constitution = document.getElementById("con_score").value;
    let intelligence = document.getElementById("int_score").value;
    let wisdom = document.getElementById("wis_score").value;
    let charisma = document.getElementById("cha_score").value;
    let character_class = document.getElementById("character_class").value;
    let level = document.getElementById("level").value;
    let background = document.getElementById("background").value;
    let subclass = document.getElementById(character_class);

    let str_mod = calculateModifier(strength);
    let dex_mod = calculateModifier(dexterity);
    let con_mod = calculateModifier(constitution);
    let int_mod = calculateModifier(intelligence);
    let wis_mod = calculateModifier(wisdom);
    let cha_mod = calculateModifier(charisma);

    let str_throw = str_mod;
    let dex_throw = dex_mod;
    let con_throw = con_mod;
    let int_throw = int_mod;
    let wis_throw = wis_mod;
    let cha_throw = cha_mod;

    let initiative = dex_mod;

    if ((selectElementClass = "barbarian")) {
      let ac = 10 + dex_mod + con_mod;
    } else if ((selectElementClass = "monk")) {
      let ac = 10 + dex_mod + wis_mod;
    } else {
      let ac = 10 + dex_mod;
    }

    let first_proficiency = [1, 2, 3, 4];
    let second_proficiency = [5, 6, 7, 8];
    let third_proficiency = [9, 10, 11, 12];
    let forth_proficiency = [13, 14, 15, 16];
    let fifth_proficiency = [17, 18, 19, 20];

    if (first_proficiency.includes(level)) {
      let proficiency = 2;
    } else if (second_proficiency.includes(level)) {
      let proficiency = 3;
    } else if (third_proficiency.includes(level)) {
      let proficiency = 4;
    } else if (forth_proficiency.includes(level)) {
      let proficiency = 5;
    } else if (fifth_proficiency.includes(level)) {
      let proficiency = 6;
    }

    let thirtyms = ["dragonborn", "goliath", "half.orc", "human", "tiefling"];
    let twentyfivems = ["dwarf", "gnome", "halfling"];
    let thirtyfivems = ["elf"];

    let hp = document.getElementById("hp").value;

    if (thirtyms.includes(race)) {
      let movement_speed = 30;
    } else if (thirtyfivems.includes(race)) {
      let movement_speed = 35;
    } else if (twentyfivems.includes(race)) {
      let movement_speed = 25;
    }
  });

if (characterBackgrounds.includes(selectedBackground)) {
  backgroundFeature = backgroundFeature;
}

let str_skills = ["athletics"];
let dex_skills = ["acrobatics", "sleight-of-hand", "stealth"];
let int_skills = ["arcana", "history", "investigation", "nature", "religion"];
let wis_skills = [
  "animal-handling",
  "insight",
  "medicine",
  "perception",
  "survival",
];
let cha_skills = ["deception", "intimidation", "performance", "persuasion"];

if (proficient_skills.includes("athletics")) {
  let ath_mod = str_mod + proficiency;
} else {
  let ath_mod = str_mod;
}

let player_character = {
  name: selectElementName,
  class: selectElementClass,
  skills: {
    strength: {
      athletics: ath_mod,
    },
    dexterity: {
      acrobatics: dex_mod,
      sleight_of_hand: dex_mod,
      stealth: dex_mod,
    },
    intelligence: {
      arcana: int_mod,
      history: int_mod,
      investigation: int_mod,
      nature: int_mod,
      religion: int_mod,
    },
    wisdom: {
      animal_handling: wis_mod,
      insight: wis_mod,
      medcine: wis_mod,
      perception: wis_mod,
    },
    charisma: {
      deception: cha_mod,
      intimidation: cha_mod,
      performance: cha_mod,
      persuasion: cha_mod,
    },
  },
};
// value på ALLA checkboxar som är selected. Avnvänd document.quersSelectorAll("checkbox :selected")
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let selected_skills = [];

checkboxes.forEach((checkbox) => {
  if (checkbox.checked) {
    selected_skills.push(checkbox.value);
  }
});

for (const skill of cha_skills) {
  if (selected_skills.includes(skill)) {
    player_character.skills.charisma[skill] += proficiency;
    console.log(skill, " is in the list");
  }
}

for (const skill of dex_skills) {
  if (selected_skills.includes(skill)) {
    player_character.skills.dexterity[skill] += proficiency;
  }
}

for (const skill of str_skills) {
  if (selected_skills.includes(skill)) {
    player_character.skills.strength[skill] += proficiency;
  }
}

for (const skill of wis_skills) {
  if (selected_skills.includes(skill)) {
    player_character.skills.wisdom[skill] += proficiency;
  }
}

for (const skill of int_skills) {
  if (selected_skills.includes(skills)) {
    player_character.skills.intelligence[skill] += proficiency;
  }
}

//gör samma för alla stats.

function calculateModifier(attribute) {
  let modifier = 0;
  if ([0, 1].includes(attribute)) {
    modifier = -5;
  } else if ([2, 3].includes(attribute)) {
    modifier = -4;
  } else if ([4, 5].includes(attribute)) {
    modifier = -3;
  } else if ([6, 7].includes(attribute)) {
    modifier = -2;
  } else if ([8, 9].includes(attribute)) {
    modifier = -1;
  } else if ([10, 11].includes(attribute)) {
    modifier = 0;
  } else if ([12, 13].includes(attribute)) {
    modifier = +1;
  } else if ([14, 15].includes(attribute)) {
    modifier = +2;
  } else if ([16, 17].includes(attribute)) {
    modofier = +3;
  } else if ([18, 19].includes(attribute)) {
    modifier = +4;
  } else if ([20, 21].includes(attribute)) {
    modifier = +5;
  } else if ([22, 23].includes(attribute)) {
    modifier = +6;
  } else if ([24, 25].includes(attribute)) {
    modifier = +7;
  } else if ([26, 27].includes(attribute)) {
    modifier = +8;
  } else if ([28, 29].includes(attribute)) {
    modifier = +9;
  } else if ([30].includes(attribute)) {
    modifier = +10;
  }

  return modifier;
}
