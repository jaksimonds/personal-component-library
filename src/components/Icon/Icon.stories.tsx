import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Icon from './index'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <style dangerouslySetInnerHTML={{__html: 'svg {width: 200px;}'}} />
      </div>
    )
  ]
}

type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    name: 'next',
    simple: false
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'next',
        'typescript',
        'graphql',
        'vercel',
        'github',
        'linkedin',
        'discord',
        'twitter',
        'dotnet',
        'agilitycms',
        'react',
        'faust',
        'wpengine',
        'contentstack',
        'scss',
        'wordpress',
        'gitlab',
        'pantheon',
        'drupal',
        'bitbucket',
        'azuredevops',
        'docker',
        'email'
      ]
    }
  }
}

export default meta