/* =========================================================
   YIXIN ALLOY — Product dataset
   - YIXIN_FORMS    : product forms (full-screen split sections)
   - YIXIN_FAMILIES : alloy families + every grade (source site)
   - YIXIN_PRODUCTS : detailed grades (chemical + mechanical tables)
   Nominal/typical values per AWS A5.14 / ASTM / manufacturer data.
   ========================================================= */

/* ---------- Product forms (full-screen split showcase) ---------- */
window.YIXIN_FORMS = [
  { name: "Welding Wire", image: "assets/img/wire.jpg",
    desc: "Solid MIG &amp; TIG nickel alloy welding wires with tight diameter tolerance and excellent arc stability for high-integrity joining, cladding and overlay.",
    specs: ["0.8 – 6.0 mm diameter", "Spool · coil · drum", "Bright &amp; clean finish"] },
  { name: "Bars &amp; Rods", image: "assets/img/products/form-bar.jpg",
    desc: "Hot-rolled, forged and cold-drawn nickel alloy bars and ground rods for machining, fasteners and structural components in demanding service.",
    specs: ["Round · square · hex", "Forged &amp; cold-drawn", "Ground &amp; peeled options"] },
  { name: "Pipes &amp; Tubes", image: "assets/img/products/form-pipe.jpg",
    desc: "Seamless and welded nickel alloy pipes and tubes engineered for corrosion-resistant transport in chemical, marine and energy systems.",
    specs: ["Seamless &amp; welded", "ASTM / ASME dimensions", "Heat-exchanger tubing"] },
  { name: "Sheets &amp; Plates", image: "assets/img/products/form-sheet.jpg",
    desc: "Hot &amp; cold-rolled nickel alloy sheets and plates offering heat and corrosion resistance for vessels, fabrication and construction.",
    specs: ["0.5 – 50 mm thickness", "Hot &amp; cold rolled", "Pickled / bright annealed"] },
  { name: "Strips &amp; Coils", image: "assets/img/products/form-strip.jpg",
    desc: "Precision nickel alloy strip and coil with controlled thickness and edge condition for stamping, springs and precision components.",
    specs: ["Slit to width", "Controlled temper", "Bright / matte finish"] },
  { name: "Discs &amp; Forgings", image: "assets/img/products/form-disc.jpg",
    desc: "Forged discs and rings produced from vacuum-melted superalloys for turbine, aerospace and high-pressure rotating hardware.",
    specs: ["Forged discs &amp; rings", "Superalloy grades", "Full traceability"] }
];

