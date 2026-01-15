import { branding } from "../../config/branding";

export const metadata = {
  title: branding.name,
  description: branding.description,
};

export default function PublicHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {branding.name}
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          {branding.slogan.text}
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 mb-8">
          {branding.description}
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What you get
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Smart exam-wise tests & live competitions</li>
            <li>✔ Files hub with VIP & Pro content</li>
            <li>✔ Rewards, levels & learning streaks</li>
            <li>✔ Community discussion & private DMs</li>
            <li>✔ AI learning help (Hindi + English)</li>
          </ul>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Built with control & fairness
          </h2>
          <p className="text-gray-600">
            PRstudy is designed with strict exam integrity, role-based control,
            privacy-first analytics and transparent systems — so learning stays
            honest and focused.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Start your journey today
        </h2>
        <a
          href="/signup"
          className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition"
        >
          Create Free Account
        </a>
      </section>

    </div>
  );
}
