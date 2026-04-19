// ============================================================
// TRANSLATIONS — EN / FR
// ============================================================
const TRANSLATIONS = {
  "nav-projects":      { en: "Projects",                fr: "Projets" },
  "nav-about":         { en: "About",                   fr: "À propos" },
  "nav-skills":        { en: "Skills",                  fr: "Compétences" },
  "nav-contact":       { en: "Contact",                 fr: "Contact" },
  "mobile-subtitle":   { en: "Student \u2022 Maker \u2022 Aerospace Enthusiast", fr: "Étudiant \u2022 Maker \u2022 Passionné d'aérospatial" },
  "wip-sub":           { en: "This site is still under construction.<br>More projects, photos &amp; details coming soon.", fr: "Ce site est encore en construction.<br>Plus de projets, photos &amp; détails arrivent bientôt." },
  "wip-roadmap-label": { en: "// things coming next",  fr: "// à venir" },
  "wip-r1":            { en: "Project photos &amp; better images",     fr: "Photos de projets &amp; meilleures images" },
  "wip-r2":            { en: "Better overall colors",                  fr: "Meilleures couleurs globales" },
  "wip-r3":            { en: "Details for every project",              fr: "Détails pour chaque projet" },
  "wip-r4":            { en: "Demo videos for every project",          fr: "Vidéos démo pour chaque projet" },
  "wip-r5":            { en: "improvment of the site structure",       fr: "Amélioration de la structure du site" },
  "wip-r6":            { en: "More details about me",                  fr: "Plus de détails sur moi" },
  "wip-enter":         { en: "See my projects \u2192",                  fr: "Voir mes projets \u2192" },
  "greeting":          { en: "Hi, I'm",                               fr: "Salut, je suis" },
  "hero-subtitle":     { en: "Student \u2022 Maker \u2022 Aerospace Enthusiast", fr: "Étudiant \u2022 Maker \u2022 Passionné d'aérospatial" },
  "scroll-down-txt":   { en: "scroll down",                           fr: "défiler" },
  "projects-title":    { en: "MY PROJECTS",                           fr: "MES PROJETS" },
  "badge-done":        { en: "\u2713 Completed",                      fr: "\u2713 Terminé" },
  "badge-prod":        { en: "\u26a1 In Production",                  fr: "\u26a1 En production" },
  "badge-wip":         { en: "\uD83D\uDEA7 In Development",           fr: "\uD83D\uDEA7 En développement" },
  "proj-rc-plane":     { en: "Remote Control Plane",                  fr: "Avion radiocommandé" },
  "proj-space":        { en: "Space collector - arcade game",         fr: "Space Collector - jeu d'arcade" },
  "proj-fan":          { en: "Fan Plane Reactor",                     fr: "Ventilateur en forme de réacteur d'avion" },
  "proj-lighter":      { en: "Electric Lighter",                      fr: "Briquet électrique" },
  "proj-ttl":          { en: "TTL Siren",                             fr: "Sirène TTL" },
  "proj-lamped":       { en: "Lamped - Custom Lamp Project",          fr: "Lamped - Projet de lampe personnalisée" },
  "proj-hackpad":      { en: "HackPad - a custom macropad",           fr: "HackPad - un mini clavier personnalisé" },
  "proj-3dplane":      { en: "3D Printed RC Plane",                   fr: "Avion RC imprimé en 3D" },
  "proj-devboard":     { en: "APX Devboard - Custom Development Board", fr: "APX Devboard - Carte de développement" },
  "proj-display":      { en: "Spotify Display - Real time Music controller", fr: "Spotify Display - Contrôleur musical en temps réel" },
  "proj-cubesat":      { en: "CubeSat Project",                       fr: "Satellite CubeSat" },
  "proj-robotic-arm":  { en: "AI enhanced Robotic Arm",               fr: "Bras robotique assisté par IA" },
  "proj-launchapi":    { en: "Rocket Launch API",                     fr: "API de lancements de fusées" },
  "proj-binary":       { en: "Binary Counter",                        fr: "Compteur binaire" },
  "proj-lamped":       { en: "Lamped - Custom Lamp Project",          fr: "Lamped - Projet de lampe personnalisée" },
  "about-title":       { en: "ABOUT ME",                              fr: "À PROPOS DE MOI" },
  "about-p1":          { en: "I'm Gabin Tavernier, a student from La Réunion passionate about aerospace, electronics, and building things that actually work.", fr: "Je suis Gabin Tavernier, un étudiant de La Réunion passionné par l'aérospatial, l'électronique et la fabrication de projets concrets." },
  "about-p2":          { en: "I design custom PCBs with KiCad, program microcontrollers (RP2040, ESP32) in C/C++ and Python, and build everything from macropads to stratospheric balloon payloads with LoRa telemetry. I got my BIA (Aeronautics Initiation Diploma) in 2024 and I'm aiming for ISAE-SUPAERO.", fr: "Je conçois des PCBs avec KiCad, programme des microcontrôleurs (RP2040, ESP32) en C/C++ et Python, et construis tout, des macropads jusqu'aux charges utiles de ballons strat. J'ai obtenu mon BIA en 2024 et vise l'ISAE-SUPAERO." },
  "about-p3":          { en: "I'm active in <a href=\"https://hackclub.com\" target=\"_blank\" rel=\"noopener\">Hack Club</a> and I've participated in programs like Blueprint, Stasis, and various YSWS grants to fund my hardware projects.", fr: "Je suis actif sur <a href=\"https://hackclub.com\" target=\"_blank\" rel=\"noopener\">Hack Club</a> et j'ai participé aux programmes Blueprint, Stasis et divers autres programmes YSWS pour financer mes projets." },
  "skills-title":      { en: "MY SKILLS",                             fr: "MES COMPÉTENCES" },
  "skill-prog":        { en: "Programming",                           fr: "Programmation" },
  "skill-hw":          { en: "Hardware &amp; Electronics",            fr: "Matériel &amp; Électronique" },
  "skill-pcb":         { en: "PCB &amp; CAD",                        fr: "PCB &amp; CAO" },
  "skill-tools":       { en: "Tools &amp; Workflow",                  fr: "Outils &amp; Méthodes" },
  "skill-domains":     { en: "Domains",                               fr: "Domaines" },
  "skill-sec-langs":   { en: "Languages",                             fr: "Langages" },
  "skill-sec-fw":      { en: "Firmware",                              fr: "Firmware" },
  "skill-sec-mcus":    { en: "Microcontrollers",                      fr: "Microcontrôleurs" },
  "skill-sec-sensors": { en: "Sensors &amp; Modules",                 fr: "Capteurs &amp; Modules" },
  "skill-sec-tech":    { en: "Techniques",                            fr: "Techniques" },
  "skill-sec-pcb":     { en: "PCB Design",                            fr: "Conception PCB" },
  "skill-sec-3d":      { en: "3D / CAD",                              fr: "3D / CAO" },
  "skill-sec-vc":      { en: "Version Control &amp; CI",              fr: "Contrôle de version &amp; CI" },
  "skill-sec-env":     { en: "Environment",                           fr: "Environnement" },
  "skill-sec-aero":    { en: "Aerospace",                             fr: "Aérospatial" },
  "skill-sec-sys":     { en: "Systems",                               fr: "Systèmes" },
  "contact-title":     { en: "CONTACT",                               fr: "CONTACT" },
  "contact-intro":     { en: "Want to get in touch? Feel free to reach out through any of these platforms:", fr: "Vous souhaitez me contacter ? Retrouvez-moi sur ces plateformes :" },
  "tag-smd-soldering":   { en: "SMD Soldering",        fr: "Soudure CMS" },
  "tag-pcb-assembly":    { en: "PCB Assembly",          fr: "Assemblage PCB" },
  "tag-rc-electronics":  { en: "RC Electronics",        fr: "Électronique RC" },
  "tag-schematic-design":{ en: "Schematic Design",      fr: "Conception schématique" },
  "tag-pcb-layout":      { en: "PCB Layout",            fr: "Routage PCB" },
  "tag-3d-printing":     { en: "3D Printing FDM",       fr: "Impression 3D FDM" },
  "tag-aeronautics":     { en: "Aeronautics (BIA)",     fr: "Aéronautique (BIA)" },
  "tag-strato-balloon":  { en: "Stratospheric Balloon", fr: "Ballon stratosphérique" },
  "tag-embedded-sys":    { en: "Embedded Systems",      fr: "Systèmes embarqués" },
  "tag-maker-diy":       { en: "Maker / DIY Hardware",  fr: "Maker / Électronique DIY" },
  "filter-domain":     { en: "Domain",        fr: "Domaine" },
  "filter-difficulty": { en: "Difficulty",    fr: "Difficulté" },
  "filter-all":        { en: "All",           fr: "Tous" },
  "filter-hardware":   { en: "Hardware",      fr: "Matériel" },
  "filter-software":   { en: "Software",      fr: "Logiciel" },
  "filter-aerospace":  { en: "Aerospace",     fr: "Aérospatial" },
  "filter-beginner":   { en: "Beginner",      fr: "Débutant" },
  "filter-inter":      { en: "Intermediate",  fr: "Intermédiaire" },
  "filter-advanced":   { en: "Advanced",      fr: "Avancé" }
};

