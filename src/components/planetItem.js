import React, { Component } from 'react'

import styled from 'react-emotion'

const Planet = styled('div')`
  display: flex;
  padding: 0 10px 10px;
  border: 1px solid #cfcfcf;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: column;
  }
`

const Name = styled('p')`
  color: #00b5ff;
  font-size: 20px;
  font-weight: bold;
  width: 120px;
`

const Infos = styled('dl')`
  display: flex;
  flex-direction: column;

  dt {
    font-weight: bold;
    margin-top: 10px;
    @media (min-width: 600px) {
      margin-top: 0;
    }
  }

  dd {
    color: #00b5ff;
    margin-right: 20px;
    -webkit-margin-start: 0;

    @media (min-width: 600px) {
      -webkit-margin-start: 5px;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

export default class PlanetItem extends Component {
  render() {
    const { name, climate, orbital_period, diameter } = this.props

    return (
      <Planet>
        <Name>{name}</Name>
        <Infos>
          <dt>Climate:</dt>
          <dd>{climate}</dd>
          <dt>Orbital Period:</dt>
          <dd>{orbital_period}</dd>
          <dt>Diameter: </dt>
          <dd>{diameter}</dd>
        </Infos>
      </Planet>
    )
  }
}
