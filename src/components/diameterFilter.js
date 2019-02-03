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

export default class diameterFilter extends Component {
  render() {
    const { onClick, selected } = this.props

    return (
      <FilterWrapper>
        <h3>Explore the different diameters.</h3>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="diameter"
            onClick={e => onClick(0)}
            disabled={selected === 0}
          />
          <label htmlFor="1">smaller than 5.000</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="diameter"
            onClick={e => onClick(1)}
            disabled={selected === 1}
          />
          <label htmlFor="2">smaller than 10.000</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="diameter"
            onClick={e => onClick(2)}
            disabled={selected === 2}
          />
          <label htmlFor="2">bigger than 100.000</label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="4"
            name="diameter"
            onClick={e => onClick(3)}
            disabled={selected === 3}
          />
          <label htmlFor="2">bigger than 10.000</label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
