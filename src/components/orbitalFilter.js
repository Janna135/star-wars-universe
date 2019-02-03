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

const Label = styled('label')`
  margin-left: 10px;
`
const Headline = styled('h3')`
  color: #00b5ff;
`

export default class orbitalFilter extends Component {
  render() {
    const { onClick, selectedOrbital } = this.props

    return (
      <FilterWrapper>
        <Headline>Explore the different orbitals.</Headline>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="orbital"
            onClick={e => onClick(0)}
            disabled={selectedOrbital === 0}
          />
          <Label htmlFor="1">less than 300</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="orbital"
            onClick={e => onClick(1)}
            disabled={selectedOrbital === 1}
          />
          <Label htmlFor="2">less than 500</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="orbital"
            onClick={e => onClick(2)}
            disabled={selectedOrbital === 2}
          />
          <Label htmlFor="3">less than 1000</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="4"
            name="orbital"
            onClick={e => onClick(3)}
            disabled={selectedOrbital === 3}
          />
          <Label htmlFor="4">more than 1000</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="5"
            name="orbital"
            onClick={e => onClick(4)}
            disabled={selectedOrbital === 4}
          />
          <Label htmlFor="5">more than 3000</Label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
