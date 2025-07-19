

// Terminal Animation
const typewriterElement = document.getElementById('typewriter');
const terminalOutput = document.getElementById('terminal-output');

const commands = [
    'vibe-coder create app "E-commerce platform with React and Node.js"',
    'vibe-coder add feature "User authentication with JWT"',
    'vibe-coder add feature "Shopping cart with Stripe integration"',
    'vibe-coder add feature "Admin dashboard with analytics"',
    'vibe-coder deploy production',
    'vibe-coder optimize performance'
];

const outputs = [
    [
        '> Analyzing requirements...',
        '> Generating project structure...',
        '> Creating React components...',
        '> Setting up Node.js backend...',
        '> Configuring database...',
        '> ✓ E-commerce platform created successfully!',
        '> 📁 src/components/ProductList.jsx',
        '> 📁 src/components/ShoppingCart.jsx',
        '> 📁 server/routes/api.js',
        '> 📁 server/models/Product.js'
    ],
    [
        '> Implementing authentication system...',
        '> Setting up JWT tokens...',
        '> Creating user registration...',
        '> Adding login/logout functionality...',
        '> ✓ User authentication added!'
    ],
    [
        '> Integrating Stripe payment system...',
        '> Creating checkout flow...',
        '> Setting up webhook handlers...',
        '> Adding order management...',
        '> ✓ Shopping cart with payments ready!'
    ],
    [
        '> Building admin dashboard...',
        '> Creating analytics charts...',
        '> Adding user management...',
        '> Setting up product inventory...',
        '> ✓ Admin dashboard deployed!'
    ],
    [
        '> Building production bundle...',
        '> Optimizing assets...',
        '> Setting up CDN...',
        '> Configuring SSL certificates...',
        '> ✓ Application deployed to production!',
        '> 🌐 https://my-ecommerce-app.vercel.app'
    ],
    [
        '> Analyzing performance metrics...',
        '> Implementing code splitting...',
        '> Optimizing images and assets...',
        '> Setting up caching strategies...',
        '> ✓ Performance improved by 75%!',
        '> ⚡ Lighthouse score: 95/100'
    ]
];

let currentCommandIndex = 0;
let currentCharIndex = 0;
let isTyping = true;
let isProcessing = false;

function typeCommand() {
    if (currentCommandIndex >= commands.length) {
        currentCommandIndex = 0;
    }
    
    const currentCommand = commands[currentCommandIndex];
    
    if (isTyping && currentCharIndex < currentCommand.length) {
        typewriterElement.textContent += currentCommand[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeCommand, 50);
    } else if (isTyping) {
        isTyping = false;
        isProcessing = true;
        setTimeout(executeCommand, 1000);
    }
}

function executeCommand() {
    const output = outputs[currentCommandIndex];
    let outputIndex = 0;
    
    function addOutputLine() {
        if (outputIndex < output.length) {
            const line = document.createElement('div');
            line.textContent = output[outputIndex];
            
            // Add color classes based on content
            if (output[outputIndex].includes('✓') || output[outputIndex].includes('🌐') || output[outputIndex].includes('⚡')) {
                line.className = 'success';
            } else if (output[outputIndex].includes('>')) {
                line.className = 'info';
            }
            
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            outputIndex++;
            setTimeout(addOutputLine, 300);
        } else {
            // Reset for next command
            setTimeout(() => {
                typewriterElement.textContent = '';
                terminalOutput.innerHTML = '';
                currentCharIndex = 0;
                isTyping = true;
                isProcessing = false;
                currentCommandIndex = (currentCommandIndex + 1) % commands.length;
                setTimeout(typeCommand, 1000);
            }, 2000);
        }
    }
    
    addOutputLine();
}

// Start the animation
setTimeout(typeCommand, 1000);

// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to buttons
document.querySelectorAll('.primary-button, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        e.target.style.setProperty('--mouse-x', `${x}px`);
        e.target.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeHeroTitle() {
        if (i < text.length) {
            heroTitle.innerHTML = text.slice(0, i + 1);
            i++;
            setTimeout(typeHeroTitle, 30);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeHeroTitle, 500);
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseFloat(target);
        const suffix = target.replace(/[0-9.]/g, '');
        
        if (!isNaN(numericValue)) {
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

