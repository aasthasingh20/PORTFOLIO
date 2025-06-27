import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Aastha Singh
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'education', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize ${activeTab === tab ? 'text-pink-400 font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="md:hidden">Menu</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {activeTab === 'home' && <HomeSection />}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'education' && <EducationSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Aastha Singh. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:aaasthabhriquvanshi@gmail.com" className="text-gray-300 hover:text-white">
              <FiMail size={20} />
            </a>
            <a href="https://github.com/aasthasingh20" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aasthasingh2314" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Section Components
function HomeSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Aastha Singh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
          Full Stack Developer & AI/ML Enthusiast
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Passionate about building secure, scalable web applications with cutting-edge technologies.
          Currently pursuing B.Tech in Computer Science with specialization in AI/ML.
        </p>
        <div className="flex space-x-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            I'm a Full Stack Developer with hands-on experience in building dynamic web apps using the MERN stack. 
            Skilled in JWT & Bcrypt authentication, seamless API integration, and responsive UI design with Tailwind CSS.
          </p>
          <p className="text-lg mb-6">
            Proficient in Shopify Liquid coding and development, customizing e-commerce storefronts with clean, optimized code. 
            Experienced with Postman, Git, and version control best practices.
          </p>
          <p className="text-lg mb-6">
            Strong foundation in DSA with Java and a keen interest in Cybersecurity Architecture. 
            Passionate about secure, scalable systems and contributing to fast-paced, collaborative teams.
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <ul className="space-y-3">
            <li className="flex">
              <span className="text-gray-400 w-32">Name:</span>
              <span>Aastha Singh</span>
            </li>
            <li className="flex">
              <span className="text-gray-400 w-32">Email:</span>
              <span>aaasthabhriquvanshi@gmail.com</span>
            </li>
            <li className="flex">
              <span className="text-gray-400 w-32">Phone:</span>
              <span>+91-8882831633</span>
            </li>
            <li className="flex">
              <span className="text-gray-400 w-32">Education:</span>
              <span>B.Tech in Computer Science (AI/ML)</span>
            </li>
            <li className="flex">
              <span className="text-gray-400 w-32">University:</span>
              <span>Raj Kumar Goel Institute of Technology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Contact Management System",
      description: "Developed a Contact Management System using Python and SQL. A console-based application that allows users to add, view, search, update, and delete contact details including names, phone numbers, and emails.",
      technologies: ["Python", "SQL", "Agile Methodologies"],
      link: "#"
    },
    {
      title: "Resume Parser Tool",
      description: "Built a modular tool using HTML, CSS, Python, NLP, and database integration to extract and categorize candidate details based on skill requirements. Helps users improve their resumes.",
      technologies: ["Python", "NLP", "HTML/CSS", "Database"],
      link: "#"
    },
    {
      title: "Collaborative Learning Platform",
      description: "Created a platform using the MERN stack, WebRTC, and Socket.io for users to form study groups, share resources, and collaborate on projects with real-time chat and video conferencing.",
      technologies: ["MERN Stack", "WebRTC", "Socket.io", "React.js"],
      link: "#"
    }
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-pink-500/30 transition"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills = {
    "Frontend Development": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Vite", "Tailwind CSS", "Shadcn/ui", "Three.js", "Framer Motion"],
    "Backend Development": ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    "AI/ML Tools": ["MediaPipe Pose Landmarker", "Rule-based logic", "TensorFlow", "OpenAI", "NumPy", "Pandas", "Matplotlib"],
    "Cybersecurity": ["Digital Signatures", "Hash Functions", "Secure Routing Protocols", "NS-2/NS-3", "OMNeT++"],
    "Development Tools": ["VS Code", "Git & GitHub", "Postman", "Loom", "Localhost/Vite"],
    "Other Skills": ["Data Structures & Algorithms", "Oracle HCM", "Shopify Liquid", "JWT Authentication", "Bcrypt"]
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
        Skills & Technologies
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  const education = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Artificial Intelligence / Machine Learning",
      duration: "Expected May 2026",
      grade: "CGPA: 8.044"
    },
    {
      institution: "Sant Atulanand Convent School",
      degree: "12th Grade (PCME + Computer Science)",
      duration: "June 2022",
      grade: "Percentage: 80%"
    },
    {
      institution: "Udai Pratap Public School",
      degree: "10th Grade (CBSE)",
      duration: "March 2020",
      grade: "Percentage: 93.4%"
    }
  ]

  const certifications = [
    "Microsoft Gen – AI",
    "MongoDB and the Document Model",
    "Oracle Fusion Cloud Application HCM",
    "Coursera C++ for C programmers"
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
        Education & Certifications
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-xl font-medium mb-1">{edu.institution}</h4>
                <p className="text-gray-300 mb-2">{edu.degree}</p>
                {edu.specialization && <p className="text-gray-400 mb-2">{edu.specialization}</p>}
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{edu.duration}</span>
                  <span className="text-pink-400">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FiMail className="text-pink-400 mr-4" size={24} />
              <div>
                <h4 className="text-gray-400">Email</h4>
                <a href="mailto:aaasthabhriquvanshi@gmail.com" className="hover:text-pink-400 transition">
                  aaasthabhriquvanshi@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FiLinkedin className="text-pink-400 mr-4" size={24} />
              <div>
                <h4 className="text-gray-400">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/aasthasingh2314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  linkedin.com/in/aasthasingh2314
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FiGithub className="text-pink-400 mr-4" size={24} />
              <div>
                <h4 className="text-gray-400">GitHub</h4>
                <a 
                  href="https://github.com/aasthasingh20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  github.com/aasthasingh20
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App