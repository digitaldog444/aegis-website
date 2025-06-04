import Link from "next/link";
export default function Home() {
  return (
    <section>
      <header className="border-b border-gray-800 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Project Aegis</h1>
        <nav className="space-x-6">
          <Link href="#mission" className="hover:underline text-gray-300">
            Mission
          </Link>
          <Link href="#projects" className="hover:underline text-gray-300">
            Projects
          </Link>
          <Link href="#docs" className="hover:underline text-gray-300">
            Documentation
          </Link>
          <Link href="#community" className="hover:underline text-gray-300">
            Community
          </Link>
        </nav>
      </header>

      <section className="p-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Open Source. Decentralized. Responsible.
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-400">
          Project Aegis is an open source platform for the development,
          discussion, and ethical exploration of autonomous defense systems,
          remote targeting technologies, and advanced control interfaces. Our
          goal is transparency and freedom through code—not chaos.
        </p>
        <div className="mt-8">
          <Link
            href="#projects"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Explore Projects
          </Link>
          <Link
            href="#docs"
            className="ml-4 border border-green-600 text-green-400 px-6 py-3 rounded-xl hover:bg-green-900"
          >
            Read the Docs
          </Link>
        </div>
      </section>

      <section id="mission" className="bg-gray-900 p-12">
        <h3 className="text-3xl font-bold mb-4 text-center text-white">
          Mission Statement
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We believe that knowledge should never be monopolized. Project Aegis
          aims to provide the tools, schematics, and software to build defensive
          and autonomous systems that remain in the hands of individuals,
          researchers, and decentralized communities—not locked away by
          governments or corporations.
          <br />
          <br />
          Our mission is to enable transparency, experimentation, and ethical
          defense autonomy while remaining firmly against the misuse of this
          technology.
        </p>
      </section>

      <section id="projects" className="p-12">
        <h3 className="text-3xl font-bold mb-6">Active Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Aegis Turret v1
            </h4>
            <p className="text-gray-400 text-sm">
              An open source pan-tilt auto-targeting turret with modular payload
              support (camera, laser, paintball).
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Remote Ops UI
            </h4>
            <p className="text-gray-400 text-sm">
              A browser-based control interface for autonomous vehicles and
              turrets using WebRTC and Node.js.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-white">AegisOS</h4>
            <p className="text-gray-400 text-sm">
              A lightweight OS image for Raspberry Pi with pre-installed control
              and vision modules.
            </p>
          </div>
        </div>
      </section>

      <section id="docs" className="bg-gray-900 p-12 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Documentation</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Get started with tutorials, schematics, and APIs for building and
          programming your own defense systems.
        </p>
        <Link
          href="/docs"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold"
        >
          View Full Documentation
        </Link>
      </section>

      <section id="community" className="p-12">
        <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
        <p className="text-gray-400 max-w-xl mb-6">
          We are developers, engineers, tinkerers, and idealists. Join our
          forum, contribute to the codebase, or share your creations in the
          open.
        </p>
        <div className="space-x-4">
          <Link
            href="https://discord.gg/pJrg7ZGzBq"
            target="_blank"
            className="text-white border border-gray-700 px-4 py-2 rounded hover:bg-gray-800"
          >
            Discord
          </Link>
        </div>
      </section>

      <footer className="p-6 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; 2025 Project Aegis. All open source. All rights reserved.
      </footer>
    </section>
  );
}
