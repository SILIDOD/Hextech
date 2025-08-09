        //  // Set minimum load time to 5 seconds (5000ms)
        //  const MIN_LOAD_TIME = 3000;
        //  const startTime = Date.now();
         
        //  // Progress elements
        //  const progressElement = document.getElementById('progres');
        //  const loader = document.getElementById('loader');
        //  const content = document.getElementById('content');
         
        //  // Simulate progress (slower movement)
        //  let progress = 0;
        //  const progressInterval = setInterval(() => {
        //      // Calculate elapsed time
        //      const elapsed = Date.now() - startTime;
        //      const progressPercent = Math.min(100, (elapsed / MIN_LOAD_TIME) * 100);
             
        //      // Update progress bar smoothly
        //      progress = Math.min(progress + 2, progressPercent);
        //      progressElement.style.width = progress + '%';
             
        //      // Complete when we reach both time and progress
        //      if (elapsed >= MIN_LOAD_TIME && progress >= 100) {
        //          clearInterval(progressInterval);
        //          hideLoader();
        //      }
        //  }, 200);
         
        //  // Fallback if assets take longer than 5 seconds
        //  window.addEventListener('load', function() {
        //      const elapsed = Date.now() - startTime;
        //      const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsed);
             
        //      setTimeout(() => {
        //          progressElement.style.width = '100%';
        //          hideLoader();
        //      }, remainingTime);
        //  });
         
        //  function hideLoader() {
        //      loader.style.opacity = '0';
        //      setTimeout(() => {
        //          loader.style.display = 'none';
        //          content.style.display = 'block';
        //      }, 500); // Match with CSS transition time
        //  }
  
  
  
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      
      // Update icon
      const icon = themeToggle.querySelector('i');
      icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
      
      // Save preference to localStorage
      localStorage.setItem('theme', newTheme);
      
      // Update particles color for light mode
      if (newTheme === 'light') {
          particlesJS("particles-js", {
              "particles": {
                  "color": {
                      "value": "#6a00f4"
                  },
                  "line_linked": {
                      "color": "#6a00f4"
                  }
              }
          });
      } else {
          particlesJS("particles-js", {
              "particles": {
                  "color": {
                      "value": "#00f7ff"
                  },
                  "line_linked": {
                      "color": "#00f7ff"
                  }
              }
          });
      }
  });
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.setAttribute('data-theme', savedTheme);
      const icon = themeToggle.querySelector('i');
      icon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }
  
  // Scroll Animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });
  
  fadeElements.forEach(element => {
      observer.observe(element);
  });
  
  // Typewriter Effect
  const typewriterText = "Code. Design. Manage. Teach. Innovate.";
  const typewriterElement = document.querySelector('.typewriter');
  let i = 0;
  
  function typeWriter() {
      if (i < typewriterText.length) {
          typewriterElement.textContent += typewriterText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
      } else {
          setTimeout(() => {
              typewriterElement.textContent = '';
              i = 0;
              typeWriter();
          }, 2000);
      }
  }
  
  // Start the typewriter effect
  setTimeout(typeWriter, 1000);
  
  // Initialize Particles.js
  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#00f7ff"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              }
          },
          "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#00f7ff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 140,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          
          // Skip if it's just a # with no ID
          if (targetId === '#') {
              return;
          }
          
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Enhanced JavaScript for the animated navigation and robot
  document.addEventListener('DOMContentLoaded', function() {
      // Make the robot character follow scroll
      const robot = document.querySelector('.robot-character');
      let lastScrollY = window.scrollY;
      
      window.addEventListener('scroll', function() {
          const scrollY = window.scrollY;
          const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
          lastScrollY = scrollY;
          
          // Move robot up/down slightly with scroll
          if (scrollDirection === 'down') {
              robot.style.transform = 'translateY(10px)';
          } else {
              robot.style.transform = 'translateY(-5px)';
          }
          
          // Hide robot when scrolling down past 100px
          if (scrollY > 100 && scrollDirection === 'down') {
              robot.style.opacity = '0';
              robot.style.pointerEvents = 'none';
          } else {
              robot.style.opacity = '1';
              robot.style.pointerEvents = 'auto';
          }
      });
      
      // Make robot clickable to scroll to top
      robot.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
      
      // Add hover effect to robot
      robot.addEventListener('mouseenter', function() {
          robot.style.transform = 'scale(1.1) translateY(-5px)';
      });
      
      robot.addEventListener('mouseleave', function() {
          robot.style.transform = 'scale(1) translateY(0)';
      });
      
      // Enhanced dropdown menu behavior
      const dropdowns = document.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', function() {
              const menu = this.querySelector('.dropdown-menu');
              menu.style.display = 'block';
              setTimeout(() => {
                  menu.style.opacity = '1';
                  menu.style.transform = 'scaleY(1)';
              }, 10);
          });
          
          dropdown.addEventListener('mouseleave', function() {
              const menu = this.querySelector('.dropdown-menu');
              menu.style.opacity = '0';
              menu.style.transform = 'scaleY(0)';
              setTimeout(() => {
                  menu.style.display = 'none';
              }, 300);
          });
      });
      
      // Navbar background change on scroll
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', function() {
          if (window.scrollY > 50) {
              navbar.style.background = 'rgba(10, 10, 20, 0.95)';
              navbar.style.boxShadow = '0 4px 30px rgba(0, 247, 255, 0.1)';
          } else {
              navbar.style.background = 'rgba(10, 10, 20, 0.8)';
              navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
          }
      });

      // Enhanced mobile menu functionality
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
          if (!navbarToggler.contains(e.target)) {
              if (!navbarCollapse.contains(e.target)) {
                  if (navbarCollapse.classList.contains('show')) {
                      navbarToggler.click();
                  }
              }
          }
      });
      
      // Smooth scroll for mobile menu links
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
          link.addEventListener('click', function() {
              if (window.innerWidth < 992) {
                  navbarToggler.click();
              }
          });
      });

      // Mobile dropdown menu handling
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
          toggle.addEventListener('click', function(e) {
              if (window.innerWidth < 992) {
                  e.preventDefault();
                  const menu = this.nextElementSibling;
                  const isOpen = menu.classList.contains('show');
                  
                  // Close all other open dropdowns
                  document.querySelectorAll('.dropdown-menu').forEach(m => {
                      if (m !== menu) {
                          m.classList.remove('show');
                      }
                  });
                  
                  // Toggle this one
                  if (!isOpen) {
                      menu.classList.add('show');
                  } else {
                      menu.classList.remove('show');
                  }
              }
          });
      });

      // Close dropdowns when clicking outside on mobile
      document.addEventListener('click', function(e) {
          if (window.innerWidth < 992) {
              if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
                  document.querySelectorAll('.dropdown-menu').forEach(menu => {
                      menu.classList.remove('show');
                  });
              }
          }
      });
  });

  // AI Chat Functionality
  const chatBtn = document.querySelector('.chat-btn');
  const chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
  const chatMessages = document.getElementById('chatMessages');
  const userMessageInput = document.getElementById('userMessage');
  const sendMessageBtn = document.getElementById('sendMessage');

  // Open chat modal when chat button is clicked
  chatBtn.addEventListener('click', () => {
      chatModal.show();
  });

  // Send message function
  function sendMessage() {
      const message = userMessageInput.value.trim();
      if (message) {
          // Add user message to chat
          addMessage(message, 'user');
          userMessageInput.value = '';
          
          // Simulate AI thinking
          setTimeout(() => {
              const aiResponse = generateAIResponse(message);
              addMessage(aiResponse, 'ai');
          }, 1000);
      }
  }

  // Add message to chat
  function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${sender}-message`;
      
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'message-avatar';
      avatarDiv.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'message-content';
      contentDiv.innerHTML = `<p>${text}</p>`;
      
      messageDiv.appendChild(avatarDiv);
      messageDiv.appendChild(contentDiv);
      
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Generate AI response
  function generateAIResponse(message) {
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
          return "Hello there! How can I assist you today?";
      } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
          return "I offer a range of services including web development, UI/UX design, graphic design, video editing, and coding classes. Which service are you interested in?";
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
          return "Pricing depends on the project scope and requirements. Could you tell me more about what you need?";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
          return "You can contact me through the contact form on this website, or email me directly at contact@hextecth.dev";
      } else if (lowerMessage.includes('experience') || lowerMessage.includes('year')) {
          return "I have over 8 years of experience in the tech industry, working on various projects from small websites to large enterprise applications.";
      } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
          return "I've completed over 120 projects across different industries. You can check out some of my featured projects in the Projects section.";
      } else if (lowerMessage.includes('class') || lowerMessage.includes('learn')) {
          return "I offer coding classes for all skill levels. Current courses include Web Development Fundamentals, Advanced JavaScript, UI/UX Design Masterclass, and Full-Stack Development.";
      } else {
          const randomResponses = [
              "That's interesting! Could you tell me more about what you're looking for?",
              "I'd be happy to help with that. What specific information do you need?",
              "Great question! Let me check my knowledge base...",
              "I specialize in that area. What specific aspect are you interested in?",
              "Thanks for your message! How can I assist you further?"
          ];
          return randomResponses[Math.floor(Math.random() * randomResponses.length)];
      }
  }

  // Event listeners for chat
  sendMessageBtn.addEventListener('click', sendMessage);
  userMessageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendMessage();
      }
  });



  // Contact form handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitBtn.classList.add('btn-success');
            form.reset();
        } else {
            // Error
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Error';
        submitBtn.classList.add('btn-danger');
    } finally {
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-success', 'btn-danger');
        }, 3000);
    }
});
