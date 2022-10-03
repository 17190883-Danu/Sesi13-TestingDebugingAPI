import { fireEvent, render, screen } from '@testing-library/react'
import Home from './HomePages'

test('renders halaman home dengan benar', () => {
  render(<Home />)

  //  search text pages home
  const linkElement = screen.getByText(/why do we need test/i)
  expect(linkElement).toBeInTheDocument()

  const linkElement2 = screen.getByText(
    /To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself./i
  )
  expect(linkElement2).toBeInTheDocument()

  // click button Comments List
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Comments List')
})