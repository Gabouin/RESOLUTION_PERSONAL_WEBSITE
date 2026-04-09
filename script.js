// ============================================================
// PROJECT CONFIG — Edit here to update tags & progress
// ============================================================

// Order matches the project cards in index.html: Completed → In Production → In Development
const PROJECT_KEYS = [
  "rc-plane", "space-collector", "fan-reactor", "electric-lighter", "ttl-siren",
  "hackpad", "3d-rc-plane",
  "apx-devboard", "spotify-display", "cubesat", "robotic-arm", "launch-api"
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
  "electric-lighter": { progress: 100, steps: ["Design", "Electronics", "3D Print", "Assembly", "Testing"],            currentStep: 4 },
  "ttl-siren":        { progress: 100, steps: ["Idea", "Simulation", "Schematic Design", "PCB Design", "Design Approved"],                   currentStep: 4 }
};

// Tag format: [label, category]  —  categories: lang | hw | fab | tool | domain
const PROJECT_TAGS = {
  "rc-plane":        [["RC Electronics","hw"],      ["Aerodynamics","domain"],      ["Servo Control","hw"]],
  "space-collector": [["Python","lang"],            ["Game Dev","domain"],          ["Pygame","lang"]],
  "fan-reactor":     [["CAD","tool"],               ["Electronics","hw"],           ["Motor","hw"]],
  "hackpad":         [["RP2040","hw"],              ["KMK","tool"],                 ["PCB Design","tool"]],
  "apx-devboard":    [["PCB Design","tool"],        ["Embedded Systems","domain"],  ["KiCad","tool"]],
  "spotify-display": [["ESP32","hw"],               ["C++","lang"],                 ["Spotify API","tool"],  ["SPI Display","hw"]],
  "cubesat":         [["Aerospace","domain"],       ["Embedded Systems","domain"],  ["PCB Design","tool"],   ["Sensors","hw"]],
  "robotic-arm":     [["ESP32","hw"],               ["Servo Control","hw"],         ["C++","lang"],          ["AI","domain"],   ["Robotics","domain"]],
  "launch-api":      [["Raspberry Pi","hw"],        ["Python","lang"],              ["REST API","tool"],     ["Web Server","tool"]],
  "3d-rc-plane":     [["RC Electronics","hw"],      ["CAD","tool"],                 ["Light Weight 3D Printing","fab"],   ["Aerodynamics","domain"]],
  "electric-lighter":[["Basic Hardware","hw"],     ["Heating elements","hw"],      ["3D Printing","fab"]],
  "ttl-siren":       [["TTL Logic","hw"],           ["Electronic Simulation","hw"],           ["PCB Design","tool"]]
};

// ============================================================

