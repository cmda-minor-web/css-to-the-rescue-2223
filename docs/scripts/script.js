var mousex;
var mousey;
var scrolly;
var shooting;

var deltaxBasis = 0;
var deltaxVariation = 3;
var deltayBasis = 2;
var deltayVariation = 4;

var rotatieBasis = 1;
var rotatieVariation = 6;

var duurBasis = 5;
var duurVariation = 3;
var vuurtempo = 15;

var partyPooper = false;

var emojis = [
	{karakter: "&#x1F600;", type: "netwerken", name: "grinning"}, 
	{karakter: "&#x1F605;", type: "netwerken", name: "sweat"}, 
	{karakter: "&#x1F609;", type: "netwerken", name: "wink"}, 
	{karakter: "&#x1F929;", type: "netwerken", name: "star-struck"}, 
	{karakter: "&#x1F618;", type: "netwerken", name: "blowing a kiss"},
	{karakter: "&#x1F60B;", type: "netwerken", name: "savoring food"},
	{karakter: "&#x1F92A;", type: "netwerken", name: "zany"},
	{karakter: "&#x1F61D;", type: "netwerken", name: "quinting with tongue"},
	{karakter: "&#x1F911;", type: "netwerken", name: "money-mouth"},
	{karakter: "&#x1F917;", type: "netwerken", name: "hugging"},
	{karakter: "&#x1F914;", type: "netwerken", name: "thinking"},
	{karakter: "&#x1F928;", type: "netwerken", name: "raised eyebrow"},
	{karakter: "&#x1F610;", type: "netwerken", name: "neutral"},
	{karakter: "&#x1F636;", type: "netwerken", name: "without mouth"},
	{karakter: "&#x1F60F;", type: "netwerken", name: "smirking"},
	{karakter: "&#x1F644;", type: "netwerken", name: "rolling eyes"},
	{karakter: "&#x1F62C;", type: "netwerken", name: "grimacing"},
	{karakter: "&#x1F60C;", type: "netwerken", name: "relieved"},
	{karakter: "&#x1F924;", type: "netwerken", name: "drooling"},
	{karakter: "&#x1F637;", type: "netwerken", name: "medical mask"},
	{karakter: "&#x1F922;", type: "netwerken", name: "nauseated"},
	{karakter: "&#x1F975;", type: "netwerken", name: "hot"},
	{karakter: "&#x1F976;", type: "netwerken", name: "cold"},
	{karakter: "&#x1F974;", type: "netwerken", name: "woozy"},
	{karakter: "&#x1F635;", type: "netwerken", name: "knocked-out"},
	{karakter: "&#x1F615;", type: "netwerken", name: "confused"},
	{karakter: "&#x1F641;", type: "netwerken", name: "slightly frowning"},
	{karakter: "&#x1F62E;", type: "netwerken", name: "open mouth"},
	{karakter: "&#x1F633;", type: "netwerken", name: "flushed"},
	{karakter: "&#x1F97A;", type: "netwerken", name: "pleading"},
	{karakter: "&#x1F627;", type: "netwerken", name: "anguished"},
	{karakter: "&#x1F622;", type: "netwerken", name: "crying"},
	{karakter: "&#x1F616;", type: "netwerken", name: "confounded"},
	{karakter: "&#x1F608;", type: "netwerken", name: "smiling with horns"},
	{karakter: "&#x1F921;", type: "netwerken", name: "clown"},
	{karakter: "&#x1F385;", type: "netwerken", name: "Santa Claus"},
	{karakter: "&#x1F354;", type: "ochtendsnacks", name: "hamburger"},
	{karakter: "&#x1F356;", type: "ochtendsnacks", name: "meat on bone"},
	{karakter: "&#x1F35F;", type: "ochtendsnacks", name: "french fries"},
	{karakter: "&#x1F32D;", type: "ochtendsnacks", name: "hot dog"},
	{karakter: "&#x1F355;", type: "ochtendsnacks", name: "pizza"},
	{karakter: "&#x1F37F;", type: "ochtendsnacks", name: "popcorn"},
	{karakter: "&#x1F363;", type: "ochtendsnacks", name: "sushi"},
	{karakter: "&#x1F36A;", type: "ochtendsnacks", name: "cookie"},
	{karakter: "&#x1F9C1;", type: "ochtendsnacks", name: "cupcake"},
	{karakter: "&#x1F369;", type: "ochtendsnacks", name: "doughnut"},
	{karakter: "&#x1F95F;", type: "ochtendsnacks", name: "dumpling"},
	{karakter: "&#x1F960;", type: "ochtendsnacks", name: "fortune cookie"},
	{karakter: "&#x1F36C;", type: "middagsnoep", name: "candy"},
	{karakter: "&#x1F36D;", type: "middagsnoep", name: "lollipop"},
	{karakter: "&#x1F4A9;", type: "ook leuk", name: "chocolate icecream"},
	{karakter: "&#x1F63A;", type: "ook leuk", name: "grinning cat"},
	{karakter: "&#x1F49B;", type: "ook leuk", name: "yellow heart"},
	{karakter: "&#x1F984;", type: "ook leuk", name: "unicorn"},
	{karakter: "&#x1F41E;", type: "ook leuk", name: "lady beetle"},
	{karakter: "&#x1F9A0;", type: "ook leuk", name: "microbe"},
	{karakter: "&#x1F346;", type: "ook leuk", name: "eggplant"},
	{karakter: "&#x1F351;", type: "ook leuk", name: "peach"},
	{karakter: "&#x1F336;", type: "ook leuk", name: "hot pepper"},
	{karakter: "&#x1F438;", type: "ook leuk", name: "frog"},
	{karakter: "&#x1F33A;", type: "ook leuk", name: "hibiscus"},
	{karakter: "&#x1F344;", type: "ook leuk", name: "mushroom"},
	{karakter: "&#x1F6F9;", type: "ook leuk", name: "skateboard"},
	{karakter: "&#x1F383;", type: "ook leuk", name: "pumpkin"},
	{karakter: "&#x1F6FC;", type: "ook leuk", name: "roller skate"}
];

