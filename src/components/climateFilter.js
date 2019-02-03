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

export default class climateFilter extends Component {
  render() {
    const { onClick, selectedClimate } = this.props

    return (
      <FilterWrapper>
        <h3>Explore the different climates.</h3>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="climate"
            onClick={e => onClick(0)}
            disabled={selectedClimate === 0}
          />
          <label htmlFor="1">temperate</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="climate"
            onClick={e => onClick(1)}
            disabled={selectedClimate === 1}
          />
          <label htmlFor="2">tropical</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="climate"
            onClick={e => onClick(2)}
            disabled={selectedClimate === 2}
          />
          <label htmlFor="3">murky</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="4"
            name="climate"
            onClick={e => onClick(3)}
            disabled={selectedClimate === 3}
          />
          <label htmlFor="4">arid</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="5"
            name="climate"
            onClick={e => onClick(4)}
            disabled={selectedClimate === 4}
          />
          <label htmlFor="5">frozen</label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
