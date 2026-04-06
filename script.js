// ============================================================
// PROJECT CONFIG — Edit here to update tags & progress
// ============================================================

// Order matches the project cards in index.html (top-left to bottom-right)
const PROJECT_KEYS = [
  "rc-plane", "space-collector", "fan-reactor", "hackpad",
  "apx-devboard", "spotify-display", "cubesat", "robotic-arm", "launch-api"
];

const PROJECT_CONFIG = {
  "rc-plane":        { progress: 100, steps: ["Design", "3D Print", "Assembly", "Wiring", "Test Flight"],               currentStep: 4 },
  "space-collector": { progress: 90, steps: ["Concept", "Coding", "Testing", "Published", "Sprig ordered", "Game tested"],        currentStep: 4 },
  "fan-reactor":     { progress: 100, steps: ["Design", "3D Print", "Assembly", "Testing"],                             currentStep: 3 },
  "hackpad":         { progress: 55,  steps: ["Design", "PCB Order", "Assembly", "Firmware", "Testing"],                currentStep: 2 },
  "apx-devboard":    { progress: 15,  steps: ["Specs", "Schematic", "PCB Layout", "Fabrication", "Firmware"],           currentStep: 1 },
  "spotify-display": { progress: 5,  steps: ["Concept", "API Integration", "Display UI", "Hardware", "Assembly"],      currentStep: 0 },
  "cubesat":         { progress: 20,  steps: ["Mission Design", "Architecture", "PCB Design", "Integration", "Testing"], currentStep: 1 },
  "robotic-arm":     { progress: 5,  steps: ["Concept", "Mechanical Design", "Electronics", "AI Integration", "Testing"], currentStep: 0 },
  "launch-api":      { progress: 5,  steps: ["API Design", "Data Sources", "Backend", "Deployment"],                   currentStep: 0 }
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
  "launch-api":      [["Raspberry Pi","hw"],        ["Python","lang"],              ["REST API","tool"],     ["Web Server","tool"]]
};

// ============================================================

// Custom content for each project (HTML or text)
const projectContents = [
  '<h2>Remote Control Plane</h2><p>RC plane project: design, build, and fly your own remote-controlled aircraft.</p>',
  '<h2>Space Collector</h2><p>Arcade game made with Sprig. Collect items in space and avoid obstacles!</p>',
  '<h2>Fan Plane Reactor</h2><p>Mini jet engine for model planes. Engineering, 3D printing, and testing.</p>',
  '<h2>HackPad</h2><p>Custom macropad for productivity and fun. Fully programmable keys.</p>',
  '<h2>APX Devboard</h2><p>Custom development board for embedded projects and prototyping.</p>',
  "<h2>Spotify Display</h2><p>Real-time Spotify music display and controller. See what's playing instantly.</p>",
  '<h2>CubeSat Project</h2><p>Student CubeSat: design, integration, and mission planning for a small satellite.</p>',
  '<h2>Robotic Arm</h2><p>AI-enhanced robotic arm for automation and learning. Vision and control included.</p>',
  '<h2>Launch Watch API</h2><p>API for tracking rocket launches and space events in real time.</p>'
];

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
        if (projectContents[idx]) {
          const key = PROJECT_KEYS[idx];
          const badge = project.querySelector('.done-badge, .prod-badge, .wip-badge');
          const badgeHTML = badge ? '<div style="margin-bottom:12px">' + badge.outerHTML + '</div>' : '';
          modalBody.innerHTML = badgeHTML + projectContents[idx] + buildTagsHTML(key) + buildProgressHTML(key);
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
