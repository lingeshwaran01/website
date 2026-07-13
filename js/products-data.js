/* =========================================================
   YIXIN ALLOY — Product dataset
   - YIXIN_FORMS    : product forms (full-screen split sections)
   - YIXIN_FAMILIES : alloy families + every grade (source site)
   - YIXIN_PRODUCTS : detailed grades (chemical + mechanical tables)
   Nominal/typical values per AWS A5.14 / ASTM / manufacturer data.
   ========================================================= */

/* ---------- Product forms (full-screen split showcase) ---------- */
window.YIXIN_FORMS = [
  { name: "Welding Wire", image: "assets/img/products/nickel-welding-wire.jpg",
    desc: "Solid MIG &amp; TIG nickel alloy welding wires with tight diameter tolerance and excellent arc stability for high-integrity joining, cladding and overlay.",
    specs: ["0.8 – 6.0 mm diameter", "Spool · coil · drum", "Bright &amp; clean finish"] },
  { name: "Bars &amp; Rods", image: "assets/img/products/nickel-alloy-bar.jpg",
    desc: "Hot-rolled, forged and cold-drawn nickel alloy bars and ground rods for machining, fasteners and structural components in demanding service.",
    specs: ["Round · square · hex", "Forged &amp; cold-drawn", "Ground &amp; peeled options"] },
  { name: "Pipes &amp; Tubes", image: "assets/img/products/nickel-alloy-pipe.jpg",
    desc: "Seamless and welded nickel alloy pipes and tubes engineered for corrosion-resistant transport in chemical, marine and energy systems.",
    specs: ["Seamless &amp; welded", "ASTM / ASME dimensions", "Heat-exchanger tubing"] },
  { name: "Sheets &amp; Plates", image: "assets/img/products/nickel-alloy-sheet.jpg",
    desc: "Hot &amp; cold-rolled nickel alloy sheets and plates offering heat and corrosion resistance for vessels, fabrication and construction.",
    specs: ["0.5 – 50 mm thickness", "Hot &amp; cold rolled", "Pickled / bright annealed"] },
  { name: "Strips &amp; Coils", image: "assets/img/products/nickel-alloy-strip.jpg",
    desc: "Precision nickel alloy strip and coil with controlled thickness and edge condition for stamping, springs and precision components.",
    specs: ["Slit to width", "Controlled temper", "Bright / matte finish"] },
  { name: "Discs &amp; Forgings", image: "assets/img/products/nickel-alloy-disc.jpg",
    desc: "Forged discs and rings produced from vacuum-melted superalloys for turbine, aerospace and high-pressure rotating hardware.",
    specs: ["Forged discs &amp; rings", "Superalloy grades", "Full traceability"] }
];

/* ---------- Alloy families (every grade) ---------- */
window.YIXIN_FAMILIES = [
  {
    key: "nickel", name: "Pure Nickel", image: "assets/img/products/pure-nickel-wire-spool.jpg",
    tagline: "Commercially pure nickel",
    desc: "Commercially pure wrought nickel with outstanding resistance to caustic alkalis and excellent thermal/electrical conductivity.",
    grades: [
      { name: "Nickel 200", slug: "nickel-200" },
      { name: "Nickel 201", slug: "nickel-201" },
      { name: "Nickel 205", slug: "nickel-205" },
      { name: "Nickel 233", slug: "nickel-233" }
    ]
  },
  {
    key: "inconel", name: "Inconel", image: "assets/img/products/nickel-alloy-welding-wire.jpg",
    tagline: "Nickel-chromium superalloys",
    desc: "Nickel-chromium-based superalloys offering outstanding oxidation, corrosion and high-temperature strength for aerospace, chemical and power generation.",
    grades: [
      { name: "Inconel 600", slug: "inconel-600" },
      { name: "Inconel 601", slug: "inconel-601" },
      { name: "Inconel 617", slug: "inconel-617" },
      { name: "Inconel 625", slug: "inconel-625" },
      { name: "Inconel 718", slug: "inconel-718" },
      { name: "Inconel X-750", slug: "inconel-x750" },
      { name: "Inconel 693", slug: "inconel-693" },
      { name: "Inconel 706", slug: "inconel-706" },
      { name: "Inconel 725", slug: "inconel-725" }
    ]
  },
  {
    key: "monel", name: "Monel", image: "assets/img/products/nickel-alloy-rod.jpg",
    tagline: "Nickel-copper alloys",
    desc: "Nickel-copper alloys delivering high strength and exceptional resistance to seawater, hydrofluoric and sulphuric acids in reducing and oxidising media.",
    grades: [
      { name: "Monel 400", slug: "monel-400" },
      { name: "Monel K-500", slug: "monel-k500" }
    ]
  },
  {
    key: "hastelloy", name: "Hastelloy", image: "assets/img/products/nickel-alloy-coil-form.jpg",
    tagline: "Nickel-molybdenum alloys",
    desc: "Nickel-molybdenum-based alloys engineered for extreme corrosion resistance against oxidising and reducing agents, chloride pitting and crevice corrosion.",
    grades: [
      { name: "Hastelloy C-4", slug: "hastelloy-c4" },
      { name: "Hastelloy C-22", slug: "hastelloy-c22" },
      { name: "Hastelloy C-276", slug: "hastelloy-c276" },
      { name: "Hastelloy B / B-2", slug: "hastelloy-b2" },
      { name: "Hastelloy B-3", slug: "hastelloy-b3" },
      { name: "Hastelloy X", slug: "hastelloy-x" },
      { name: "Hastelloy C-2000", slug: "hastelloy-c2000" },
      { name: "Hastelloy G-3", slug: "hastelloy-g3" },
      { name: "Hastelloy G-30", slug: "hastelloy-g30" },
      { name: "Hastelloy G-35", slug: "hastelloy-g35" },
      { name: "Hastelloy N", slug: "hastelloy-n" },
      { name: "Hastelloy S", slug: "hastelloy-s" },
      { name: "Hastelloy W", slug: "hastelloy-w" }
    ]
  },
  {
    key: "incoloy", name: "Incoloy", image: "assets/img/products/nickel-alloy-pipe.jpg",
    tagline: "Nickel-iron-chromium alloys",
    desc: "Nickel-iron-chromium alloys combining strength with resistance to oxidation and carburisation at high temperature and to aqueous corrosion.",
    grades: [
      { name: "Incoloy 800", slug: "incoloy-800" },
      { name: "Incoloy 800H", slug: "incoloy-800h" },
      { name: "Incoloy 800HT", slug: "incoloy-800ht" },
      { name: "Incoloy 825", slug: "incoloy-825" },
      { name: "Incoloy A-286", slug: "incoloy-a286" }
    ]
  },
  {
    key: "welding", name: "Consumables ", image: "assets/img/products/nickel-welding-wire.jpg",
    tagline: "AWS-classified filler metals",
    desc: "Nickel-alloy filler metals classified to AWS A5.14 for welding and overlay — matched to base alloys for dissimilar joints and corrosion-resistant cladding.",
    grades: [
      { name: "ERNi-1", slug: "erni-1" },
      { name: "ERNiCr-3", slug: "ernicr-3" },
      { name: "ERNiCr-4", slug: "ernicr-4" },
      { name: "ERNiCrMo-2", slug: "ernicrmo-2" },
      { name: "ERNiCrMo-3", slug: "ernicrmo-3" },
      { name: "ERNiCrMo-4", slug: "ernicrmo-4" },
      { name: "ERNiCrMo-10", slug: "ernicrmo-10" },
      { name: "ERNiCrMo-13", slug: "ernicrmo-13" },
      { name: "ERNiCu-7", slug: "ernicu-7" },
      { name: "ERNiFeCr-2", slug: "ernifecr-2" },
      { name: "ERNiCrFe-3", slug: "ernicrfe-3" },
      { name: "ERNiCrFe-7", slug: "ernicrfe-7" },
      { name: "Custom Alloy Wire", slug: "custom-nickel" }
    ]
  }
];

