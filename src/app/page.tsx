import React from "react";

// You would typically install lucide-react: npm install lucide-react
// For this self-contained example, we'll assume it's available or use inline SVGs
// Here's how you might import them if installed:
// import { Shield, Settings, Users, Code, Globe, Zap } from 'lucide-react';

// Placeholder for Lucide Icons if not installed via npm
const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shield"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-users"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87C17.5 3.92 13.7 2 12 2s-5.5 1.92-7 6.13A4 4 0 0 0 2 19v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucude-code"
  >
    <path d="m16 2 4 4-4 4" />
    <path d="m8 14-4 4 4 4" />
    <path d="m21 12-4 0" />
    <path d="m3 12 4 0" />
  </svg>
);
const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-globe"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
    <path d="M2 12h20" />
  </svg>
);
const ZapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-zap"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63L12 2l8.78 10.37a1 1 0 0 1-.78 1.63h-3l0 7H7l0-7z" />
  </svg>
);
// Define the main App component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Tailwind CSS CDN script for local testing if not using Next.js build */}
      {/* In a Next.js project, Tailwind would be configured, so this isn't needed */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Header/Navigation */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 shadow-lg rounded-b-lg">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="#"
            className="text-3xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            Project Aegis
          </a>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-lg text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-lg text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="text-lg text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contribute"
            className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Contribute
          </a>
          {/* Mobile menu button - omitted for brevity but would typically be here */}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-center py-20 md:py-32 lg:py-48 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
      >
        {/* Abstract background element */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1920 1080">
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-700"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in-up">
            Unleashing Innovation:{" "}
            <span className="text-teal-400">Project Aegis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up delay-200">
            The future of secure, modular, and community-driven defensive
            technologies. A truly open-source platform for global security.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
            <a
              href="#learn-more"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Learn More
            </a>
            <a
              href="#get-involved"
              className="bg-transparent border-2 border-teal-500 text-teal-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Key Principles of{" "}
            <span className="text-teal-400">Project Aegis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card 1: Open Source & Transparency */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <CodeIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Open Source & Transparency
              </h3>
              <p className="text-gray-300 text-lg text-center">
                Built on the principles of open collaboration, Project Aegis
                ensures complete transparency in its development, fostering
                trust and rapid iteration.
              </p>
            </div>

            {/* Feature Card 2: Modularity & Customization */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <SettingsIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Modularity & Customization
              </h3>
              <p className="text-gray-300 text-lg text-center">
                Design with a modular architecture allows for easy
                customization, integration, and adaptation to diverse defensive
                needs and environments.
              </p>
            </div>

            {/* Feature Card 3: Community Driven Development */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <UsersIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Community Driven Development
              </h3>
              <p className="text-gray-300 text-lg text-center">
                A global community of experts and enthusiasts drives the project
                forward, ensuring robust solutions and continuous improvement.
              </p>
            </div>

            {/* Feature Card 4: Ethical & Responsible Use */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <ShieldIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Ethical & Responsible Use
              </h3>
              <p className="text-gray-300 text-lg text-center">
                Committed to strict ethical guidelines, Project Aegis
                prioritizes defensive applications and adherence to
                international regulations.
              </p>
            </div>

            {/* Feature Card 5: Global Accessibility */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <GlobeIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Global Accessibility
              </h3>
              <p className="text-gray-300 text-lg text-center">
                Designed to be accessible worldwide, empowering organizations
                and individuals with advanced defensive capabilities.
              </p>
            </div>

            {/* Feature Card 6: Rapid Innovation */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-teal-400 mb-4">
                <ZapIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Rapid Innovation
              </h3>
              <p className="text-gray-300 text-lg text-center">
                The open-source model allows for accelerated development cycles
                and quick deployment of cutting-edge defensive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="call-to-action"
        className="py-16 md:py-24 bg-gray-900 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">
            Join the <span className="text-teal-400">Aegis Movement</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you're a developer, security expert, or an organization
            interested in advanced defensive solutions, your contribution can
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://discord.gg/pJrg7ZGzBq"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Explore on Discord
            </a>
            <a
              href="mailto:digitaldog444@gmail.com"
              className="bg-transparent border-2 border-teal-500 text-teal-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Contact Us
            </a>
            <a
              href="https://github.com/project-aegis1/"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Github
            </a>
            <a
              href="/docs"
              className="bg-transparent border-2 border-teal-500 text-teal-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 text-gray-400 text-center rounded-t-lg shadow-lg">
        <div className="max-w-7xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Project Aegis. All rights
            reserved.
          </p>
          <p className="mt-2">
            Built with <span className="text-teal-400">&hearts;</span> by the
            global open-source community.
          </p>
        </div>
      </footer>

      {/* Basic CSS for animations - usually in a global stylesheet */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0; /* Hidden by default */
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      {/* Google Fonts - Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default App;