var bullets = emojis;

/********************************************/
/* de links laten luisteren en dan schieten */
/********************************************/
function iniLinks(){
  let deLinks = document.querySelectorAll('a');
  
	function shoot() {
    if(!partyPooper) {
      let deltax;
      let deltay;
      let richting;

      let rotaties;
      let draairichting;
      
      let duur;
      
      function setBulletOpties() {
        deltax = Math.random() * deltaxVariation + parseInt(deltaxBasis);
        deltay = Math.random() * deltayVariation + parseInt(deltayBasis);
        richting = Math.floor(Math.random() * 2) * 2 - 1;
        deltax = deltax * richting;

        rotaties = Math.random() * rotatieVariation + parseInt(rotatieBasis);
        draairichting = Math.floor(Math.random() * 2) * 2 - 1;

        duur = (Math.random() * duurVariation + parseInt(duurBasis)) / 2;
      }

      function schietBullet() {
        //creeer bullet
        let bullet = document.createElement("div");
        let welkeBullet = Math.floor(Math.random() * bullets.length);
        bullet.classList.add("bullet");
        bullet.innerHTML = bullets[welkeBullet].karakter;

        // set opties
        bullet.style.setProperty("--deltax", deltax);
        bullet.style.setProperty("--deltay", deltay);
        bullet.style.setProperty("--richting", richting);
        bullet.style.setProperty("--rotaties", rotaties);
        bullet.style.setProperty("--draairichting", draairichting);
        bullet.style.setProperty("--duur", duur);
        bullet.style.setProperty("--posx", mousex);
        bullet.style.setProperty("--posy", (mousey - scrolly));

        //verwijder bullet na animatie (uit beeld)
        bullet.addEventListener("animationend", () => {event.target.remove();}, {once: true});

        //voeg bullet toe
        document.body.prepend(bullet);
      }

      function schietOpnieuw() {
        shooting = setTimeout( () => {
          shoot();
        }, vuurtempo);
      }

      if (bullets.length > 0) {
        setBulletOpties();
        schietBullet();
      }
      schietOpnieuw();
    }
	}
	
	function activeerLinks() {
		for(let eenLink of deLinks) {
			function updatePositieMuis(event) {
				mousex = event.pageX;
        mousey = event.pageY;
        scrolly = document.body.scrollTop;
			}
			
			eenLink.addEventListener("mouseover", (event) => {
				updatePositieMuis(event);
				//start schieten
				shoot();
			});

			eenLink.addEventListener("mouseout", () => {
				// stop schieten
				clearTimeout(shooting);
			});	

			eenLink.addEventListener("mousemove", (event) => {
				updatePositieMuis(event)
			});
		}
  }
  
  function ruimBulletsOp() {
    let bullets = document.querySelectorAll(".bullets");
    for (bullet of bullets) {
      bullet.remove();
    }
  }


  ruimBulletsOp();
	activeerLinks();
}


/*******************/
/* de party pooper */
/*******************/
function iniPartyPooper() {
  function changePartyPooper() {
    partyPooper = !partyPooper;
    localStorage.setItem("partyPooper", JSON.stringify(partyPooper));
    document.body.classList.toggle("party-pooper");
  }

  var partyPooperCheck = document.querySelector("header input");
  if( localStorage.getItem("partyPooper") !== null ) {
    partyPooper = JSON.parse(localStorage.getItem("partyPooper"));
    partyPooperCheck.checked = partyPooper;
    if(partyPooper) {
      document.body.classList.add("party-pooper");
    }
  }
  partyPooperCheck.addEventListener("change", changePartyPooper);
}



function iniOffCanvas(){
  

  let header1 = document.querySelector('h1');
  let observerHeader1;
  let observerConfigHeader1 = {
    rootMargin: '-25px 0px 100000px 0px',
    threshold: 1  
  };

  function observerFnHeader1(entries) {
    if(entries[0].isIntersecting) {
      document.body.classList.remove("header-reverse");
    }
    else {
      document.body.classList.add("header-reverse");
    }
  }

  observerHeader1 = new IntersectionObserver(observerFnHeader1, observerConfigHeader1);
  observerHeader1.observe(header1);
}


/*******/
/* ini */
/*******/
iniPartyPooper();
iniLinks();
iniOffCanvas();