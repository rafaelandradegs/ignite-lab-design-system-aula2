import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Signin } from './Signin'

export default {
  title: 'Pages/Sign in',
  component: Signin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!',
            }),
          )
        }),
      ],
    },
  },
} as Meta

export const Dafault: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getByPlaceholderText('Digite aqui seu e-mail'),
      'rafael@sayoshop.com.br',
    )
    userEvent.type(canvas.getByPlaceholderText('*******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login Realizado')).toBeInTheDocument()
    })
  },
}
