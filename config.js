// Configuration file - Update these values to customize your portfolio

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Bhabanishankar Nayak",
        title: "Full Stack Developer",
        subtitle: "Web Enthusiast | Tech Innovator",
        description: "Crafting digital experiences with modern technologies and creative solutions",
        email: "your.email@example.com",
        github: "https://github.com/BHABANISHANKAR-01",
        linkedin: "https://linkedin.com/in/your-profile",
        twitter: "https://twitter.com/your-profile"
    },

    // About Section
    about: {
        bio: "I'm a passionate Full Stack Developer with expertise in building scalable web applications and innovative solutions. With a strong foundation in Python, JavaScript, and modern web technologies, I love turning ideas into reality.",
        additionalBio: "My journey in tech started with curiosity and has evolved into a comprehensive skill set spanning frontend development, backend systems, data analysis, and AI/ML projects.",
        stats: [
            { label: "Projects", value: "19" },
            { label: "Years Experience", value: "5" },
            { label: "Dedication", value: "100" }
        ]
    },

    // Skills
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "React"],
        backend: ["Python", "Node.js", "SQL", "REST APIs"],
        databases: ["MySQL", "MongoDB", "Firebase"],
        aiml: ["TensorFlow", "OpenCV", "Data Analysis"],
        tools: ["Git", "Docker", "VS Code", "Jupyter"],
        other: ["Responsive Design", "Web Animation", "UI/UX"]
    },

    // Projects
    projects: [
        {
            title: "Notes Sharing App",
            description: "A collaborative platform for sharing and managing notes with real-time synchronization.",
            technologies: ["JavaScript", "Firebase", "PWA"],
            link: "https://github.com/BHABANISHANKAR-01/notes-sharing-app",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "fas fa-sticky-note"
        },
        {
            title: "Weather API",
            description: "Real-time weather application with location-based forecasting and beautiful UI.",
            technologies: ["HTML5", "CSS3", "Weather API"],
            link: "https://github.com/BHABANISHANKAR-01/Weather_API",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "fas fa-cloud"
        },
        {
            title: "Tic Tac Toe Game",
            description: "Interactive game with AI opponent and smooth animations for entertainment.",
            technologies: ["JavaScript", "AI Logic", "Game Dev"],
            link: "https://github.com/BHABANISHANKAR-01/tictactoe",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "fas fa-gamepad"
        },
        {
            title: "EBook Python",
            description: "Comprehensive study guide on Python programming with detailed explanations.",
            technologies: ["HTML5", "Python", "Educational"],
            link: "https://github.com/BHABANISHANKAR-01/EbookPython",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            icon: "fas fa-book"
        },
        {
            title: "Gesture Control",
            description: "Python-based project using OpenCV for hand gesture music control.",
            technologies: ["Python", "OpenCV", "AI/ML"],
            link: "https://github.com/BHABANISHANKAR-01/GESTURE-CONTROLL-USING-PYTHON",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            icon: "fas fa-hand-paper"
        },
        {
            title: "Python Calculator",
            description: "Feature-rich GUI calculator built with Python for performing calculations.",
            technologies: ["Python", "GUI", "Tkinter"],
            link: "https://github.com/BHABANISHANKAR-01/CALCULATOR-USING-PYTHON",
            gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
            icon: "fas fa-calculator"
        },
        {
            title: "Roulette Wheel",
            description: "Interactive spinning wheel game with dynamic animations and effects.",
            technologies: ["HTML5", "Canvas API", "JavaScript"],
            link: "https://github.com/BHABANISHANKAR-01/Roulette-Wheel",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "fas fa-wheel"
        },
        {
            title: "Class Schedule",
            description: "Weekly class schedule management system with clean UI.",
            technologies: ["HTML5", "CSS3", "Organization"],
            link: "https://github.com/BHABANISHANKAR-01/WeeklyClassSchedule",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "fas fa-calendar"
        },
        {
            title: "IPL 2025 Data Analysis",
            description: "Comprehensive data analysis of Indian Premier League 2025 statistics.",
            technologies: ["Jupyter", "Pandas", "Data Science"],
            link: "https://github.com/BHABANISHANKAR-01/IPL_2025_Data_Analysis_Project",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "fas fa-bar-chart"
        },
        {
            title: "Chrome Clone",
            description: "Browser clone project demonstrating advanced web technologies.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            link: "https://github.com/BHABANISHANKAR-01/Chrome-Clone",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            icon: "fas fa-chrome"
        },
        {
            title: "Student Result System",
            description: "Web-based student result management system with database integration.",
            technologies: ["HTML5", "PHP", "MySQL"],
            link: "https://github.com/BHABANISHANKAR-01/Student_Result_Management_System",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            icon: "fas fa-graduation-cap"
        },
        {
            title: "Self Driving Car",
            description: "Python-based simulation of autonomous vehicle using AI algorithms.",
            technologies: ["Python", "AI", "Computer Vision"],
            link: "https://github.com/BHABANISHANKAR-01/Self-driving-car",
            gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
            icon: "fas fa-robot"
        },
        {
            title: "ML HelpBook",
            description: "Comprehensive notebook for Machine Learning concepts and implementations.",
            technologies: ["Jupyter", "Python", "ML"],
            link: "https://github.com/BHABANISHANKAR-01/ML-HelpBook",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "fas fa-book-open"
        },
        {
            title: "Python Fullstack",
            description: "Complete training repository for Python Fullstack development.",
            technologies: ["Python", "Full Stack", "Training"],
            link: "https://github.com/BHABANISHANKAR-01/Python-Fullstack",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "fas fa-python"
        }
    ],

    // Theme Colors
    theme: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#f093fb",
        dark: "#0f172a",
        light: "#f8f9fa"
    },

    // Social Links
    social: [
        {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/BHABANISHANKAR-01"
        },
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://linkedin.com/in/your-profile"
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            url: "https://twitter.com/your-profile"
        },
        {
            name: "Email",
            icon: "fas fa-envelope",
            url: "mailto:your.email@example.com"
        }
    ]
};

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