/* ---------- Alloy families (every grade) ---------- */
window.YIXIN_FAMILIES = [
  {
    key: "nickel", name: "Pure Nickel", image: "assets/img/products/spool.jpg",
    tagline: "Commercially pure nickel",
    desc: "Commercially pure wrought nickel with outstanding resistance to caustic alkalis and excellent thermal/electrical conductivity.",
    grades: [
      { name: "Nickel 200", slug: "nickel-200" }, { name: "Nickel 201", slug: "nickel-201" },
      { name: "Nickel 205", slug: "nickel-200" }, { name: "Nickel 233", slug: "nickel-201" }
    ]
  },
  {
    key: "inconel", name: "Inconel", image: "assets/img/products/wire-main.png",
    tagline: "Nickel-chromium superalloys",
    desc: "Nickel-chromium-based superalloys offering outstanding oxidation, corrosion and high-temperature strength for aerospace, chemical and power generation.",
    grades: [
      { name: "Inconel 600", slug: "inconel-600" }, { name: "Inconel 601", slug: "inconel-601" },
      { name: "Inconel 617", slug: "inconel-617" }, { name: "Inconel 625", slug: "inconel-625" },
      { name: "Inconel 718", slug: "inconel-718" }, { name: "Inconel X-750", slug: "inconel-x750" },
      { name: "Inconel 601-GC", slug: "inconel-601" }, { name: "Inconel 602-CA", slug: "inconel-601" },
      { name: "Inconel 603-XL", slug: "inconel-601" }, { name: "Inconel 625LCF", slug: "inconel-625" },
      { name: "Inconel 690", slug: "inconel-690" }, { name: "Inconel 693", slug: "inconel-690" },
      { name: "Inconel 706", slug: "inconel-718" }, { name: "Inconel 718SPF", slug: "inconel-718" },
      { name: "Inconel 725", slug: "inconel-718" }, { name: "Inconel 82 (ERNiCr-3)", slug: "inconel-82" }
    ]
  },
  {
    key: "monel", name: "Monel", image: "assets/img/products/form-rod.jpg",
    tagline: "Nickel-copper alloys",
    desc: "Nickel-copper alloys delivering high strength and exceptional resistance to seawater, hydrofluoric and sulphuric acids in reducing and oxidising media.",
    grades: [
      { name: "Monel 400", slug: "monel-400" }, { name: "Monel K-500", slug: "monel-k500" },
      { name: "Monel R-405", slug: "monel-400" }, { name: "Monel 401", slug: "monel-400" },
      { name: "Monel 404", slug: "monel-400" }, { name: "Monel 502", slug: "monel-k500" }
    ]
  },
  {
    key: "hastelloy", name: "Hastelloy", image: "assets/img/products/form-coil.jpg",
    tagline: "Nickel-molybdenum alloys",
    desc: "Nickel-molybdenum-based alloys engineered for extreme corrosion resistance against oxidising and reducing agents, chloride pitting and crevice corrosion.",
    grades: [
      { name: "Hastelloy C-4", slug: "hastelloy-c22" }, { name: "Hastelloy C-22", slug: "hastelloy-c22" },
      { name: "Hastelloy C-276", slug: "hastelloy-c276" }, { name: "Hastelloy B / B-2", slug: "hastelloy-b2" },
      { name: "Hastelloy B-3", slug: "hastelloy-b2" }, { name: "Hastelloy X", slug: "hastelloy-x" },
      { name: "Hastelloy C-2000", slug: "hastelloy-c22" }, { name: "Hastelloy G-3", slug: "hastelloy-c22" },
      { name: "Hastelloy G-30", slug: "hastelloy-c22" }, { name: "Hastelloy G-35", slug: "hastelloy-c22" },
      { name: "Hastelloy N", slug: "hastelloy-b2" }, { name: "Hastelloy S", slug: "hastelloy-x" },
      { name: "Hastelloy W", slug: "hastelloy-x" }
    ]
  },
  {
    key: "incoloy", name: "Incoloy", image: "assets/img/products/form-pipe.jpg",
    tagline: "Nickel-iron-chromium alloys",
    desc: "Nickel-iron-chromium alloys combining strength with resistance to oxidation and carburisation at high temperature and to aqueous corrosion.",
    grades: [
      { name: "Incoloy 800", slug: "incoloy-800" }, { name: "Incoloy 800H", slug: "incoloy-800" },
      { name: "Incoloy 800HT", slug: "incoloy-800" }, { name: "Incoloy 825", slug: "incoloy-825" },
      { name: "Incoloy 925", slug: "incoloy-825" }, { name: "Incoloy 020", slug: "incoloy-825" },
      { name: "Incoloy A-286", slug: "incoloy-800" }
    ]
  },
  {
    key: "welding", name: "Welding Consumables", image: "assets/img/wire.jpg",
    tagline: "AWS-classified filler metals",
    desc: "Nickel-alloy filler metals classified to AWS A5.14 for welding and overlay — matched to base alloys for dissimilar joints and corrosion-resistant cladding.",
    grades: [
      { name: "ERNi-1 (Nickel)", slug: "nickel-200" }, { name: "ERNiCr-3 (Alloy 82)", slug: "inconel-82" },
      { name: "ERNiCrMo-3 (Alloy 625)", slug: "inconel-625" }, { name: "ERNiCrMo-4 (C-276)", slug: "hastelloy-c276" },
      { name: "ERNiCu-7 (Monel)", slug: "monel-400" }, { name: "ERNiFeCr-2 (Alloy 718)", slug: "inconel-718" },
      { name: "Custom Alloy Wire", slug: "custom-nickel" }
    ]
  }
];

