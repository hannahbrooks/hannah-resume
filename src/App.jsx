import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hannah Brooks 👩‍💻</h1>
          <p className="text-xl text-gray-600 mb-4">Senior Software Developer</p>
          
          <div className="flex flex-wrap gap-4 text-gray-600">
            <a href="mailto:hannahjanebrooks.hjb@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail size={16} />
              hannahjanebrooks.hjb@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Toronto, ON 🇨🇦
            </div>
            <a href="https://linkedin.com/in/hannahjbrooks" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://github.com/hannahbrooks" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Light-hearted Welcome Section */}
        <section className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm flex items-center gap-4">
            <span className="text-3xl" role="img" aria-label="wave">👋</span>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-1">Welcome!</h2>
              <p className="text-blue-800">Thanks for stopping by. Let me know if you have any questions! 😊</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">🎓 Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">University of Toronto</h3>
            <p className="text-gray-600"><strong>B.A.Sc, Computer Engineering</strong></p>
            <p className="text-gray-500 text-sm"><strong>July 2018 – April 2023</strong></p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">💼 Professional Experience</h2>
          
          <div className="space-y-6">
            {/* Senior Software Developer */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Senior Software Developer</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://www.konrad.com" target="_blank" rel="noopener noreferrer">Konrad Group</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>June 2025 - Present</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Mentor to junior developers on a <strong>full-stack onboarding project</strong>—helped two new team members ramp up and integrate into the team within 2 months, with ongoing support as they continue to grow in their roles.</li>
              </ul>
            </div>

            {/* Software Developer II */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Developer II</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://www.konrad.com" target="_blank" rel="noopener noreferrer">Konrad Group</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>June 2024 – June 2025</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Primary developer on a <strong>full-stack internal CRM and project management platform</strong> that fully replaced Salesforce, saving the company <strong>$90K/month</strong> in licensing costs and streamlining client tracking, invoicing, and resourcing - built using <strong>React, GraphQL, and MySQL</strong>.</li>
                <li>• Developed an accessible, reusable <strong>React component library</strong> as part of the CRM build.</li>
                <li>• Built <strong>AI-powered tools</strong> using <strong>OpenAI's API</strong>, including an agentic contact extractor for parsing emails and a role suggestor to match candidates to company resourcing needs, benefitting resourcing managers and engagement VPs.</li>
              </ul>
            </div>

            {/* Software Developer I */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Developer I</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://www.konrad.com" target="_blank" rel="noopener noreferrer">Konrad Group</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>June 2023 – June 2024</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Built <strong>React components</strong> enabling social media marketing integration, enhancing a large real estate client's site with <strong>Contentful-based</strong> authoring tools.</li>
                <li>• Rewrote web components in <strong>HTML and Vanilla JS</strong> for a mid-sized investment firm, improving their <strong>Adobe Experience Manager (AEM)</strong> authoring experience.</li>
                <li>• Refactored an internal chat tool to replace Langchain with <strong>OpenAI's API</strong>, increasing stability.</li>
              </ul>
            </div>

            {/* Associate Software Developer Intern */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Associate Software Developer Intern</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://www.konrad.com" target="_blank" rel="noopener noreferrer">Konrad Group</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>May 2021 – Aug 2022</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Completed a <strong>16-month internship</strong> spanning 8 projects; received full-time return offer.</li>
                <li>• Part of a team that built a marketing site for a major automotive brand using <strong>React and AEM</strong>, focusing on animations, carousels, and product filtering for the launch of a digital re-brand.</li>
              </ul>
            </div>

            {/* Junior Developer Intern */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Junior Developer Intern</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://deckerip.com" target="_blank" rel="noopener noreferrer">Decker Intellectual Property</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>Sept 2019 – Apr 2021</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Led mobile-first FAQ and blog development during <strong>React migration</strong>.</li>
                <li>• Improved backend performance by optimizing <strong>Django models and queries</strong>.</li>
                <li>• Supported SEO with <strong>Google Analytics, Google Ads, and Search Console</strong>.</li>
              </ul>
            </div>

            {/* Software Engineering Intern */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Engineering Intern</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://www.betstamp.com" target="_blank" rel="noopener noreferrer">BetStamp</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>May 2020 – Aug 2020</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Developed web version of <strong>React Native app</strong> with betting and profile features.</li>
                <li>• Refactored <strong>Django queries</strong> to improve data filtering performance.</li>
              </ul>
            </div>

            {/* Web Developer Intern */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Web Developer Intern</h3>
                  <p className="text-blue-600 font-medium"><strong><a href="https://ccm.sickkids.ca/" target="_blank" rel="noopener noreferrer">Center for Computational Medicine, SickKids</a></strong>, Toronto, ON</p>
                </div>
                <span className="text-gray-500 text-sm"><strong>May 2019 – Aug 2019</strong></span>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Added bookmarking, sorting, and upload features using <strong>React and FeathersJS</strong> for site <strong>RareConnect.org</strong>.</li>
                <li>• Helped launch platform for data collection and patient tracking.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">🛠️ Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">⚛️ Front End</h3>
                <p className="text-gray-700"><strong>React</strong>, Apollo Client, Typescript, Tanstack Router, <strong>Next.js</strong>, SASS, BEM, Astro</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🔧 Back End</h3>
                <p className="text-gray-700"><strong>GraphQL</strong>, Apollo Server, Express, TypeORM, Rest APIs, <strong>Node.js</strong>, Sockets</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">💾 Databases</h3>
                <p className="text-gray-700"><strong>MySQL</strong>, PostgreSQL, MongoDB</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🔨 Tools & Testing</h3>
                <p className="text-gray-700"><strong>Git</strong>, Jira, pnpm, Sentry, <strong>Jest</strong>, SonarQube</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <p className="text-center text-gray-500 text-sm">© 2025 Hannah Brooks. All rights reserved. ✨</p>
        </div>
      </footer>
    </div>
  );
}