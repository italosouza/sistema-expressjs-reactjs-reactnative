import React from 'react'
import { getUser, logout } from 'services/auth'
import LayoutRouter from 'components/LayoutRouter'
import GlobalStyle from './globalStyle'
import { MenuContainer } from './style'

const Admin = () => (
  <>
    <GlobalStyle />
    <MenuContainer>
      <div className="menu">
        <div>Pizzaria Don Juan</div>
        <div className="group">
          <div className="links">
            <div className="user">{getUser().name}</div>
            <div className="logout">
              <button type="button" onClick={() => logout(true)}>
                Sair do app
              </button>
            </div>
          </div>
          <div className="vertical-line" />
          <img src="imagens/logo.svg" alt="Logo" />
        </div>
      </div>
    </MenuContainer>

    {LayoutRouter}
  </>
)

export default Admin
