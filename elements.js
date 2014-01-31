// element data

var elements =
[
  {name:"Hydrogen", symbol:"H", clues:[
    "I power nuclear fusion in the sun.",
    "I am found in every acid.",
    "When water is electrolysed, bubbles of me form at the cathode.",
    "I used to be used in airships until some explosive disasters occurred.",
    "I can be found in a huge number of organic compounds.",
    "I am a gas at room temperature.",
    "My heavier isotopes are used in nuclear fusion reactions.",
    "I power some cars that have fuel cells.",
    "I am the lightest element.",
    "I am the most abundant element in the universe.",
    "I react explosively with oxygen to make water.",
    "Henry Cavendish discovered me in 1766."
  ]},

  {name:"Helium", symbol:"He", clues:[
    "I am named after the sun, where I was first discovered.",
    "I am the second most common element in the universe.",
    "I am a super-light gas.",
    "I am a noble gas: I don't like to react with anything.",
    "I am used in party balloons.",
    "If you breathe me in, your voice will turn squeaky.",
    "I am formed from radioactive decay inside the earth.",
    "I have the lowest melting point of any element: less than 1 Kelvin!",
    "When scientists cool me down really far I turn into a superfluid.",
    "I am used in airships.",
    "I am used in many cooling applications.",
    "The US has a reserve of me near Amarillo, TX."
  ]},

  {name:"Lithium", symbol:"Li", clues:[
    "I am the lightest metal.",
    "My name means \"stone\" in Greek.",
    "I am an alkali metal.",
    "I am a silvery-white metal that you can cut with a knife.",
    "My surface is bright silver but it soon goes dull if I am in the air.",
    "I was discovered in 1817 by Johan Arfwedson.",
    "I am used in H-bombs.",
    "I am used to treat some mental illnesses.",
    "I am commonly used in rechargable batteries to power electronics.",
    "I produce red sparks when I am used in fireworks.",
    "I react with water, producing hydrogen and a strong alkali.",
    "I was formed in the Big Bang."
  ]},

  {name:"Beryllium", symbol:"Be", clues:[
    "I am a light, fairly rare metal.",
    "I am an alkaline earth metal.",
    "I am a steely-coloured, brittle metal.",
    "My dust is toxic to humans.",
    "I am used in particle physics because X-rays pass through me easily.",
    "I melt at 1287°C. Phew!",
    "I'm made in stars, but I don't last long in there.",
    "I am in several gemstones - emerald is one.",
    "I dissolve in hydrochloric acid, but not in nitric acid.",
    "Minerals containing me were known to the ancient Egyptians.",
    "I was first isolated by two men independently in 1828.",
    "My strength and light weight give me uses in aerospace."
  ]},

  {name:"Boron", symbol:"B ", clues:[
    "People call me boring, but I'm not really!",
    "I'm fairly rare because I'm only produced by cosmic rays.",
    "I'm pretty toxic to insects, not so much to mammals.",
    "I'm used in bleaches and detergents.",
    "I'm a brown (or black - I have several forms) metalloid.",
    "I can form very hard compounds and I am used in ballistic vests.",
    "Rods of me are used to absorb neutrons in nuclear reactors.",
    "I burn green when I'm used in fireworks.",
    "I was first isolated by Sir Humphry Davy, in 1808.",
    "My crystals are very hard and black, with a melting point of over 2000°C!",
    "I am used to dope semiconductors.",
    "An acid containing me can be used to kill ants, fleas and cockroaches."
  ]},

  {name:"Carbon", symbol:"C ", clues:[
    "I am the basis of all known life on earth.",
    "I have my own branch of chemistry all about me and my compounds.",
    "I am a very common element, formed in stars.",
    "People burn me for fuel, but this often isn't very good for the environment.",
    "I've been known for a very long time.",
    "When you use a pencil, I'm the \"lead\".",
    "Diamonds are made of me.",
    "I can alloy with iron to make steel.",
    "Special arrangements of my atoms can form nanotubes or \"buckyballs\".",
    "I'm used in filters to get rid of impurities in water.",
    "When you cc: an email, I'm the first c!",
    "I am continually exchanged between animals, plants, and the environment - that's my cycle.",
  ]},

  {name:"Nitrogen", symbol:"N ", clues:[
    "I make up almost 80% of the air you breathe.",
    "I can form strong bonds and I am present in many explosives.",
    "I am a common nonmetal.",
    "I am a very unreactive gas.",
    "In my liquid form I can be used to quickly make ice cream.",
    "I give divers the bends if they decompress too quickly.",
    "Daniel Rutherford, a scotsman, discovered me in 1772.",
    "I boil at about -196°C - brr!",
    "Together with hydrogen, I make ammonia.",
    "I am an important ingredient of plant fertilisers.",
    "I am used as a protective atmosphere around packaged food.",
    "I am a colourless, odourless, and tasteless gas.",
  ]},

  {name:"Oxygen", symbol:"O ", clues:[
    "I am the third most common element in the universe.",
    "Joseph Priestley discovered me in 1774.",
    "I am essential to almost all life on earth.",
    "I am very reactive and form compounds with most elements.",
    "Fires can't burn without me.",
    "Plants produce me when they photosynthesise.",
    "My name means \"acid-forming\" in Greek.",
    "A form of me in the upper atmosphere protects the earth from UV radiation.",
    "As a liquid I'm used as rocket fuel.",
    "I make up about 21% of the earth's atmosphere.",
    "I make iron rusty.",
    "I am the most common element in the earth's crust - and in you!",
  ]},

  {name:"Fluorine", symbol:"F ", clues:[
  ]},

  {name:"Neon", symbol:"Ne", clues:[
  ]},

  {name:"Sodium", symbol:"Na", clues:[
  ]},

  {name:"Magnesium", symbol:"Mg", clues:[
  ]},

  {name:"Aluminum", symbol:"Al", clues:[
  ]},

  {name:"Silicon", symbol:"Si", clues:[
  ]},

  {name:"Phosphorus", symbol:"P ", clues:[
  ]},

  {name:"Sulfur", symbol:"S ", clues:[
  ]},

  {name:"Chlorine", symbol:"Cl", clues:[
  ]},

  {name:"Argon", symbol:"Ar", clues:[
  ]},

  {name:"Potassium", symbol:"K ", clues:[
  ]},

  {name:"Calcium", symbol:"Ca", clues:[
  ]},

  {name:"Scandium", symbol:"Sc", clues:[
  ]},

  {name:"Titanium", symbol:"Ti", clues:[
  ]},

  {name:"Vanadium", symbol:"V ", clues:[
  ]},

  {name:"Chromium", symbol:"Cr", clues:[
  ]},

  {name:"Manganese", symbol:"Mn", clues:[
  ]},

  {name:"Iron", symbol:"Fe", clues:[
  ]},

  {name:"Cobalt", symbol:"Co", clues:[
  ]},

  {name:"Nickel", symbol:"Ni", clues:[
  ]},

  {name:"Copper", symbol:"Cu", clues:[
  ]},

  {name:"Zinc", symbol:"Zn", clues:[
  ]},

  {name:"Gallium", symbol:"Ga", clues:[
  ]},

  {name:"Germanium", symbol:"Ge", clues:[
  ]},

  {name:"Arsenic", symbol:"As", clues:[
  ]},

  {name:"Selenium", symbol:"Se", clues:[
  ]},

  {name:"Bromine", symbol:"Br", clues:[
  ]},

  {name:"Krypton", symbol:"Kr", clues:[
  ]},

  {name:"Rubidium", symbol:"Rb", clues:[
  ]},

  {name:"Strontium", symbol:"Sr", clues:[
  ]},

  {name:"Yttrium", symbol:"Y ", clues:[
  ]},

  {name:"Zirconium", symbol:"Zr", clues:[
  ]},

  {name:"Niobium", symbol:"Nb", clues:[
  ]},

  {name:"Molybdenum", symbol:"Mo", clues:[
  ]},

  {name:"Technetium", symbol:"Tc", clues:[
  ]},

  {name:"Ruthenium", symbol:"Ru", clues:[
  ]},

  {name:"Rhodium", symbol:"Rh", clues:[
  ]},

  {name:"Palladium", symbol:"Pd", clues:[
  ]},

  {name:"Silver", symbol:"Ag", clues:[
  ]},

  {name:"Cadmium", symbol:"Cd", clues:[
  ]},

  {name:"Indium", symbol:"In", clues:[
  ]},

  {name:"Tin", symbol:"Sn", clues:[
  ]},

  {name:"Antimony", symbol:"Sb", clues:[
  ]},

  {name:"Tellurium", symbol:"Te", clues:[
  ]},

  {name:"Iodine", symbol:"I ", clues:[
  ]},

  {name:"Xenon", symbol:"Xe", clues:[
  ]},

  {name:"Cesium", symbol:"Cs", clues:[
  ]},

  {name:"Barium", symbol:"Ba", clues:[
  ]},

  {name:"Lanthanum", symbol:"La", clues:[
  ]},

  {name:"Cerium", symbol:"Ce", clues:[
  ]},

  {name:"Praseodymium", symbol:"Pr", clues:[
  ]},

  {name:"Neodymium", symbol:"Nd", clues:[
  ]},

  {name:"Promethium", symbol:"Pm", clues:[
  ]},

  {name:"Samarium", symbol:"Sm", clues:[
  ]},

  {name:"Europium", symbol:"Eu", clues:[
  ]},

  {name:"Gadolinium", symbol:"Gd", clues:[
  ]},

  {name:"Terbium", symbol:"Tb", clues:[
  ]},

  {name:"Dysprosium", symbol:"Dy", clues:[
  ]},

  {name:"Holmium", symbol:"Ho", clues:[
  ]},

  {name:"Erbium", symbol:"Er", clues:[
  ]},

  {name:"Thulium", symbol:"Tm", clues:[
  ]},

  {name:"Ytterbium", symbol:"Yb", clues:[
  ]},

  {name:"Lutetium", symbol:"Lu", clues:[
  ]},

  {name:"Hafnium", symbol:"Hf", clues:[
  ]},

  {name:"Tantalum", symbol:"Ta", clues:[
  ]},

  {name:"Tungsten", symbol:"W ", clues:[
  ]},

  {name:"Rhenium", symbol:"Re", clues:[
  ]},

  {name:"Osmium", symbol:"Os", clues:[
  ]},

  {name:"Iridium", symbol:"Ir", clues:[
  ]},

  {name:"Platinum", symbol:"Pt", clues:[
  ]},

  {name:"Gold", symbol:"Au", clues:[
  ]},

  {name:"Mercury", symbol:"Hg", clues:[
  ]},

  {name:"Thallium", symbol:"Tl", clues:[
  ]},

  {name:"Lead", symbol:"Pb", clues:[
  ]},

  {name:"Bismuth", symbol:"Bi", clues:[
  ]},

  {name:"Polonium", symbol:"Po", clues:[
  ]},

  {name:"Astatine", symbol:"At", clues:[
  ]},

  {name:"Radon", symbol:"Rn", clues:[
  ]},

  {name:"Francium", symbol:"Fr", clues:[
  ]},

  {name:"Radium", symbol:"Ra", clues:[
  ]},

  {name:"Actinium", symbol:"Ac", clues:[
  ]},

  {name:"Thorium", symbol:"Th", clues:[
  ]},

  {name:"Protactinium", symbol:"Pa", clues:[
  ]},

  {name:"Uranium", symbol:"U ", clues:[
  ]},

  {name:"Neptunium", symbol:"Np", clues:[
  ]},

  {name:"Plutonium", symbol:"Pu", clues:[
  ]},

  {name:"Americium", symbol:"Am", clues:[
  ]},

  {name:"Curium", symbol:"Cm", clues:[
  ]},

  {name:"Berkelium", symbol:"Bk", clues:[
  ]},

  {name:"Californium", symbol:"Cf", clues:[
  ]},

  {name:"Einsteinium", symbol:"Es", clues:[
  ]},

  {name:"Fermium", symbol:"Fm", clues:[
  ]},

  {name:"Mendelevium", symbol:"Md", clues:[
  ]},

  {name:"Nobelium", symbol:"No", clues:[
  ]},

  {name:"Lawrencium", symbol:"Lr", clues:[
  ]},

  {name:"Rutherfordium", symbol:"Rf", clues:[
  ]},

  {name:"Dubnium", symbol:"Db", clues:[
  ]},

  {name:"Seaborgium", symbol:"Sg", clues:[
  ]},

  {name:"Bohrium", symbol:"Bh", clues:[
  ]},

  {name:"Hassium", symbol:"Hs", clues:[
  ]},

  {name:"Meitnerium", symbol:"Mt", clues:[
  ]},

  {name:"Darmstadtium", symbol:"Ds", clues:[
  ]},

  {name:"Roentgenium", symbol:"Rg", clues:[
  ]},

  {name:"Copernicium", symbol:"Cn", clues:[
  ]},

  {name:"Ununtrium", symbol:"Uut", clues:[
  ]},

  {name:"Flerovium", symbol:"Fl", clues:[
  ]},

  {name:"Ununpentium", symbol:"Uup", clues:[
  ]},

  {name:"Livermorium", symbol:"Lv", clues:[
  ]},

  {name:"Ununseptium", symbol:"Uus", clues:[
  ]},

  {name:"Ununoctium", symbol:"Uuo", clues:[
  ]},

];