const PROJECT_DETAILS_FR = {
  "rc-plane":       { title: "Avion radiocommandé",           description: "Avion RC construit avec du polystyrène et des pièces imprimées en 3D. Utilise des servomoteurs, un moteur brushless, une hélice, un ESC, un récepteur et un émetteur. J'ai conçu la structure sur Canva et modélisé dans Fusion 360. L'avion est léger et vole bien, avec une autonomie d'environ 5 minutes." },
  "space-collector":{ title: "Space Collector",              description: "Petit jeu arcade développé en JavaScript pour la console Sprig de Hack Club. Collecte des objets dans l'espace et évite les obstacles !" },
  "fan-reactor":    { title: "Réacteur d'avion ventilateur", description: "Ventilateur imprimé en 3D ayant l'apparence d'un réacteur d'avion. Alimenté via USB-C, avec un interrupteur et un potentiomètre pour régler la vitesse du moteur." },
  "electric-lighter":{ title: "Briquet électrique",          description: "Briquet électrique fabriqué à partir d'une batterie de puff trouvée, d'un module de charge, d'un élément chauffant de grille-pain et d'un boîtier imprimé en 3D." },
  "ttl-siren":      { title: "Sirène de police TTL",         description: "Sirène construite avec un multivibrateur astable à transistors BJT, sans microcontrôleur. Deux transistors alternent pour faire clignoter des LEDs bleues et rouges. Le PCB est en forme de sirène." },
  "hackpad":        { title: "HackPad",                      description: "Macropad personnalisé avec 6 touches, un encodeur rotatif, un écran OLED et un microcontrôleur RP2040. PCB conçu dans KiCad, boîtier dans Fusion 360." },
  "3d-rc-plane":    { title: "Avion RC imprimé en 3D",       description: "La deuxième version de mon avion RC, entièrement imprimé en 3D avec du PLA gris léger et une meilleure aérodynamique. C'est un modèle entièrement nouveau." },
  "apx-devboard":   { title: "APX Devboard",                 description: "APX signifie APEX. C'est une carte de développement personnalisée conçue pour les projets embarqués et le prototypage." },
  "spotify-display":{ title: "Spotify Display",              description: "Afficheur Spotify temps réel basé sur ESP32 avec écran SPI. Affiche le titre en cours de lecture et permet de contrôler la musique sans toucher son téléphone." },
  "cubesat":        { title: "Projet CubeSat",               description: "CubeSat étudiant équipé de capteurs, conçu pour être lancé dans la stratosphère avec un ballon météorologique. Planification de mission, conception PCB et intégration complète." },
  "robotic-arm":    { title: "Bras robotique",               description: "Bras robotique construit avec de puissants servomoteurs récupérés d'un vieux robot humanoïde. Assisté par IA avec vision et contrôle pour l'automatisation." },
  "launch-api":     { title: "API Spatiale",            description: "API REST hébergée sur Raspberry Pi pour suivre les lancements de fusées et événements spatiaux en temps réel. Compile des données de plusieurs sources." },
  "binary":         { title: "Visualisation binaire",        description: "Compteur binaire construit avec des LEDs et un circuit intégré. Les LEDS clignotent pour représenter les bits. La première LED va clignoter 8192 fois avant que la dernière LED clignote." },
  "lamped":         { title: "Lamped",                       description: "Projet de lampe personnalisée simple avec un circuits intégré (LM3914). Le potentiomètre allume les LED une par une et ajuste la luminosité globale, créant un effet visuel intéressant. Le PCB est conçu en forme d'ampoule et utilise un circuit simple." }
};

