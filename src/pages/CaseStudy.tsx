import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-primary/5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Title</h1>
        <p className="text-lg text-muted-foreground">A brief overview of the project</p>
      </Section>

      {/* Context Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Describe the background, challenge, and goals of the project.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Timeline</h3>
                <p className="text-muted-foreground">3 months</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Role</h3>
                <p className="text-muted-foreground">Lead UX Designer</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Team</h3>
                <p className="text-muted-foreground">3 members</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Outcome Section */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>Outcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Summary of the project's results and achievements.</p>
          </CardContent>
        </Card>
      </Section>

      {/* Key Stages Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Key Stages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Research</h3>
              <p>Description of research methods and findings.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. Design</h3>
              <p>Overview of design process and iterations.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">3. Testing</h3>
              <p>Summary of user testing and feedback.</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Final Design Section */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>Final Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Showcase of the final design solutions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/placeholder.svg" 
                alt="Final design screenshot 1"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="/placeholder.svg" 
                alt="Final design screenshot 2"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Impact Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Quantitative and qualitative results of the project.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-2">+45%</h4>
                <p className="text-sm text-muted-foreground">User Engagement</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-2">-30%</h4>
                <p className="text-sm text-muted-foreground">Support Tickets</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-2">4.8/5</h4>
                <p className="text-sm text-muted-foreground">User Satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Learnings Section */}
      <Section className="bg-primary/5">
        <Card>
          <CardHeader>
            <CardTitle>Learnings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Key insights and lessons learned from the project.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Learning point 1</li>
              <li>Learning point 2</li>
              <li>Learning point 3</li>
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* Next Steps Section */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Future improvements and recommendations for the project.</p>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default CaseStudy;