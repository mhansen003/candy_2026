"use client";

import { useState } from "react";

// Section data based on transcript
const sections = [
  {
    id: "welcome",
    emoji: "🏠",
    title: "Welcome",
    shortTitle: "Welcome",
  },
  {
    id: "current-state",
    emoji: "📍",
    title: "Current State",
    shortTitle: "Current",
  },
  {
    id: "ai-tools",
    emoji: "🤖",
    title: "AI & Automation",
    shortTitle: "AI Tools",
  },
  {
    id: "conditions-portal",
    emoji: "🚀",
    title: "Conditions Portal",
    shortTitle: "Portal",
  },
  {
    id: "process",
    emoji: "⚙️",
    title: "Process Excellence",
    shortTitle: "Process",
  },
  {
    id: "team",
    emoji: "👥",
    title: "Our Team",
    shortTitle: "Team",
  },
  {
    id: "next-steps",
    emoji: "🎯",
    title: "Next Steps",
    shortTitle: "Next",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("welcome");

  const currentIndex = sections.findIndex((s) => s.id === activeSection);

  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    } else {
      // Loop back to start
      setActiveSection(sections[0].id);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    } else {
      // Loop to end
      setActiveSection(sections[sections.length - 1].id);
    }
  };

  const isLastPage = currentIndex === sections.length - 1;
  const isFirstPage = currentIndex === 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[var(--primary)] text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--primary)] font-bold text-xl">
              CN
            </div>
            <div>
              <h1 className="text-xl font-bold">Candy Nowak</h1>
              <p className="text-sm text-white/80">Chief Credit Officer</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Ops Summit 2026</p>
            <p className="text-sm text-white/80">February 2026</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-[var(--card-bg)] border-b border-[var(--card-border)] sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeSection === section.id
                    ? "border-[var(--accent)] text-[var(--primary)] bg-[var(--accent)]/10"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)]/30"
                }`}
              >
                <span className="text-lg">{section.emoji}</span>
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">{section.shortTitle}</span>
                {index < sections.length - 1 && (
                  <span className="ml-2 text-[var(--muted)]/50 hidden lg:inline">→</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-[var(--card-bg)] border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--muted)]">Progress</span>
            <div className="flex-1 h-2 bg-[var(--card-border)] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-[var(--muted)]">
              {currentIndex + 1} / {sections.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeSection === "welcome" && <WelcomeSection />}
          {activeSection === "current-state" && <CurrentStateSection />}
          {activeSection === "ai-tools" && <AIToolsSection />}
          {activeSection === "conditions-portal" && <ConditionsPortalSection />}
          {activeSection === "process" && <ProcessSection />}
          {activeSection === "team" && <TeamSection />}
          {activeSection === "next-steps" && <NextStepsSection />}
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="bg-[var(--card-bg)] border-t border-[var(--card-border)] py-4 px-6 sticky bottom-0 z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={goPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all bg-[var(--primary)] text-white hover:bg-[var(--primary-light)]"
          >
            ← {isFirstPage ? "Last" : "Previous"}
          </button>
          <div className="flex gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[var(--accent)] scale-125"
                    : index < currentIndex
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--card-border)]"
                }`}
                title={section.title}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all bg-[var(--primary)] text-white hover:bg-[var(--primary-light)]"
          >
            {isLastPage ? "Start Over" : "Next"} →
          </button>
        </div>
      </footer>
    </div>
  );
}

// ============ Section Components ============

function WelcomeSection() {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-block mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            CN
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
          Operations Excellence Summit
        </h1>
        <p className="text-xl text-[var(--muted)] mb-2">February 2026</p>
        <p className="text-lg text-[var(--foreground)]">
          Presented by <span className="font-semibold text-[var(--primary)]">Candy Nowak</span>, Chief Credit Officer
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-slideIn delay-100">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Strategic Vision</h3>
          <p className="text-[var(--muted)]">
            Where we are today and where we&apos;re headed with our operational excellence initiatives.
          </p>
        </div>
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-slideIn delay-200">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Innovation & AI</h3>
          <p className="text-[var(--muted)]">
            Leveraging cutting-edge technology to streamline workflows and improve efficiency.
          </p>
        </div>
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-slideIn delay-300">
          <div className="text-3xl mb-4">👥</div>
          <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Team Excellence</h3>
          <p className="text-[var(--muted)]">
            Recognizing our talented team members driving success across the organization.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[var(--muted)] italic">
          &quot;Building something great together&quot;
        </p>
      </div>
    </div>
  );
}

function CurrentStateSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>📍</span> Where We Are Today
        </h2>
        <p className="text-[var(--muted)]">An overview of our current operational landscape</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Key Metrics */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>📊</span> Key Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--muted)]">Backlog Items</span>
              <span className="text-2xl font-bold text-[var(--accent)]">77</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--muted)]">Active Projects</span>
              <span className="text-2xl font-bold text-[var(--primary)]">[Placeholder]</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--muted)]">Team Members</span>
              <span className="text-2xl font-bold text-[var(--primary)]">[Placeholder]</span>
            </div>
          </div>
        </div>

        {/* Current Challenges */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>⚡</span> Current Focus Areas
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--accent)]">●</span>
              <div>
                <p className="font-medium">Teams Chat Activity</p>
                <p className="text-sm text-[var(--muted)]">High engagement - teams collaborating actively</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--accent)]">●</span>
              <div>
                <p className="font-medium">Training Rollout</p>
                <p className="text-sm text-[var(--muted)]">New training programs being received well</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--accent)]">●</span>
              <div>
                <p className="font-medium">Process Optimization</p>
                <p className="text-sm text-[var(--muted)]">Identifying workflow improvements</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mt-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-6 flex items-center gap-2">
          <span>🗺️</span> Our Journey
        </h3>
        <div className="flex items-center justify-between overflow-x-auto pb-4">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">1</div>
              <p className="text-sm mt-2 text-center font-medium">Discovery</p>
              <p className="text-xs text-[var(--muted)]">Completed</p>
            </div>
            <div className="w-16 md:w-24 h-1 bg-[var(--primary)]" />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">2</div>
              <p className="text-sm mt-2 text-center font-medium">Planning</p>
              <p className="text-xs text-[var(--muted)]">Completed</p>
            </div>
            <div className="w-16 md:w-24 h-1 bg-[var(--accent)]" />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--primary)] flex items-center justify-center font-bold animate-pulse-slow">3</div>
              <p className="text-sm mt-2 text-center font-medium">Building</p>
              <p className="text-xs text-[var(--accent)]">In Progress</p>
            </div>
            <div className="w-16 md:w-24 h-1 bg-[var(--card-border)]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[var(--card-border)] text-[var(--muted)] flex items-center justify-center font-bold">4</div>
            <p className="text-sm mt-2 text-center font-medium">Launch</p>
            <p className="text-xs text-[var(--muted)]">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIToolsSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>🤖</span> AI & Automation Initiatives
        </h2>
        <p className="text-[var(--muted)]">Leveraging technology to transform our operations</p>
      </div>

      {/* Carlos's FAQ Tool */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-xl p-6 text-white mb-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">💬</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Teams Chat FAQ Tool</h3>
            <p className="text-white/90 mb-4">
              Carlos has built an innovative FAQ system that&apos;s revolutionizing how our teams find answers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Real-time Support</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Knowledge Base</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Training Tracks */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>📚</span> Specialized Training Tracks
        </h3>
        <p className="text-[var(--muted)] mb-6">
          CMG-branded, role-specific training guides tailored to each team&apos;s needs
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border border-[var(--card-border)] rounded-lg hover:border-[var(--accent)] transition-colors">
            <div className="text-2xl mb-2">🏠</div>
            <h4 className="font-semibold text-[var(--primary)]">LO Track</h4>
            <p className="text-sm text-[var(--muted)]">Loan Officer specific training</p>
            <span className="inline-block mt-2 px-2 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs rounded">Planned</span>
          </div>
          <div className="p-4 border border-[var(--card-border)] rounded-lg hover:border-[var(--accent)] transition-colors">
            <div className="text-2xl mb-2">📋</div>
            <h4 className="font-semibold text-[var(--primary)]">Processor Track</h4>
            <p className="text-sm text-[var(--muted)]">Processing team training</p>
            <span className="inline-block mt-2 px-2 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs rounded">Planned</span>
          </div>
          <div className="p-4 border border-[var(--card-border)] rounded-lg hover:border-[var(--accent)] transition-colors">
            <div className="text-2xl mb-2">✅</div>
            <h4 className="font-semibold text-[var(--primary)]">Underwriter Track</h4>
            <p className="text-sm text-[var(--muted)]">Underwriting team training</p>
            <span className="inline-block mt-2 px-2 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs rounded">Planned</span>
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>🧠</span> AI-Powered Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <h4 className="font-medium text-[var(--foreground)] mb-2">Document Pre-Screening</h4>
            <p className="text-sm text-[var(--muted)]">
              AI-powered document analysis to extract and validate data before it reaches Candor
            </p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <h4 className="font-medium text-[var(--foreground)] mb-2">Data Extraction</h4>
            <p className="text-sm text-[var(--muted)]">
              Automated data extraction to reduce manual entry and improve accuracy
            </p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <h4 className="font-medium text-[var(--foreground)] mb-2">Training Content Generation</h4>
            <p className="text-sm text-[var(--muted)]">
              Transform raw training data into polished, branded guides
            </p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <h4 className="font-medium text-[var(--foreground)] mb-2">Visual Journey Mapping</h4>
            <p className="text-sm text-[var(--muted)]">
              Create visual stories from Teams chat history and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConditionsPortalSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>🚀</span> Conditions Portal
        </h2>
        <p className="text-[var(--muted)]">A major initiative transforming how we manage loan conditions</p>
      </div>

      {/* Status Banner */}
      <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--primary)]">Project Status: In Development</h3>
            <p className="text-[var(--primary)]/80">Semi-functional prototype available for testing</p>
          </div>
          <a
            href="#"
            className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-light)] transition-colors"
          >
            View Prototype →
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-6 flex items-center gap-2">
          <span>📅</span> Project Timeline
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-[var(--background)] rounded-lg">
            <div className="w-24 text-sm font-medium text-[var(--primary)]">End of Jan</div>
            <div className="flex-1">
              <p className="font-medium">Requirements Complete</p>
              <p className="text-sm text-[var(--muted)]">Product team finalizes all requirements</p>
            </div>
            <span className="px-3 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-sm rounded-full">Target</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-[var(--background)] rounded-lg">
            <div className="w-24 text-sm font-medium text-[var(--primary)]">End of Mar</div>
            <div className="flex-1">
              <p className="font-medium">Working Beta</p>
              <p className="text-sm text-[var(--muted)]">Engineering delivers functional beta</p>
            </div>
            <span className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-sm rounded-full">Goal</span>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>⚡</span> Key Features
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[var(--accent)]">✓</span>
              <span>[Feature placeholder 1]</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--accent)]">✓</span>
              <span>[Feature placeholder 2]</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--accent)]">✓</span>
              <span>[Feature placeholder 3]</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--accent)]">✓</span>
              <span>[Feature placeholder 4]</span>
            </li>
          </ul>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>🎯</span> Goals
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[var(--primary)]">●</span>
              <span>100% AI-powered development</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--primary)]">●</span>
              <span>Streamlined condition management</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--primary)]">●</span>
              <span>Reduced manual processes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[var(--primary)]">●</span>
              <span>Improved turnaround times</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Demo CTA */}
      <div className="mt-8 text-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Interactive Demo Available</h3>
        <p className="text-[var(--muted)] mb-4">
          Click through the prototype to experience the new Conditions Portal
        </p>
        <button className="px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-light)] transition-colors">
          Launch Demo
        </button>
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>⚙️</span> Process Excellence
        </h2>
        <p className="text-[var(--muted)]">Improving data quality and workflow efficiency</p>
      </div>

      {/* The Challenge */}
      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 dark:border-red-900 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
          <span>⚠️</span> The Challenge: Data Quality
        </h3>
        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
          <p className="text-lg italic text-[var(--foreground)] mb-4">
            &quot;Garbage in, garbage out&quot;
          </p>
          <p className="text-[var(--muted)]">
            When files aren&apos;t complete from the beginning, it creates a daisy chain effect:
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <div className="px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded text-sm">Point 1: Incomplete</div>
            <span>→</span>
            <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded text-sm">Point 2: Rushed fixes</div>
            <span>→</span>
            <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">Point 3: Quality issues</div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>🔍</span> Document Validation
          </h3>
          <p className="text-[var(--muted)] mb-4">
            Ensuring documents are in reviewed or approved status before processing
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Employment entered properly</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Asset information complete</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>All required fields populated</span>
            </li>
          </ul>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
            <span>🤖</span> Pre-Processing Solutions
          </h3>
          <p className="text-[var(--muted)] mb-4">
            AI-powered pre-screening before documents reach Candor
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[var(--accent)]">●</span>
              <span>Automated data extraction</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--accent)]">●</span>
              <span>Pre-filtering documents</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--accent)]">●</span>
              <span>Reduced manual entry</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feedback Loop */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>🔄</span> Feedback & Continuous Improvement
        </h3>
        <p className="text-[var(--muted)] mb-4">
          Active collaboration with Jenny&apos;s group, Trish, and processing managers to identify pain points
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <div className="text-2xl mb-2">📝</div>
            <p className="font-medium">Collect Feedback</p>
            <p className="text-xs text-[var(--muted)]">From all teams</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <div className="text-2xl mb-2">🔬</div>
            <p className="font-medium">Analyze Issues</p>
            <p className="text-xs text-[var(--muted)]">Identify root causes</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <div className="text-2xl mb-2">🛠️</div>
            <p className="font-medium">Build Solutions</p>
            <p className="text-xs text-[var(--muted)]">Tech team delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>👥</span> Our Amazing Team
        </h2>
        <p className="text-[var(--muted)]">Recognizing the people driving our success</p>
      </div>

      {/* Featured Team Members */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            C
          </div>
          <h3 className="font-semibold text-[var(--primary)]">Carlos</h3>
          <p className="text-sm text-[var(--muted)] mb-2">Technology</p>
          <p className="text-xs text-[var(--muted)] italic">
            &quot;Really jumped in and is doing a great job&quot;
          </p>
          <div className="mt-3">
            <span className="px-2 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs rounded">FAQ Tool Creator</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            L
          </div>
          <h3 className="font-semibold text-[var(--primary)]">Lauren</h3>
          <p className="text-sm text-[var(--muted)] mb-2">Operations</p>
          <p className="text-xs text-[var(--muted)] italic">
            &quot;Doing great&quot;
          </p>
          <div className="mt-3">
            <span className="px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-xs rounded">Backlog Priority</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            T
          </div>
          <h3 className="font-semibold text-[var(--primary)]">Theresa</h3>
          <p className="text-sm text-[var(--muted)] mb-2">Operations</p>
          <p className="text-xs text-[var(--muted)] italic">
            &quot;Amazing&quot;
          </p>
          <div className="mt-3">
            <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs rounded">Star Performer</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] mx-auto mb-4 flex items-center justify-center text-[var(--primary)] text-2xl font-bold">
            G
          </div>
          <h3 className="font-semibold text-[var(--primary)]">Gina</h3>
          <p className="text-sm text-[var(--muted)] mb-2">Consultant</p>
          <p className="text-xs text-[var(--muted)] italic">
            Candor expertise
          </p>
          <div className="mt-3">
            <span className="px-2 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-xs rounded">Platform Expert</span>
          </div>
        </div>
      </div>

      {/* New Org Structure */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>🏢</span> New Organization with Susan
        </h3>
        <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-lg p-6 text-center">
          <p className="text-lg text-[var(--foreground)] mb-2">
            &quot;It&apos;s definitely cleaner&quot;
          </p>
          <p className="text-[var(--muted)]">
            The new organizational structure is streamlining our operations and improving collaboration
          </p>
        </div>
      </div>

      {/* Additional Team Recognition */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>⭐</span> Additional Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <p className="font-medium">Jenny&apos;s Group</p>
            <p className="text-sm text-[var(--muted)]">Valuable feedback on process improvements</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg">
            <p className="font-medium">Trish &amp; Processing Managers</p>
            <p className="text-sm text-[var(--muted)]">Frontline insights on training needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextStepsSection() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2 flex items-center gap-3">
          <span>🎯</span> Next Steps & Action Items
        </h2>
        <p className="text-[var(--muted)]">Our roadmap for continued success</p>
      </div>

      {/* Priority Actions */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-xl p-6 text-white mb-8">
        <h3 className="text-xl font-bold mb-4">Priority Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">1</span>
              <span className="font-medium">Roll Out Carlos&apos;s FAQ Tool</span>
            </div>
            <p className="text-white/80 text-sm">Deploy to all teams for immediate impact</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">2</span>
              <span className="font-medium">Finalize Conditions Portal Requirements</span>
            </div>
            <p className="text-white/80 text-sm">Target: End of January 2026</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">3</span>
              <span className="font-medium">Develop Specialized Training</span>
            </div>
            <p className="text-white/80 text-sm">Create LO, Processor, and Underwriter tracks</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">4</span>
              <span className="font-medium">Identify Training Guide Owner</span>
            </div>
            <p className="text-white/80 text-sm">Connect with Gina for existing resources</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-6 flex items-center gap-2">
          <span>📅</span> Key Milestones
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-20 text-right">
              <span className="text-sm font-medium text-[var(--accent)]">Jan 2026</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-[var(--accent)] mt-1" />
            <div className="flex-1 pb-4 border-l-2 border-[var(--accent)] pl-4 -ml-2">
              <p className="font-medium">Requirements Complete</p>
              <p className="text-sm text-[var(--muted)]">Product team delivers final Conditions Portal specs</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-20 text-right">
              <span className="text-sm font-medium text-[var(--primary)]">Feb 2026</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-[var(--primary)] mt-1" />
            <div className="flex-1 pb-4 border-l-2 border-[var(--primary)] pl-4 -ml-2">
              <p className="font-medium">Ops Summit</p>
              <p className="text-sm text-[var(--muted)]">Present progress and gather feedback</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-20 text-right">
              <span className="text-sm font-medium text-[var(--muted)]">Mar 2026</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-[var(--card-border)] mt-1" />
            <div className="flex-1 pl-4 -ml-2">
              <p className="font-medium">Conditions Portal Beta</p>
              <p className="text-sm text-[var(--muted)]">Working beta delivered by engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[var(--primary)] mb-4 flex items-center gap-2">
          <span>🔗</span> Resources & Links
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="#" className="p-4 bg-[var(--background)] rounded-lg hover:bg-[var(--accent)]/10 transition-colors group">
            <p className="font-medium group-hover:text-[var(--accent)]">📊 Operations Dashboard</p>
            <p className="text-sm text-[var(--muted)]">[Link placeholder]</p>
          </a>
          <a href="#" className="p-4 bg-[var(--background)] rounded-lg hover:bg-[var(--accent)]/10 transition-colors group">
            <p className="font-medium group-hover:text-[var(--accent)]">🚀 Conditions Portal Demo</p>
            <p className="text-sm text-[var(--muted)]">[Link placeholder]</p>
          </a>
          <a href="#" className="p-4 bg-[var(--background)] rounded-lg hover:bg-[var(--accent)]/10 transition-colors group">
            <p className="font-medium group-hover:text-[var(--accent)]">📚 Training Resources</p>
            <p className="text-sm text-[var(--muted)]">[Link placeholder]</p>
          </a>
          <a href="#" className="p-4 bg-[var(--background)] rounded-lg hover:bg-[var(--accent)]/10 transition-colors group">
            <p className="font-medium group-hover:text-[var(--accent)]">❓ FAQ Tool</p>
            <p className="text-sm text-[var(--muted)]">[Link placeholder]</p>
          </a>
        </div>
      </div>

      {/* Thank You */}
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🙏</div>
        <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">Thank You!</h3>
        <p className="text-[var(--muted)] mb-6">
          Questions? Let&apos;s discuss!
        </p>
        <div className="inline-flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>Candy Nowak</span>
          <span>•</span>
          <span>Chief Credit Officer</span>
          <span>•</span>
          <span>CMG</span>
        </div>
      </div>
    </div>
  );
}