function applyLang(lang) {
  window._currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var t = TRANSLATIONS[key];
    if (t && t[lang] !== undefined) el.innerHTML = t[lang];
  });
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
  });
}

// ============================================================
// PROJECT CONFIG — Edit here to update tags & progress
// ============================================================

// Order matches the project cards in index.html: Completed → In Production → In Development
const PROJECT_KEYS = [
  "rc-plane", "space-collector", "fan-reactor", "electric-lighter", "ttl-siren", "binary", "lamped",
  "hackpad", "3d-rc-plane",
  "apx-devboard", "spotify-display", "cubesat", "robotic-arm", "launch-api",
];

const PROJECT_CONFIG = {
  "rc-plane":        { progress: 100, steps: ["Design", "3D Print", "Assembly", "Wiring", "Test Flight"],               currentStep: 4 },
  "space-collector": { progress: 90, steps: ["Concept", "Coding", "Testing", "Published", "Sprig ordered", "Game tested"],        currentStep: 4 },
  "fan-reactor":     { progress: 100, steps: ["Design", "3D Print", "Assembly", "Testing"],                             currentStep: 3 },
  "hackpad":         { progress: 55,  steps: ["Design", "PCB Order", "Assembly", "Firmware", "Testing"],                currentStep: 2 },
  "apx-devboard":    { progress: 15,  steps: ["Specs", "Schematic", "PCB Layout", "Fabrication", "Firmware"],           currentStep: 1 },
  "spotify-display": { progress: 15,  steps: ["Concept", "API Integration", "Display UI", "Hardware", "Assembly"],      currentStep: 1 },
  "cubesat":         { progress: 15,  steps: ["Mission Design", "Architecture", "PCB Design", "Integration", "Testing"], currentStep: 1 },
  "robotic-arm":     { progress: 5,  steps: ["Concept", "Mechanical Design", "Electronics", "AI Integration", "Testing"], currentStep: 0 },
  "launch-api":      { progress: 5,  steps: ["API Design", "Data Sources", "Backend", "Deployment"],                   currentStep: 0 },
  "3d-rc-plane":     { progress: 20, steps: ["Design", "3D Print", "Electronics", "Assembly", "Test Flight"],           currentStep: 1 },
  "elecric-lighter": { progress: 100, steps: ["Design", "Electronics", "3D Print", "Assembly", "Testing"],            currentStep: 4 },
  "ttl-siren":        { progress: 100, steps: ["Idea", "Simulation", "Schematic Design", "PCB Design", "Design Approved"],                   currentStep: 4 },
  "binary":           { progress: 99, steps: ["Idea", "Simulation", "Schematic Design", "PCB Design", "Design Approved"],                   currentStep: 3 },
  "lamped":           { progress: 99, steps: ["Idea", "Simulation", "Schematic Design", "PCB Design", "Design Approved"],                   currentStep: 3 }
};

