
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary/5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ramsey Advice</h1>
        <p className="text-lg text-muted-foreground">Responsive Web App</p>
      </Section>

      {/* Context Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>The Advice App is a web app allowing Ramsey fans to submit questions related to the money plan and receive trustworthy answers from Ramsey vetted people. It serves as a bridge in the customer lifecycle, connecting users with personalized advice and seamlessly moving them to relevant Ramsey products and services applicable to their situation.</p>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">🧠 Case Study: Designing a Smarter Way to Get Trusted Money Advice (RP1)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Role</h3>
                  <p className="text-muted-foreground">Product Designer</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Team</h3>
                  <p className="text-muted-foreground">Design Lead, Product Manager, 7 Developers</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-muted-foreground">Ongoing (rolling releases every few days)</p>
                </div>
              </div>
              
              <p className="mt-4">RP1 is the go-to platform for personal finance answers rooted in Dave Ramsey's trusted methods. It combines expert financial advice with Ramsey AI, allowing users to ask personalized questions, find motivation, and take real action—backed by a vibrant, supportive community.</p>
              
              <p>With over 3 million YouTube subscribers, users come to RP1 seeking clarity—but often leave with more questions than answers.</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Problem Section */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>❗ The Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-semibold italic">"It's not easy to get trustworthy (Ramsey-aligned) answers to my specific money questions."</p>
            
            <p>Through surveys and user interviews, we uncovered several pain points:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Users had questions while watching financial content but no direct way to get answers in real time.</li>
              <li>Many relied on 3rd-party forums like Reddit or Quora, which often lacked alignment with Ramsey's principles.</li>
              <li>Finding reliable advice took too much time and effort—resulting in drop-off or confusion.</li>
            </ul>
            
            <p className="mt-2">This highlighted a core UX challenge: how might we meet users at the moment of curiosity with instant, values-aligned answers?</p>
          </CardContent>
        </Card>
      </Section>

      {/* Key UX Insights */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>✍️ Key UX Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>From our early research, we identified 3 critical user needs:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-semibold">Contextual Timing</h3>
                <p className="text-muted-foreground">Users want to ask questions while watching content (Jakob's Law: users expect consistency with how things work on other platforms like YouTube).</p>
              </div>
              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-semibold">Trust in Source</h3>
                <p className="text-muted-foreground">Users crave answers that align with Ramsey's teachings (Need for credibility and authority in UX writing).</p>
              </div>
              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-semibold">Effortless Access</h3>
                <p className="text-muted-foreground">Users don't want to dig—answers should come to them (Hick's Law: minimize cognitive load by reducing choices).</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* V1 Split Test Solutions */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>🔁 V1 Split Test Solutions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>We ran a split test to explore two different engagement models:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="space-y-3 p-5 border rounded-lg bg-card shadow-sm">
                <h3 className="text-xl font-semibold">🔹 Solution 1: Human + Community Path</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Users could dive deeper via a 1:1 call</li>
                  <li>Ask questions and interact within the community</li>
                  <li>Emphasis on connection, discussion, and depth</li>
                </ul>
              </div>
              
              <div className="space-y-3 p-5 border rounded-lg bg-card shadow-sm">
                <h3 className="text-xl font-semibold">🔹 Solution 2: AI-Powered Path</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Users ask a question directly to Ramsey AI</li>
                  <li>Fast, focused responses without community interaction</li>
                  <li>More scalable but with less human warmth</li>
                </ul>
              </div>
            </div>
            
            <p>The goal was to measure user preferences, engagement behavior, and trust in each experience.</p>
          </CardContent>
        </Card>
      </Section>

      {/* Process Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>⚙️ My Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Discovery</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Conducted surveys and user interviews with a subset of our 3M+ YouTube audience</li>
                <li>Mapped pain points, opportunity areas, and behavioral trends</li>
                <li>Synthesized learnings into JTBDs (Jobs-To-Be-Done) and prioritized use cases</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. Trio Sync</h3>
              <p>As part of our Trio team (Design, Product, Tech), we held strategic sessions to align on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The biggest user opportunity</li>
                <li>Feasibility and time constraints</li>
                <li>Our first testable path to value</li>
              </ul>
              <p className="mt-2"><strong>Outcome:</strong> We'd start by building a bridge from YouTube → RP1, allowing users to easily "go deeper" and ask follow-up questions.</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Design & Iteration */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>✏️ Design & Iteration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>After our Trio meeting, the design lead and I ran a focused jam session:</p>
            
            <ul className="list-disc pl-6 space-y-1">
              <li>Sketched rapid concepts</li>
              <li>Created lightweight user flows</li>
              <li>Journey mapped from YouTube to AI/human answers</li>
              <li>Pulled UI inspiration from platforms like Reddit (for Q&A) and Calendly (for scheduling calls)</li>
            </ul>
            
            <p className="mt-2"><strong>UX Principle in Action:</strong> Fitts's Law guided how we designed clickable CTAs from video content to the app for minimal friction.</p>
            
            <p>We refined low-fidelity wireframes and ran them through feasibility with engineering. After a few iterations, we handed off designs for development.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Wireframe sketches"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="User flow diagram"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Challenges Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>⚠️ Challenges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AI Alignment:</strong> Ensuring AI answers aligned with strict Ramsey principles</li>
              <li><strong>Assumptions:</strong> User trust in AI vs human interaction was unknown</li>
              <li><strong>Fidelity:</strong> Striking the right balance between speed-to-market and polished UX</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* Current State Section */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>🔬 Current State & What's Next</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We're in the middle of V1 split test analysis. The next step is to gather both quantitative data (engagement, CTR, satisfaction) and qualitative feedback (user trust, clarity, and comprehension).</p>
            
            <p className="mt-4">We're also prepping a V2 solution based on early learnings, with updated flows and a tighter human+AI hybrid approach.</p>
          </CardContent>
        </Card>
      </Section>

      {/* Reflection Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>📚 Reflection as a Designer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>This project required balancing speed, vision, and usability. I leaned into:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Rapid ideation + validation</li>
              <li>Prioritizing user trust in a sensitive space (money)</li>
              <li>Designing MVP-level features that still honored user needs and brand principles</li>
            </ul>
            
            <p className="mt-4">The experience reinforced the importance of continuous learning, collaborative iteration, and grounding every design decision in real user problems.</p>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default CaseStudy;
