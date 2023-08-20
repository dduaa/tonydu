import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function PublicationSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Publication',
  description:
    'Publication',
}

export default function Publication() {
  return (
    <SimpleLayout
      title="Publication"
      intro=""
    >
      <div className="space-y-20">
        <PublicationSection title="">
          <Appearance
            href="https://aclanthology.org/D19-1643/"
            title="Improving Fine-grained Entity Typing with Entity Linking"
            description="Hongliang Dai, Donghong Du, Xin Li, Yangqiu Song"
            event="EMNLP (Short), 2019"
            cta="View"
          />
        </PublicationSection>
       </div>
    </SimpleLayout>
  )
}