// Tag format: [label, category]  —  categories: lang | hw | fab | tool | domain
const PROJECT_TAGS = {
  "rc-plane":        [["RC Electronics","hw"],      ["Aerodynamics","domain"],      ["Servo Control","hw"]],
  "space-collector": [["JavaScript","lang"],        ["Game Dev","domain"],          ["Bitmap","lang"]],
  "fan-reactor":     [["CAD","tool"],               ["Electronics","hw"],           ["Motor","hw"]],
  "hackpad":         [["RP2040","hw"],              ["KMK","tool"],                 ["PCB Design","tool"]],
  "apx-devboard":    [["PCB Design","tool"],        ["Embedded Systems","domain"],  ["KiCad","tool"]],
  "spotify-display": [["ESP32","hw"],               ["C++ (arduino IDE)","lang"],   ["Spotify API","tool"],  ["SPI Display","hw"]],
  "cubesat":         [["Aerospace","domain"],       ["Embedded Systems","domain"],  ["PCB Design","tool"],   ["Sensors","hw"]],
  "robotic-arm":     [["ESP32","hw"],               ["Servo Control","hw"],         ["C++","lang"],          ["AI","domain"],   ["Robotics","domain"]],
  "launch-api":      [["Raspberry Pi","hw"],        ["Python","lang"],              ["REST API","tool"],     ["Web Server","tool"]],
  "3d-rc-plane":     [["RC Electronics","hw"],      ["CAD","tool"],                 ["Light Weight 3D Printing","fab"],   ["Aerodynamics","domain"]],
  "electric-lighter":[["Basic Hardware","hw"],     ["Heating elements","hw"],      ["3D Printing","fab"]],
  "ttl-siren":       [["TTL Logic","hw"],           ["Electronic Simulation","hw"],           ["PCB Design","tool"]],
  "binary":          [["integrated circuits","hw"],           ["Electronic Simulation","hw"],           ["PCB Design","tool"]],
  "lamped":          [["integrated circuits","hw"],           ["Electronic Simulation","hw"],           ["PCB Design","tool"]],
};


// ============================================================
// PROJECT META — domain & difficulty for filters
// ============================================================
const PROJECT_META = {
  "rc-plane":         { domain: ["aerospace", "hardware"],          difficulty: "intermediate" },
  "space-collector":  { domain: ["software"],                       difficulty: "beginner" },
  "fan-reactor":      { domain: ["hardware"],                       difficulty: "beginner" },
  "electric-lighter": { domain: ["hardware"],                       difficulty: "beginner" },
  "ttl-siren":        { domain: ["hardware"],                       difficulty: "intermediate" },
  "hackpad":          { domain: ["hardware", "software"],           difficulty: "intermediate" },
  "3d-rc-plane":      { domain: ["aerospace", "hardware"],          difficulty: "intermediate" },
  "apx-devboard":     { domain: ["hardware"],                       difficulty: "intermediate" },
  "spotify-display":  { domain: ["software", "hardware"],           difficulty: "beginner" },
  "cubesat":          { domain: ["aerospace", "hardware"],          difficulty: "advanced" },
  "robotic-arm":      { domain: ["hardware", "software"],           difficulty: "advanced" },
  "launch-api":       { domain: ["software"],                       difficulty: "advanced" },
  "binary":           { domain: ["hardware"],                       difficulty: "beginner" },
  "lamped":           { domain: ["hardware"],                       difficulty: "beginner" },
};
 

