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

export default class climateFilter extends Component {
  render() {
    const { onClick, selectedClimate } = this.props

    return (
      <FilterWrapper>
        <Headline>Explore the different climates.</Headline>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="climate"
            onClick={e => onClick(0)}
            disabled={selectedClimate === 0}
          />
          <Label htmlFor="1">temperate</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="climate"
            onClick={e => onClick(1)}
            disabled={selectedClimate === 1}
          />
          <Label htmlFor="2">murky</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="climate"
            onClick={e => onClick(2)}
            disabled={selectedClimate === 2}
          />
          <Label htmlFor="3">frozen</Label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
