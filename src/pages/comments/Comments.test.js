import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import CommentsPages from './CommentsPages'

test('renders halaman comments dengan benar', async () => {
  render(<CommentsPages />)

  //  search text Comments
  const linkElement = screen.getByText(
    /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
  )
  expect(linkElement).toBeInTheDocument()

  // search button back to home Comments
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Back to Home')

  // search text API
  const comments = await waitFor(
    () => {
      return screen.findAllByText(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      )
    },
    { timeout: 5000 }
  )
  expect(comments).toBeInTheDocument()
})