//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var play = []
  for (let i=0; i < 4; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  } return play
}

function johnLennonFacts(facts){
  var shout = []
  let i = 0
  while(i < facts.length){
    shout.push(`${facts[i]}!!!`)
  }return shout
}
