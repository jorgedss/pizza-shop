import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

// NavLink depende do Router para funcionar, isso exige um navegador para trabalhar com as rotas. Mas, não é possível aqui nesse ambiente de teste. Por isso, usamos o segundo argumento na callback do describe. O componente MemoryRouter memoriza a rota ativa em memoria.

describe('NavLink', () => {
  it('Should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})
