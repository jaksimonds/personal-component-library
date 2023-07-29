import type { Meta, StoryObj } from '@storybook/react'
import CardSection from './index'

const meta: Meta<typeof CardSection> = {
  title: "Components/CardSection",
  component: CardSection,
}

type Story = StoryObj<typeof CardSection>

export const Primary: Story = {
  args: {
    iconCards: false,
    heading: 'Heading',
    headingClass: '',
    cards: [
      {
        id: 0,
        name: '',
        label: 'Card',
        content: 'This is a card',
        cta: {
          href: '',
          target: '_blank',
          text: ''
        }
      }
    ]
  }
}

export default meta