// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {


  state = {
    edit: false
  }

  showKaijuForm = () => {
    this.setState({creatingAKaiju: !this.state.creatingAKaiju})
  }

  editKaiju = () => {
    this.setState({edit: !this.state.edit})
  }


  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' onClick={this.props.sightings} src={this.props.image} name={this.props.id} />

        {this.state.edit ? <EditKaijuForm delete={this.props.delete} id={this.props.id} name={this.props.name} power={this.props.power} kaiju={this.props.editedKaiju} handleSubmit={event => this.props.handleSubmit(event)} changeKaiju={event => this.props.changeKaiju(event)} /> : null }
        <button className='kaiju-card-edit-button' onClick={this.editKaiju}> {this.state.edit ? 'Go Back ' : 'Edit' } </button>

      </div>
    )
  }
}

export default KaijuCard