const PROJECT_DETAILS = {
  "rc-plane": {
    title: "Remote Control Plane",
    description: "RC plane built with styrofoam and 3D printed parts. Uses servo motors, a brushless motor, a propeller, ESC, receiver and transmitter. I designed the structure on Canva and modelled it in Fusion 360. The plane is lightweight and flies well, with a flight time of around 5 minutes.",
    images: ["images/gabin rc plane.png"],
    video: "https://www.youtube.com/embed/v7-GCenTMmM",
    github: [{ url: "https://github.com/Gabouin/Gabs-RC-plane", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/6271", label: "Hack Club" }]
  },
  "space-collector": {
    title: "Space Collector",
    description: "Small arcade game built in JavaScript for the Sprig console by Hack Club. Collect items in space and avoid obstacles!",
    images: ["images/sprig.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Space-collector", label: "GitHub" }],
    hackclub: [{ url: "https://sprig.hackclub.com/", label: "Hack Club" }]
  },
  "fan-reactor": {
    title: "Fan Plane Reactor",
    description: "3D printed fan that looks like a plane reactor. Powered via USB-C, with a switch and a potentiometer to regulate the motor speed. I love the look of airplane reactors and this project only requires basic electronics and 3D printed parts.",
    images: ["images/fan plane reactor.png"],
    video: "https://www.youtube.com/embed/CXMXyju0Se0",
    github: [{ url: "https://github.com/Gabouin/fan-plane-reactor", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/11654", label: "Hack Club" }]
  },
  "electric-lighter": {
    title: "Electric Lighter",
    description: "Electric lighter built from a vape battery found on the ground, a charging module, a toaster heating element, and a 3D-printed enclosure. Will be used to start campfires or just burn things for fun!",
    images: ["images/el.png"],
    video: "videos/el.mp4",
    videoPortrait: true,
    github: [{ url: "https://github.com/Gabouin/Electric-lighter", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmnkcivyz015901po8n7ddugv", label: "Hack Club" }]
  },
  "ttl-siren": {
    title: "TTL Based Police Siren",
    description: "Police siren built with an astable multivibrator using BJT transistors, no microcontroller. Two transistors alternately switch on/off, making blue and red LEDs blink like a siren. PCB is shaped like a police siren in KiCad. Made for RESOLUTION Hack Club week 2.",
    images: ["images/TTL.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/RESOLUTION-ACTIVE-COMPONENTS", label: "GitHub" }],
    hackclub: [{ url: "https://resolution.hackclub.com/app/pathway/hardware/week/2", label: "Hack Club" }]
  },
  "binary": {
    title: "Binary Counter",
    description: "Simple binary counter using Integrated Circuits (ICs).",
    images: ["images/binary.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/BINARY-RIPPLE_RESOLUTION-IC", label: "GitHub" }],
  },
  "lamped": {
    title: "Lamped",
    description: "Custom lamp project with integrated circuits (ICs). Use the potentiometer to light up the LEDs one by one and adjusting the global brightness, creating a cool visual effect. The PCB is designed in the shape of a lamp and features a simple circuit.",
    images: ["images/LAMPED BANNER.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/LAMPED", label: "GitHub" }],
  },

  "hackpad": {
    title: "HackPad",
    description: "Custom macropad with 6 switches, a rotary encoder (volume control), an OLED display (animations per key), and an RP2040 microcontroller. Can be used for different tasks while working. PCB designed in KiCad, enclosure designed in Fusion 360.",
    images: ["images/pcb.hackpad.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Gab-s-Hackpad", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/13108", label: "Hack Club" }]
  },
  "3d-rc-plane": {
    title: "3D Printed RC Plane",
    description: "The second version of my RC plane but fully 3d printed with grey lightweight PLA and better aerodynamics, as it's a completly new model.",
    images: ["images/3D plane.png"],
    video: null,
    github: [],
    hackclub: []
  },
  "apx-devboard": {
    title: "APX Devboard",
    description: "APX stands for APEX, the pinnacle, absolute excellence. It's basically a custom development board designed for embedded projects and prototyping.",
    images: ["images/devboard.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/APX-devboard", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmneq8qhn000401o4qvnlucgr", label: "Hack Club" }]
  },
  "spotify-display": {
    title: "Spotify Display",
    description: "ESP32-based real-time Spotify music display with SPI screen. Shows the currently playing track and enables control without touching your phone.",
    images: ["images/display.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/APX-spotify-display", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmnhoon33003901t8pogxgjfx", label: "Hack Club" }]
  },
  "cubesat": {
    title: "CubeSat Project",
    description: "Student CubeSat packed with sensors and electronics, designed to be launched into the stratosphere with a helium balloon. Mission planning, PCB design, and full integration.",
    images: ["images/cubesat.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Gabs-CubeSat", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmmyufcqi00i501rye3hjri9z", label: "Hack Club" }]
  },
  "robotic-arm": {
    title: "Robotic Arm",
    description: "Robotic arm built with powerful servomotors salvaged from an old humanoid robot. AI-enhanced with vision and control for automation and learning.",
    images: ["images/arm.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Robotic-Arm", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmmyufcqi00i501rye3hjri9z", label: "Hack Club" }]
  },
  "launch-api": {
    title: "Rocket Launch API",
    description: "REST API hosted on a Raspberry Pi for tracking rocket launches and space events in real time. Aggregates data from multiple sources.",
    images: ["images/raspapi.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Launch-Watch-API", label: "GitHub" }],
    hackclub: [{ url: "https://raspapi.hackclub.com", label: "Hack Club" }]
  }
};

function buildTagsHTML(key) {
  const tags = PROJECT_TAGS[key];
  if (!tags) return '';
  return '<div class="tags-list">' +
    tags.map(function(t) { return '<span class="tag tag-' + t[1] + '">' + t[0] + '</span>'; }).join('') +
    '</div>';
}

function buildProgressHTML(key) {
  const cfg = PROJECT_CONFIG[key];
  if (!cfg) return '';
  const stepsHTML = cfg.steps.map(function(s, i) {
    const cls = i < cfg.currentStep ? 'step-done' : i === cfg.currentStep ? 'step-current' : 'step-todo';
    return '<span class="progress-step ' + cls + '">' + s + '</span>';
  }).join('');
  return '<div class="progress-section">' +
    '<div class="progress-label">Progress <span class="progress-pct">' + cfg.progress + '%</span></div>' +
    '<div class="progress-track"><div class="progress-fill" style="width:' + cfg.progress + '%"></div></div>' +
    '<div class="progress-steps">' + stepsHTML + '</div>' +
    '</div>';
}

function buildLinksHTML(key) {
  const d = PROJECT_DETAILS[key];
  if (!d) return '';
  var links = '';
  if (d.github) {
    d.github.forEach(function(l) {
      links += '<a class="modal-link modal-link-github" href="' + l.url + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.302-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>' +
        ' ' + l.label + '</a>';
    });
  }
  if (d.hackclub) {
    d.hackclub.forEach(function(l) {
      links += '<a class="modal-link modal-link-hackclub" href="' + l.url + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' +
        ' ' + l.label + '</a>';
    });
  }
  if (!links) return '';
  return '<div class="modal-links-section">' + links + '</div>';
}

function buildModalImagesHTML(key) {
  const d = PROJECT_DETAILS[key];
  if (!d || !d.images || !d.images.length) return '';
  var imgClass = key === 'hackpad' ? 'modal-thumb modal-thumb-square' : 'modal-thumb';
  return '<div class="modal-images">' +
    d.images.map(function(src) {
      return '<img src="' + src + '" alt="" class="' + imgClass + '" />';
    }).join('') +
    '</div>';
}

function buildModalVideoHTML(key) {
  const d = PROJECT_DETAILS[key];
  if (!d || !d.video) return '';
  const cls = d.videoPortrait ? 'modal-video modal-video-portrait' : 'modal-video';
  if (d.video.includes('youtube.com/embed') || d.video.includes('youtu.be')) {
    return '<div class="' + cls + '"><iframe src="' + d.video + '" frameborder="0" allowfullscreen></iframe></div>';
  }
  return '<div class="' + cls + '"><video controls><source src="' + d.video + '"></video></div>';
}

function buildModalHTML(key, badgeHTML) {
  var base = PROJECT_DETAILS[key];
  if (!base) return '';
  var fr = (window._currentLang === 'fr' && PROJECT_DETAILS_FR[key]) ? PROJECT_DETAILS_FR[key] : {};
  var title = fr.title || base.title;
  var description = fr.description || base.description;
  return badgeHTML +
    '<h2>' + title + '</h2>' +
    '<p>' + description + '</p>' +
    buildModalImagesHTML(key) +
    buildModalVideoHTML(key) +
    buildLinksHTML(key) +
    buildProgressHTML(key);
}

window.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.projects-grid .project');
  const modalBg = document.getElementById('modal-bg');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  // Inject tags into each project card
  projects.forEach(function(project, idx) {
    const key = PROJECT_KEYS[idx];
    if (key && PROJECT_TAGS[key]) {
      const tagsEl = document.createElement('div');
      tagsEl.className = 'tags-list';
      tagsEl.innerHTML = PROJECT_TAGS[key].map(function(t) {
        return '<span class="tag tag-' + t[1] + '">' + t[0] + '</span>';
      }).join('');
      project.appendChild(tagsEl);
    }
  });

  if (projects.length && modalBg && modalBody && modalClose) {
    projects.forEach(function(project, idx) {
      project.style.cursor = 'pointer';
      project.addEventListener('click', function() {
        const key = PROJECT_KEYS[idx];
        if (key && PROJECT_DETAILS[key]) {
          const badge = project.querySelector('.done-badge, .prod-badge, .wip-badge');
          const badgeHTML = badge ? '<div style="margin-bottom:12px">' + badge.outerHTML + '</div>' : '';
          modalBody.innerHTML = buildModalHTML(key, badgeHTML);
          modalBg.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    modalClose.addEventListener('click', function() {
      modalBg.style.display = 'none';
      document.body.style.overflow = '';
    });
    modalBg.addEventListener('click', function(e) {
      if (e.target === modalBg) {
        modalBg.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navDropdown = document.getElementById('nav-dropdown');

  if (hamburger && navDropdown) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navDropdown.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      if (!navDropdown.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        navDropdown.classList.remove('open');
      }
    });
  }

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyLang(window._currentLang === 'fr' ? 'en' : 'fr');
    });
  });
  // Init language from localStorage
  applyLang(localStorage.getItem('lang') || 'en');

  // ── Project filters ──────────────────────────────────────
  var activeFilters = { domain: 'all', difficulty: 'all' };

  function applyProjectFilters() {
    document.querySelectorAll('.projects-grid .project[data-key]').forEach(function(card) {
      var key = card.getAttribute('data-key');
      var meta = PROJECT_META[key];
      if (!meta) return;
      var domainOk = activeFilters.domain === 'all' || meta.domain.includes(activeFilters.domain);
      var diffOk   = activeFilters.difficulty === 'all' || meta.difficulty === activeFilters.difficulty;
      card.classList.toggle('hidden-by-filter', !(domainOk && diffOk));
    });
  }

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var group = btn.getAttribute('data-filter');
      var value = btn.getAttribute('data-value');
      activeFilters[group] = value;
      document.querySelectorAll('.filter-btn[data-filter="' + group + '"]').forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      applyProjectFilters();
    });
  });
  // ─────────────────────────────────────────────────────────

  // Legend popup
  const legendBtn = document.getElementById('legend-btn');
  const legendPopup = document.getElementById('legend-popup');

  if (legendBtn && legendPopup) {
    legendBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      legendPopup.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!legendPopup.contains(e.target) && e.target !== legendBtn) {
        legendPopup.classList.remove('open');
      }
    });
  }
});

