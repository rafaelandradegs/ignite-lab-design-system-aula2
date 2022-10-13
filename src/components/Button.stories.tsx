import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
} as Meta<ButtonProps>

export const Dafault: StoryObj<ButtonProps> = {}