/* ---------- Detailed grades ---------- */
window.YIXIN_PRODUCTS = {
  "nickel-200": {
    name: "Nickel 200", aws: "ERNi-1 (filler)", uns: "UNS N02200", family: "nickel",
    category: "Commercially Pure Nickel", image: "assets/img/products/pure-nickel-wire-spool.jpg", tag: "99% Pure Nickel",
    overview: "Nickel 200 is commercially pure (99.6%) wrought nickel offering excellent resistance to many corrosive media, especially hot caustic alkalis. It provides high electrical and thermal conductivity, low gas content and good mechanical properties from sub-zero to elevated temperatures.",
    standards: ["ASTM B160", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Pure nickel — wire, bar, sheet, strip", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.15 max"], ["Manganese (Mn)", "0.35 max"], ["Iron (Fe)", "0.40 max"], ["Sulphur (S)", "0.01 max"], ["Silicon (Si)", "0.35 max"], ["Copper (Cu)", "0.25 max"]],
    mechanical: [["Tensile Strength", "≥ 462 MPa"], ["Yield Strength (0.2%)", "≥ 148 MPa"], ["Elongation", "≥ 40 %"], ["Hardness", "≈ 75 HRB"], ["Density", "8.89 g/cm³"], ["Melting Range", "1435–1446 °C"]],
    applications: ["Caustic soda / alkali handling", "Chemical & food processing equipment", "Electronic components", "Aerospace & missile structures", "Synthetic-fibre production"]
  },
  "nickel-201": {
    name: "Nickel 201", aws: "ERNi-1 (low-C)", uns: "UNS N02201", family: "nickel",
    category: "Low-Carbon Pure Nickel", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Low Carbon",
    overview: "Nickel 201 is the low-carbon version of Nickel 200, designed for service above 315 °C. The reduced carbon content prevents graphitisation and intergranular embrittlement, ideal for high-temperature caustic and chemical environments.",
    standards: ["ASTM B160", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Low-carbon pure nickel — wire, bar, sheet", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.02 max"], ["Manganese (Mn)", "0.35 max"], ["Iron (Fe)", "0.40 max"], ["Sulphur (S)", "0.01 max"], ["Silicon (Si)", "0.35 max"], ["Copper (Cu)", "0.25 max"]],
    mechanical: [["Tensile Strength", "≥ 403 MPa"], ["Yield Strength (0.2%)", "≥ 103 MPa"], ["Elongation", "≥ 40 %"], ["Hardness", "≈ 65 HRB"], ["Density", "8.89 g/cm³"], ["Melting Range", "1435–1446 °C"]],
    applications: ["High-temperature caustic service > 315 °C", "Hydrogen handling equipment", "Chemical reactors & heat exchangers", "Salt-bath & furnace components"]
  },
  "inconel-600": {
    name: "Inconel 600", aws: "ERNiCr-3 (filler)", uns: "UNS N06600", family: "inconel",
    category: "Nickel-Chromium Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 600",
    overview: "Inconel 600 is a nickel-chromium-iron alloy with excellent resistance to oxidation and high-temperature corrosion. Non-magnetic and readily weldable, it resists chloride-ion stress-corrosion cracking and is used from cryogenic to 1100 °C service.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Fe alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "72.0 min"], ["Chromium (Cr)", "14.0–17.0"], ["Iron (Fe)", "6.0–10.0"], ["Manganese (Mn)", "1.0 max"], ["Carbon (C)", "0.15 max"], ["Copper (Cu)", "0.5 max"], ["Silicon (Si)", "0.5 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "8.47 g/cm³"]],
    applications: ["Furnace & heat-treatment components", "Chemical & food processing", "Nuclear steam generators", "High-temperature gas handling"]
  },
  "inconel-601": {
    name: "Inconel 601", aws: "N/A", uns: "UNS N06601", family: "inconel",
    category: "Nickel-Chromium Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 601",
    overview: "Inconel 601 is a nickel-chromium alloy with an aluminium addition that delivers outstanding resistance to high-temperature oxidation and a tenacious, spalling-resistant oxide scale up to 1200 °C.",
    standards: ["ASTM B166", "ASME SB168", "AWS A5.14"],
    classification: "Ni-Cr-Fe-Al alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0–63.0"], ["Chromium (Cr)", "21.0–25.0"], ["Iron (Fe)", "Balance"], ["Aluminium (Al)", "1.0–1.7"], ["Manganese (Mn)", "1.0 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Yield Strength (0.2%)", "≥ 205 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1200 °C"], ["Density", "8.11 g/cm³"]],
    applications: ["Industrial furnace muffles & retorts", "Thermal-processing equipment", "Petrochemical heaters", "Gas-turbine combustion hardware"]
  },
  "inconel-617": {
    name: "Inconel 617", aws:"N/A", uns: "UNS N06617", family: "inconel",
    category: "Ni-Cr-Co-Mo Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 617",
    overview: "Inconel 617 is a nickel-chromium-cobalt-molybdenum alloy with an exceptional combination of high-temperature strength and oxidation resistance, ideal for gas-turbine and advanced energy applications.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Co-Mo alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "44.5 min"], ["Chromium (Cr)", "20.0–24.0"], ["Cobalt (Co)", "10.0–15.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Aluminium (Al)", "0.8–1.5"], ["Carbon (C)", "0.05–0.15"]],
    mechanical: [["Tensile Strength", "≥ 580 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 35 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "8.36 g/cm³"]],
    applications: ["Gas-turbine combustors", "Advanced power generation", "Petrochemical reformers", "High-temperature ducting"]
  },
  "inconel-625": {
    name: "Inconel 625", aws: "ERNiCrMo-3", uns: "UNS N06625", family: "inconel",
    category: "Nickel-Chromium-Molybdenum Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 625 · ERNiCrMo-3",
    overview: "ERNiCrMo-3 (Alloy 625) is a versatile Ni-Cr-Mo alloy delivering outstanding resistance to pitting, crevice corrosion and oxidising/reducing acids, with high strength from cryogenic to elevated temperatures. Widely supplied as welding wire and for corrosion-resistant overlay.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "NACE MR0175"],
    classification: "Ni-Cr-Mo alloy — wire, bar, pipe, sheet", diameters: ["0.9", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0 min"], ["Chromium (Cr)", "20.0–23.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Niobium+Ta (Nb+Ta)", "3.15–4.15"], ["Iron (Fe)", "5.0 max"], ["Cobalt (Co)", "1.0 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength (0.2%)", "≥ 460 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1000 °C"], ["Density", "8.44 g/cm³"]],
    applications: ["Oil & gas sour-service piping", "Seawater & marine systems", "Flue-gas desulphurisation", "Chemical reactors & heat exchangers", "9% Ni LNG tank welding"]
  },
  "inconel-718": {
    name: "Inconel 718", aws: "ERNiFeCr-2", uns: "UNS N07718", family: "inconel",
    category: "Precipitation-Hardening Superalloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 718 · ERNiFeCr-2",
    overview: "Alloy 718 is a precipitation-hardenable nickel-iron-chromium superalloy providing exceptional strength up to 700 °C with good weldability. It is the benchmark for aero-engine hot-section components and high-pressure gas-turbine hardware.",
    standards: ["AWS A5.14", "AMS 5832", "ASME SFA-5.14"],
    classification: "Ni-Fe-Cr PH superalloy — wire, bar, disc", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "50.0–55.0"], ["Chromium (Cr)", "17.0–21.0"], ["Iron (Fe)", "Balance"], ["Niobium+Ta (Nb+Ta)", "4.75–5.50"], ["Molybdenum (Mo)", "2.8–3.3"], ["Titanium (Ti)", "0.65–1.15"], ["Aluminium (Al)", "0.20–0.80"]],
    mechanical: [["Tensile (aged)", "≥ 1240 MPa"], ["Yield (0.2%, aged)", "≥ 1030 MPa"], ["Elongation", "≥ 12 %"], ["Service Temp.", "−250 to 700 °C"], ["Density", "8.19 g/cm³"]],
    applications: ["Aircraft & gas-turbine engines", "Turbine discs, blades & casings", "Rocket & cryogenic hardware", "High-pressure fasteners", "Oil & gas downhole tools"]
  },

  "inconel-690": {
    name: "Inconel 690", aws: "ERNiCrFe-7", uns: "UNS N06690", family: "inconel",
    category: "High-Chromium Ni-Cr Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Alloy 690",
    overview: "Inconel 690 is a high-chromium nickel alloy with outstanding resistance to oxidising acids and stress-corrosion cracking, the material of choice for nuclear steam-generator tubing.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Fe alloy — wire, tube, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0 min"], ["Chromium (Cr)", "27.0–31.0"], ["Iron (Fe)", "7.0–11.0"], ["Carbon (C)", "0.05 max"], ["Manganese (Mn)", "0.5 max"], ["Copper (Cu)", "0.5 max"]],
    mechanical: [["Tensile Strength", "≥ 586 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "8.19 g/cm³"]],
    applications: ["Nuclear steam-generator tubing", "Nitric-acid service", "Reprocessing equipment", "High-temperature corrosion"]
  },
  "inconel-82": {
    name: "Inconel 82 Welding Wire", aws: "ERNiCr-3", uns: "UNS N06082", family: "welding",
    category: "Nickel-Chromium Filler", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 82 · ERNiCr-3",
    overview: "ERNiCr-3 (Alloy 82) is a nickel-chromium filler wire for welding Inconel 600/601, dissimilar joints between nickel alloys, carbon steels and stainless steels, and for cladding — providing excellent high-temperature strength, oxidation resistance and crack-free welds.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "ASME Section IX"],
    classification: "Ni-Cr solid welding wire (MIG / TIG / SAW)", diameters: ["0.9", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "67.0 min"], ["Chromium (Cr)", "18.0–22.0"], ["Manganese (Mn)", "2.5–3.5"], ["Niobium+Ta (Nb+Ta)", "2.0–3.0"], ["Iron (Fe)", "3.0 max"], ["Titanium (Ti)", "0.75 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 600 MPa"], ["Yield Strength (0.2%)", "≥ 400 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1150 °C"], ["Density", "8.30 g/cm³"]],
    applications: ["Welding Inconel 600 / 601 / 690", "Dissimilar metal joints", "High-temperature furnace parts", "Overlay & weld cladding", "Cryogenic LNG structures"]
  },
  "monel-400": {
    name: "Monel 400", aws: "ERNiCu-7", uns: "UNS N04400", family: "monel",
    category: "Nickel-Copper Alloy", image: "assets/img/products/nickel-alloy-rod.jpg", tag: "Alloy 400 · ERNiCu-7",
    overview: "Monel 400 is a nickel-copper alloy achieving high strength and toughness through cold working, with exceptional resistance to seawater, hydrofluoric, sulphuric and hydrochloric acids under reducing conditions. It does not become brittle at sub-zero temperatures.",
    standards: ["ASTM B164", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Ni-Cu alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "63.0 min"], ["Copper (Cu)", "28.0–34.0"], ["Iron (Fe)", "2.5 max"], ["Manganese (Mn)", "2.0 max"], ["Carbon (C)", "0.3 max"], ["Silicon (Si)", "0.5 max"], ["Sulphur (S)", "0.024 max"]],
    mechanical: [["Tensile Strength", "≥ 480 MPa"], ["Yield Strength (0.2%)", "≥ 170 MPa"], ["Elongation", "≥ 30 %"], ["Hardness", "≈ 85 HRB"], ["Density", "8.80 g/cm³"], ["Melting Range", "1300–1350 °C"]],
    applications: ["Marine & seawater equipment", "Hydrofluoric acid service", "Ship propeller shafts & pumps", "Valves, fasteners & fittings", "Chemical transport vessels"]
  },
  "monel-k500": {
    name: "Monel K-500", aws: "N/A", uns: "UNS N05500", family: "monel",
    category: "Precipitation-Hardening Ni-Cu Alloy", image: "assets/img/products/nickel-alloy-rod.jpg", tag: "Alloy K-500",
    overview: "Monel K-500 is an age-hardenable nickel-copper alloy combining the corrosion resistance of Monel 400 with greater strength and hardness through additions of aluminium and titanium — ideal for pump shafts and fasteners in marine service.",
    standards: ["ASTM B865", "AMS 4676", "QQ-N-286"],
    classification: "Ni-Cu PH alloy — bar, wire", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "63.0 min"], ["Copper (Cu)", "27.0–33.0"], ["Aluminium (Al)", "2.30–3.15"], ["Titanium (Ti)", "0.35–0.85"], ["Iron (Fe)", "2.0 max"], ["Manganese (Mn)", "1.5 max"], ["Carbon (C)", "0.25 max"]],
    mechanical: [["Tensile (aged)", "≥ 965 MPa"], ["Yield (0.2%, aged)", "≥ 690 MPa"], ["Elongation", "≥ 20 %"], ["Hardness", "≈ 27 HRC"], ["Density", "8.44 g/cm³"]],
    applications: ["Marine pump & propeller shafts", "Oil & gas fasteners", "Valve & pump components", "Non-magnetic hardware"]
  },
  "hastelloy-c276": {
    name: "Hastelloy C-276", aws: "ERNiCrMo-4", uns: "UNS N10276", family: "hastelloy",
    category: "Ni-Mo-Cr-W Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "C-276 · ERNiCrMo-4",
    overview: "ERNiCrMo-4 (Hastelloy C-276) is a nickel-molybdenum-chromium-tungsten alloy with outstanding resistance to a wide range of aggressive chemicals including wet chlorine, hypochlorite and mixed acids. Low carbon and silicon minimise grain-boundary precipitation in the weld zone.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "NACE MR0175"],
    classification: "Ni-Mo-Cr-W alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "15.0–17.0"], ["Chromium (Cr)", "14.5–16.5"], ["Tungsten (W)", "3.0–4.5"], ["Iron (Fe)", "4.0–7.0"], ["Cobalt (Co)", "2.5 max"], ["Carbon (C)", "0.02 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength (0.2%)", "≥ 355 MPa"], ["Elongation", "≥ 40 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "8.89 g/cm³"]],
    applications: ["Flue-gas desulphurisation scrubbers", "Pulp & paper bleaching", "Pharmaceutical & acid reactors", "Sour gas & offshore wells", "Pollution-control equipment"]
  },
  "hastelloy-c22": {
    name: "Hastelloy C-22", aws: "ERNiCrMo-10", uns: "UNS N06022", family: "hastelloy",
    category: "Ni-Cr-Mo-W Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "C-22 · ERNiCrMo-10",
    overview: "Hastelloy C-22 is a versatile nickel-chromium-molybdenum-tungsten alloy with superior resistance to pitting, crevice corrosion and stress-corrosion cracking, outperforming many alloys in both oxidising and reducing media. The family also includes C-4, C-2000, G-3, G-30 and G-35 grades.",
    standards: ["AWS A5.14", "ASTM B575", "NACE MR0175"],
    classification: "Ni-Cr-Mo-W alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.0–22.5"], ["Molybdenum (Mo)", "12.5–14.5"], ["Tungsten (W)", "2.5–3.5"], ["Iron (Fe)", "2.0–6.0"], ["Cobalt (Co)", "2.5 max"], ["Carbon (C)", "0.015 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength (0.2%)", "≥ 310 MPa"], ["Elongation", "≥ 45 %"], ["Service Temp.", "up to 1040 °C"], ["Density", "8.69 g/cm³"]],
    applications: ["Chemical-process equipment", "Flue-gas desulphurisation", "Pharmaceutical reactors", "Acid production & handling"]
  },
  "hastelloy-b2": {
    name: "Hastelloy B-2", aws: "ERNiMo-7", uns: "UNS N10665", family: "hastelloy",
    category: "Nickel-Molybdenum Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "B-2 · ERNiMo-7",
    overview: "Hastelloy B / B-2 / B-3 are nickel-molybdenum alloys offering outstanding resistance to reducing acids such as hydrochloric acid at all concentrations and temperatures, with low carbon and silicon for weldability. Hastelloy N is included for molten-salt service.",
    standards: ["AWS A5.14", "ASTM B335", "NACE MR0175"],
    classification: "Ni-Mo alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "26.0–30.0"], ["Iron (Fe)", "2.0 max"], ["Chromium (Cr)", "1.0 max"], ["Cobalt (Co)", "1.0 max"], ["Carbon (C)", "0.02 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength (0.2%)", "≥ 350 MPa"], ["Elongation", "≥ 40 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "9.22 g/cm³"]],
    applications: ["Hydrochloric acid service", "Reducing-acid reactors", "Sulphuric & phosphoric acid", "Chemical process vessels"]
  },
  "hastelloy-x": {
    name: "Hastelloy X", aws: "ERNiCrMo-2", uns: "UNS N06002", family: "hastelloy",
    category: "Ni-Cr-Fe-Mo Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Alloy X · ERNiCrMo-2",
    overview: "Hastelloy X is a nickel-chromium-iron-molybdenum alloy with an exceptional combination of oxidation resistance, fabricability and high-temperature strength, widely used in gas-turbine combustion zones. Hastelloy S and W are also supplied for specialised high-temperature and weld-filler use.",
    standards: ["AWS A5.14", "AMS 5798", "ASTM B435"],
    classification: "Ni-Cr-Fe-Mo alloy — wire, sheet, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.5–23.0"], ["Iron (Fe)", "17.0–20.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Cobalt (Co)", "0.5–2.5"], ["Tungsten (W)", "0.2–1.0"], ["Carbon (C)", "0.05–0.15"]],
    mechanical: [["Tensile Strength", "≥ 655 MPa"], ["Yield Strength (0.2%)", "≥ 275 MPa"], ["Elongation", "≥ 35 %"], ["Service Temp.", "up to 1200 °C"], ["Density", "8.22 g/cm³"]],
    applications: ["Gas-turbine combustors & transition ducts", "Industrial furnace components", "Petrochemical & high-temperature", "Aerospace afterburner parts"]
  },
  "incoloy-800": {
    name: "Incoloy 800 / 800H / 800HT", aws: "ERNiCr-3 (filler)", uns: "UNS N08800 / N08810 / N08811", family: "incoloy",
    category: "Ni-Fe-Cr Alloy", image: "assets/img/products/nickel-alloy-pipe.jpg", tag: "Alloy 800 Series",
    overview: "Incoloy 800 series are nickel-iron-chromium alloys with excellent resistance to oxidation and carburisation at elevated temperatures. The 800H/800HT variants offer enhanced creep-rupture strength for sustained high-temperature service; A-286 is included as a PH grade.",
    standards: ["ASTM B408", "ASME SB408", "AWS A5.14"],
    classification: "Ni-Fe-Cr alloy — pipe, tube, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "30.0–35.0"], ["Iron (Fe)", "39.5 min"], ["Chromium (Cr)", "19.0–23.0"], ["Aluminium (Al)", "0.15–0.60"], ["Titanium (Ti)", "0.15–0.60"], ["Carbon (C)", "0.05–0.10"]],
    mechanical: [["Tensile Strength", "≥ 520 MPa"], ["Yield Strength (0.2%)", "≥ 205 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "7.94 g/cm³"]],
    applications: ["Process heaters & furnace tubing", "Steam superheaters", "Petrochemical reformers", "Heat-treatment equipment"]
  },
  "incoloy-825": {
    name: "Incoloy 825", aws: "ERNiFeCr-1", uns: "UNS N08825", family: "incoloy",
    category: "Ni-Fe-Cr-Mo-Cu Alloy", image: "assets/img/products/nickel-alloy-pipe.jpg", tag: "Alloy 825",
    overview: "Incoloy 825 is a nickel-iron-chromium alloy with molybdenum and copper additions giving exceptional resistance to both reducing and oxidising acids, stress-corrosion cracking and localised pitting/crevice corrosion. Incoloy 925 and 020 extend the family for higher strength and sulphuric-acid service.",
    standards: ["ASTM B425", "ASME SB425", "AWS A5.14"],
    classification: "Ni-Fe-Cr-Mo-Cu alloy — wire, pipe, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "38.0–46.0"], ["Iron (Fe)", "22.0 min"], ["Chromium (Cr)", "19.5–23.5"], ["Molybdenum (Mo)", "2.5–3.5"], ["Copper (Cu)", "1.5–3.0"], ["Titanium (Ti)", "0.6–1.2"], ["Carbon (C)", "0.05 max"]],
    mechanical: [["Tensile Strength", "≥ 586 MPa"], ["Yield Strength (0.2%)", "≥ 235 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 540 °C"], ["Density", "8.14 g/cm³"]],
    applications: ["Sulphuric & phosphoric acid plants", "Oil & gas sour-service", "Pickling equipment", "Nuclear fuel reprocessing"]
  },
  "custom-nickel": {
    name: "Custom Nickel Alloy Wires", aws: "Per specification", uns: "Various", family: "welding",
    category: "Made-to-Order Special Alloys", image: "assets/img/products/nickel-alloy-rod.jpg", tag: "Made to Order",
    overview: "Beyond our standard range we produce bespoke nickel and superalloy products — Nimonic, Incoloy, Inconel X-750, precision and corrosion-resistant grades — manufactured to your exact chemistry, diameter, finish and packaging using vacuum induction melting and controlled processing.",
    standards: ["ASTM", "AMS", "AWS", "DIN", "JIS", "Customer-specific"],
    classification: "Custom chemistry & dimension", diameters: ["0.3 – 6.0", "Custom"],
    chemistry: [["Base", "Ni / Ni-Cr / Ni-Cu / Ni-Mo"], ["Chemistry", "Tailored to specification"], ["Purity", "Vacuum-induction-melted"], ["Tolerance", "Per AMS / ASTM / customer"]],
    mechanical: [["Properties", "Engineered to application"], ["Finish", "Bright / matte / cleaned"], ["Packaging", "Spools · Coils · Drums"], ["Certification", "Full MTC supplied"]],
    applications: ["Military & defence equipment", "Aerospace specialty components", "New-energy & nuclear hardware", "R&D & prototype alloys", "OEM private-label supply"]
  },
  "nickel-205": {
    name: "Nickel 205", aws: "N/A", uns: "UNS N02205", family: "nickel",
    category: "Commercially Pure Nickel", image: "assets/img/products/pure-nickel-wire-spool.jpg", tag: "Electronic Grade Nickel",
    overview: "Nickel 205 is a pure wrought nickel with controlled additions of magnesium and titanium. It is specifically designed for electrical and electronic applications where high purity and specific emission characteristics are required.",
    standards: ["ASTM F9"],
    classification: "Pure nickel — wire, strip", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.15 max"], ["Manganese (Mn)", "0.35 max"], ["Iron (Fe)", "0.20 max"], ["Magnesium (Mg)", "0.01-0.08"], ["Titanium (Ti)", "0.01-0.05"], ["Copper (Cu)", "0.15 max"]],
    mechanical: [["Tensile Strength", "≥ 415 MPa"], ["Yield Strength", "≥ 105 MPa"], ["Elongation", "≥ 40 %"], ["Density", "8.89 g/cm³"]],
    applications: ["Vacuum tube components", "Electronic pins and terminals", "Lead wires", "Transistor enclosures"]
  },
  "nickel-233": {
    name: "Nickel 233", aws: "N/A", uns: "UNS N02233", family: "nickel",
    category: "Commercially Pure Nickel", image: "assets/img/products/pure-nickel-wire-spool.jpg", tag: "Electronic Grade",
    overview: "Nickel 233 is a commercially pure nickel grade engineered for the electronics industry, offering excellent resistance to corrosion and high thermal and electrical conductivity.",
    standards: ["ASTM F1", "ASTM F3"],
    classification: "Pure nickel — wire, bar, strip", diameters: ["0.8", "1.0", "1.2", "1.6", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.10 max"], ["Manganese (Mn)", "0.30 max"], ["Iron (Fe)", "0.10 max"], ["Magnesium (Mg)", "0.01-0.10"], ["Titanium (Ti)", "0.01-0.05"]],
    mechanical: [["Tensile Strength", "≥ 400 MPa"], ["Yield Strength", "≥ 100 MPa"], ["Elongation", "≥ 35 %"], ["Density", "8.89 g/cm³"]],
    applications: ["Electronic tubes", "Battery mesh", "Cathode shanks", "Electrical contacts"]
  },
  "inconel-x750": {
    name: "Inconel X-750", aws: "N/A", uns: "UNS N07750", family: "inconel",
    category: "Precipitation-Hardenable Superalloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "High Strength to 1300°F",
    overview: "Inconel X-750 is a precipitation-hardenable nickel-chromium alloy used for its corrosion and oxidation resistance and high strength at temperatures up to 1300°F (700°C).",
    standards: ["ASTM B637", "AMS 5667"],
    classification: "Superalloy — wire, bar, sheet", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "70.0 min"], ["Chromium (Cr)", "14.0 - 17.0"], ["Iron (Fe)", "5.0 - 9.0"], ["Titanium (Ti)", "2.25 - 2.75"], ["Aluminum (Al)", "0.40 - 1.00"], ["Niobium (Nb)", "0.70 - 1.20"]],
    mechanical: [["Tensile Strength", "≥ 1137 MPa"], ["Yield Strength", "≥ 758 MPa"], ["Elongation", "≥ 20 %"], ["Density", "8.28 g/cm³"]],
    applications: ["Gas turbines", "Rocket engine thrust chambers", "Nuclear reactors", "Springs and fasteners"]
  },
  "inconel-693": {
    name: "Inconel 693", aws: "N/A", uns: "UNS N06693", family: "inconel",
    category: "Nickel-Chromium-Aluminum Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Metal Dusting Resistant",
    overview: "Inconel 693 offers unprecedented resistance to metal dusting and high-temperature corrosion, thanks to its high chromium and aluminum content.",
    standards: ["ASTM B166", "ASME Code Case 2629"],
    classification: "Superalloy — bar, wire, tube", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "27.0 - 31.0"], ["Aluminum (Al)", "2.5 - 4.0"], ["Iron (Fe)", "2.5 - 6.0"], ["Niobium (Nb)", "0.5 - 2.5"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength", "≥ 275 MPa"], ["Elongation", "≥ 30 %"], ["Density", "7.7 g/cm³"]],
    applications: ["Syngas production", "Reformer tubes", "Petrochemical processing", "Metal dusting environments"]
  },
  "inconel-706": {
    name: "Inconel 706", aws: "N/A", uns: "UNS N09706", family: "inconel",
    category: "Nickel-Iron-Chromium Alloy", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "High Machinability",
    overview: "Inconel 706 is a precipitation-hardenable alloy that provides high yield strength and excellent machinability, similar to Alloy 718 but easier to fabricate.",
    standards: ["AMS 5701", "AMS 5702"],
    classification: "Superalloy — forging, bar", diameters: ["1.2", "1.6", "2.4", "3.2", "Custom"],
    chemistry: [["Nickel (Ni)", "39.0 - 44.0"], ["Iron (Fe)", "Balance"], ["Chromium (Cr)", "14.5 - 17.5"], ["Niobium (Nb)", "2.5 - 3.3"], ["Titanium (Ti)", "1.5 - 2.0"]],
    mechanical: [["Tensile Strength", "≥ 1034 MPa"], ["Yield Strength", "≥ 862 MPa"], ["Elongation", "≥ 15 %"], ["Density", "8.08 g/cm³"]],
    applications: ["Gas turbine discs", "Shafts and cases", "Aerospace components"]
  },
  "inconel-725": {
    name: "Inconel 725", aws: "N/A", uns: "UNS N07725", family: "inconel",
    category: "Precipitation-Hardenable Ni-Cr-Mo", image: "assets/img/products/nickel-alloy-welding-wire.jpg", tag: "Age-Hardenable 625",
    overview: "Inconel 725 is a nickel-chromium-molybdenum-niobium alloy that is highly corrosion-resistant and can be age-hardened for extremely high strength.",
    standards: ["ASTM B805", "NACE MR0175"],
    classification: "Superalloy — bar, tube", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "55.0 - 59.0"], ["Chromium (Cr)", "19.0 - 22.5"], ["Molybdenum (Mo)", "7.0 - 9.5"], ["Niobium (Nb)", "2.75 - 4.0"], ["Titanium (Ti)", "1.0 - 1.7"]],
    mechanical: [["Tensile Strength", "≥ 1150 MPa"], ["Yield Strength", "≥ 827 MPa"], ["Elongation", "≥ 20 %"], ["Density", "8.31 g/cm³"]],
    applications: ["Sour gas well components", "Marine fasteners", "High-strength hangers", "Subsea equipment"]
  },

  "hastelloy-c4": {
    name: "Hastelloy C-4", aws: "ERNiCrMo-7 (filler)", uns: "UNS N06455", family: "hastelloy",
    category: "Nickel-Chromium-Molybdenum", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "High Stability Alloy",
    overview: "Hastelloy C-4 has outstanding high-temperature stability, resisting grain-boundary precipitate formation in the weld heat-affected zone, making it suitable for most chemical process applications in the as-welded condition.",
    standards: ["ASTM B574", "ASTM B575"],
    classification: "Corrosion alloy — wire, bar, sheet", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "14.0 - 18.0"], ["Molybdenum (Mo)", "14.0 - 17.0"], ["Iron (Fe)", "3.0 max"], ["Titanium (Ti)", "0.7 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength", "≥ 275 MPa"], ["Elongation", "≥ 40 %"], ["Density", "8.64 g/cm³"]],
    applications: ["Chemical processing", "Flue gas desulfurization", "Waste treatment", "Organic chloride production"]
  },

  "hastelloy-b3": {
    name: "Hastelloy B-3", aws: "ERNiMo-10", uns: "UNS N10675", family: "hastelloy",
    category: "Advanced Ni-Mo Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Improved Stability B-2",
    overview: "Hastelloy B-3 alloy has excellent resistance to hydrochloric acid at all concentrations and temperatures, with improved structural stability over B-2, preventing cracking during fabrication.",
    standards: ["ASTM B335", "ASTM B333"],
    classification: "Corrosion alloy — wire, bar, plate", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "65.0 min"], ["Molybdenum (Mo)", "28.5 - 31.5"], ["Iron (Fe)", "1.5 max"], ["Chromium (Cr)", "1.5 max"], ["Manganese (Mn)", "3.0 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength", "≥ 350 MPa"], ["Elongation", "≥ 40 %"], ["Density", "9.22 g/cm³"]],
    applications: ["Vacuum furnaces", "Chemical processing", "Reducing acid handling"]
  },
  "hastelloy-c2000": {
    name: "Hastelloy C-2000", aws: "ERNiCrMo-17", uns: "UNS N06200", family: "hastelloy",
    category: "Ni-Cr-Mo-Cu Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Expanded Corrosion Range",
    overview: "Hastelloy C-2000 features the deliberate addition of copper to the Ni-Cr-Mo system, offering greatly enhanced resistance to sulfuric acid while maintaining exceptional resistance to oxidizing media.",
    standards: ["ASTM B574", "ASTM B575"],
    classification: "Corrosion alloy — wire, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "23.0"], ["Molybdenum (Mo)", "16.0"], ["Copper (Cu)", "1.6"], ["Iron (Fe)", "3.0 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength", "≥ 310 MPa"], ["Elongation", "≥ 45 %"], ["Density", "8.50 g/cm³"]],
    applications: ["Reactors", "Heat exchangers", "Columns", "Piping in chemical plants"]
  },
  "hastelloy-g3": {
    name: "Hastelloy G-3", aws: "ERNiCrMo-9", uns: "UNS N06985", family: "hastelloy",
    category: "Ni-Cr-Fe-Mo-Cu Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Phosphoric Acid Resistance",
    overview: "Hastelloy G-3 is a nickel-chromium-iron alloy with additions of molybdenum and copper, known for its excellent resistance to localized corrosion and stress corrosion cracking in mixed acids.",
    standards: ["ASTM B581", "ASTM B582"],
    classification: "Corrosion alloy — wire, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "21.0 - 23.5"], ["Iron (Fe)", "18.0 - 21.0"], ["Molybdenum (Mo)", "6.0 - 8.0"], ["Copper (Cu)", "1.5 - 2.5"]],
    mechanical: [["Tensile Strength", "≥ 620 MPa"], ["Yield Strength", "≥ 240 MPa"], ["Elongation", "≥ 40 %"], ["Density", "8.30 g/cm³"]],
    applications: ["Phosphoric acid production", "Sulfuric acid systems", "Agrochemicals"]
  },
  "hastelloy-g30": {
    name: "Hastelloy G-30", aws: "ERNiCrMo-11", uns: "UNS N06030", family: "hastelloy",
    category: "High-Chromium Ni Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Commercial Phosphoric Acid",
    overview: "Hastelloy G-30 is a high-chromium nickel-base alloy that provides superior corrosion resistance over most other nickel and iron-base alloys in highly oxidizing environments, particularly commercial phosphoric acid.",
    standards: ["ASTM B581", "ASTM B582"],
    classification: "Corrosion alloy — wire, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "28.0 - 31.5"], ["Iron (Fe)", "13.0 - 17.0"], ["Molybdenum (Mo)", "4.0 - 6.0"], ["Copper (Cu)", "1.0 - 2.4"]],
    mechanical: [["Tensile Strength", "≥ 586 MPa"], ["Yield Strength", "≥ 241 MPa"], ["Elongation", "≥ 30 %"], ["Density", "8.22 g/cm³"]],
    applications: ["Fertilizer manufacturing", "Nuclear fuel reprocessing", "Mining processing"]
  },
  "hastelloy-g35": {
    name: "Hastelloy G-35", aws: "ERNiCrMo-22", uns: "UNS N06035", family: "hastelloy",
    category: "Ni-Cr-Mo Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Upgraded G-30",
    overview: "Hastelloy G-35 is an upgrade over G-30, designed to resist 'wet process' phosphoric acid and chloride-induced localized corrosion. Unlike G-30, it has no deliberate iron addition.",
    standards: ["ASTM B574", "ASTM B575"],
    classification: "Corrosion alloy — wire, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "33.2"], ["Molybdenum (Mo)", "8.1"], ["Iron (Fe)", "2.0 max"], ["Silicon (Si)", "0.6 max"]],
    mechanical: [["Tensile Strength", "≥ 655 MPa"], ["Yield Strength", "≥ 276 MPa"], ["Elongation", "≥ 40 %"], ["Density", "8.22 g/cm³"]],
    applications: ["Wet process phosphoric acid", "Evaporators", "Pickling applications"]
  },
  "hastelloy-n": {
    name: "Hastelloy N", aws: "N/A", uns: "UNS N10003", family: "hastelloy",
    category: "Nickel-Molybdenum-Chromium", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Molten Salt Resistant",
    overview: "Hastelloy N was developed specifically to resist aging and embrittlement, and is highly resistant to oxidation and hot fluoride salts, making it ideal for molten salt reactors.",
    standards: ["ASTM B573", "AMS 5607"],
    classification: "Specialty alloy — wire, bar", diameters: ["1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "15.0 - 18.0"], ["Chromium (Cr)", "6.0 - 8.0"], ["Iron (Fe)", "5.0 max"], ["Silicon (Si)", "1.0 max"]],
    mechanical: [["Tensile Strength", "≥ 790 MPa"], ["Yield Strength", "≥ 310 MPa"], ["Elongation", "≥ 20 %"], ["Density", "8.86 g/cm³"]],
    applications: ["Molten salt nuclear reactors", "Chemical processing", "Fluoride handling"]
  },
  "hastelloy-s": {
    name: "Hastelloy S", aws: "N/A", uns: "UNS N06635", family: "hastelloy",
    category: "Ni-Cr-Mo-La Superalloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Thermal Stability",
    overview: "Hastelloy S is a high-temperature alloy with excellent thermal stability, low thermal expansion, and superb oxidation resistance at temperatures up to 2000°F (1093°C).",
    standards: ["AMS 5838"],
    classification: "Superalloy — wire, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "15.5 - 16.5"], ["Molybdenum (Mo)", "14.5 - 17.0"], ["Lanthanum (La)", "0.01 - 0.05"], ["Iron (Fe)", "3.0 max"]],
    mechanical: [["Tensile Strength", "≥ 825 MPa"], ["Yield Strength", "≥ 415 MPa"], ["Elongation", "≥ 40 %"], ["Density", "8.75 g/cm³"]],
    applications: ["Gas turbine seals", "Burner cans", "Combustion chambers", "Aerospace engines"]
  },
  "hastelloy-w": {
    name: "Hastelloy W", aws: "ERNiMo-3", uns: "UNS N10004", family: "hastelloy",
    category: "Solid-Solution Strengthened Alloy", image: "assets/img/products/nickel-alloy-coil-form.jpg", tag: "Dissimilar Welding Hero",
    overview: "Hastelloy W is primarily known for its excellent weldability and is heavily used as a welding filler metal for joining dissimilar high-temperature alloys.",
    standards: ["AMS 5786", "AWS A5.14"],
    classification: "Welding alloy — wire, rod", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "23.0 - 26.0"], ["Chromium (Cr)", "4.0 - 6.0"], ["Iron (Fe)", "4.0 - 7.0"], ["Cobalt (Co)", "2.5 max"]],
    mechanical: [["Tensile Strength", "≥ 896 MPa"], ["Yield Strength", "≥ 345 MPa"], ["Elongation", "≥ 30 %"], ["Density", "9.03 g/cm³"]],
    applications: ["Dissimilar alloy welding", "Gas turbine components", "Engine repair"]
  },
  "incoloy-800h": {
    name: "Incoloy 800H", aws: "ERNiCr-3 (common filler)", uns: "UNS N08810", family: "incoloy",
    category: "Nickel-Iron-Chromium", image: "assets/img/products/nickel-alloy-pipe.jpg", tag: "High Temp Creep Resistance",
    overview: "Incoloy 800H is an iron-nickel-chromium alloy having the same basic composition as Incoloy 800 but with significantly higher creep-rupture strength due to carbon control and annealing.",
    standards: ["ASTM B407", "ASTM B408"],
    classification: "Heat-resistant alloy — bar, pipe, wire", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "30.0 - 35.0"], ["Chromium (Cr)", "19.0 - 23.0"], ["Iron (Fe)", "39.5 min"], ["Carbon (C)", "0.05 - 0.10"], ["Aluminum (Al)", "0.15 - 0.60"]],
    mechanical: [["Tensile Strength", "≥ 450 MPa"], ["Yield Strength", "≥ 170 MPa"], ["Elongation", "≥ 30 %"], ["Density", "7.94 g/cm³"]],
    applications: ["Ethylene pyrolysis tubing", "Hydrocarbon cracking", "Heat exchangers", "Power generation structural parts"]
  },
  "incoloy-800ht": {
    name: "Incoloy 800HT", aws: "ERNiCr-3 (common filler)", uns: "UNS N08811", family: "incoloy",
    category: "Nickel-Iron-Chromium", image: "assets/img/products/nickel-alloy-pipe.jpg", tag: "Extreme High Temp",
    overview: "Incoloy 800HT further modifies the titanium and aluminum content of 800H to ensure optimum high-temperature creep and rupture properties.",
    standards: ["ASTM B407", "ASTM B408"],
    classification: "Heat-resistant alloy — bar, tube", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "30.0 - 35.0"], ["Chromium (Cr)", "19.0 - 23.0"], ["Iron (Fe)", "39.5 min"], ["Carbon (C)", "0.06 - 0.10"], ["Al + Ti", "0.85 - 1.20"]],
    mechanical: [["Tensile Strength", "≥ 450 MPa"], ["Yield Strength", "≥ 170 MPa"], ["Elongation", "≥ 30 %"], ["Density", "7.94 g/cm³"]],
    applications: ["Industrial furnaces", "Chemical processing", "Pressure vessels", "Petrochemical heaters"]
  },
  "incoloy-a286": {
    name: "Incoloy A-286", aws: "N/A", uns: "UNS S66286", family: "incoloy",
    category: "Iron-Nickel-Chromium", image: "assets/img/products/nickel-alloy-pipe.jpg", tag: "High Strength to 1300°F",
    overview: "Incoloy A-286 is an iron-base superalloy designed for applications requiring high strength and good corrosion resistance at temperatures up to 1300°F (700°C).",
    standards: ["AMS 5731", "AMS 5732"],
    classification: "Superalloy — bar, wire, forging", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Iron (Fe)", "Balance"], ["Nickel (Ni)", "24.0 - 27.0"], ["Chromium (Cr)", "13.5 - 16.0"], ["Titanium (Ti)", "1.9 - 2.35"], ["Molybdenum (Mo)", "1.0 - 1.5"]],
    mechanical: [["Tensile Strength", "≥ 896 MPa"], ["Yield Strength", "≥ 586 MPa"], ["Elongation", "≥ 15 %"], ["Density", "7.92 g/cm³"]],
    applications: ["Jet engine components", "Fasteners", "High-temperature springs", "Manifold components"]
  },
  "erni-1": {
    name: "ERNi-1", aws: "AWS A5.14 ERNi-1", uns: "UNS N02061", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Pure Nickel Filler",
    overview: "ERNi-1 is a pure nickel welding wire used for GTAW, GMAW, and SAW welding of Nickel 200 and 201, as well as for overlaying steel and welding cast iron.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "0.9", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "93.0 min"], ["Titanium (Ti)", "2.0 - 3.5"], ["Carbon (C)", "0.15 max"], ["Manganese (Mn)", "1.0 max"], ["Iron (Fe)", "1.0 max"]],
    mechanical: [["Tensile Strength", "≥ 380 MPa"], ["Yield Strength", "≥ 200 MPa"], ["Elongation", "≥ 25 %"]],
    applications: ["Welding Nickel 200/201", "Dissimilar welding (nickel to steel)", "Cast iron repair", "Corrosion-resistant overlay"]
  },
  "ernicr-3": {
    name: "ERNiCr-3", aws: "AWS A5.14 ERNiCr-3", uns: "UNS N06082", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Inconel 82 Filler",
    overview: "Commonly known as Alloy 82, ERNiCr-3 is used for welding Inconel 600, 601, and Incoloy 800, as well as for dissimilar joints between stainless steels, carbon steels, and nickel alloys.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "0.9", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "67.0 min"], ["Chromium (Cr)", "18.0 - 22.0"], ["Niobium (Nb) + Ta", "2.0 - 3.0"], ["Manganese (Mn)", "2.5 - 3.5"], ["Iron (Fe)", "3.0 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Yield Strength", "≥ 275 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Welding Inconel 600/601", "Welding Incoloy 800/800H", "Dissimilar welding (high-temp)", "Nuclear engineering"]
  },
  "ernicr-4": {
    name: "ERNiCr-4", aws: "AWS A5.14 ERNiCr-4", uns: "UNS N06072", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 72 Filler",
    overview: "ERNiCr-4 (Alloy 72) is used primarily for welding components that require high resistance to oxidation and corrosion at elevated temperatures.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "42.0 - 46.0"], ["Titanium (Ti)", "0.2 - 1.0"], ["Carbon (C)", "0.01 - 0.05"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Elongation", "≥ 25 %"]],
    applications: ["Power generation", "High temp oxidation environments", "Petrochemical welding"]
  },
  "ernicrmo-2": {
    name: "ERNiCrMo-2", aws: "AWS A5.14 ERNiCrMo-2", uns: "UNS N06002", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Hastelloy X Filler",
    overview: "ERNiCrMo-2 is used for welding Hastelloy X to itself or to other nickel-base alloys, solid solution strengthened for excellent high-temperature strength.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.5 - 23.0"], ["Iron (Fe)", "17.0 - 20.0"], ["Molybdenum (Mo)", "8.0 - 10.0"], ["Cobalt (Co)", "0.5 - 2.5"]],
    mechanical: [["Tensile Strength", "≥ 660 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Gas turbine components", "Petrochemical plants", "Welding Hastelloy X"]
  },
  "ernicrmo-3": {
    name: "ERNiCrMo-3", aws: "AWS A5.14 ERNiCrMo-3", uns: "UNS N06625", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Inconel 625 Filler",
    overview: "Known as Alloy 625 filler, ERNiCrMo-3 is used for welding Inconel 625, Incoloy 825, and high-molybdenum stainless steels, offering outstanding resistance to pitting and crevice corrosion.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "0.9", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "58.0 min"], ["Chromium (Cr)", "20.0 - 23.0"], ["Molybdenum (Mo)", "8.0 - 10.0"], ["Niobium (Nb)", "3.15 - 4.15"], ["Iron (Fe)", "5.0 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength", "≥ 415 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Welding Inconel 625", "Welding Incoloy 825", "Cladding carbon steel", "Offshore and marine applications"]
  },
  "ernicrmo-4": {
    name: "ERNiCrMo-4", aws: "AWS A5.14 ERNiCrMo-4", uns: "UNS N10276", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Hastelloy C-276 Filler",
    overview: "Used primarily for welding Hastelloy C-276 and similar alloys. It produces welds with excellent resistance to pitting, stress-corrosion cracking, and oxidizing atmospheres.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "15.0 - 17.0"], ["Chromium (Cr)", "14.5 - 16.5"], ["Iron (Fe)", "4.0 - 7.0"], ["Tungsten (W)", "3.0 - 4.5"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Elongation", "≥ 25 %"]],
    applications: ["Welding Hastelloy C-276", "Desulfurization plants", "Chemical transport"]
  },
  "ernicrmo-10": {
    name: "ERNiCrMo-10", aws: "AWS A5.14 ERNiCrMo-10", uns: "UNS N06022", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 22 Filler",
    overview: "Designed for welding Hastelloy C-22 to itself and other alloys. Offers superior resistance to aggressive oxidizing and reducing aqueous environments.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.0 - 22.5"], ["Molybdenum (Mo)", "12.5 - 14.5"], ["Iron (Fe)", "2.0 - 6.0"], ["Tungsten (W)", "2.5 - 3.5"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Elongation", "≥ 25 %"]],
    applications: ["Welding Hastelloy C-22", "Pharmaceutical equipment", "Bleach plants"]
  },
  "ernicrmo-13": {
    name: "ERNiCrMo-13", aws: "AWS A5.14 ERNiCrMo-13", uns: "UNS N06059", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 59 Filler",
    overview: "ERNiCrMo-13 is an ultra-low carbon and silicon wire used for welding Alloy 59. Provides high corrosion resistance in the most demanding environments.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "22.0 - 24.0"], ["Molybdenum (Mo)", "15.0 - 16.5"], ["Iron (Fe)", "1.5 max"], ["Carbon (C)", "0.010 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Elongation", "≥ 35 %"]],
    applications: ["Welding Alloy 59", "Flue gas scrubbers", "Chemical process piping"]
  },
  "ernicu-7": {
    name: "ERNiCu-7", aws: "AWS A5.14 ERNiCu-7", uns: "UNS N04060", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Monel 400 Filler",
    overview: "ERNiCu-7 is used for welding Monel 400 and K-500 alloys. Contains titanium to control porosity. Excellent for marine and hydrofluoric acid applications.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "62.0 - 69.0"], ["Copper (Cu)", "Balance"], ["Titanium (Ti)", "1.5 - 3.0"], ["Manganese (Mn)", "4.0 max"], ["Iron (Fe)", "2.5 max"]],
    mechanical: [["Tensile Strength", "≥ 480 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Welding Monel 400", "Marine structures", "Desalination plants"]
  },
  "ernifecr-2": {
    name: "ERNiFeCr-2", aws: "AWS A5.14 ERNiFeCr-2", uns: "UNS N07718", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Inconel 718 Filler",
    overview: "Used for welding Inconel 718, 706, and X-750. The weld metal is age-hardenable and matches the extremely high strength of the base alloys.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "50.0 - 55.0"], ["Iron (Fe)", "Balance"], ["Chromium (Cr)", "17.0 - 21.0"], ["Niobium (Nb) + Ta", "4.75 - 5.50"], ["Molybdenum (Mo)", "2.80 - 3.30"]],
    mechanical: [["Tensile Strength", "≥ 1150 MPa (Aged)"], ["Elongation", "≥ 12 %"]],
    applications: ["Aerospace engine components", "Welding Inconel 718", "Cryogenic vessels"]
  },
  "ernicrfe-7": {
    name: "ERNiCrFe-7", aws: "AWS A5.14 ERNiCrFe-7", uns: "UNS N06052", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 52 Filler",
    overview: "ERNiCrFe-7 (Alloy 52) features a high chromium content (~30%) for outstanding resistance to stress-corrosion cracking in pure water systems.",
    standards: ["AWS A5.14", "ASME SFA-5.14"],
    classification: "Filler metal — TIG rod, MIG spool", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "3.2"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "28.0 - 31.5"], ["Iron (Fe)", "7.0 - 11.0"], ["Manganese (Mn)", "1.0 max"], ["Titanium (Ti)", "1.0 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Nuclear power plant applications", "Welding Inconel 690", "Boiler tubing"]
  },
  "ernicrfe-3": {
    name: "ERNiCrFe-3", aws: "AWS A5.15 (Equiv. ENiCrFe-3 / Inconel 182)", uns: "UNS N06182", family: "welding",
    category: "Welding Consumable", image: "assets/img/products/nickel-welding-wire.jpg", tag: "Alloy 182 Equivalent",
    overview: "Often referenced as the bare wire equivalent to ENiCrFe-3 (Alloy 182), used for dissimilar welding between stainless steels and nickel alloys.",
    standards: ["AWS A5.14 / AWS A5.11"],
    classification: "Filler metal / Equivalent", diameters: ["1.6", "2.4", "3.2", "4.0"],
    chemistry: [["Nickel (Ni)", "59.0 min"], ["Chromium (Cr)", "13.0 - 17.0"], ["Iron (Fe)", "10.0 max"], ["Manganese (Mn)", "5.0 - 9.5"], ["Niobium (Nb)", "1.0 - 2.5"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Elongation", "≥ 30 %"]],
    applications: ["Dissimilar alloy welding", "Overlaying carbon steels", "Structural nickel welding"]
  }
};
