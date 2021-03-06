var elements =  [{number: 1, symbol: "H", name: "Hydrogen", mass: 1.008},
                {number: 2, symbol: "He", name: "Helium", mass: 4.0026},
                {number: 3, symbol: "Li", name: "Lithium", mass: 6.94},
                {number: 4, symbol: "Be", name: "Berylium", mass: 9.0122},
                {number: 5, symbol: "B", name: "Boron", mass: 10.81},
                {number: 6, symbol: "C", name: "Carbon", mass: 12.011},
                {number: 7, symbol: "N", name: "Nitrogen", mass: 14.007},
                {number: 8, symbol: "O", name: "Oxygen", mass: 15.999},
                {number: 9, symbol: "F", name: "Flourine", mass: 18.998},
                {number: 10, symbol: "Ne", name: "Neon", mass: 20.180 },
                {number: 11, symbol: "Na", name: "Sodium", mass: 22.990},
                {number: 12, symbol: "Mg", name: "Magnesium", mass: 24.305},
                {number: 13, symbol: "Al", name: "Aluminum", mass: 26.982},
                {number: 14, symbol: "Si", name: "Silicon", mass: 28.085},
                {number: 15, symbol: "P", name: "Phosphorus", mass: 30.974},
                {number: 16, symbol: "S", name: "Sulfur", mass: 32.05},
                {number: 17, symbol: "Cl", name: "Chlorine", mass: 35.45},
                {number: 18, symbol: "Ar", name: "Argon", mass: 39.945},
                {number: 19, symbol: "K", name: "Potassium", mass: 39.098},
                {number: 20, symbol: "Ca", name: "Calcium", mass: 40.078},
                {number: 21, symbol: "Sc", name: "Scandium", mass: 44.956},
                {number: 22, symbol: "Ti", name: "Titanium", mass: 47.867},
                {number: 23, symbol: "V", name: "Vanadium", mass: 50.943},
                {number: 24, symbol: "Cr", name: "Chromium", mass: 51.995},
                {number: 25, symbol: "Mn", name: "Manganese", mass: 54.938},
                {number: 26, symbol: "Fe", name: "Iron", mass: 55.845},
                {number: 27, symbol: "Co", name: "Cobalt", mass: 58.993},
                {number: 28, symbol: "Ni", name: "Nickel", mass: 58.693},
                {number: 29, symbol: "Cu", name: "Copper", mass: 63.546},
                {number: 30, symbol: "Zn", name: "Zinc", mass: 65.38},
                {number: 31, symbol: "Ga", name: "Gallium", mass: 69.723},
                {number: 32, symbol: "Ge", name: "Germanium", mass: 72.63},
                {number: 33, symbol: "As", name: "Arsenic", mass: 74.922},
                {number: 34, symbol: "Se", name: "Selenium", mass: 78.96},
                {number: 35, symbol: "Br", name: "Bromine", mass: 79.904},
                {number: 36, symbol: "Kr", name: "Krypton", mass: 83.798},
                {number: 37, symbol: "Rb", name: "Rubidium", mass: 85.468},
                {number: 38, symbol: "Sr", name: "Strontium", mass: 87.62},
                {number: 39, symbol: "Y", name: "Yttrium", mass: 88.906},
                {number: 40, symbol: "Zr", name: "Zirconium", mass: 91.224},
                {number: 41, symbol: "Nb", name: "Niobium", mass: 92.906},
                {number: 42, symbol: "Mo", name: "Molybdenum", mass: 95.96},
                {number: 43, symbol: "Tc", name: "Technetium", mass: "(97.91)"},
                {number: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07},
                {number: 45, symbol: "Rh", name: "Rhodium", mass: 102.91},
                {number: 46, symbol: "Pd", name: "Palladium", mass: 106.42},
                {number: 47, symbol: "Ag", name: "Silver", mass: 107.87},
                {number: 48, symbol: "Cd", name: "Cadmium", mass: 112.49},
                {number: 49, symbol: "In", name: "Indium", mass: 114.82},
                {number: 50, symbol: "Sn", name: "Tin", mass: 118.71},
                {number: 51, symbol: "Sb", name: "Antimony", mass: 121.76},
                {number: 52, symbol: "Te", name: "Tellurium", mass: 127.60},
                {number: 53, symbol: "I", name: "Iodine", mass: 126.90},
                {number: 54, symbol: "Xe", name: "Xenon", mass: 131.29},
                {number: 55, symbol: "Cs", name: "Caesium", mass: 1.008},
                {number: 56, symbol: "Ba", name: "Barium", mass: 1.008},
                {number: 57, symbol: "La", name: "Lanthanum", mass: 1.008},
                {number: 58, symbol: "Ce", name: "Cerium", mass: 140.116},
                {number: 59, symbol: "Pr", name: "Praseodymium", mass: 140.907},
                {number: 60, symbol: "Nd", name: "Neodynium", mass: 144.242},
                {number: 61, symbol: "Pm", name: "Promethium", mass: "(145)"},
                {number: 62, symbol: "Sm", name: "Samarium", mass: 150.36},
                {number: 63, symbol: "Eu", name: "Europium", mass: 151.964},
                {number: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25},
                {number: 65, symbol: "Tb", name: "Terbium", mass: 158.925},
                {number: 66, symbol: "Dy", name: "Dysprosium", mass: 162.500},
                {number: 67, symbol: "Ho", name: "Holmium", mass: 164.930},
                {number: 68, symbol: "Er", name: "Erbium", mass: 167.259},
                {number: 69, symbol: "Tm", name: "Thulium", mass: 168.934},
                {number: 70, symbol: "Yb", name: "Ytterbium", mass: 173.054},
                {number: 71, symbol: "Lu", name: "Lutetium", mass: 174.9668},
                {number: 72, symbol: "Hf", name: "Hafnium", mass: 178.49},
                {number: 73, symbol: "Ta", name: "Tantalum", mass: 180.947},
                {number: 74, symbol: "W", name: "Tungsten", mass: 183.84},
                {number: 75, symbol: "Re", name: "Rhenium", mass: 186.207},
                {number: 76, symbol: "Os", name: "Osmium", mass: 190.23},
                {number: 77, symbol: "Ir", name: "Iridium", mass: 192.217},
                {number: 78, symbol: "Pt", name: "Platinum", mass: 195.084},
                {number: 79, symbol: "Au", name: "Gold", mass: 196.966},
                {number: 80, symbol: "Hg", name: "Mercury", mass: 200.59},
                {number: 81, symbol: "Tl", name: "Thallium", mass: 204.38},
                {number: 82, symbol: "Pb", name: "Lead", mass: 207.2},
                {number: 83, symbol: "Bi", name: "Bismuth", mass: 208.980},
                {number: 84, symbol: "Po", name: "Polonium", mass: "(209)"},
                {number: 85, symbol: "At", name: "Astatine", mass: "(210)"},
                {number: 86, symbol: "Rn", name: "Radon", mass: "(222)"},
                {number: 87, symbol: "Fr", name: "Francium", mass: "(223"},
                {number: 88, symbol: "Ra", name: "Radium", mass: "(226)"},
                {number: 89, symbol: "Ac", name: "Actinium", mass: "(227)"},
                {number: 90, symbol: "Th", name: "Thorium", mass: 232.038},
                {number: 91, symbol: "Pa", name: "Protactinium", mass: 231.035},
                {number: 92, symbol: "U", name: "Uranium", mass: 238.028},
                {number: 93, symbol: "Np", name: "Neptunium", mass: "(237)"},
                {number: 94, symbol: "Pu", name: "Plutonium", mass: "(244)"},
                {number: 95, symbol: "Am", name: "Americium", mass: "(243)"},
                {number: 96, symbol: "Cm", name: "Curium", mass: "(247)"},
                {number: 97, symbol: "Bk", name: "Berkelium", mass: "(247)"},
                {number: 98, symbol: "Cf", name: "Californium", mass: "(251)"},
                {number: 99, symbol: "Es", name: "Einsteinium", mass: "(252)"},
                {number: 100, symbol: "Fm", name: "Fermium", mass: "(257)"},
                {number: 101, symbol: "Md", name: "Mendelevium", mass: "(258)"},
                {number: 102, symbol: "No", name: "Nobelium", mass: "(259)"},
                {number: 103, symbol: "Lr", name: "Lawrencium", mass: "(262)"},
                {number: 104, symbol: "Rf", name: "Rutherfordium", mass: "(267)"},
                {number: 105, symbol: "Db", name: "Dubnium", mass: "(268)"},
                {number: 106, symbol: "Sg", name: "Seaborgium", mass: "(271)"},
                {number: 107, symbol: "Bh", name: "Bohrium", mass: "(272)"},
                {number: 108, symbol: "Hs", name: "Hassium", mass: "(270)"},
                {number: 109, symbol: "Mt", name: "Meitnerium", mass: "(276)"},
                {number: 110, symbol: "Ds", name: "Darmstadtium", mass: "(281)"},
                {number: 111, symbol: "Rg", name: "Roentgenium", mass: "(280)"},
                {number: 112, symbol: "Cn", name: "Copernicium", mass: "(285)"},
                {number: 113, symbol: "Nh", name: "Nihonium", mass: "(284)"},
                {number: 114, symbol: "Fl", name: "Flerovium", mass: "(289)"},
                {number: 115, symbol: "Mc", name: "Moscovium", mass: "(288)"},
                {number: 116, symbol: "Lv", name: "Livermorium", mass: "(293)"},
                {number: 117, symbol: "Ts", name: "Tennessine", mass: "(294)"},
                {number: 118, symbol: "Og", name: "Oganesson", mass: "(294)"}];