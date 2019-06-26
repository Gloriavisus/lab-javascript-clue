// Characters
var charactersArray = [
{ name: "mrGreen",
  data: [{ 
    first_name:  "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"}
]},

{  name: "drOrchid",
    data: [{
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Scientist"

}]},

{  name: "profPlum",
    data: [{
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "hhttps://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"

}]},

{  name: "missScarlet",
    data: [{
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"

}]},


{  name: "mrsPeacock",
    data: [{
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        " https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"

}]},

{  name: "mrMustard",
    data: [{
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        " https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Retired Football player"

}]

}];

// Weapons
var weaponsArray = [
{ name: "rope",
    data:[{ weight: 10 }] },
{ name: "knife",
    data:[{ weight: 8 }] },   
{ name: "candlestick",
    data:[{ weight: 2 }] }, 
{ name: "dumbbell",
    data:[{ weight: 30 }] },
{ name: "poisom",
    data:[{ weight: 2 }] }, 
{ name: "axe",
    data:[{ weight: 15 }] },  
{ name: "bat",
    data:[{ weight: 13 }] }, 
{ name: "trophy",
    data:[{ weight: 25 }] },  
{ name: "pistol",
    data:[{ weight: 20 }] }

];

// Rooms
var roomsArray = [{

name: "Dinning Room",
name: "Conservatory",
name: "Kitchen",
name: "Study",
name: "Library",
name: "Billiard Room",
name: "Lounge",
name: "Ballroom",
name: "Hall",
name: "Spa",
name: "Living Room",
name: "Observatory",
name: "Theater",
name: "Guest House",
name: "Patio"

}];

/*var myCards= [];
function randomSelector (array){
    if(array.length === 0){
        return;
    }else{
    var myTargets= Math.floor(Math.random()* (charactersArray.length-1));
    var myWeapons= Math.floor(Math.random()* (weaponsArray.length-1));
    var myRooms= Math.floor(Math.random()* (roomsArray.length-1));
    myCards.push({name: charactersArray[myTargets].name, weapon: weaponsArray[myWeapons].name, room: roomsArray[myRooms].name});
    
    return myCards[0];
    }
};*/

var myCards= [];
function randomSelector (array){
    if(array.length === 0){
        return;
    }else{
        var numeroRandom = Math.floor(Math.random() * (array.length-1));
        return array[numeroRandom];
    }
    
};