/* ---------- Detailed grades ---------- */
window.YIXIN_PRODUCTS = {
  "nickel-200": {
    name: "Nickel 200", aws: "ERNi-1 (filler)", uns: "UNS N02200", family: "nickel",
    category: "Commercially Pure Nickel", image: "assets/img/products/spool.jpg", tag: "99% Pure Nickel",
    overview: "Nickel 200 is commercially pure (99.6%) wrought nickel offering excellent resistance to many corrosive media, especially hot caustic alkalis. It provides high electrical and thermal conductivity, low gas content and good mechanical properties from sub-zero to elevated temperatures.",
    standards: ["ASTM B160", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Pure nickel — wire, bar, sheet, strip", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.15 max"], ["Manganese (Mn)", "0.35 max"], ["Iron (Fe)", "0.40 max"], ["Sulphur (S)", "0.01 max"], ["Silicon (Si)", "0.35 max"], ["Copper (Cu)", "0.25 max"]],
    mechanical: [["Tensile Strength", "≥ 462 MPa"], ["Yield Strength (0.2%)", "≥ 148 MPa"], ["Elongation", "≥ 40 %"], ["Hardness", "≈ 75 HRB"], ["Density", "8.89 g/cm³"], ["Melting Range", "1435–1446 °C"]],
    applications: ["Caustic soda / alkali handling", "Chemical & food processing equipment", "Electronic components", "Aerospace & missile structures", "Synthetic-fibre production"]
  },
  "nickel-201": {
    name: "Nickel 201", aws: "ERNi-1 (low-C)", uns: "UNS N02201", family: "nickel",
    category: "Low-Carbon Pure Nickel", image: "assets/img/products/form-coil.jpg", tag: "Low Carbon",
    overview: "Nickel 201 is the low-carbon version of Nickel 200, designed for service above 315 °C. The reduced carbon content prevents graphitisation and intergranular embrittlement, ideal for high-temperature caustic and chemical environments.",
    standards: ["ASTM B160", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Low-carbon pure nickel — wire, bar, sheet", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "99.0 min"], ["Carbon (C)", "0.02 max"], ["Manganese (Mn)", "0.35 max"], ["Iron (Fe)", "0.40 max"], ["Sulphur (S)", "0.01 max"], ["Silicon (Si)", "0.35 max"], ["Copper (Cu)", "0.25 max"]],
    mechanical: [["Tensile Strength", "≥ 403 MPa"], ["Yield Strength (0.2%)", "≥ 103 MPa"], ["Elongation", "≥ 40 %"], ["Hardness", "≈ 65 HRB"], ["Density", "8.89 g/cm³"], ["Melting Range", "1435–1446 °C"]],
    applications: ["High-temperature caustic service > 315 °C", "Hydrogen handling equipment", "Chemical reactors & heat exchangers", "Salt-bath & furnace components"]
  },
  "inconel-600": {
    name: "Inconel 600", aws: "ERNiCr-3 (filler)", uns: "UNS N06600", family: "inconel",
    category: "Nickel-Chromium Alloy", image: "assets/img/products/wire-main.png", tag: "Alloy 600",
    overview: "Inconel 600 is a nickel-chromium-iron alloy with excellent resistance to oxidation and high-temperature corrosion. Non-magnetic and readily weldable, it resists chloride-ion stress-corrosion cracking and is used from cryogenic to 1100 °C service.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Fe alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "72.0 min"], ["Chromium (Cr)", "14.0–17.0"], ["Iron (Fe)", "6.0–10.0"], ["Manganese (Mn)", "1.0 max"], ["Carbon (C)", "0.15 max"], ["Copper (Cu)", "0.5 max"], ["Silicon (Si)", "0.5 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "8.47 g/cm³"]],
    applications: ["Furnace & heat-treatment components", "Chemical & food processing", "Nuclear steam generators", "High-temperature gas handling"]
  },
  "inconel-601": {
    name: "Inconel 601", aws: "—", uns: "UNS N06601", family: "inconel",
    category: "Nickel-Chromium Alloy", image: "assets/img/products/wire-main.png", tag: "Alloy 601",
    overview: "Inconel 601 is a nickel-chromium alloy with an aluminium addition that delivers outstanding resistance to high-temperature oxidation and a tenacious, spalling-resistant oxide scale up to 1200 °C.",
    standards: ["ASTM B166", "ASME SB168", "AWS A5.14"],
    classification: "Ni-Cr-Fe-Al alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0–63.0"], ["Chromium (Cr)", "21.0–25.0"], ["Iron (Fe)", "Balance"], ["Aluminium (Al)", "1.0–1.7"], ["Manganese (Mn)", "1.0 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 550 MPa"], ["Yield Strength (0.2%)", "≥ 205 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1200 °C"], ["Density", "8.11 g/cm³"]],
    applications: ["Industrial furnace muffles & retorts", "Thermal-processing equipment", "Petrochemical heaters", "Gas-turbine combustion hardware"]
  },
  "inconel-617": {
    name: "Inconel 617", aws: "—", uns: "UNS N06617", family: "inconel",
    category: "Ni-Cr-Co-Mo Alloy", image: "assets/img/products/wire-main.png", tag: "Alloy 617",
    overview: "Inconel 617 is a nickel-chromium-cobalt-molybdenum alloy with an exceptional combination of high-temperature strength and oxidation resistance, ideal for gas-turbine and advanced energy applications.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Co-Mo alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "44.5 min"], ["Chromium (Cr)", "20.0–24.0"], ["Cobalt (Co)", "10.0–15.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Aluminium (Al)", "0.8–1.5"], ["Carbon (C)", "0.05–0.15"]],
    mechanical: [["Tensile Strength", "≥ 580 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 35 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "8.36 g/cm³"]],
    applications: ["Gas-turbine combustors", "Advanced power generation", "Petrochemical reformers", "High-temperature ducting"]
  },
  "inconel-625": {
    name: "Inconel 625", aws: "ERNiCrMo-3", uns: "UNS N06625", family: "inconel",
    category: "Nickel-Chromium-Molybdenum Alloy", image: "assets/img/products/wire-main.png", tag: "Alloy 625 · ERNiCrMo-3",
    overview: "ERNiCrMo-3 (Alloy 625) is a versatile Ni-Cr-Mo alloy delivering outstanding resistance to pitting, crevice corrosion and oxidising/reducing acids, with high strength from cryogenic to elevated temperatures. Widely supplied as welding wire and for corrosion-resistant overlay.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "NACE MR0175"],
    classification: "Ni-Cr-Mo alloy — wire, bar, pipe, sheet", diameters: ["0.9", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0 min"], ["Chromium (Cr)", "20.0–23.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Niobium+Ta (Nb+Ta)", "3.15–4.15"], ["Iron (Fe)", "5.0 max"], ["Cobalt (Co)", "1.0 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength (0.2%)", "≥ 460 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1000 °C"], ["Density", "8.44 g/cm³"]],
    applications: ["Oil & gas sour-service piping", "Seawater & marine systems", "Flue-gas desulphurisation", "Chemical reactors & heat exchangers", "9% Ni LNG tank welding"]
  },
  "inconel-718": {
    name: "Inconel 718", aws: "ERNiFeCr-2", uns: "UNS N07718", family: "inconel",
    category: "Precipitation-Hardening Superalloy", image: "assets/img/products/wire-main.png", tag: "Alloy 718 · ERNiFeCr-2",
    overview: "Alloy 718 is a precipitation-hardenable nickel-iron-chromium superalloy providing exceptional strength up to 700 °C with good weldability. It is the benchmark for aero-engine hot-section components and high-pressure gas-turbine hardware.",
    standards: ["AWS A5.14", "AMS 5832", "ASME SFA-5.14"],
    classification: "Ni-Fe-Cr PH superalloy — wire, bar, disc", diameters: ["0.8", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "50.0–55.0"], ["Chromium (Cr)", "17.0–21.0"], ["Iron (Fe)", "Balance"], ["Niobium+Ta (Nb+Ta)", "4.75–5.50"], ["Molybdenum (Mo)", "2.8–3.3"], ["Titanium (Ti)", "0.65–1.15"], ["Aluminium (Al)", "0.20–0.80"]],
    mechanical: [["Tensile (aged)", "≥ 1240 MPa"], ["Yield (0.2%, aged)", "≥ 1030 MPa"], ["Elongation", "≥ 12 %"], ["Service Temp.", "−250 to 700 °C"], ["Density", "8.19 g/cm³"]],
    applications: ["Aircraft & gas-turbine engines", "Turbine discs, blades & casings", "Rocket & cryogenic hardware", "High-pressure fasteners", "Oil & gas downhole tools"]
  },
  "inconel-x750": {
    name: "Inconel X-750", aws: "—", uns: "UNS N07750", family: "inconel",
    category: "Precipitation-Hardening Superalloy", image: "assets/img/products/wire-main.png", tag: "Alloy X-750",
    overview: "Inconel X-750 is a precipitation-hardenable nickel-chromium alloy offering high strength and excellent relaxation resistance up to 700 °C, widely used for springs, fasteners and gas-turbine components.",
    standards: ["AMS 5667", "ASTM B637", "AWS A5.14"],
    classification: "Ni-Cr PH superalloy — wire, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "70.0 min"], ["Chromium (Cr)", "14.0–17.0"], ["Iron (Fe)", "5.0–9.0"], ["Titanium (Ti)", "2.25–2.75"], ["Niobium+Ta", "0.7–1.2"], ["Aluminium (Al)", "0.4–1.0"]],
    mechanical: [["Tensile (aged)", "≥ 1100 MPa"], ["Yield (0.2%, aged)", "≥ 690 MPa"], ["Elongation", "≥ 20 %"], ["Service Temp.", "up to 700 °C"], ["Density", "8.28 g/cm³"]],
    applications: ["High-temperature springs", "Turbine blades & fasteners", "Gas-turbine seals", "Nuclear reactor components"]
  },
  "inconel-690": {
    name: "Inconel 690", aws: "ERNiCrFe-7", uns: "UNS N06690", family: "inconel",
    category: "High-Chromium Ni-Cr Alloy", image: "assets/img/products/wire-main.png", tag: "Alloy 690",
    overview: "Inconel 690 is a high-chromium nickel alloy with outstanding resistance to oxidising acids and stress-corrosion cracking, the material of choice for nuclear steam-generator tubing.",
    standards: ["ASTM B166", "ASME SB166", "AWS A5.14"],
    classification: "Ni-Cr-Fe alloy — wire, tube, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "58.0 min"], ["Chromium (Cr)", "27.0–31.0"], ["Iron (Fe)", "7.0–11.0"], ["Carbon (C)", "0.05 max"], ["Manganese (Mn)", "0.5 max"], ["Copper (Cu)", "0.5 max"]],
    mechanical: [["Tensile Strength", "≥ 586 MPa"], ["Yield Strength (0.2%)", "≥ 240 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "8.19 g/cm³"]],
    applications: ["Nuclear steam-generator tubing", "Nitric-acid service", "Reprocessing equipment", "High-temperature corrosion"]
  },
  "inconel-82": {
    name: "Inconel 82 Welding Wire", aws: "ERNiCr-3", uns: "UNS N06082", family: "welding",
    category: "Nickel-Chromium Filler", image: "assets/img/wire.jpg", tag: "Alloy 82 · ERNiCr-3",
    overview: "ERNiCr-3 (Alloy 82) is a nickel-chromium filler wire for welding Inconel 600/601, dissimilar joints between nickel alloys, carbon steels and stainless steels, and for cladding — providing excellent high-temperature strength, oxidation resistance and crack-free welds.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "ASME Section IX"],
    classification: "Ni-Cr solid welding wire (MIG / TIG / SAW)", diameters: ["0.9", "1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "67.0 min"], ["Chromium (Cr)", "18.0–22.0"], ["Manganese (Mn)", "2.5–3.5"], ["Niobium+Ta (Nb+Ta)", "2.0–3.0"], ["Iron (Fe)", "3.0 max"], ["Titanium (Ti)", "0.75 max"], ["Carbon (C)", "0.10 max"]],
    mechanical: [["Tensile Strength", "≥ 600 MPa"], ["Yield Strength (0.2%)", "≥ 400 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1150 °C"], ["Density", "8.30 g/cm³"]],
    applications: ["Welding Inconel 600 / 601 / 690", "Dissimilar metal joints", "High-temperature furnace parts", "Overlay & weld cladding", "Cryogenic LNG structures"]
  },
  "monel-400": {
    name: "Monel 400", aws: "ERNiCu-7", uns: "UNS N04400", family: "monel",
    category: "Nickel-Copper Alloy", image: "assets/img/products/form-rod.jpg", tag: "Alloy 400 · ERNiCu-7",
    overview: "Monel 400 is a nickel-copper alloy achieving high strength and toughness through cold working, with exceptional resistance to seawater, hydrofluoric, sulphuric and hydrochloric acids under reducing conditions. It does not become brittle at sub-zero temperatures.",
    standards: ["ASTM B164", "AWS A5.14", "ASME SFA-5.14"],
    classification: "Ni-Cu alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "63.0 min"], ["Copper (Cu)", "28.0–34.0"], ["Iron (Fe)", "2.5 max"], ["Manganese (Mn)", "2.0 max"], ["Carbon (C)", "0.3 max"], ["Silicon (Si)", "0.5 max"], ["Sulphur (S)", "0.024 max"]],
    mechanical: [["Tensile Strength", "≥ 480 MPa"], ["Yield Strength (0.2%)", "≥ 170 MPa"], ["Elongation", "≥ 30 %"], ["Hardness", "≈ 85 HRB"], ["Density", "8.80 g/cm³"], ["Melting Range", "1300–1350 °C"]],
    applications: ["Marine & seawater equipment", "Hydrofluoric acid service", "Ship propeller shafts & pumps", "Valves, fasteners & fittings", "Chemical transport vessels"]
  },
  "monel-k500": {
    name: "Monel K-500", aws: "—", uns: "UNS N05500", family: "monel",
    category: "Precipitation-Hardening Ni-Cu Alloy", image: "assets/img/products/form-rod.jpg", tag: "Alloy K-500",
    overview: "Monel K-500 is an age-hardenable nickel-copper alloy combining the corrosion resistance of Monel 400 with greater strength and hardness through additions of aluminium and titanium — ideal for pump shafts and fasteners in marine service.",
    standards: ["ASTM B865", "AMS 4676", "QQ-N-286"],
    classification: "Ni-Cu PH alloy — bar, wire", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "63.0 min"], ["Copper (Cu)", "27.0–33.0"], ["Aluminium (Al)", "2.30–3.15"], ["Titanium (Ti)", "0.35–0.85"], ["Iron (Fe)", "2.0 max"], ["Manganese (Mn)", "1.5 max"], ["Carbon (C)", "0.25 max"]],
    mechanical: [["Tensile (aged)", "≥ 965 MPa"], ["Yield (0.2%, aged)", "≥ 690 MPa"], ["Elongation", "≥ 20 %"], ["Hardness", "≈ 27 HRC"], ["Density", "8.44 g/cm³"]],
    applications: ["Marine pump & propeller shafts", "Oil & gas fasteners", "Valve & pump components", "Non-magnetic hardware"]
  },
  "hastelloy-c276": {
    name: "Hastelloy C-276", aws: "ERNiCrMo-4", uns: "UNS N10276", family: "hastelloy",
    category: "Ni-Mo-Cr-W Alloy", image: "assets/img/products/form-coil.jpg", tag: "C-276 · ERNiCrMo-4",
    overview: "ERNiCrMo-4 (Hastelloy C-276) is a nickel-molybdenum-chromium-tungsten alloy with outstanding resistance to a wide range of aggressive chemicals including wet chlorine, hypochlorite and mixed acids. Low carbon and silicon minimise grain-boundary precipitation in the weld zone.",
    standards: ["AWS A5.14", "ASME SFA-5.14", "NACE MR0175"],
    classification: "Ni-Mo-Cr-W alloy — wire, bar, pipe, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "15.0–17.0"], ["Chromium (Cr)", "14.5–16.5"], ["Tungsten (W)", "3.0–4.5"], ["Iron (Fe)", "4.0–7.0"], ["Cobalt (Co)", "2.5 max"], ["Carbon (C)", "0.02 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength (0.2%)", "≥ 355 MPa"], ["Elongation", "≥ 40 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "8.89 g/cm³"]],
    applications: ["Flue-gas desulphurisation scrubbers", "Pulp & paper bleaching", "Pharmaceutical & acid reactors", "Sour gas & offshore wells", "Pollution-control equipment"]
  },
  "hastelloy-c22": {
    name: "Hastelloy C-22", aws: "ERNiCrMo-10", uns: "UNS N06022", family: "hastelloy",
    category: "Ni-Cr-Mo-W Alloy", image: "assets/img/products/form-coil.jpg", tag: "C-22 · ERNiCrMo-10",
    overview: "Hastelloy C-22 is a versatile nickel-chromium-molybdenum-tungsten alloy with superior resistance to pitting, crevice corrosion and stress-corrosion cracking, outperforming many alloys in both oxidising and reducing media. The family also includes C-4, C-2000, G-3, G-30 and G-35 grades.",
    standards: ["AWS A5.14", "ASTM B575", "NACE MR0175"],
    classification: "Ni-Cr-Mo-W alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.0–22.5"], ["Molybdenum (Mo)", "12.5–14.5"], ["Tungsten (W)", "2.5–3.5"], ["Iron (Fe)", "2.0–6.0"], ["Cobalt (Co)", "2.5 max"], ["Carbon (C)", "0.015 max"]],
    mechanical: [["Tensile Strength", "≥ 690 MPa"], ["Yield Strength (0.2%)", "≥ 310 MPa"], ["Elongation", "≥ 45 %"], ["Service Temp.", "up to 1040 °C"], ["Density", "8.69 g/cm³"]],
    applications: ["Chemical-process equipment", "Flue-gas desulphurisation", "Pharmaceutical reactors", "Acid production & handling"]
  },
  "hastelloy-b2": {
    name: "Hastelloy B-2", aws: "ERNiMo-7", uns: "UNS N10665", family: "hastelloy",
    category: "Nickel-Molybdenum Alloy", image: "assets/img/products/form-coil.jpg", tag: "B-2 · ERNiMo-7",
    overview: "Hastelloy B / B-2 / B-3 are nickel-molybdenum alloys offering outstanding resistance to reducing acids such as hydrochloric acid at all concentrations and temperatures, with low carbon and silicon for weldability. Hastelloy N is included for molten-salt service.",
    standards: ["AWS A5.14", "ASTM B335", "NACE MR0175"],
    classification: "Ni-Mo alloy — wire, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Molybdenum (Mo)", "26.0–30.0"], ["Iron (Fe)", "2.0 max"], ["Chromium (Cr)", "1.0 max"], ["Cobalt (Co)", "1.0 max"], ["Carbon (C)", "0.02 max"]],
    mechanical: [["Tensile Strength", "≥ 760 MPa"], ["Yield Strength (0.2%)", "≥ 350 MPa"], ["Elongation", "≥ 40 %"], ["Service Temp.", "up to 1090 °C"], ["Density", "9.22 g/cm³"]],
    applications: ["Hydrochloric acid service", "Reducing-acid reactors", "Sulphuric & phosphoric acid", "Chemical process vessels"]
  },
  "hastelloy-x": {
    name: "Hastelloy X", aws: "ERNiCrMo-2", uns: "UNS N06002", family: "hastelloy",
    category: "Ni-Cr-Fe-Mo Alloy", image: "assets/img/products/form-coil.jpg", tag: "Alloy X · ERNiCrMo-2",
    overview: "Hastelloy X is a nickel-chromium-iron-molybdenum alloy with an exceptional combination of oxidation resistance, fabricability and high-temperature strength, widely used in gas-turbine combustion zones. Hastelloy S and W are also supplied for specialised high-temperature and weld-filler use.",
    standards: ["AWS A5.14", "AMS 5798", "ASTM B435"],
    classification: "Ni-Cr-Fe-Mo alloy — wire, sheet, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "Balance"], ["Chromium (Cr)", "20.5–23.0"], ["Iron (Fe)", "17.0–20.0"], ["Molybdenum (Mo)", "8.0–10.0"], ["Cobalt (Co)", "0.5–2.5"], ["Tungsten (W)", "0.2–1.0"], ["Carbon (C)", "0.05–0.15"]],
    mechanical: [["Tensile Strength", "≥ 655 MPa"], ["Yield Strength (0.2%)", "≥ 275 MPa"], ["Elongation", "≥ 35 %"], ["Service Temp.", "up to 1200 °C"], ["Density", "8.22 g/cm³"]],
    applications: ["Gas-turbine combustors & transition ducts", "Industrial furnace components", "Petrochemical & high-temperature", "Aerospace afterburner parts"]
  },
  "incoloy-800": {
    name: "Incoloy 800 / 800H / 800HT", aws: "ERNiCr-3 (filler)", uns: "UNS N08800 / N08810 / N08811", family: "incoloy",
    category: "Ni-Fe-Cr Alloy", image: "assets/img/products/form-pipe.jpg", tag: "Alloy 800 Series",
    overview: "Incoloy 800 series are nickel-iron-chromium alloys with excellent resistance to oxidation and carburisation at elevated temperatures. The 800H/800HT variants offer enhanced creep-rupture strength for sustained high-temperature service; A-286 is included as a PH grade.",
    standards: ["ASTM B408", "ASME SB408", "AWS A5.14"],
    classification: "Ni-Fe-Cr alloy — pipe, tube, bar, sheet", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "30.0–35.0"], ["Iron (Fe)", "39.5 min"], ["Chromium (Cr)", "19.0–23.0"], ["Aluminium (Al)", "0.15–0.60"], ["Titanium (Ti)", "0.15–0.60"], ["Carbon (C)", "0.05–0.10"]],
    mechanical: [["Tensile Strength", "≥ 520 MPa"], ["Yield Strength (0.2%)", "≥ 205 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 1100 °C"], ["Density", "7.94 g/cm³"]],
    applications: ["Process heaters & furnace tubing", "Steam superheaters", "Petrochemical reformers", "Heat-treatment equipment"]
  },
  "incoloy-825": {
    name: "Incoloy 825", aws: "ERNiFeCr-1", uns: "UNS N08825", family: "incoloy",
    category: "Ni-Fe-Cr-Mo-Cu Alloy", image: "assets/img/products/form-pipe.jpg", tag: "Alloy 825",
    overview: "Incoloy 825 is a nickel-iron-chromium alloy with molybdenum and copper additions giving exceptional resistance to both reducing and oxidising acids, stress-corrosion cracking and localised pitting/crevice corrosion. Incoloy 925 and 020 extend the family for higher strength and sulphuric-acid service.",
    standards: ["ASTM B425", "ASME SB425", "AWS A5.14"],
    classification: "Ni-Fe-Cr-Mo-Cu alloy — wire, pipe, bar", diameters: ["1.0", "1.2", "1.6", "2.4", "Custom"],
    chemistry: [["Nickel (Ni)", "38.0–46.0"], ["Iron (Fe)", "22.0 min"], ["Chromium (Cr)", "19.5–23.5"], ["Molybdenum (Mo)", "2.5–3.5"], ["Copper (Cu)", "1.5–3.0"], ["Titanium (Ti)", "0.6–1.2"], ["Carbon (C)", "0.05 max"]],
    mechanical: [["Tensile Strength", "≥ 586 MPa"], ["Yield Strength (0.2%)", "≥ 235 MPa"], ["Elongation", "≥ 30 %"], ["Service Temp.", "up to 540 °C"], ["Density", "8.14 g/cm³"]],
    applications: ["Sulphuric & phosphoric acid plants", "Oil & gas sour-service", "Pickling equipment", "Nuclear fuel reprocessing"]
  },
  "custom-nickel": {
    name: "Custom Nickel Alloy Wires", aws: "Per specification", uns: "Various", family: "welding",
    category: "Made-to-Order Special Alloys", image: "assets/img/products/form-rod.jpg", tag: "Made to Order",
    overview: "Beyond our standard range we produce bespoke nickel and superalloy products — Nimonic, Incoloy, Inconel X-750, precision and corrosion-resistant grades — manufactured to your exact chemistry, diameter, finish and packaging using vacuum induction melting and controlled processing.",
    standards: ["ASTM", "AMS", "AWS", "DIN", "JIS", "Customer-specific"],
    classification: "Custom chemistry & dimension", diameters: ["0.3 – 6.0", "Custom"],
    chemistry: [["Base", "Ni / Ni-Cr / Ni-Cu / Ni-Mo"], ["Chemistry", "Tailored to specification"], ["Purity", "Vacuum-induction-melted"], ["Tolerance", "Per AMS / ASTM / customer"]],
    mechanical: [["Properties", "Engineered to application"], ["Finish", "Bright / matte / cleaned"], ["Packaging", "Spools · Coils · Drums"], ["Certification", "Full MTC supplied"]],
    applications: ["Military & defence equipment", "Aerospace specialty components", "New-energy & nuclear hardware", "R&D & prototype alloys", "OEM private-label supply"]
  }
};
