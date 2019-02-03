import React, { Component } from 'react'

import styled from 'react-emotion'

import ClimateFilter from './components/climateFilter'
import DiameterFilter from './components/diameterFilter'
import OrbitalFilter from './components/orbitalFilter'
import PlanetItem from './components/planetItem'

const Body = styled('section')`
  background-color: #0d0000;
  color: #ffffff;
  padding: 20px;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      planets: [],
      selectedClimate: 0,
      selectedDiameter: 0,
      selectedOrbital: 0
    }
  }

  componentDidMount() {
    let initialPlanets = []
    fetch('https://swapi.co/api/planets/')
      .then(results => {
        return results.json()
      })
      .then(data => {
        initialPlanets = data.results.map(planet => {
          return planet
        })
        this.setState({
          planets: initialPlanets
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Body>
          <ClimateFilter
            onClick={index => this.setState({ selectedClimate: index })}
            selected={this.state.selectedClimate}
            ref={this.climateFilter}
          />
          {this.filterClimate()}
          <DiameterFilter
            onClick={index => this.setState({ selectedDiameter: index })}
            selected={this.state.selectedDiameter}
            ref={this.diameterFilter}
          />
          {this.filterDiameter()}
          <OrbitalFilter
            onClick={index => this.setState({ selectedOrbital: index })}
            selected={this.state.selectedOrbital}
            ref={this.orbitalFilter}
          />
          {this.filterOrbital()}
        </Body>
      </React.Fragment>
    )
  }

  filterDiameter() {
    const planets = this.state.planets.slice()
    const selectedDiameter = this.state.selectedDiameter

    if (selectedDiameter === 0) {
      return planets
        .filter(planet => planet.diameter <= 5000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedDiameter === 1) {
      return planets
        .filter(planet => planet.diameter <= 10000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedDiameter === 2) {
      return planets
        .filter(planet => planet.diameter >= 15000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedDiameter === 3) {
      return planets
        .filter(planet => planet.diameter >= 100000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    }
  }

  filterClimate() {
    const planets = this.state.planets.slice()
    const selectedClimate = this.state.selectedClimate

    if (selectedClimate === 0) {
      return planets
        .filter(planet => planet.climate === 'temperate')
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedClimate === 1) {
      return planets
        .filter(planet => planet.climate === 'murky')
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedClimate === 2) {
      return planets
        .filter(planet => planet.climate === 'frozen')
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    }
  }

  filterOrbital() {
    const planets = this.state.planets.slice()
    const selectedOrbital = this.state.selectedOrbital

    if (selectedOrbital === 0) {
      return planets
        .filter(planet => planet.orbital_period <= 300)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedOrbital === 1) {
      return planets
        .filter(planet => planet.orbital_period <= 500)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedOrbital === 2) {
      return planets
        .filter(planet => planet.orbital_period <= 1000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else if (selectedOrbital === 3) {
      return planets
        .filter(planet => planet.orbital_period >= 1000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    } else {
      return planets
        .filter(planet => planet.orbital_period >= 3000)
        .map(planet => (
          <PlanetItem
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
          />
        ))
    }
  }
}

export default App
