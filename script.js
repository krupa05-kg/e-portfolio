/**
 * Krupa K G - Personal Resume & Blog Website
 * Core Client-Side Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. STATE & CONSTANTS
    // -------------------------------------------------------------
    const BLOG_POSTS = [
        {
            id: 1,
            title: "Embracing the Journey: My First Step in the IBM Professional Course",
            date: "June 05, 2026",
            category: "Academic",
            readTime: "4 min read",
            excerpt: "Reflecting on my first month at Reva University enrolled in the IBM Professional Course. Here is what we are learning and why an industry-aligned curriculum makes a difference.",
            content: `
                <p>Starting college is always a major transition, but stepping into the <strong>IBM Professional Course</strong> at <strong>Reva University</strong> has been an especially thrilling milestone. The program is designed to combine the theoretical depth of a computer science degree with IBM's specialized practical developer pathways. In our initial weeks, we've focused heavily on understanding how modern computer systems translate logic into solutions.</p>
                
                <h3>Why Industry Alignment Matters</h3>
                <p>What sets this course apart is the access to IBM-curated labs and modules from day one. Rather than waiting until my final year to understand developer environments, we are introduced to cloud infrastructures and standard developer tooling immediately. It emphasizes coding logic, database relationships, and project management skills that align directly with current global engineering demands.</p>
                
                <blockquote>"The best way to predict the future is to invent it." — Alan Kay. This quote hangs in our department lab and perfectly summarizes our course focus: proactive problem solving.</blockquote>
                
                <h3>Course Focus Areas</h3>
                <p>In our current modules, we are looking closely at:</p>
                <ul>
                    <li>Algorithm design and pseudocode structures.</li>
                    <li>The core philosophy of object-oriented programming.</li>
                    <li>Database structuring and basic relational rules.</li>
                </ul>
                
                <h3>Looking Forward</h3>
                <p>Over the next few semesters, I will be focusing on mastering SQL, Python, and statistical modeling. I plan to document my learning journey here on this blog, sharing code snippets, database schemas, and data visualizations. Stay tuned for my upcoming articles on database modeling!</p>
            `
        },
        {
            id: 2,
            title: "Why SQL and Python Form the Ultimate Foundation for Data Science",
            date: "June 10, 2026",
            category: "Data Science",
            readTime: "5 min read",
            excerpt: "An analysis of why databases and scripting are critical starting blocks for statistical analysis, machine learning, and writing clean backend software.",
            content: `
                <p>As a student aiming for a career in AI and data systems, I frequently get asked: <em>"What should I learn first?"</em> While it is tempting to jump straight into deep neural networks or complex machine learning models, the true foundations are far more humble: <strong>Python</strong> and <strong>SQL</strong>.</p>
                
                <h3>Python: The Developer's Swiss Army Knife</h3>
                <p>Python is the undisputed language of data science. Its readability makes it perfect for prototyping logic, and its vast ecosystem of libraries—like Pandas, NumPy, and Scikit-Learn—enables developers to run complex statistical analyses in just a few lines of code. Learning Python isn't just about syntax; it's about learning computational thinking and object-oriented structure.</p>
                
                <h3>SQL: The Language of Truth</h3>
                <p>Every analysis starts with data, and that data almost always lives in a relational database. If Python is how you think, SQL is how you ask questions. Without SQL, you cannot retrieve, filter, or restructure datasets to prepare them for modeling. Writing efficient subqueries, joins, and aggregates is an essential skill that saves hours of processing time down the line.</p>
                
                <h3>Synergy in Action</h3>
                <p>When you combine SQL's retrieval power with Python's analytical libraries, you can build end-to-end pipelines. In my projects, I retrieve academic or demographic indices using SQL queries, load them into Python dataframes, and perform statistical modeling. This workflow is the backbone of professional data science. Mastering these early on makes learning advanced topics like machine learning significantly easier.</p>
            `
        },
        {
            id: 3,
            title: "An Introduction to Relational Database Schema Design",
            date: "June 12, 2026",
            category: "SQL",
            readTime: "6 min read",
            excerpt: "A beginner-friendly guide to Entity-Relationship diagrams, normal forms, and building clean structures for student management systems.",
            content: `
                <p>In database systems, poor initial structure leads to severe redundancies and potential data corruption. Designing a database schema requires careful modeling of real-world entities. Today, we'll look at the key concepts of database design through the lens of a University Student Database.</p>
                
                <h3>1. Identifying Entities and Relationships</h3>
                <p>Before writing DDL queries, we must identify the main entities. In our university system, these are <strong>Students</strong>, <strong>Courses</strong>, <strong>Instructors</strong>, and <strong>Enrollments</strong>. We map their relationships: a Student can enroll in multiple Courses (Many-to-Many), which we resolve using a junction table called Enrollments.</p>
                
                <h3>2. Normalization: Eliminating Redundancy</h3>
                <p>Normalization is the process of organizing data to reduce replication. We aim for Third Normal Form (3NF) in standard applications:</p>
                <ul>
                    <li><strong>1NF (First Normal Form):</strong> Atomic values (no repeating groups).</li>
                    <li><strong>2NF (Second Normal Form):</strong> Meets 1NF, and all non-key columns depend fully on the primary key (no partial dependency).</li>
                    <li><strong>3NF (Third Normal Form):</strong> Meets 2NF, and no non-key columns depend transitively on the primary key (no transitive dependency).</li>
                </ul>
                
                <h3>Example DDL Script</h3>
                <p>Here is a basic SQL structure for defining our tables:</p>
                <pre style="background: var(--bg-secondary); padding: 15px; border-radius: var(--radius-sm); border: 1px solid var(--card-border); overflow-x: auto; font-family: monospace; font-size: 0.9rem; margin-bottom: 20px; color: var(--text-primary);"><code>CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    enrollment_date DATE
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(150) NOT NULL,
    credits INT DEFAULT 3
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT REFERENCES Students(student_id),
    course_id INT REFERENCES Courses(course_id),
    grade VARCHAR(2)
);</code></pre>
                
                <p>In future posts, we'll cover indexes and query tuning to ensure rapid search response times as database records scale up.</p>
            `
        }
    ];

    // -------------------------------------------------------------
    // 2. DOM ELEMENTS SELECTORS
    // -------------------------------------------------------------
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Header & Mobile Nav
    const mainHeader = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Typing animation
    const typingTextEl = document.getElementById('typing-text');
    
    // Project Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid-container');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Blog Elements
    const blogPostsContainer = document.getElementById('blog-posts-container');
    const blogSearchInput = document.getElementById('blog-search-input');
    const blogTagFilters = document.getElementById('blog-tag-filters');
    
    // Modal Elements
    const blogReaderModal = document.getElementById('blog-reader-modal');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    
    // Resume download button
    const resumeDownloadBtn = document.getElementById('resume-download-btn');
    
    // Toast Notification
    const toastNotification = document.getElementById('toast-notification');
    const toastTextMsg = document.getElementById('toast-text-msg');
    
    // Reveal sections observer
    const revealSections = document.querySelectorAll('.reveal-section');
    const skillsSection = document.querySelector('.edu-skills-section');
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    // -------------------------------------------------------------
    // 3. THEME TOGGLER (LOCALSTORAGE PERSISTED)
    // -------------------------------------------------------------
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            showToast("Switched to Light Theme", "sun");
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            showToast("Switched to Dark Theme", "moon");
        }
    });

    // -------------------------------------------------------------
    // 4. HEADER SCROLL & MOBILE MENU EFFECTS
    // -------------------------------------------------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // -------------------------------------------------------------
    // 5. TYPING TEXT ANIMATION
    // -------------------------------------------------------------
    const taglines = [
        "IBM Professional Course Student",
        "Aspiring Data Scientist",
        "Software Developer",
        "Tech Enthusiast"
    ];
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentTagline = taglines[taglineIndex];
        
        if (isDeleting) {
            // Remove character
            typingTextEl.innerHTML = currentTagline.substring(0, charIndex - 1) + '<span class="typing-cursor"></span>';
            charIndex--;
            typingSpeed = 50; // faster deletion
        } else {
            // Add character
            typingTextEl.innerHTML = currentTagline.substring(0, charIndex + 1) + '<span class="typing-cursor"></span>';
            charIndex++;
            typingSpeed = 100; // standard typing pace
        }

        // Handle states
        if (!isDeleting && charIndex === currentTagline.length) {
            // Word complete, wait before deletion
            isDeleting = true;
            typingSpeed = 2000; // pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            taglineIndex = (taglineIndex + 1) % taglines.length;
            typingSpeed = 500; // pause before typing next
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect
    typeEffect();

    // -------------------------------------------------------------
    // 6. SCROLL OBSERVER & SCROLL SPY
    // -------------------------------------------------------------
    // Trigger skills bar fill animation
    function triggerSkillsAnimation() {
        const skillValues = {
            'skill-val-python': 85,
            'skill-val-sql': 80,
            'skill-val-programming': 85,
            'skill-val-datascience': 75,
            'skill-val-solving': 85,
            'skill-val-comm': 90,
            'skill-val-team': 90
        };

        skillBars.forEach(bar => {
            const skillNameEl = bar.closest('.skill-item').querySelector('.skill-percentage').id;
            const targetPercent = skillValues[skillNameEl] || 70;
            bar.style.width = `${targetPercent}%`;
        });
    }

    // Scroll Reveal Intersection Observer
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it is the skills section, animate bars
                if (entry.target === skillsSection) {
                    triggerSkillsAnimation();
                }
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Navigation Scrollspy - Highlight active header link
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = window.scrollY + 120; // offset header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // 7. PROJECT GRID FILTERS
    // -------------------------------------------------------------
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            
            // Fade out grid, filter, then fade back in
            projectsGrid.style.opacity = '0';
            
            setTimeout(() => {
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
                projectsGrid.style.opacity = '1';
            }, 300);
        });
    });

    // -------------------------------------------------------------
    // 8. DYNAMIC BLOG ENGINE
    // -------------------------------------------------------------
    let activeBlogTag = 'all';
    let blogSearchQuery = '';

    // Initialize blog tag filter buttons
    function renderBlogTags() {
        // Collect tags
        const tagsSet = new Set(['all']);
        BLOG_POSTS.forEach(post => {
            tagsSet.add(post.category);
        });

        blogTagFilters.innerHTML = '';
        tagsSet.forEach(tag => {
            const tagBtn = document.createElement('button');
            tagBtn.className = `tag-badge ${tag === activeBlogTag ? 'active' : ''}`;
            tagBtn.textContent = tag === 'all' ? 'All Articles' : tag;
            tagBtn.setAttribute('data-tag', tag);
            
            tagBtn.addEventListener('click', () => {
                activeBlogTag = tag;
                renderBlogTagActiveState();
                filterAndRenderBlogPosts();
            });
            
            blogTagFilters.appendChild(tagBtn);
        });
    }

    function renderBlogTagActiveState() {
        const badges = blogTagFilters.querySelectorAll('.tag-badge');
        badges.forEach(badge => {
            const tag = badge.getAttribute('data-tag');
            if (tag === activeBlogTag) {
                badge.classList.add('active');
            } else {
                badge.classList.remove('active');
            }
        });
    }

    // Filter and Render posts
    function filterAndRenderBlogPosts() {
        const filtered = BLOG_POSTS.filter(post => {
            const matchesTag = activeBlogTag === 'all' || post.category === activeBlogTag;
            const matchesSearch = post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                                  post.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
                                  post.category.toLowerCase().includes(blogSearchQuery.toLowerCase());
            return matchesTag && matchesSearch;
        });

        blogPostsContainer.innerHTML = '';

        if (filtered.length === 0) {
            blogPostsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search-minus"></i>
                    <p>No blog posts found matching your criteria.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(post => {
            // Choose an icon or thumbnail gradient style based on category
            let gradClass = 'grad-bg-1';
            let iconClass = 'fa-laptop-code';
            if (post.category === 'SQL') {
                gradClass = 'grad-bg-2';
                iconClass = 'fa-database';
            } else if (post.category === 'Data Science') {
                gradClass = 'grad-bg-3';
                iconClass = 'fa-chart-pie';
            }

            const card = document.createElement('div');
            card.className = 'blog-card glass-card';
            card.innerHTML = `
                <div class="blog-card-thumbnail ${gradClass}">
                    <div class="blog-img-placeholder">
                        <i class="fas ${iconClass}"></i>
                    </div>
                </div>
                <div class="blog-card-body">
                    <div class="blog-card-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <div class="blog-card-footer">
                        <span class="blog-read-more">Read Post <i class="fas fa-arrow-right"></i></span>
                        <span class="blog-card-tag">${post.category}</span>
                    </div>
                </div>
            `;

            // Open reader modal on click
            card.addEventListener('click', () => {
                openBlogModal(post);
            });

            blogPostsContainer.appendChild(card);
        });
    }

    // Modal Control
    function openBlogModal(post) {
        modalBodyContent.innerHTML = `
            <div class="modal-article-header">
                <div class="modal-article-meta">
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    <span><i class="fas fa-user"></i> Krupa K G</span>
                </div>
                <h2 class="modal-article-title">${post.title}</h2>
                <div class="modal-article-tags">
                    <span class="modal-article-tag">${post.category}</span>
                </div>
            </div>
            <div class="modal-article-body">
                ${post.content}
            </div>
        `;
        
        blogReaderModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // block body scrolling
    }

    function closeBlogModal() {
        blogReaderModal.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling
    }

    modalCloseBtn.addEventListener('click', closeBlogModal);
    
    // Close modal by clicking background
    blogReaderModal.addEventListener('click', (e) => {
        if (e.target === blogReaderModal) {
            closeBlogModal();
        }
    });

    // Close modal by ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && blogReaderModal.classList.contains('active')) {
            closeBlogModal();
        }
    });

    // Search bar event
    blogSearchInput.addEventListener('input', (e) => {
        blogSearchQuery = e.target.value;
        filterAndRenderBlogPosts();
    });

    // Initialize Blog Layout
    renderBlogTags();
    filterAndRenderBlogPosts();

    // -------------------------------------------------------------
    // 9. FORM VALIDATION & SUCCESS FEEDBACK (TOAST)
    // -------------------------------------------------------------
    function showToast(message, iconName = "check-circle") {
        toastTextMsg.textContent = message;
        
        // Update icon class
        const iconEl = toastNotification.querySelector('.toast-icon i');
        iconEl.className = `fas fa-${iconName}`;
        if (iconName === "sun" || iconName === "moon") {
            iconEl.style.color = "var(--accent-primary)";
        } else {
            iconEl.style.color = "#10b981"; // success green
        }

        toastNotification.classList.add('active');

        setTimeout(() => {
            toastNotification.classList.remove('active');
        }, 4000);
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const subjectInput = document.getElementById('form-subject');
        const messageInput = document.getElementById('form-message');
        
        let isValid = true;

        // Reset error styling
        document.querySelectorAll('.form-group').forEach(group => group.classList.remove('invalid'));

        // Name Validation
        if (!nameInput.value.trim()) {
            nameInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        }

        // Subject Validation
        if (!subjectInput.value.trim()) {
            subjectInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        }

        // Message Validation
        if (!messageInput.value.trim()) {
            messageInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        }

        if (isValid) {
            // Simulate form dispatching
            const submitBtn = document.getElementById('contact-submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>`;

            setTimeout(() => {
                showToast("Message sent successfully! I'll get back to you soon.");
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }, 1500);
        }
    });

    // -------------------------------------------------------------
    // 10. RESUME DOWNLOAD ACTION (DYNAMIC BLOB GENERATOR)
    // -------------------------------------------------------------
    resumeDownloadBtn.addEventListener('click', () => {
        // Generating a high-fidelity Markdown resume summary for download
        const resumeMarkdownContent = `# KRUPA K G
Email: krupa05@email.com
Academic Year: 2025–2029
Location: Bengaluru, Karnataka, India
College: Reva University
Course: IBM Professional Course (Collaborative Program)

## Tagline
IBM Professional Course Student | Aspiring Data Scientist & Software Developer

## Professional Profile
Highly motivated student pursuing an industry-aligned IBM Professional Course at Reva University. Possesses a strong academic baseline in computer logic, database systems, and data-driven analysis. Eager to bridge theoretical concepts in software engineering with real-world, high-performance database schema architectures and programming practices.

## Education
- **Reva University**
  * IBM Professional Course (Integrated Curriculum)
  * Period: 2025 – 2029
  * Key Focus: Data Science Essentials, Relational Databases (SQL), Core Programming (Python), Algorithms.

## Core Technical Skills
- **Programming Languages:** Python, SQL, Javascript (HTML5/CSS3)
- **Data Science Foundations:** Pandas, Matplotlib, Data Wrangling, Relational Modeling (PostgreSQL/MySQL)
- **Key Concepts:** Logical Problem Solving, ER Diagrams, Database Normalization (1NF/2NF/3NF)
- **Soft Skills:** Active Communication, Agile Teamwork, Technical Presentations

## Certifications & Credentials
- **IBM Professional Course Certification** (In collaboration with Reva University)
- *Planned:* IBM Data Science Professional Certificate (2026/2027)
- *Planned:* SQL Developer Associate Certificate (2026)

## Academic Projects
1. **Student Academic Progress Tracker** (Python, Matplotlib, JSON Storage)
   * Built a GUI and command line script tracker to plot grade percentages across courses.
2. **University Database Schema Designer** (SQL, PostgreSQL, ER Diagrams)
   * Designed a normalized relational database (3NF) containing Students, Courses, and Enrollments tables.

## Languages Known
- **Kannada** (Native)
- **English** (Fluent / Professional)

## Career Aspirations
Eager to build a long-term engineering career focused on Software Architecture, Relational Databases, and Artificial Intelligence, writing clean code that solves human problems.
`;

        const blob = new Blob([resumeMarkdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Krupa_KG_Resume.md';
        document.body.appendChild(a);
        
        showToast("Generating Resume Download...", "file-download");
        
        setTimeout(() => {
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 1000);
    });
});