// Rich modal content for each project
// images: small photos shown in the modal (filenames in the site folder)
// video:  YouTube embed URL or direct .mp4 path (null = no video)
// github: array of { url, label }
// hackclub: array of { url, label }
const PROJECT_DETAILS = {
  "rc-plane": {
    title: "Remote Control Plane",
    description: "RC plane built with styrofoam and 3D printed parts. Uses servo motors, a brushless motor, a propeller, ESC, receiver and transmitter. I designed the structure on Canva and modelled it in Fusion 360. The plane is lightweight and flies well, with a flight time of around 5 minutes.",
    images: ["gabin rc plane.png"],
    video: "https://www.youtube.com/embed/v7-GCenTMmM",
    github: [{ url: "https://github.com/Gabouin/Gabs-RC-plane", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/6271", label: "Hack Club" }]
  },
  "space-collector": {
    title: "Space Collector",
    description: "Small arcade game built in JavaScript for the Sprig console by Hack Club. Collect items in space and avoid obstacles!",
    images: ["sprig.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Space-collector", label: "GitHub" }],
    hackclub: [{ url: "https://sprig.hackclub.com/", label: "Hack Club" }]
  },
  "fan-reactor": {
    title: "Fan Plane Reactor",
    description: "3D printed fan that looks like a plane reactor. Powered via USB-C, with a switch and a potentiometer to regulate the motor speed. I love the look of airplane reactors and this project only requires basic electronics and 3D printed parts.",
    images: ["fan plane reactor.png"],
    video: "https://www.youtube.com/embed/CXMXyju0Se0",
    github: [{ url: "https://github.com/Gabouin/fan-plane-reactor", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/11654", label: "Hack Club" }]
  },
  "electric-lighter": {
    title: "Electric Lighter",
    description: "Electric lighter built from a vape battery found on the ground, a charging module, a toaster heating element, and a 3D-printed enclosure. Will be used to start campfires or just burn things for fun!",
    images: ["el.png"],
    video: "el.mp4",
    videoPortrait: true,
    github: [{ url: "https://github.com/Gabouin/Electric-lighter", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmnkcivyz015901po8n7ddugv", label: "Hack Club" }]
  },
  "ttl-siren": {
    title: "TTL Based Police Siren",
    description: "Police siren built with an astable multivibrator using BJT transistors, no microcontroller. Two transistors alternately switch on/off, making blue and red LEDs blink like a siren. PCB is shaped like a police siren in KiCad. Made for RESOLUTION Hack Club week 2.",
    images: ["TTL.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/RESOLUTION-ACTIVE-COMPONENTS", label: "GitHub" }],
    hackclub: [{ url: "https://resolution.hackclub.com/app/pathway/hardware/week/2", label: "Hack Club" }]
  },
  "hackpad": {
    title: "HackPad",
    description: "Custom macropad with 6 switches, a rotary encoder (volume control), an OLED display (animations per key), and an RP2040 microcontroller. Can be used for different tasks while working. PCB designed in KiCad, enclosure designed in Fusion 360.",
    images: ["hackpad.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Gab-s-Hackpad", label: "GitHub" }],
    hackclub: [{ url: "https://blueprint.hackclub.com/projects/13108", label: "Hack Club" }]
  },
  "3d-rc-plane": {
    title: "3D Printed RC Plane",
    description: "The second version of my RC plane but fully 3d printed with grey lightweight PLA and better aerodynamics, as it's a completly new model.",
    images: ["3D plane.png"],
    video: null,
    github: [],
    hackclub: []
  },
  "apx-devboard": {
    title: "APX Devboard",
    description: "APX stands for APEX, the pinnacle, absolute excellence. It's basically a custom development board designed for embedded projects and prototyping.",
    images: ["devboard.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/APX-devboard", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmneq8qhn000401o4qvnlucgr", label: "Hack Club" }]
  },
  "spotify-display": {
    title: "Spotify Display",
    description: "ESP32-based real-time Spotify music display with SPI screen. Shows the currently playing track and enables control without touching your phone.",
    images: ["display.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/APX-spotify-display", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmnhoon33003901t8pogxgjfx", label: "Hack Club" }]
  },
  "cubesat": {
    title: "CubeSat Project",
    description: "Student CubeSat packed with sensors and electronics, designed to be launched into the stratosphere with a helium balloon. Mission planning, PCB design, and full integration.",
    images: ["cubesat.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Gabs-CubeSat", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmmyufcqi00i501rye3hjri9z", label: "Hack Club" }]
  },
  "robotic-arm": {
    title: "Robotic Arm",
    description: "Robotic arm built with powerful servomotors salvaged from an old humanoid robot. AI-enhanced with vision and control for automation and learning.",
    images: ["arm.png"],
    video: null,
    github: [{ url: "https://github.com/Gabouin/Robotic-Arm", label: "GitHub" }],
    hackclub: [{ url: "https://stasis.hackclub.com/dashboard/projects/cmmyufcqi00i501rye3hjri9z", label: "Hack Club" }]
  },
  "launch-api": {
    title: "Launch Watch API",
    description: "REST API hosted on a Raspberry Pi for tracking rocket launches and space events in real time. Aggregates data from multiple sources.",
    images: ["raspapi.png"],
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
  return '<div class="modal-images">' +
    d.images.map(function(src) {
      return '<img src="' + src + '" alt="" class="modal-thumb" />';
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
  const d = PROJECT_DETAILS[key];
  if (!d) return '';
  return badgeHTML +
    '<h2>' + d.title + '</h2>' +
    '<p>' + d.description + '</p>' +
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
