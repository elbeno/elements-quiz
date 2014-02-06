// element data

var elements =
[
  {name:"Hydrogen", symbol:"H", clues:[
    "I power nuclear fusion in the sun.",
    "I am found in every acid.",
    "When water is electrolysed, bubbles of me form at the cathode.",
    "I used to be used in airships, until some explosive disasters occurred.",
    "I can be found in a huge number of organic compounds.",
    "I am a gas at room temperature.",
    "My heavier isotopes are used in nuclear fusion reactions.",
    "I power some cars that have fuel cells.",
    "I am the lightest element.",
    "I am the most abundant element in the universe.",
    "I react explosively with oxygen to make water.",
    "Henry Cavendish discovered me in 1766.",
  ]},

  {name:"Helium", symbol:"He", clues:[
    "I am named after the sun, where I was first discovered.",
    "I am the second most common element in the universe.",
    "I am a super-light gas.",
    "I am a noble gas: I don't like to react with anything.",
    "I am used in party balloons.",
    "If you breathe me in, your voice will turn squeaky.",
    "I am formed from radioactive decay inside the Earth.",
    "I have the lowest melting point of any element: less than 1 Kelvin.",
    "When scientists cool me down really far I turn into a superfluid.",
    "I am used in airships.",
    "I am used in many cooling applications.",
    "The US has a reserve of me near Amarillo, TX.",
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
    "I was formed in the Big Bang.",
  ]},

  {name:"Beryllium", symbol:"Be", clues:[
    "I am a light, fairly rare metal.",
    "I am an alkaline earth metal.",
    "I am a steely-coloured, brittle metal.",
    "My dust is toxic to humans.",
    "I am used in particle physics because X-rays pass through me easily.",
    "I'm made in stars, but I don't last long in there.",
    "I am in several gemstones - emerald is one.",
    "I dissolve in hydrochloric acid, but not in nitric acid.",
    "Minerals containing me were known to the ancient Egyptians.",
    "I was first isolated by two men independently in 1828.",
    "My strength and light weight give me uses in aerospace.",
  ]},

  {name:"Boron", symbol:"B", clues:[
    "People call me boring.",
    "I'm fairly rare because I'm only produced by cosmic rays.",
    "I'm pretty toxic to insects, not so much to mammals.",
    "I'm used in bleaches and detergents.",
    "I'm a brown (or black - I have several forms) metalloid.",
    "I can form very hard compounds and I am used in ballistic vests.",
    "Rods of me are used to absorb neutrons in nuclear reactors.",
    "I burn green when I'm used in fireworks.",
    "I was first isolated by Sir Humphry Davy, in 1808.",
    "My crystals are very hard and black, with a melting point of over 2000°C.",
    "I am used to dope semiconductors.",
    "An acid containing me can be used to kill ants, fleas and cockroaches.",
  ]},

  {name:"Carbon", symbol:"C", clues:[
    "I am the basis of all known life on Earth.",
    "I have my own branch of chemistry all about me and my compounds.",
    "I am a very common element, formed in stars.",
    "People burn me for fuel, but this often isn't very good for the environment.",
    "One of my isotopes is used to date things up to about 60,000 years ago.",
    "When you use a pencil, I'm the \"lead\".",
    "Diamonds are made of me.",
    "I can alloy with iron to make steel.",
    "Special arrangements of my atoms can form nanotubes or \"buckyballs\".",
    "I'm used in filters to get rid of impurities in water.",
    "I am continually exchanged between animals, plants, and the environment - that's my cycle.",
  ]},

  {name:"Nitrogen", symbol:"N", clues:[
    "I make up almost 80% of the air you breathe.",
    "I can form strong bonds and I am present in many explosives.",
    "I am a common nonmetal.",
    "I am a very unreactive gas.",
    "In my liquid form I can be used to quickly make ice cream.",
    "I give divers the bends if they decompress too quickly.",
    "Daniel Rutherford, a scotsman, discovered me in 1772.",
    "I boil at about -196°C.",
    "Together with hydrogen, I make ammonia.",
    "I am an important ingredient of plant fertilizers.",
    "I am used as a protective atmosphere around packaged food.",
    "I am a colourless, odourless, and tasteless gas.",
  ]},

  {name:"Oxygen", symbol:"O", clues:[
    "I am the third most common element in the universe.",
    "Joseph Priestley discovered me in 1774.",
    "I am essential to almost all life on Earth.",
    "I am very reactive and form compounds with most elements.",
    "Fires can't burn without me.",
    "Plants produce me when they photosynthesize.",
    "My name means \"acid-forming\" in Greek.",
    "A form of me in the upper atmosphere protects the Earth from UV radiation.",
    "As a liquid I'm used as rocket fuel.",
    "I make up about 21% of the Earth's atmosphere.",
    "I make iron rusty.",
    "I am the most common element in the Earth's crust - and in you.",
  ]},

  {name:"Fluorine", symbol:"F", clues:[
    "I am one of the halogens.",
    "I am extremely reactive and poisonous.",
    "I am added to water and toothpaste to keep teeth healthy.",
    "I am so reactive, I can even make compounds with some noble gases.",
    "I am a very pale yellow gas.",
    "When I react with hydrogen, I can form an acid that can etch glass.",
    "I am an important ingredient of refrigerant gases.",
  ]},

  {name:"Neon", symbol:"Ne", clues:[
    "I am a noble gas.",
    "I am used in signs - pass a current through me and I glow red.",
    "I was discovered in 1898.",
    "My name means \"new\" in Greek.",
    "I am abundant in the universe, but rare on Earth.",
  ]},

  {name:"Sodium", symbol:"Na", clues:[
    "I am an alkali metal.",
    "I react explosively with water.",
    "I am important in the body - I help your nerves work.",
    "I am a soft, silver-white, very reactive metal.",
    "I was first isolated by Humphry Davy in 1807.",
    "I am used in street lamps where I produce an intense yellow light.",
    "I am one of the elements in table salt.",
    "I am used as a liquid coolant in some nuclear reactors.",
  ]},

  {name:"Magnesium", symbol:"Mg", clues:[
    "I am an alkaline earth metal.",
    "I am the 4th most common element in the Earth.",
    "I am 14% of the Earth's mass.",
    "I burn with a brilliant white light.",
    "Some pencil sharpeners are made of me.",
    "My alloys are light and strong and I am used in the automotive industry.",
    "I am in Epsom salts.",
    "I am in a \"milk\" that can treat upset stomachs.",
    "I am used for flares, flash photography and pyrotechnics.",
    "I am used as a sacrificial anode to protect boat hulls.",
  ]},

  {name:"Aluminium", symbol:"Al", clues:[
    "I am a so-called \"poor\" metal.",
    "I am the most common metal in the Earth's crust.",
    "My ore is called bauxite.",
    "I am a strong, light, and corrosion-resistant metal.",
    "I am used to make all kinds of things.",
    "My name derives from a latin word meaning \"bitter salt\".",
    "Your computer processor's heatsink might be made of me.",
    "I am used as a sacrificial anode to protect boat hulls.",
    "The Bayer process is used to process my ore.",
  ]},

  {name:"Silicon", symbol:"Si", clues:[
    "I am a metalloid.",
    "The Earth's crust is made of my compounds.",
    "I am used to make computer chips.",
    "I am in sand, bricks, glass, and plenty of other things.",
    "Extremely pure wafers of me are used for semiconductors.",
    "A valley south of the San Fransisco bay is named for me.",
    "Polymers containing me are rubbery and heat-resistant.",
    "I am used (in a compound with oxygen) as a drying agent.",
  ]},

  {name:"Phosphorus", symbol:"P", clues:[
    "I am a very reactive nonmetal.",
    "I am used in matches.",
    "I come in several forms - red, white and black.",
    "I am inside all your cells in your DNA.",
    "An acid named after me is commonly used in soda.",
    "My name means \"light-carrier\" and was the ancient Greek name for the planet Venus.",
    "I am sometimes called \"The Devil\'s Element\" because I was the 13th to be discovered.",
    "I am one of the elements that makes up your bones.",
    "My white form burns fiercely and is used as an incendiary.",
    "I am used extensively in fertilizers.",
  ]},

  {name:"Sulfur", symbol:"S", clues:[
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
    "Like Neon, I am used in signs, where I will glow violet.",
    "I am produced by fractional distillation of liquid air.",
    "I am used to make a distinctive blue-green laser.",
  ]},

  {name:"Potassium", symbol:"K", clues:[
    "I am an alkali metal.",
    "I am an important element for the function of your nerves.",
    "Bananas are noted for containing me.",
    "I react explosively with water.",
    "I am commonly used in fertilizers.",
    "I am the most common radioactive element in the human body.",
    "In a flame, I burn a lilac colour.",
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

  {name:"Vanadium", symbol:"V", clues:[
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
    "My symbol comes from my Latin name.",
    "As a component of blood, I carry oxygen around the body.",
    "The Bessemer process is used to make steel out of me.",
    "When combined with sulfur, I make fool's gold.",
    "I can be magnetized.",
    "I make up most of the Earth by mass.",
    "I am the heaviest element made by fusion in stars (without supernovae).",
    "Mars gets its red colour from my oxide.",
    "Unlike many metals, I do not form amalgams with mercury.",
    "I have been known since antiquity.",
    "I am the most widely used of all metals.",
  ]},

  {name:"Cobalt", symbol:"Co", clues:[
    "I am a transition metal.",
    "I am famous for a particular rich blue pigment.",
    "German miners named me \"goblin\". because my ore didn't give them what they wanted.",
    "I can be magnetized.",
    "My ores include erythrite and glaucodot.",
    "I am used to make alloys for use in turbine blades.",
    "My alloys can be highly wear-resistant and are used for prosthetic parts.",
    "I am used in lithium-ion batteries.",
    "I have an important radioactive isotope which is easily made and widely used.",
    "My radioactive isotope has a half-life of 5.27 years.",
    "I could be used in a particularly dangerous dirty bomb.",
    "I'm an important atom in vitamin B12.",
  ]},

  {name:"Nickel", symbol:"Ni", clues:[
    "I am a transition metal.",
    "I am silvery-white with a slight gold tinge, hard, and ductile.",
    "Some people get dermatitis from contact with me.",
    "I am used in coins.",
    "I am used in alloys, especially steel.",
    "I am used for electroplating.",
    "I can be used to make an important magnetic alloy.",
    "Most jewellery is now made without me because some people are allergic to me.",
  ]},

  {name:"Copper", symbol:"Cu", clues:[
    "I am a transition metal.",
    "I am a great conductor of electricity and I am used a lot in wiring.",
    "I was known to the ancients.",
    "I am used in pipes because I am antibacterial and I don't react with water.",
    "I conduct heat really well.",
    "I am named for where I was mined in Roman times - Cyprus.",
    "I am used for building, especially roofing, where I often have a nice green patina.",
    "Your computer processor's heatsink might be made of me.",
    "I am antibacterial - hospitals use doorknobs made of me.",
    "Lobsters have blue blood because it's based on me, not iron.",
    "I have been used in coinage for centuries.",
    "I am a major part of Chile's economy.",
  ]},

  {name:"Zinc", symbol:"Zn", clues:[
    "I am a transition metal.",
    "Brass is a widely-used alloy containing me.",
    "My oxide is often used in sunscreen.",
    "My oxide is thermochromic: it's white when it's cold but yellow when it's hot.",
    "I burn with a bright blue-green flame.",
    "My oxide is amphoteric - it reacts with both acids and bases.",
    "I can give a protective coat to iron or steel - that's galvanisation.",
    "I am used as a sacrificial anode to protect boat hulls.",
    "When combined with sulfur I am used as a phosphor in CRTs.",
    "There is evidence that I can shorten the duration of a cold.",
    "I am used to make coins.",
    "I am highly toxic, often fatally so, to parrots.",
  ]},

  {name:"Gallium", symbol:"Ga", clues:[
    "I am a so-called \"poor\" metal.",
    "I have a low melting point - I'll melt in your hand.",
    "A good prank is to make spoons from me, which melt in hot tea.",
    "I am used to make electronics like blue and violet LEDs.",
    "Dmitri Mendeleev predicted my existence, calling me \"eka-aluminium\".",
    "I was named after France, but my discoverer may also have punned on his own name.",
    "Mostly, I am joined with arsenic and used in semiconductors.",
  ]},

  {name:"Germanium", symbol:"Ge", clues:[
    "I am a metalloid.",
    "I am an important material in semiconductors.",
    "I am named for a European country.",
    "Transistors and diodes were made from me before silicon took over.",
    "My discovery was an important confirmation of the Periodic Table.",
    "On December 16th, 1947, the electronic age began: the first transistor was made of me.",
  ]},

  {name:"Arsenic", symbol:"As", clues:[
    "I am a metalloid.",
    "I am a notorious poison, the star of many whodunits.",
    "The development of the Marsh test in 1836 put a stop to poisoners who used me.",
    "My oxide was used by Victorian women to make their complexions paler.",
    "One of my isotopes is used in PET scans.",
    "I strengthen lead when alloyed with it.",
    "A compound containing me (known as CCA) used to be used to preserve wood.",
  ]},

  {name:"Selenium", symbol:"Se", clues:[
    "I am named after the Greek for \"moon\".",
    "I am an essential trace element, but toxic in excess.",
    "Too much of me makes your breath smell of garlic.",
    "I am present in nuts, especially Brazil nuts.",
    "I am used in glassmaking - my compounds give glass a red colour.",
  ]},

  {name:"Bromine", symbol:"Br", clues:[
    "I am one of the halogens.",
    "I'm one of only two elements to be liquid at room temperature.",
    "My name is derived from the Greek for \"stench\".",
    "I used to be commonly used as a sedative.",
    "I am in the dye Tyrian purple, made from sea snails since ancient times.",
  ]},

  {name:"Krypton", symbol:"Kr", clues:[
    "I am a noble gas.",
    "I am one of the daughter products of uranium fission.",
    "I am used in bulbs to make a brilliant white light.",
    "I play an important role in many high-powered gas lasers.",
  ]},

  {name:"Rubidium", symbol:"Rb", clues:[
    "I am an alkali metal.",
    "I am a soft silvery-white metal with a low melting point.",
    "I am used in fireworks to give a purple colour.",
    "I am often cooled down by scientists studying Bose-Einstein condensates.",
    "I am used for positron emission tomography.",
  ]},

  {name:"Strontium", symbol:"Sr", clues:[
    "I am an alkaline earth metal.",
    "I am named after the Scottish village where I was discovered in 1790.",
    "An isotope of mine is in radioactive fallout and accumulates in bones.",
    "My main use is in glass for CRTs because I absorb X-rays.",
    "My salts give a deep red colour to fireworks.",
    "The human body treats me very similarly to calcium.",
    "One of my isotopes is used to treat bone cancer.",
  ]},

  {name:"Yttrium", symbol:"Y", clues:[
    "I am a transition metal.",
    "I am named after the Swedish village where I was discovered.",
    "I am used to make phosphors for CRTs and LEDs.",
    "I am present in moon rock.",
  ]},

  {name:"Zirconium", symbol:"Zr", clues:[
    "I am a transition metal.",
    "My oxide can be a well-known substitute for diamonds in jewellery.",
    "Minerals containing me are hard and strong even at high temperatures.",
    "I am used in cladding for nuclear reactor fuel.",
    "My oxide is highly heat resistant and is used in space rocket parts.",
  ]},

  {name:"Niobium", symbol:"Nb", clues:[
    "I am a transition metal.",
    "I am named after the daughter of the mythological figure Tantalus.",
    "I am found in pyrochlore.",
    "My alloys are temperature-stable and are used in jet and rocket engines.",
    "I am used to make superconducting materials.",
  ]},

  {name:"Molybdenum", symbol:"Mo", clues:[
    "I am a transition metal.",
    "My ores were confused with lead ores, hence my name (from \"lead\" in Greek).",
    "Mostly I am alloyed with steel.",
    "I can be used as an anode in X-ray tubes.",
  ]},

  {name:"Technetium", symbol:"Tc", clues:[
    "I am a transition metal.",
    "I am the lightest element with no stable isotopes.",
    "Only minute traces of me occur in the Earth.",
    "I am produced in nuclear reactors as a fission product.",
    "I am used as a radioactive tracer in medical applications.",
  ]},

  {name:"Ruthenium", symbol:"Ru", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "I am very rare - only about 12 tonnes of me is mined every year.",
    "I am used in alloys to make wear-resistant electrical contacts.",
    "I am used in thick-film resistors.",
    "I am a versatile catalyst.",
    "I may be useful in low-cost solar cells.",
  ]},

  {name:"Rhodium", symbol:"Rh", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "I am one of the rarest elements on Earth.",
    "I am mostly used in catalytic converters in cars.",
    "Sometimes I am used in jewellery and for decoration.",
  ]},

  {name:"Palladium", symbol:"Pd", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "I am mostly used in catalytic converters in cars.",
    "I was discovered in 1803 by William Hyde Wollaston.",
    "The Ford Motor Company lost nearly $1bn stockpiling me when my price was high.",
    "I am used as electrodes in multilayer ceramic capacitors.",
  ]},

  {name:"Silver", symbol:"Ag", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "My salts are light-sensitive and important in photography.",
    "My symbol comes from my Latin name.",
    "I conduct electricity better than any other element.",
    "I am the best metal at conducting heat.",
    "I've long been valued as a precious metal.",
    "I am used in a compound with iodine to \"seed\" clouds to try to make rain.",
    "Electrum is an alloy of me with gold.",
    "Olympic gold medals are actually made mostly of me.",
    "I am antibacterial and you can sometimes find me woven into socks.",
    "I am E174 when used as a food additive in the EU.",
  ]},

  {name:"Cadmium", symbol:"Cd", clues:[
    "I am a soft, bluish-white, toxic metal.",
    "I am the cause of Itai-Itai (\"ouch-ouch\" in Japanese) disease.",
    "The Japanese military used missiles tipped with me to try to kill Gojira.",
    "I am used with tellurium in solar panels.",
    "I used to be used with nickel in some rechargable batteries.",
    "My name derives from that of the founder of Thebes.",
    "I am in some brilliant red, orange and yellow pigments.",
  ]},

  {name:"Indium", symbol:"In", clues:[
    "I am a so-called \"poor\" metal.",
    "I was discovered in 1863 and named for the dark blue line in my spectrum.",
    "I am used to make transparent electrodes in LCDs and touch screens.",
    "I am a bright silvery-white metal that you can cut with a knife.",
  ]},

  {name:"Tin", symbol:"Sn", clues:[
    "I am a so-called \"poor\" metal.",
    "I have been known since the Bronze Age.",
    "I am the element with the largest number of stable isotopes (10).",
    "I am alloyed with lead to make solder.",
    "I am used to plate metal food packaging.",
    "My symbol comes from my Latin name.",
  ]},

  {name:"Antimony", symbol:"Sb", clues:[
    "I am a metalloid.",
    "My symbol comes from my Latin name.",
    "I am commonly alloyed with lead and tin for use in solder and bullets.",
    "Over 85% of the world's production of me is from China.",
    "I am used in some safety matches.",
    "I am toxic, with effects similar to arsenic.",
    "My oxide is used as a white pigment.",
  ]},

  {name:"Tellurium", symbol:"Te", clues:[
    "I am a metalloid.",
    "I am named after the Roman god of the earth.",
    "A tiny amount of me makes your breath stink like garlic.",
    "I am mostly used to make alloys with iron, copper and lead.",
    "I am used with cadmium in solar panels.",
  ]},

  {name:"Iodine", symbol:"I", clues:[
    "I am one of the halogens.",
    "I am a bluish-black solid.",
    "When I am heated, I sublime into a violet coloured gas.",
    "I am added to table salt in many countries.",
    "A dietary deficiency of me leads to hypothyroidism.",
    "Pills containing me are sold as a protection against radiation.",
  ]},

  {name:"Xenon", symbol:"Xe", clues:[
    "I am a noble gas.",
    "Trace amounts of me are present in the atmosphere.",
    "I am used as a general anaesthetic.",
    "I am used in flash lamps and arc lamps.",
    "When inhaled, I lower your voice. But it's not a good idea to inhale me.",
    "I am a heavy gas.",
  ]},

  {name:"Caesium", symbol:"Cs", clues:[
    "I am an alkali metal.",
    "I am a pale silvery-gold colour.",
    "My melting point is only 28°C.",
    "I am extremely reactive.",
    "My 133-isotope is used in atomic clocks.",
  ]},

  {name:"Barium", symbol:"Ba", clues:[
    "I am an alkaline earth metal.",
    "I am a soft, silvery, reactive metal.",
    "The state gem of California (Benitoite) contains me.",
    "My sulfate is opaque to X-rays and is used for imaging the digestive system.",
    "I can be used to remove unwanted gases from vacuum tubes.",
  ]},

  {name:"Lanthanum", symbol:"La", clues:[
    "I am a rare earth metal.",
    "An elemental series is named after me.",
    "I am a soft silvery-white metal.",
    "My name is derived from the Greek \"to lie hidden\".",
    "Although I am a \"rare earth metal\", I am not really rare at all.",
    "My first application was in gas lantern mantles.",
  ]},

  {name:"Cerium", symbol:"Ce", clues:[
    "I am a rare earth metal.",
    "I am used in lighter flints.",
    "I am the most common rare earth element.",
    "I am named for the largest dwarf planet in the asteroid belt.",
    "I am used as a catalyst for self-cleaning ovens.",
  ]},

  {name:"Praseodymium", symbol:"Pr", clues:[
    "I am a rare earth metal.",
    "I am used to make strong magnets.",
    "My compounds give glass and enamels a yellow-green colour.",
    "My name means \"green twin\" in Greek.",
    "I have been used as a dopant to slow light down through a medium.",
  ]},

  {name:"Neodymium", symbol:"Nd", clues:[
    "I am a rare earth metal.",
    "I make really strong magnets.",
    "Most of the world's supply of me is mined in China.",
    "My name is from the Greek for \"new twin\".",
    "My compounds can be used to colour glass and enamels.",
    "My magnetic alloys are used in microphones, loudspeakers and hard drives.",
  ]},

  {name:"Promethium", symbol:"Pm", clues:[
    "I am a rare earth metal.",
    "I am the second lightest element with no stable isotopes.",
    "I am sometimes used in luminous paint.",
    "I am used in atomic batteries where my beta-decay makes a current.",
  ]},

  {name:"Samarium", symbol:"Sm", clues:[
    "I am a rare earth metal.",
    "I am alloyed with cobalt to make magnets which are stable at high temperature.",
    "Together with neodymium, I am used in radiometric dating.",
    "I am used in Quadramet, an anti-cancer drug.",
    "I am used in control rods to absorb neutrons in nuclear reactors.",
  ]},

  {name:"Europium", symbol:"Eu", clues:[
    "I am a rare earth metal.",
    "I am the most reactive rare earth element.",
    "My oxide is used as a red phosphor in CRTs and LEDs.",
    "I can absorb more neutrons per atom than any other element.",
  ]},

  {name:"Gadolinium", symbol:"Gd", clues:[
    "I am a rare earth metal.",
    "Like other rare earths, I am a good absorber of neutrons.",
    "I'm silvery-white, malleable and ductile.",
    "I'm used as an emergency shutdown measure for some nuclear reactors.",
    "My compounds are used in green phosphors for CRTs.",
  ]},

  {name:"Terbium", symbol:"Tb", clues:[
    "I am a rare earth metal.",
    "I am named after the Swedish village where I was discovered.",
    "I am mostly used in green CRT phosphors.",
    "I am used in trichromatic lighting.",
    "My 159-isotope is the only stable one I have.",
  ]},

  {name:"Dysprosium", symbol:"Dy", clues:[
    "I am a rare earth metal.",
    "I am a soft, bright, silvery metal.",
    "I am named from a Greek word meaning \"difficult to get at\".",
    "I am used in radiation dosimeters.",
    "I can be used in hybrid electric vehicles, but there is a shortage of me.",
  ]},

  {name:"Holmium", symbol:"Ho", clues:[
    "I am a rare earth metal.",
    "I am named for the capital of Sweden.",
    "I have the highest magnetic moment of any naturally-occurring element.",
    "My oxide is yellow, but fluoresces bright orange-red under trichromatic light.",
    "I can colour glass yellow or red.",
  ]},

  {name:"Erbium", symbol:"Er", clues:[
    "I am a rare earth metal.",
    "I am named after the Swedish village where I was discovered.",
    "Adding my oxide to glass makes it pink.",
    "I am used in fibre optics to amplify the signal.",
  ]},

  {name:"Thulium", symbol:"Tm", clues:[
    "I am a rare earth metal.",
    "I am the rarest lanthanide (except for Promethium which has no stable isotopes).",
    "I am used as a radiation source in portable X-ray machines.",
    "I fluoresce blue under UV light, so I am used in Euro banknotes.",
  ]},

  {name:"Ytterbium", symbol:"Yb", clues:[
    "I am a rare earth metal.",
    "I am named after the Swedish village where I was discovered.",
    "I hold the atomic clock accuracy record: a second in over 10 billion years.",
    "I am used in stress gauges because my resistivity increases under stress.",
  ]},

  {name:"Lutetium", symbol:"Lu", clues:[
    "I am a rare earth metal.",
    "I am the last element in the lanthanide series.",
    "I am named for the Latin name of Paris.",
    "Until the 1950s, some scientists called me Cassiopium.",
    "I am very difficult to separate: only about 10 tonnes of me are produced each year.",
    "I am used as a catalyst in oil refineries.",
    "Along with hafnium, I am used in radiometric dating of meteorites.",
  ]},

  {name:"Hafnium", symbol:"Hf", clues:[
    "I am a transition metal.",
    "I am a lustrous grey metal similar to Zirconium.",
    "Controversy erupted over the possibility of a gamma-ray bomb made from one of my isomers.",
    "I am used in alloys, notably for making rocket nozzles.",
    "My powder can ignite spontaneously in air.",
  ]},

  {name:"Tantalum", symbol:"Ta", clues:[
    "I am a transition metal.",
    "My name comes from a Greek mythological character.",
    "I was discovered in 1802 by Anders Ekeberg.",
    "I am known for my resistance to acid corrosion.",
    "I am mostly mined in Australia.",
    "I am used to produce electrolytic capacitors.",
  ]},

  {name:"Tungsten", symbol:"W", clues:[
    "I am a transition metal.",
    "My name means \"heavy stone\".",
    "My old name is wolfram.",
    "I have the highest melting point of all elements.",
    "I am a hard, dense metal.",
    "One of my ores is called scheelite.",
    "I am used in incandescent light bulb filaments.",
    "I am the heaviest known element to be used by a living organism.",
    "I am used as ballast in race cars.",
    "I am used in darts and fishing lures.",
  ]},

  {name:"Rhenium", symbol:"Re", clues:[
    "I am a transition metal.",
    "In 1925, I was the last stable element to be discovered.",
    "I am very rare.",
    "I am mainly used in alloys and as a catalyst.",
    "My radioactive isotopes can be used to treat liver or pancreatic cancer.",
  ]},

  {name:"Osmium", symbol:"Os", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "I am one of the rarest elements on Earth.",
    "I am the densest naturally-occurring element.",
    "My oxide has been used to detect fingerprints.",
    "My alloys are very hard and are used in fountain pen nibs.",
  ]},

  {name:"Iridium", symbol:"Ir", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "I am the second densest element.",
    "I am one of the rarest elements on Earth.",
    "I am present in rock at the KT-boundary, attributed to an asteroid impact.",
    "My alloys are very hard and are used in fountain pen nibs.",
    "I am the most corrosion-resistant metal.",
    "I am part of the international prototype kilogram.",
  ]},

  {name:"Platinum", symbol:"Pt", clues:[
    "I am a transition metal.",
    "I am a noble metal.",
    "Most of the international prototype kilogram is me.",
    "My name means \"little silver\".",
    "Most commonly I am used as a catalyst.",
    "The Crown of Queen Elizabeth was made from me.",
  ]},

  {name:"Gold", symbol:"Au", clues:[
    "I am a transition metal.",
    "I am the noblest of the noble metals.",
    "I have been prized since ancient times.",
    "I am the most malleable of all metals.",
    "I have been used for centuries as currency.",
    "Ernest Rutherford shot alpha particles through me and deduced the structure of the atom.",
    "I am resistant to acids, but can be dissolved by aqua regia.",
    "I am used extensively in jewellery.",
    "I am used as a protective coating on astronauts' helmets.",
    "In 1848 I was found at Sutter's Mill, starting a rush to California.",
    "The US keeps a repository of me at Fort Knox in Kentucky.",
    "Wedding rings are made of me.",
  ]},

  {name:"Mercury", symbol:"Hg", clues:[
    "I am a transition metal.",
    "I am one of only two room-temperature liquids in the periodic table.",
    "I used to be used in thermometers.",
    "My old name is quicksilver.",
    "My ore is called cinnabar.",
    "I am used in dentistry for fillings.",
    "I am highly toxic - I used to drive hatters mad.",
    "People are concerned about the way I build up in predatory fish.",
    "I am used in CFLs and other fluorescent lights.",
    "I am used in tilt switches.",
  ]},

  {name:"Thallium", symbol:"Tl", clues:[
    "I am a so-called \"poor\" metal.",
    "I am very toxic - the so-called \"poisoner's poison\".",
    "I am a malleable grey metal that can be cut with a knife.",
    "My emission lines are bright green.",
    "My name means \"a green shoot\" in Greek.",
    "Prussian blue is administered as an antidote to me.",
    "Once I was widely used in rat poison.",
  ]},

  {name:"Lead", symbol:"Pb", clues:[
    "I am a so-called \"poor\" metal.",
    "I am the heaviest non-radioactive element.",
    "I am poisonous - a neurotoxin that accumulates in the body.",
    "My melting point is fairly low, making casting me easy.",
    "I am used in car batteries.",
    "I am commonly used in construction for roofing and cladding.",
    "I used to be used in paint pigments, but less so these days.",
    "I am used in glassmaking and ceramic glazes.",
  ]},

  {name:"Bismuth", symbol:"Bi", clues:[
    "I am a so-called \"poor\" metal.",
    "For a metal, I conduct heat very poorly.",
    "I am present in a well-known drug for treating stomach upset.",
    "I am alloyed with iron to make sprinkler systems.",
  ]},

  {name:"Polonium", symbol:"Po", clues:[
    "I am a metalloid.",
    "I was discovered by Pierre and Marie Curie in 1898.",
    "I am extremely toxic and was used to poison Alexander Litvinenko in 2006.",
    "I am present in tobacco smoke.",
    "I was a key ingredient of the detonator in the \"Fat Man\" plutonium bomb.",
  ]},

  {name:"Astatine", symbol:"At", clues:[
    "I am one of the halogens.",
    "I am vanishingly rare - less than a gram of me exists in the Earth's crust.",
    "All my isotopes have half-lives less than 12 hours.",
    "I exist only as short-lived products in the middle of a decay chain.",
    "I do have a use in radiotherapy, but I need to be used quickly.",
  ]},

  {name:"Radon", symbol:"Rn", clues:[
    "I am a noble gas.",
    "Areas with granite geology are known to harbour me, and I can build up in houses.",
    "I am a dense and radioactive gas.",
    "I am found in some mineral waters and hot springs.",
  ]},

  {name:"Francium", symbol:"Fr", clues:[
    "I am an alkali metal.",
    "I am vanishingly rare - there may be at most 30g of me in the Earth's crust.",
    "I am highly radioactive.",
    "My most stable isotope has a half-life of under 22 minutes.",
  ]},

  {name:"Radium", symbol:"Ra", clues:[
    "I am an alkaline earth metal.",
    "I was discovered by Pierre and Marie Curie in 1898.",
    "I am the heaviest alkaline earth metal.",
    "I used to be used in luminous paints and watch dials.",
    "Ernest Rutherford used me as an alpha source to probe the atomic structure of gold.",
  ]},

  {name:"Actinium", symbol:"Ac", clues:[
    "I am an actinide.",
    "I am a soft, silvery-white, radioactive metal.",
    "I am used in radiation therapy targeting cancer cells.",
    "Because I am rare, expensive and radioactive, I have no real industrial uses.",
  ]},

  {name:"Thorium", symbol:"Th", clues:[
    "I am an actinide.",
    "I'm named for the Norse god of thunder.",
    "I was once used in gas mantles.",
    "My oxide is used in heat-resistant ceramics.",
  ]},

  {name:"Protactinium", symbol:"Pa", clues:[
    "I am an actinide.",
    "I am one of the super-rare elements, so I am really expensive.",
    "I am radioactive and very toxic.",
    "I am sometimes used in radiometric dating of sediments.",
    "The UK Atomic Energy Authority produced a quantity of me in 1961.",
  ]},

  {name:"Uranium", symbol:"U", clues:[
    "I am an actinide.",
    "I am used for nuclear reactor fuel.",
    "I am used as fissile material in nuclear weapons.",
    "The \"Little Boy\" Hiroshima bomb used me.",
    "My oxide used to be used in red ceramic glazes, notably Fiestaware.",
    "One of my ores is known as pitchblende.",
    "I am used in \"depleted\" form in ammunition.",
    "I am the heaviest element found in nature before being synthesized in the lab.",
    "I am named for a planet.",
  ]},

  {name:"Neptunium", symbol:"Np", clues:[
    "I am an actinide.",
    "I am the first transuranic element.",
    "I am a decay product of Americium-241, so I might be in your smoke detector.",
    "I am named for a planet.",
  ]},

  {name:"Plutonium", symbol:"Pu", clues:[
    "I am an actinide.",
    "I am used as fissile material in nuclear weapons.",
    "I am named for a dwarf planet.",
    "I am the heaviest primordial element (formed before the Earth).",
    "The \"Fat Man\" bomb dropped on Nagasaki used me.",
    "The world's first nuclear explosion used me.",
    "I am highly toxic and radioactive metal.",
  ]},

  {name:"Americium", symbol:"Am", clues:[
    "I am an actinide.",
    "There is likely a minute quantity of me in your house, in your smoke detectors.",
    "I was first produced in 1944 at UC Berkeley.",
    "I am a soft silvery radioactive metal.",
    "I am the only synthetic element present in most households.",
  ]},

  {name:"Curium", symbol:"Cm", clues:[
    "I am an actinide.",
    "I am named after the husband-and-wife researchers of radioactivity.",
    "I am used as an alpha source for X-ray spectrometry in various rovers sent to Mars.",
    "I am present in nuclear fallout from weapons tests.",
    "I am present in spent nuclear fuel.",
  ]},

  {name:"Berkelium", symbol:"Bk", clues:[
    "I am an actinide.",
    "I was discovered in December 1949 at the UC Radiation Laboratory.",
    "I was named for the city and university where I was discovered.",
    "I am a soft, silvery-white, radioactive metal.",
    "I have no real uses outside of scientific research.",
  ]},

  {name:"Californium", symbol:"Cf", clues:[
    "I am an actinide.",
    "I am the heaviest element to occur naturally on Earth.",
    "I am used to start nuclear reactors.",
    "I am a strong emitter of neutrons.",
    "I am used in some radiotherapy applications.",
    "I am used as a neutron source in various detection instruments.",
  ]},

  {name:"Einsteinium", symbol:"Es", clues:[
    "I am an actinide.",
    "I am a soft silvery metal.",
    "I am the heaviest element that has had enough of it produced to see.",
    "I was discovered in the debris of the first hydrogen bomb explosion.",
    "I am named after probably the most famous scientist in the world.",
    "Because I have a short half-life, there are no applications for me outside research.",
    "I am a synthetic element.",
  ]},

  {name:"Fermium", symbol:"Fm", clues:[
    "I am an actinide.",
    "I am the heaviest element formed by neutron bombardment of lighter ones.",
    "I was dicovered in the debris of the first hydrogen bomb explosion.",
    "I am named after an Italian pioneer of nuclear physics.",
    "Because I have a short half-life, there are no applications for me outside research.",
    "I am a synthetic element.",
  ]},

  {name:"Mendelevium", symbol:"Md", clues:[
    "I am an actinide.",
    "I am named after the creator of the periodic table.",
    "My discovery was based on just 17 atoms.",
    "I was first made in 1955 at UC Berkeley.",
    "I am a synthetic element.",
  ]},

  {name:"Nobelium", symbol:"No", clues:[
    "I am an actinide.",
    "I am a synthetic element.",
    "My discovery was first announced by physicists working in Sweden in 1957.",
    "Scientists working in Dubna are credited with my discovery, in 1966.",
  ]},

  {name:"Lawrencium", symbol:"Lr", clues:[
    "I am an actinide.",
    "I am a synthetic element.",
    "My most stable isotope has a half-life of about 3.6 hours.",
    "I am named after the lab where I was first synthesized.",
  ]},

  {name:"Rutherfordium", symbol:"Rf", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "I am a synthetic element.",
    "I am named after an early nuclear physicist from New Zealand.",
    "My most stable isotope has a half-life of about 1.3 hours.",
  ]},

  {name:"Dubnium", symbol:"Db", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "I was first produced at the Flerov Laboratory of Nuclear Reactions.",
    "I am a synthetic element.",
    "I am named after the town where I was first made.",
    "My name was disputed by Soviet and US scientists.",
  ]},

  {name:"Seaborgium", symbol:"Sg", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "I am a synthetic element.",
    "My name generated controversy because I am named after a living scientist.",
    "My most stable isotope has a half-life of about 2 minutes.",
  ]},

  {name:"Bohrium", symbol:"Bh", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "I am a synthetic element.",
    "My most stable isotope has a half-life of about 61 seconds.",
    "I am named after a famous Danish nuclear physicist.",
  ]},

  {name:"Hassium", symbol:"Hs", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "I am a synthetic element.",
    "My most stable isotope has a half-life of about 10 seconds.",
    "A German team is officially credited with my discovery.",
  ]},

  {name:"Meitnerium", symbol:"Mt", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I am named after a discoverer of nuclear fission.",
    "I was first created in 1982 at the GSI Helmholtz Centre for Heavy Ion Research.",
  ]},

  {name:"Darmstadtium", symbol:"Ds", clues:[
    "I am a transactinide.",
    "I was first created in 1994 at the GSI Helmholtz Centre for Heavy Ion Research.",
    "I am named for the city where I was created.",
    "I am a synthetic element.",
  ]},

  {name:"Roentgenium", symbol:"Rg", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I was first created in 1994 at the GSI Helmholtz Centre for Heavy Ion Research.",
    "I am named for the discoverer of X-rays.",
  ]},

  {name:"Copernicium", symbol:"Cn", clues:[
    "I am a transactinide.",
    "I am a transition metal.",
    "My most stable isotope has a half-life of about 29 seconds.",
    "I am a synthetic element.",
    "I am named for a 15th century astronomer.",
  ]},

  {name:"Ununtrium", symbol:"Uut", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I have a formulaic placeholder name.",
    "My most stable isotope has a half-life of 20 seconds.",
    "I am the lightest element that doesn't yet have an official name.",
  ]},

  {name:"Flerovium", symbol:"Fl", clues:[
    "I am a transactinide.",
    "I got my name in May 2012.",
    "I am a synthetic element.",
    "About 80 atoms of me have been observed so far.",
    "I am predicted to be near the theorized island of stability.",
    "I am named after a research centre in Dubna, Russia.",
  ]},

  {name:"Ununpentium", symbol:"Uup", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I have a formulaic placeholder name.",
    "About 50 atoms of me have been observed so far.",
  ]},

  {name:"Livermorium", symbol:"Lv", clues:[
    "I am a transactinide.",
    "I got my name in May 2012.",
    "Scientists have only produced a few dozen atoms of me.",
    "I am a synthetic element.",
    "I am the heaviest element that has been given a real name.",
  ]},

  {name:"Ununseptium", symbol:"Uus", clues:[
    "I am a transactinide.",
    "I am a synthetic element.",
    "I have a formulaic placeholder name.",
    "My discovery was first announced in 2010.",
  ]},

  {name:"Ununoctium", symbol:"Uuo", clues:[
    "I am a transactinide.",
    "I am the heaviest element yet known.",
    "Scientists have only produced a few atoms of me.",
    "Not much is known about my properties.",
    "I am a synthetic element.",
    "I have a formulaic placeholder name.",
  ]},

];
