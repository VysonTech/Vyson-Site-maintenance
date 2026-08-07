const completionDate = new Date('2026-09-10T23:59:59+03:00');
const launchDate = new Date('2026-08-10T00:00:00+03:00');
const totalWindow = completionDate - launchDate;

const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const progressStage = document.getElementById('progressStage');
const countdownMain = document.getElementById('countdownMain');
const liveStatus = document.getElementById('liveStatus');
const liveStatusDetail = document.getElementById('liveStatusDetail');
const statusLabel = document.getElementById('statusLabel');

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const distance = completionDate - now;

  if (distance <= 0) {
    countdownMain.textContent = '00d 00h 00m 00s';
    progressFill.style.width = '100%';
    progressPercent.textContent = '100%';
    progressStage.textContent = 'Ready to launch';
    liveStatus.textContent = 'Launch complete';
    liveStatusDetail.textContent = 'The upgrade window has ended and the new experience is live.';
    statusLabel.textContent = 'Live';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownMain.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

  const elapsed = Math.max(0, Math.min(1, (Date.now() - launchDate.getTime()) / totalWindow));
  const percent = Math.round(elapsed * 100);

  progressFill.style.width = `${Math.max(8, Math.min(100, percent))}%`;
  progressPercent.textContent = `${Math.max(8, Math.min(100, percent))}%`;

  if (percent < 35) {
    progressStage.textContent = 'Planning and setup';
    liveStatus.textContent = 'Deploying infrastructure';
    liveStatusDetail.textContent = 'Server, database, and front-end improvements are being prepared.';
    statusLabel.textContent = 'Deploying upgrade';
  } else if (percent < 70) {
    progressStage.textContent = 'Refining platform';
    liveStatus.textContent = 'Implementation in progress';
    liveStatusDetail.textContent = 'Core components, layout polish, and performance improvements are underway.';
    statusLabel.textContent = 'Refining upgrade';
  } else {
    progressStage.textContent = 'Final testing';
    liveStatus.textContent = 'Testing and review';
    liveStatusDetail.textContent = 'The build is being checked carefully before public relaunch.';
    statusLabel.textContent = 'Final checks';
  }
}

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
}

function subtleParallax() {
  const page = document.getElementById('page');
  if (!page) return;

  page.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    const ambient1 = document.querySelector('.ambient-1');
    const ambient2 = document.querySelector('.ambient-2');
    if (ambient1) ambient1.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    if (ambient2) ambient2.style.transform = `translate(${x * -0.25}px, ${y * -0.25}px)`;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  revealOnScroll();
  subtleParallax();
});
