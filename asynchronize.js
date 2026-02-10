fetch("https://uselessfacts.jsph.pl/random.json?language=en")
.then(Response => Response.json())
.then(data => console.log(data));