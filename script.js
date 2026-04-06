// Custom content for each project (HTML or text)
const projectContents = [
  '<h2>Remote Control Plane</h2><p>RC plane project: design, build, and fly your own remote-controlled aircraft.</p>',
  '<h2>Space Collector</h2><p>Arcade game made with Sprig. Collect items in space and avoid obstacles!</p>',
  '<h2>Fan Plane Reactor</h2><p>Mini jet engine for model planes. Engineering, 3D printing, and testing.</p>',
  '<h2>HackPad</h2><p>Custom macropad for productivity and fun. Fully programmable keys.</p>',
  '<h2>APX Devboard</h2><p>Custom development board for embedded projects and prototyping.</p>',
  '<h2>Spotify Display</h2><p>Real-time Spotify music display and controller. See what’s playing instantly.</p>',
  '<h2>CubeSat Project</h2><p>Student CubeSat: design, integration, and mission planning for a small satellite.</p>',
  '<h2>Robotic Arm</h2><p>AI-enhanced robotic arm for automation and learning. Vision and control included.</p>',
  '<h2>Launch Watch API</h2><p>API for tracking rocket launches and space events in real time.</p>'
];

window.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.projects-grid .project');
  const modalBg = document.getElementById('modal-bg');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  if (projects.length && modalBg && modalBody && modalClose) {
    projects.forEach((project, idx) => {
      project.style.cursor = 'pointer';
      project.addEventListener('click', () => {
        if (projectContents[idx]) {
          const badge = project.querySelector('.done-badge, .prod-badge, .wip-badge');
          const badgeHTML = badge ? `<div style="margin-bottom:12px">${badge.outerHTML}</div>` : '';
          modalBody.innerHTML = badgeHTML + projectContents[idx];
          modalBg.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    modalClose.addEventListener('click', () => {
      modalBg.style.display = 'none';
      document.body.style.overflow = '';
    });
    modalBg.addEventListener('click', (e) => {
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
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navDropdown.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
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
    legendBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      legendPopup.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!legendPopup.contains(e.target) && e.target !== legendBtn) {
        legendPopup.classList.remove('open');
      }
    });
  }
});
