import styled from 'styled-components'

export const MenuContainer = styled.div`
  color: #fff;
  background-color: #0b2031;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  .menu {
    width: 900px;
    display: flex;
    justify-content: space-between;

    .group {
      display: flex;
      justify-content: flex-start;

      .links {
        display: block;
        text-align: right;

        .logout {
          font-size: 0.8em;
          color: rgba(255, 255, 255, 0.6);

          button {
            border: none;
            background: none;
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
          }
        }
      }

      .vertical-line {
        border-left: 2px solid green;
        padding-left: 10px;
        margin-left: 10px;
      }

      img {
        border-radius: 50%;
        width: 32px;
      }
    }
  }
`
