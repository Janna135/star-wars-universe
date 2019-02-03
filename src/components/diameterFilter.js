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

export default class diameterFilter extends Component {
  render() {
    const { onClick, selected } = this.props

    return (
      <FilterWrapper>
        <Headline>Explore the different diameters.</Headline>
        <FilterRow>
          <input
            type="radio"
            id="1"
            name="diameter"
            onClick={e => onClick(0)}
            disabled={selected === 0}
          />
          <Label htmlFor="1">smaller than 5.000</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="2"
            name="diameter"
            onClick={e => onClick(1)}
            disabled={selected === 1}
          />
          <Label htmlFor="2">smaller than 10.000</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="3"
            name="diameter"
            onClick={e => onClick(2)}
            disabled={selected === 2}
          />
          <Label htmlFor="2">bigger than 15.000</Label>
        </FilterRow>
        <FilterRow>
          <input
            type="radio"
            id="4"
            name="diameter"
            onClick={e => onClick(3)}
            disabled={selected === 3}
          />
          <Label htmlFor="2">bigger than 100.000</Label>
        </FilterRow>
      </FilterWrapper>
    )
  }
}
