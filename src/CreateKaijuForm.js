import React from 'react'

class CreateKaijuForm extends React.Component {

  render() {
    return (
      <div>
        <form id='create-kaiju-form'>

          <label>Name: </label>
          <input onChange={this.props.handleOnChnage} type='text' name='name' placeholder="add your name here.." value={this.props.name}/>

          <label>Power: </label>
          <input onChange={this.props.handleOnChnage} type='text' name='power' placeholder="add your power here..." value={this.props.power} />

          <label>Image: </label>
          <input onChange={this.props.handleOnChnage} type='text' name='image' placeholder="add your image url here..." value={this.props.image}/>

          <br/>

          <input onClick={event => this.props.newKaiju(event)} type='submit' value='List Kaiju' />

        </form>
      </div>
    )
  }
}

export default CreateKaijuForm
