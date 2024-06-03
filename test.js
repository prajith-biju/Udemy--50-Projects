let arr = [1, 2, 3, 4]

// console.log( Math.floor( Math.random() * (arr.length) ) )

function shuffle() {
  arr.sort( rand )
  console.log( arr )
}

function rand() {
  let r = Math.random()
   console.log( 0.5 - r )
  return 0.5 - r
}

shuffle()