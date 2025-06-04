export default function AboutPage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-white">
          About Project Aegis
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          <span className="font-semibold text-white">Project Aegis</span> is a
          decentralized open-source initiative aimed at democratizing access to
          autonomous defense and control system technologies. We build the
          tools, code, and infrastructure that allow individuals and communities
          to develop, test, and deploy remote-controlled and autonomous systems
          for defense, experimentation, and educational purposes.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">Why Aegis?</h2>
        <p className="text-gray-300 mb-6">
          In a world where governments and corporations monopolize defense tech,
          Project Aegis offers an alternative: a transparent, verifiable
          ecosystem where knowledge is freely available and innovation is
          community-driven. Inspired by the ancient shield of protection, Aegis
          represents both technological strength and ethical responsibility.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">Core Principles</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <span className="text-white font-medium">Transparency:</span> All
            designs and code are open for peer review and improvement.
          </li>
          <li>
            <span className="text-white font-medium">Responsibility:</span> We
            encourage ethical use and oppose malicious or unlawful deployment.
          </li>
          <li>
            <span className="text-white font-medium">Decentralization:</span> No
            central authority, no lock-ins—freedom through autonomy.
          </li>
          <li>
            <span className="text-white font-medium">Collaboration:</span>{" "}
            Contributions are welcome from all disciplines—hardware, software,
            AI, ethics.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-white">
          What We’re Building
        </h2>
        <p className="text-gray-300 mb-6">
          Project Aegis is an umbrella for several ongoing efforts:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <strong>Aegis Turret:</strong> Modular pan-tilt systems for
            targeting and observation
          </li>
          <li>
            <strong>Remote Ops Interface:</strong> Cross-platform control
            interface for turrets, drones, and rovers
          </li>
          <li>
            <strong>AegisOS:</strong> Lightweight Linux distribution with
            preloaded targeting and control software
          </li>
          <li>
            <strong>DevKit:</strong> Starter templates, APIs, and wiring guides
            for builders
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-white">
          Legal & Ethical Use
        </h2>
        <p className="text-gray-300 mb-6">
          Project Aegis does not support the development or deployment of any
          weapon system that violates local or international law. This project
          is for educational, research, and defense autonomy purposes only.
          Users are responsible for complying with applicable laws and safety
          regulations in their jurisdictions.
        </p>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Project Aegis. Built by a global
            community of engineers, idealists, and open-source defenders.
          </p>
        </div>
      </div>
    </main>
  );
}
