
//console.log(random_item(WhatIf));




// all available urls
var biology = ["https://www.youtube.com/embed/PaErPyEnDvk", 	
               "https://www.youtube.com/embed/4u5I8GYB79Y",
								"https://www.youtube.com/embed/7OPg-ksxZ4Y",
                "https://www.youtube.com/embed/YI3tsmFsrOg",
                "https://www.youtube.com/embed/lXfEK8G8CUI",
                "https://www.youtube.com/embed/1AElONvi9WQ",
                "https://www.youtube.com/embed/xaQJbozY_Is",
                "https://www.youtube.com/embed/1-NxodiGPCU",
                "https://www.youtube.com/embed/8PmM6SUn7Es",
                "https://www.youtube.com/embed/MUWUHf-rzks"];

function loadNewBiology() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = biology[Math.floor(Math.random()*biology.length)];
  // assign new url to src property
  el.src = newUrl; 
}


var whatif = ["https://www.youtube.com/embed/lheapd7bgLA", 	
              "https://www.youtube.com/embed/QqsLTNkzvaY",
              "https://www.youtube.com/embed/VB_GWz25B3Q",
              "https://www.youtube.com/embed/qEfPBt9dU60",
              "https://www.youtube.com/embed/gLZJlf5rHVs",
              "https://www.youtube.com/embed/9tbxDgcv74c",
              "https://www.youtube.com/embed/5iPH-br_eJQ",
              "https://www.youtube.com/embed/JyECrGp-Sw8"];

function loadNewWhatIf() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = whatif[Math.floor(Math.random()*whatif.length)];
  // assign new url to src property
  el.src = newUrl; 
}


var space = ["https://www.youtube.com/embed/aeWyp2vXxqA",
              "https://www.youtube.com/embed/HpcTJW4ur54",
              "https://www.youtube.com/embed/q4DF3j4saCE",
              "https://www.youtube.com/embed/Pj-h6MEgE7I",
              "https://www.youtube.com/embed/0FH9cgRhQ-k",
              "https://www.youtube.com/embed/y8XvQNt26KI",
              "https://www.youtube.com/embed/oHHSSJDJ4oo",
              "https://www.youtube.com/embed/v3y8AIEX_dU",
              "https://www.youtube.com/embed/dqwpQarrDwk",
              "https://www.youtube.com/embed/udFxKZRyQt4",
              "https://www.youtube.com/embed/p_8yK2kmxoo"];

function loadNewSpace() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = space[Math.floor(Math.random()*space.length)];
  // assign new url to src property
  el.src = newUrl; 
}