// ── WIP roadmap toggle ──
(function() {
  var btn = document.getElementById('wip-roadmap-btn');
  var panel = document.getElementById('wip-roadmap');
  if (!btn || !panel) return;
  btn.addEventListener('click', function() {
    var open = panel.classList.toggle('open');
    btn.textContent = open ? '// what\'s coming \u2191' : '// what\'s coming \u2193';
  });
})();

// ── Global binary reveal on mouse ──
(function() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.getElementById('binary-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'binary-canvas';
    document.body.appendChild(canvas);
  }
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var fontSize = 12;
  var charW = fontSize * 0.6;  // approx monospace width
  var radius = 25;
  var trailMax = 40;
  var trail = [];
  var pointer = { x: -999, y: -999 };
  var lastMoveTime = 0;
  var fadeDelay = 300;
  var resumeBoost = 1;     // multiplier that ramps 0→1 when resuming mid-fade
  var resumeStart = 0;     // timestamp when movement resumed
  var wasFading = false;    // was the effect fading when mouse moved again?
  var rampUpDuration = 400; // ms to ramp back to full brightness

  // Interpolate between two points so trail stays dense even at fast moves
  function addTrailPoint(x, y) {
    // Detect resume mid-fade: capture current fade level
    var now = Date.now();
    var elapsed = now - lastMoveTime;
    if (elapsed > fadeDelay && !wasFading) {
      wasFading = true;
    }
    if (wasFading) {
      // Compute what trailFade/globalFade were just before this move
      var oldTrailFade = Math.max(0, 1 - (elapsed - fadeDelay) / 800);
      var oldGlobalFade = elapsed > fadeDelay + 800
        ? Math.max(0, 1 - (elapsed - fadeDelay - 800) / 1200) : 1;
      resumeBoost = Math.min(oldTrailFade, oldGlobalFade);
      resumeBoost = Math.max(0.01, resumeBoost);
      resumeStart = now;
      wasFading = false;
      // Clear old trail points so they don't pop back
      trail.length = 0;
    }

    if (trail.length > 0) {
      var last = trail[trail.length - 1];
      var dx = x - last.x, dy = y - last.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var step = charW * 2;
      if (dist > step) {
        var n = Math.floor(dist / step);
        for (var i = 1; i <= n; i++) {
          trail.push({ x: last.x + dx * (i / (n + 1)), y: last.y + dy * (i / (n + 1)) });
        }
      }
    }
    trail.push({ x: x, y: y });
    while (trail.length > trailMax) trail.shift();
    lastMoveTime = now;
  }

  // Stable grid of real binary bytes
  var gridCols = 0, gridRows = 0, grid = [];
  function buildGrid() {
    gridCols = Math.ceil(window.innerWidth / charW) + 2;
    gridRows = Math.ceil(window.innerHeight / fontSize) + 2;
    grid = [];
    for (var r = 0; r < gridRows; r++) {
      var row = '';
      while (row.length < gridCols) {
        row += ('00000000' + Math.floor(Math.random() * 256).toString(2)).slice(-8);
      }
      grid.push(row);
    }
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildGrid();
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', function(e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    addTrailPoint(e.clientX, e.clientY);
  }, { passive: true });
  document.addEventListener('touchmove', function(e) {
    if (e.touches && e.touches[0]) {
      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;
      addTrailPoint(pointer.x, pointer.y);
    }
  }, { passive: true });
  // Scroll counts as movement — shift trail by scroll delta to leave a trace
  var lastScrollY = window.scrollY || window.pageYOffset || 0;
  window.addEventListener('scroll', function() {
    var sy = window.scrollY || window.pageYOffset || 0;
    var dy = sy - lastScrollY;
    lastScrollY = sy;
    if (pointer.x < -900) return;
    // Shift existing trail points so they appear to stick to the page
    for (var i = 0; i < trail.length; i++) {
      trail[i].y -= dy;
    }
    // Add current pointer position as new point
    addTrailPoint(pointer.x, pointer.y);
  }, { passive: true });

  function draw() {
    var now = Date.now();
    var elapsed = now - lastMoveTime;

    // Ramp-up multiplier when resuming mid-fade
    var ramp = 1;
    if (resumeBoost < 1) {
      var rampElapsed = now - resumeStart;
      ramp = resumeBoost + (1 - resumeBoost) * Math.min(1, rampElapsed / rampUpDuration);
      if (ramp >= 0.99) { resumeBoost = 1; ramp = 1; }
    }

    // trailFade: trail behind cursor fades 1→0 over 800ms
    var trailFade = 1;
    if (elapsed > fadeDelay) {
      trailFade = Math.max(0, 1 - (elapsed - fadeDelay) / 800);
    }
    // globalFade: cursor zone fades 1→0 over 1.2s, starts when trail is gone
    var globalFade = 1;
    if (elapsed > fadeDelay + 800) {
      globalFade = Math.max(0, 1 - (elapsed - fadeDelay - 800) / 1200);
    }

    // Apply ramp to both fades
    trailFade *= ramp;
    globalFade *= ramp;

    // Clear trail when everything fully faded
    if (trailFade <= 0 && globalFade <= 0) { trail.length = 0; }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (trail.length === 0) { requestAnimationFrame(draw); return; }

    ctx.font = fontSize + 'px "Fira Code", monospace';
    ctx.textBaseline = 'top';

    // For each cell, find max opacity from all trail points
    var startCol = gridCols, endCol = 0, startRow = gridRows, endRow = 0;
    // Compute bounding box of all trail points
    for (var t = 0; t < trail.length; t++) {
      var r0 = radius + (t === trail.length - 1 ? 2 : 0);
      var sc = Math.max(0, Math.floor((trail[t].x - r0) / charW) - 1);
      var ec = Math.min(gridCols, Math.ceil((trail[t].x + r0) / charW) + 1);
      var sr = Math.max(0, Math.floor((trail[t].y - r0) / fontSize) - 1);
      var er = Math.min(gridRows, Math.ceil((trail[t].y + r0) / fontSize) + 1);
      if (sc < startCol) startCol = sc;
      if (ec > endCol) endCol = ec;
      if (sr < startRow) startRow = sr;
      if (er > endRow) endRow = er;
    }

    for (var r = startRow; r < endRow; r++) {
      for (var c = startCol; c < endCol; c++) {
        var ch = grid[r] ? grid[r][c] : '0';
        var cx = c * charW + charW * 0.5;
        var cy = r * fontSize + fontSize * 0.5;

        // Find best opacity from trail
        var bestOp = 0;
        for (var t = 0; t < trail.length; t++) {
          var age = (t + 1) / trail.length; // 0→1
          // Trail points fade with trailFade, newest point (cursor) fades with globalFade
          var pointFade = (t === trail.length - 1) ? globalFade : (age * trailFade);
          var dx = cx - trail[t].x;
          var dy = cy - trail[t].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius) {
            var falloff = 1 - dist / radius;
            var op = pointFade * falloff;
            if (op > bestOp) bestOp = op;
          }
        }
        if (bestOp < 0.01) continue;

        var bright = (ch === '1' && Math.random() > 0.8);
        ctx.fillStyle = bright
          ? 'rgba(200,255,230,' + (bestOp * 0.9).toFixed(2) + ')'
          : 'rgba(0,255,136,' + (bestOp * 0.55).toFixed(2) + ')';
        ctx.fillText(ch, c * charW, r * fontSize);
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Binary rain on WIP splash ──
(function() {
  var canvas = document.getElementById('wip-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var fontSize = 13;
  var cols, drops;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols  = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: cols }, function() {
      return Math.floor(Math.random() * -50);
    });
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px "Fira Code", monospace';

    for (var i = 0; i < drops.length; i++) {
      var bright = Math.random() > 0.92;
      ctx.fillStyle = bright ? '#ffffff' : '#00ff88';
      var char = Math.random() > 0.5 ? '1' : '0';
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  var rafId;
  var frame = 0;
  function loop() {
    frame++;
    if (frame % 3 === 0) draw();
    rafId = requestAnimationFrame(loop);
  }
  loop();

  // Stop animation when splash is dismissed to save resources
  var wipBtn = document.getElementById('wip-enter-btn');
  if (wipBtn) {
    wipBtn.addEventListener('click', function() {
      cancelAnimationFrame(rafId);
    });
  }
})();
