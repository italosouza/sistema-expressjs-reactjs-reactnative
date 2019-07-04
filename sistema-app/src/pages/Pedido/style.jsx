import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.flexAlign || 'center'};

  .grid {
    width: 900px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .grid-item {
      border: 1px solid #fff;
      padding: 15px;
    }

    .large {
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0 1px 8px 4px rgba(150, 150, 150, 0.1);
      width: 700px;

      @media (max-width: 600px) {
        width: 500px;
      }
    }

    .small {
      border: 1px solid #eee;
      border-radius: 8px;
      display: flex;
      margin: 0px 10px 10px 0px;

      img {
        height: 60px;
        margin-right: 10px;
      }
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .pedido {
    .titulo {
      font-size: 18px;
      color: #0b2031;
      font-weight: 600;
      line-height: 22px;
    }

    .valor {
      color: #0b2031;
      font-size: 16px;
      line-height: 19px;
      font-weight: 800;
    }

    small {
      font-size: 11px;
      line-height: 22px;
      margin-right: 15px;
    }

    hr {
      border: 0.5px solid #eee;
      margin: 15px 0px 15px 0px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
