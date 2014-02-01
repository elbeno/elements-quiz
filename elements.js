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
    "I am one of the halogens.",
    "I am extremely reactive and poisonous.",
    "I am added to water and toothpaste to keep teeth healthy.",
    "I am so reactive, I can even make compounds with some noble gases!",
    "I am a very pale yellow gas.",
    "When I react with hydrogen, I can form an acid that can etch glass.",
    "I am an important ingredient of refrigerant gases.",
  ]},

  {name:"Neon", symbol:"Ne", clues:[
    "I am a noble gas.",
    "I am used in signs - pass a current through me and I glow red.",
    "I was discovered in 1898.",
    "My name means \"new\" in Greek.",
    "I am abundant in the universe, but rare on earth.",
  ]},

  {name:"Sodium", symbol:"Na", clues:[
    "I am an alkali metal.",
    "I react explosively with water.",
    "I am important in the body - I help your nerves work.",
    "I am a soft, silver-white, very reactive metal",
    "I was first isolated by Humphry Davy in 1807.",
    "I am used in street lamps where I produce an intense yellow light.",
    "I am one of the elements in table salt.",
    "I am used as a liquid coolant in some nuclear reactors.",
  ]},

  {name:"Magnesium", symbol:"Mg", clues:[
    "I am an alkaline earth metal.",
    "I am the 4th most common element in the earth.",
    "I am 14% of the earth's mass.",
    "I burn with a brilliant white light.",
    "Some pencil sharpeners are made of me.",
    "My alloys are light and strong and I am used in the automotive industry.",
    "I am in Epsom salts.",
    "I am in a \"milk\" that can treat upset stomachs.",
    "I am used for flares, flash photography and pyrotechnics.",
  ]},

  {name:"Aluminium", symbol:"Al", clues:[
    "I am a so-called 'poor' metal.",
    "I am the most common metal in the earth's crust.",
    "My ore is called bauxite.",
    "I am a strong, light, and corrosion-resistant metal.",
    "I am used to make all kinds of things.",
    "My name derives from a latin word meaning \"bitter salt\".",
  ]},

  {name:"Silicon", symbol:"Si", clues:[
    "I am a metalloid.",
    "The earth's crust is made of my compounds.",
    "I am used to make computer chips.",
    "I am in sand, bricks, glass, and plenty of other things.",
    "Extremely pure wafers of me are used for semiconductors.",
    "A valley south of the San Fransisco bay is named for me.",
    "Polymers containing me are rubbery and heat-resistant.",
    "I am used (in a compound with Oxygen) as a drying agent.",
  ]},

  {name:"Phosphorus", symbol:"P ", clues:[
    "I am a very reactive nonmetal.",
    "I am used in matches.",
    "I come in several forms - red, white and black.",
    "I am inside all your cells in your DNA!",
    "An acid named after me is commonly used in soda.",
    "My name means \"light-carrier\" and was the ancient Greek name for the planet Venus.",
    "I am sometimes called \"The Devil\'s Element\" because I was the 13th to be discovered.",
    "I am one of the elements that makes up your bones.",
    "My white form burns fiercely and is used as an incendiary.",
    "I am used extensively in fertilisers.",
  ]},

  {name:"Sulfur", symbol:"S ", clues:[
    "I am a yellow nonmetal.",
    "I have been known since ancient times.",
    "My old name was brimstone.",
    "Lots of my compounds smell bad.",
    "I form an acid which is important for many industrial processes.",
    "I am in acid rain.",
  ]},

  {name:"Chlorine", symbol:"Cl", clues:[
    "I am one of the halogens.",
    "I am a yellow-green gas.",
    "I am one of the elements in table salt.",
    "I bleach things.",
  ]},

  {name:"Argon", symbol:"Ar", clues:[
    "I am a noble gas.",
    "My name means \"lazy\" in Greek, because I don't react with anything.",
    "I make up about 1% of the air.",
    "I am used to fill incandescent lightbulbs.",
  ]},

  {name:"Potassium", symbol:"K ", clues:[
    "I am an alkali metal.",
    "I am an important element for the function of your nerves.",
    "Bananas are noted for containing me.",
    "I react explosively with water.",
    "I am commonly used in fertilizers.",
    "I am the most common radioactive element in the human body.",
  ]},

  {name:"Calcium", symbol:"Ca", clues:[
    "I am an alkaline earth metal.",
    "I am in chalk.",
    "I am one of the elements that makes your bones strong.",
    "Milk is a good source of me for your body.",
    "In a flame, I produce a brick-red colour.",
    "I am present in cement and limestone.",
  ]},

  {name:"Scandium", symbol:"Sc", clues:[
    "I am a transition metal.",
    "I am sometimes called a rare earth element.",
    "I can be alloyed with aluminium to make baseball bats and bicycle frames.",
    "Lars Fredrik Nilson first detected me and named me.",
  ]},

  {name:"Titanium", symbol:"Ti", clues:[
    "I am a transition metal.",
    "I am used in combination with other metals to make strong, light alloys.",
    "I am very resistant to corrosion.",
    "I have the highest strength-to-density ratio of any metal.",
    "My oxide makes paint (and other things) bright white.",
  ]},

  {name:"Vanadium", symbol:"V ", clues:[
    "I am a transition metal.",
    "I am named after the Scandinavian goddess of beauty.",
    "I am a hard silvery-grey metal.",
    "Small amounts of me are added to steel to increase its strength.",
  ]},

  {name:"Chromium", symbol:"Cr", clues:[
    "I am a transition metal.",
    "My name is from the Greek for \"colour\" because my compounds are many-coloured.",
    "I am a shiny, brittle metal.",
    "School bus yellow is made with me.",
    "A thin layer of me makes something shiny and corrosion-resistant.",
  ]},

  {name:"Manganese", symbol:"Mn", clues:[
    "I am a transition metal.",
    "I am used in stainless steel.",
    "I am a silvery-grey, hard, brittle metal.",
    "I am a pigment in cave paintings.",
    "I am mined in South Africa and Australia among other places.",
    "I can replace lead in unleaded petrol.",
  ]},

  {name:"Iron", symbol:"Fe", clues:[
    "I am a transition metal.",
  ]},

  {name:"Cobalt", symbol:"Co", clues:[
    "I am a transition metal.",
  ]},

  {name:"Nickel", symbol:"Ni", clues:[
    "I am a transition metal.",
  ]},

  {name:"Copper", symbol:"Cu", clues:[
    "I am a transition metal.",
  ]},

  {name:"Zinc", symbol:"Zn", clues:[
    "I am a transition metal.",
  ]},

  {name:"Gallium", symbol:"Ga", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Germanium", symbol:"Ge", clues:[
    "I am a metalloid.",
  ]},

  {name:"Arsenic", symbol:"As", clues:[
    "I am a metalloid.",
  ]},

  {name:"Selenium", symbol:"Se", clues:[
    "I am named after the Greek for \"moon\".",
  ]},

  {name:"Bromine", symbol:"Br", clues:[
    "I am one of the halogens.",
  ]},

  {name:"Krypton", symbol:"Kr", clues:[
    "I am a noble gas.",
  ]},

  {name:"Rubidium", symbol:"Rb", clues:[
    "I am an alkali metal.",
  ]},

  {name:"Strontium", symbol:"Sr", clues:[
    "I am an alkaline earth metal.",
  ]},

  {name:"Yttrium", symbol:"Y ", clues:[
    "I am a transition metal.",
  ]},

  {name:"Zirconium", symbol:"Zr", clues:[
    "I am a transition metal.",
  ]},

  {name:"Niobium", symbol:"Nb", clues:[
    "I am a transition metal.",
  ]},

  {name:"Molybdenum", symbol:"Mo", clues:[
    "I am a transition metal.",
  ]},

  {name:"Technetium", symbol:"Tc", clues:[
    "I am a transition metal.",
  ]},

  {name:"Ruthenium", symbol:"Ru", clues:[
    "I am a transition metal.",
  ]},

  {name:"Rhodium", symbol:"Rh", clues:[
    "I am a transition metal.",
  ]},

  {name:"Palladium", symbol:"Pd", clues:[
    "I am a transition metal.",
  ]},

  {name:"Silver", symbol:"Ag", clues:[
    "I am a transition metal.",
  ]},

  {name:"Cadmium", symbol:"Cd", clues:[
    "I am a transition metal.",
  ]},

  {name:"Indium", symbol:"In", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Tin", symbol:"Sn", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Antimony", symbol:"Sb", clues:[
    "I am a metalloid.",
  ]},

  {name:"Tellurium", symbol:"Te", clues:[
    "I am a metalloid.",
    "I am named after the Roman god of the earth.",
  ]},

  {name:"Iodine", symbol:"I ", clues:[
    "I am one of the halogens.",
  ]},

  {name:"Xenon", symbol:"Xe", clues:[
    "I am a noble gas.",
  ]},

  {name:"Caesium", symbol:"Cs", clues:[
    "I am an alkali metal.",
  ]},

  {name:"Barium", symbol:"Ba", clues:[
    "I am an alkaline earth metal.",
  ]},

  {name:"Lanthanum", symbol:"La", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Cerium", symbol:"Ce", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Praseodymium", symbol:"Pr", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Neodymium", symbol:"Nd", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Promethium", symbol:"Pm", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Samarium", symbol:"Sm", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Europium", symbol:"Eu", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Gadolinium", symbol:"Gd", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Terbium", symbol:"Tb", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Dysprosium", symbol:"Dy", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Holmium", symbol:"Ho", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Erbium", symbol:"Er", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Thulium", symbol:"Tm", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Ytterbium", symbol:"Yb", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Lutetium", symbol:"Lu", clues:[
    "I am a rare earth metal.",
  ]},

  {name:"Hafnium", symbol:"Hf", clues:[
    "I am a transition metal.",
  ]},

  {name:"Tantalum", symbol:"Ta", clues:[
    "I am a transition metal.",
  ]},

  {name:"Tungsten", symbol:"W ", clues:[
    "I am a transition metal.",
  ]},

  {name:"Rhenium", symbol:"Re", clues:[
    "I am a transition metal.",
  ]},

  {name:"Osmium", symbol:"Os", clues:[
    "I am a transition metal.",
  ]},

  {name:"Iridium", symbol:"Ir", clues:[
    "I am a transition metal.",
  ]},

  {name:"Platinum", symbol:"Pt", clues:[
    "I am a transition metal.",
  ]},

  {name:"Gold", symbol:"Au", clues:[
    "I am a transition metal.",
  ]},

  {name:"Mercury", symbol:"Hg", clues:[
    "I am a transition metal.",
  ]},

  {name:"Thallium", symbol:"Tl", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Lead", symbol:"Pb", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Bismuth", symbol:"Bi", clues:[
    "I am a so-called 'poor' metal.",
  ]},

  {name:"Polonium", symbol:"Po", clues:[
    "I am a metalloid.",
  ]},

  {name:"Astatine", symbol:"At", clues:[
    "I am one of the halogens.",
  ]},

  {name:"Radon", symbol:"Rn", clues:[
    "I am a noble gas.",
  ]},

  {name:"Francium", symbol:"Fr", clues:[
    "I am an alkali metal.",
  ]},

  {name:"Radium", symbol:"Ra", clues:[
    "I am an alkaline earth metal.",
  ]},

  {name:"Actinium", symbol:"Ac", clues:[
    "I am an actinide.",
  ]},

  {name:"Thorium", symbol:"Th", clues:[
    "I am an actinide.",
  ]},

  {name:"Protactinium", symbol:"Pa", clues:[
    "I am an actinide.",
  ]},

  {name:"Uranium", symbol:"U ", clues:[
    "I am an actinide.",
  ]},

  {name:"Neptunium", symbol:"Np", clues:[
    "I am an actinide.",
  ]},

  {name:"Plutonium", symbol:"Pu", clues:[
    "I am an actinide.",
  ]},

  {name:"Americium", symbol:"Am", clues:[
    "I am an actinide.",
  ]},

  {name:"Curium", symbol:"Cm", clues:[
    "I am an actinide.",
  ]},

  {name:"Berkelium", symbol:"Bk", clues:[
    "I am an actinide.",
  ]},

  {name:"Californium", symbol:"Cf", clues:[
    "I am an actinide.",
  ]},

  {name:"Einsteinium", symbol:"Es", clues:[
    "I am an actinide.",
  ]},

  {name:"Fermium", symbol:"Fm", clues:[
    "I am an actinide.",
  ]},

  {name:"Mendelevium", symbol:"Md", clues:[
    "I am an actinide.",
  ]},

  {name:"Nobelium", symbol:"No", clues:[
    "I am an actinide.",
  ]},

  {name:"Lawrencium", symbol:"Lr", clues:[
    "I am an actinide.",
  ]},

  {name:"Rutherfordium", symbol:"Rf", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
  ]},

  {name:"Dubnium", symbol:"Db", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
  ]},

  {name:"Seaborgium", symbol:"Sg", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
  ]},

  {name:"Bohrium", symbol:"Bh", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
  ]},

  {name:"Hassium", symbol:"Hs", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
  ]},

  {name:"Meitnerium", symbol:"Mt", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I am very radioactive.",
  ]},

  {name:"Darmstadtium", symbol:"Ds", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I am very radioactive.",
    "I was created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research.",
    "I am named for the city where I was created.",
  ]},

  {name:"Roentgenium", symbol:"Rg", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I am very radioactive.",
    "I was created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research.",
    "I am named for the discoverer of X-rays.",
  ]},

  {name:"Copernicium", symbol:"Cn", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "My most stable isotope has a half-life of about 29 seconds.",
    "I am a transactinide.",
  ]},

  {name:"Ununtrium", symbol:"Uut", clues:[
    "I am a transactinide.",
  ]},

  {name:"Flerovium", symbol:"Fl", clues:[
    "I am a transactinide.",
    "I got my name in May 2012.",
  ]},

  {name:"Ununpentium", symbol:"Uup", clues:[
    "I am a transactinide.",
  ]},

  {name:"Livermorium", symbol:"Lv", clues:[
    "I am a transactinide.",
    "I got my name in May 2012.",
    "Scientists have only produced a few dozen atoms of me.",
  ]},

  {name:"Ununseptium", symbol:"Uus", clues:[
    "I am a transactinide.",
  ]},

  {name:"Ununoctium", symbol:"Uuo", clues:[
    "I am a transactinide.",
    "I am the heaviest element yet known.",
    "Scientists have only produced a few atoms of me.",
    "Not much is known about my properties.",
  ]},

];
