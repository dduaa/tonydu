import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Here are some of the skills/tools/concepts I’ve worked on.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Uses"
      intro="Here are some of the skills/tools/concepts I’ve worked on."
    >
      <div className="space-y-20">
        <ToolsSection title="Full-Stack Development">
          <Tool title="Language">
          Java • C++ • HTML • CSS • PHP • JavaScript • Python • Matlab • Octave • TypeScript • Verilog • R 
          </Tool>
          <Tool title="Framework/Library">
            Node.js • React • AngularJS • Numpy • Pytorch • Tensorflow • ThreeJS • Flask • Pandas • Keras • Matplotlib • Scipy • sklearn • ThreeJS
          </Tool>
          <Tool title="Database Related">
            SQL • MongoDB • Windows SQL Server 
          </Tool>
          <Tool title="Server Related">
            Linux Server • AWS • GCP • Windows Server • Firebase
          </Tool>
          <Tool title="Others">
          RESTful API • DevOps • Agile Development • Git
          </Tool>
        </ToolsSection>
        <ToolsSection title="Some Advanced Courses">
          <Tool title="Computer Science">
            Computer Graphics | Digital Image Processing | Machine Learning | Operating System | Design and Analysis of Algorithms | Object-Oriented Programming and Data Structures | Computer Networks
          </Tool>
          <Tool title="Mathematics">
            Optimization for Machine Learning | Convex Optimization | Advanced Probability Theory | Partial Differential Equations | Linear-System Theory | Data Analytic Tools | Computer Age Statistical Inference with Applications
          </Tool>
          <Tool title="Robotics">
            Robotic Manipulation and Mobility  | Introduction to Networked Sensing, Estimation and Control | Introduction to Aerial Robotics
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
