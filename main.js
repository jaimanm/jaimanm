// Quantum Portfolio Interactive Functionality
class QuantumPortfolio {
    constructor() {
        this.currentFilter = 'all';
        this.projects = [];
        this.init();
    }
    
    init() {
        this.setupTypewriter();
        this.setupQuantumBackground();
        this.setupQuantumCircuit();
        this.setupScrollAnimations();
        this.setupProjectFiltering();
        this.setupSkillAnimations();
        this.setupParticleSystem();
    }
    
    setupTypewriter() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Quantum Computing Researcher',
                'Machine Learning Engineer', 
                'Software Developer',
                'AI & Quantum Enthusiast'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    }
    
    setupQuantumBackground() {
        // P5.js quantum field visualization
        new p5((p) => {
            let particles = [];
            let time = 0;
            
            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('quantum-bg');
                canvas.style('position', 'fixed');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '-1');
                
                // Initialize particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(1, 3),
                        phase: p.random(p.TWO_PI)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                time += 0.01;
                
                // Draw quantum field lines
                p.stroke(45, 212, 191, 30);
                p.strokeWeight(1);
                p.noFill();
                
                for (let x = 0; x < p.width; x += 100) {
                    for (let y = 0; y < p.height; y += 100) {
                        const wave = p.sin(time + x * 0.01 + y * 0.01) * 20;
                        p.ellipse(x, y, 50 + wave, 50 + wave);
                    }
                }
                
                // Update and draw particles
                particles.forEach((particle, index) => {
                    // Update position
                    particle.x += particle.vx + p.sin(time + particle.phase) * 0.2;
                    particle.y += particle.vy + p.cos(time + particle.phase) * 0.2;
                    
                    // Wrap around screen
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    const alpha = p.map(p.sin(time + index), -1, 1, 50, 150);
                    p.fill(45, 212, 191, alpha);
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size, particle.size);
                    
                    // Draw connections to nearby particles
                    particles.forEach((other, otherIndex) => {
                        if (index !== otherIndex) {
                            const distance = p.dist(particle.x, particle.y, other.x, other.y);
                            if (distance < 100) {
                                const connectionAlpha = p.map(distance, 0, 100, 100, 0);
                                p.stroke(139, 92, 246, connectionAlpha);
                                p.strokeWeight(0.5);
                                p.line(particle.x, particle.y, other.x, other.y);
                            }
                        }
                    });
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }
    
    setupQuantumCircuit() {
        const gates = document.querySelectorAll('.quantum-gate');
        
        gates.forEach(gate => {
            gate.addEventListener('click', (e) => {
                const filter = gate.getAttribute('data-filter');
                this.filterProjects(filter);
                
                // Animate gate click
                anime({
                    targets: gate,
                    scale: [1, 1.2, 1],
                    duration: 300,
                    easing: 'easeOutElastic(1, .6)'
                });
                
                // Add active state
                gates.forEach(g => g.classList.remove('active'));
                gate.classList.add('active');
            });
            
            // Hover effects
            gate.addEventListener('mouseenter', () => {
                anime({
                    targets: gate,
                    scale: 1.1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
            
            gate.addEventListener('mouseleave', () => {
                if (!gate.classList.contains('active')) {
                    anime({
                        targets: gate,
                        scale: 1,
                        duration: 200,
                        easing: 'easeOutQuad'
                    });
                }
            });
        });
    }
    
    setupProjectFiltering() {
        this.projects = document.querySelectorAll('.project-card');
        
        // Set initial state
        this.projects.forEach((project, index) => {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            // Stagger initial animation
            setTimeout(() => {
                anime({
                    targets: project,
                    opacity: 1,
                    translateY: 0,
                    duration: 600,
                    easing: 'easeOutQuad'
                });
            }, index * 100);
        });
    }
    
    filterProjects(filter) {
        this.currentFilter = filter;
        
        this.projects.forEach((project, index) => {
            const categories = project.getAttribute('data-category');
            const shouldShow = filter === 'all' || categories.includes(filter);
            
            if (shouldShow) {
                // Show project with animation
                setTimeout(() => {
                    anime({
                        targets: project,
                        opacity: 1,
                        scale: 1,
                        translateY: 0,
                        duration: 400,
                        easing: 'easeOutQuad'
                    });
                }, index * 50);
                project.style.display = 'block';
            } else {
                // Hide project with animation
                anime({
                    targets: project,
                    opacity: 0,
                    scale: 0.8,
                    translateY: -20,
                    duration: 300,
                    easing: 'easeInQuad',
                    complete: () => {
                        project.style.display = 'none';
                    }
                });
            }
        });
    }
    
    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('glass-effect')) {
                        anime({
                            targets: element,
                            opacity: [0, 1],
                            translateY: [20, 0],
                            duration: 600,
                            easing: 'easeOutQuad'
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe all glass effect elements
        document.querySelectorAll('.glass-effect').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
    
    setupSkillAnimations() {
        // Animate skill bars when they come into view
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.animationDelay = `${index * 0.1}s`;
                        }, 100);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.glass-effect').forEach(el => {
            skillObserver.observe(el);
        });
    }
    
    setupParticleSystem() {
        // Add floating particles around the hero section
        const heroSection = document.querySelector('.hero-image');
        if (heroSection) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'quantum-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (4 + Math.random() * 4) + 's';
                heroSection.appendChild(particle);
            }
        }
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuantumPortfolio();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'fixed inset-0 bg-quantum-navy z-50 flex items-center justify-center';
    loadingOverlay.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-ionq-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-ionq-teal font-mono">Initializing quantum state...</p>
        </div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Remove loading overlay after page loads
    window.addEventListener('load', () => {
        anime({
            targets: loadingOverlay,
            opacity: 0,
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => {
                loadingOverlay.remove();
            }
        });
    });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumPortfolio;
}