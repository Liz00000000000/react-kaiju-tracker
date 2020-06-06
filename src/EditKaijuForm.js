import React from 'react'

class EditKaijuForm extends React.Component {

  render() {
    return (
      <>
        <form className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input type='text' name='name' placeholder={this.props.name} onChange={this.props.changeKaiju}/>
          <br/>

          <label>Power: </label>
          <input type='text' name='power' placeholder={this.props.power} onChange={this.props.changeKaiju} />
          <br/>

          <label>Image URL: </label>
          <input type='text' name='image' placeholder={this.props.image} onChange={this.props.changeKaiju}/>
          <br/>

          <button onClick={this.props.delete} name={this.props.id} >Delete Kaiju</button>

          <input name={this.props.id} type="submit" value="Save Changes" onClick={event => this.props.handleSubmit(event)}/>

        </form>
      </>
    )
  }
}

export default EditKaijuForm
