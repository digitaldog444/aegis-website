const DocsPage = () => {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-white">
          Project Aegis Documentation
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          This page contains all documentation related to building, configuring,
          and deploying systems under the Aegis platform—hardware schematics,
          software setup, API usage, and community standards.
        </p>

        {/* Section: Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            🚀 Getting Started
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a
                href="/docs/install"
                className="text-green-400 hover:underline"
              >
                Installation & Environment Setup
              </a>
            </li>
            <li>
              <a
                href="/docs/hardware"
                className="text-green-400 hover:underline"
              >
                Required Hardware & Materials
              </a>
            </li>
            <li>
              <a
                href="/docs/first-build"
                className="text-green-400 hover:underline"
              >
                Your First Turret Build
              </a>
            </li>
            <li>
              <a
                href="/docs/raspberry-pi"
                className="text-green-400 hover:underline"
              >
                Flashing AegisOS on Raspberry Pi
              </a>
            </li>
          </ul>
        </section>

        {/* Section: Core Modules */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            🧠 Core Modules
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a
                href="/docs/turret-control"
                className="text-blue-400 hover:underline"
              >
                Turret Control Module (pan/tilt/fire)
              </a>
            </li>
            <li>
              <a
                href="/docs/remote-ops"
                className="text-blue-400 hover:underline"
              >
                Remote Ops Interface
              </a>
            </li>
            <li>
              <a href="/docs/vision" className="text-blue-400 hover:underline">
                Computer Vision Targeting (OpenCV)
              </a>
            </li>
            <li>
              <a href="/docs/api" className="text-blue-400 hover:underline">
                REST API & Command Protocol
              </a>
            </li>
          </ul>
        </section>

        {/* Section: Safety & Ethics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            🛡️ Safety, Ethics, & Compliance
          </h2>
          <p className="text-gray-400 mb-4">
            Project Aegis is open source and decentralized. We do not condone
            illegal or malicious use of this technology. You are responsible for
            operating within your local laws and international safety standards.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a
                href="/docs/code-of-conduct"
                className="text-red-400 hover:underline"
              >
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="/docs/legal" className="text-red-400 hover:underline">
                Legal & Ethical Guidelines
              </a>
            </li>
            <li>
              <a
                href="/docs/contributing"
                className="text-red-400 hover:underline"
              >
                Contributing Safely
              </a>
            </li>
          </ul>
        </section>

        {/* Section: Advanced Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            ⚙️ Advanced Guides
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a
                href="/docs/custom-payloads"
                className="text-yellow-400 hover:underline"
              >
                Building Custom Payload Modules
              </a>
            </li>
            <li>
              <a
                href="/docs/autonomous-mode"
                className="text-yellow-400 hover:underline"
              >
                Running in Autonomous Mode
              </a>
            </li>
            <li>
              <a
                href="/docs/networking"
                className="text-yellow-400 hover:underline"
              >
                Secure Networking & Remote Access
              </a>
            </li>
          </ul>
        </section>

        {/* Section: Community & Support */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">
            🌍 Community & Support
          </h2>
          <p className="text-gray-400 mb-4">
            Got questions or want to share your build? Join our community and
            start collaborating.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a
                href="https://discord.gg/pJrg7ZGzBq"
                className="text-cyan-400 hover:underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="mailto:digitaldog444@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                Email Support
              </a>
            </li>
          </ul>
        </section>

        <footer className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Project Aegis. All content is open
          source under MIT or CERN OHL licensing.
        </footer>
      </div>
    </main>
  );
};
export default DocsPage;
