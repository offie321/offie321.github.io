header = document.getElementById('SR_Header');
textArea = document.getElementById('SR_TextArea');


function getSRMapBtn(element) {

    var srmapBtnName = element.getAttribute("data-srmap-btn");

    console.log(srmapBtnName);

    switch (srmapBtnName) {
        case 'base1':
            header.innerHTML = "Ally Base";
            textArea.innerHTML = "<img style='width: 100%' src='./img/base_bottom.jpg' alt='Image of ally base'>";
            break;
        case 'base2':
            header.innerHTML = "Enemy Base";
            textArea.innerHTML = "<img style='width: 100%' src='./img/base_top.jpg' alt='Image of enemy base'>";
            break;
        case 'drake':
            header.innerHTML = "Dragon";
            textArea.innerHTML = "<img style='width: 100%' src='./img/league_dragon.jpg' alt='Image of Dragon'>";
            break;
        case 'baron':
            header.innerHTML = "Baron Nashor";
            textArea.innerHTML = "<img style='width: 100%' src='./img/league_baron.jpg' alt='Image of Baron Nashor'> Baron Nashor is the most powerful neutral monster on. Summoner's Rift. </br> Killing Baron Nashor grants Hand of Baron to all living teammates for 180 seconds, which grants bonus attack damage, bonus ability power, Empowered Recall, and an aura that greatly increases the power of nearby. minions."
            break;
        case 'toplane':
            header.innerHTML = "Toplane";
            textArea.innerHTML = "<img style='width: 100%' src='./img/toplane.jpg' alt='Image of The toplane'> Due to the priority of Dragon, this position tends to remain isolated from the rest of the team. Ideal champions for this position are largely self-sufficient with tools to dominate in duels, scale by farming, or impact the map in other ways. ";
            break;
        case 'midlane':
            header.innerHTML = "Midlane";
            textArea.innerHTML = "<img style='width: 100%' src='./img/midlane.jpg' alt='Image of The midlane'> The middle lane provides the fastest income of gold and experience due to its short distance. The lane's smaller space is also attractive for champions with bad defense (e.g. Mage icon.png mages) to easily retreat to safety under turret. Being in the center of the map, this position has easy access to other sectors similar to the Jungler. ";
            break;
        case 'botlane':
            header.innerHTML = "Botlane";
            textArea.innerHTML = "<img style='width: 100%' src='./img/botlane.jpg' alt='Image of The botlane'> Due to the priority of Dragon, the Support tends to prioritize control of this lane over others. Ideal champions for Bottom position can optimize the presence of the Support throughout the laning phase. ";
            break;
    }





    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 
    // ANIMEREN VAN TEKST VERSCHIJNEN 


    // header = document.getElementById('SR_Header');
    // textArea = document.getElementById('SR_TextArea');





}