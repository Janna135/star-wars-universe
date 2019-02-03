import React, { Component } from 'react'

import styled from 'react-emotion'

const FilterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const FilterRow = styled('div')`
  flex-direction: column;
`

export default class orbitalFilter extends Component {
  render() {
    const { onClick, selectedOrbital } = this.props

    return (
      <FilterWrapper>
        <h3>Explore the different orbitals.</h3>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="orbital"
            onClick={e => onClick(0)}
            disabled={selectedOrbital === 0}
          />
          <label htmlFor="1">less than 300</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="orbital"
            onClick={e => onClick(1)}
            disabled={selectedOrbital === 1}
          />
          <label htmlFor="2">less than 500</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="orbital"
            onClick={e => onClick(2)}
            disabled={selectedOrbital === 2}
          />
          <label htmlFor="3">less than 1000</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="4"
            name="orbital"
            onClick={e => onClick(3)}
            disabled={selectedOrbital === 3}
          />
          <label htmlFor="4">more than 1000</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="5"
            name="orbital"
            onClick={e => onClick(4)}
            disabled={selectedOrbital === 4}
          />
          <label htmlFor="5">more than 3000</label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
