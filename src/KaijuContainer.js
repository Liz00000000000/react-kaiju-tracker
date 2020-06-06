//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    creatingAKaiju: false,
    newKaiju: {
      Name: '',
      Power: ' ',
      Image: ' '
    },
    editedKaiju: { 
      name: '',
      power: ''
    },
    sighings: []
  }

  componentDidMount(){
  requests.fetchKaijus()
  .then(response => {
    this.setState({
      kaijus: [...response]
    })
  })
  }

  changeKaiju = (event) => {
    if (event.target.name == 'name'){ 
    this.setState({
      editedKaiju: { name: event.target.value }
    })
  } else if (event.target.name == 'power'){
    this.setState({
      editedKaiju: { power: event.target.value }
    })
  }
    console.log(this.state.editedKaiju)
  }
 
  newKaiju = (event) => {
    event.preventDefault()
    this.setState({
      kaijus: [...this.state.kaijus, this.state.newKaiju]
    })
    this.setState({
      newKaiju: {
        Name: '',
        Power: '',
        Image: ''
      }
    })
    console.log(this.state.newKaiju)
  }

  enterKaj = (event) => {
    this.setState({
      newKaiju: {
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let editedKaijuId = event.target.name
    const kaijuArray = this.state.kaijus.slice()
    let kai = kaijuArray.find(kaiju => kaiju.id == editedKaijuId)
    if (this.state.editedKaiju.name != null){
        kai.name = this.state.editedKaiju.name
    }
    if (this.state.editedKaiju.power != null){
      kai.power = this.state.editedKaiju.power
  }
    this.setState({ kaijus: [...kaijuArray]})
  }

  delete = (event) => {
    event.preventDefault()
   let idToDelete = event.target.name
   const kaijuArrayForDelete = this.state.kaijus.slice()
   let kai = kaijuArrayForDelete.find(kaiju => kaiju.id == idToDelete)
   kaijuArrayForDelete.splice(kai.id - 1, 1)
   this.setState({ kaijus: [...kaijuArrayForDelete] })
  }

  sightings = (event) =>{
    let kaiID = event.target.name
    fetch('http://localhost:4000/sightings')
    .then(res => res.json())
    .then(sighings => {
      const sightingsForKai = sighings.find(see => see.kaijuId == kaiID )
      if (sightingsForKai == undefined) {
        alert( 'No Sightings Yet! ')
      } else {
        alert(`Kaiju seen in ${sightingsForKai.location}`)
      }
    })
  }

  render() {
    return (
      <>


       {this.state.creatingAKaiju ? <CreateKaijuForm handleOnChnage={this.enterKaj} kaiju={this.state} newKaiju={event => this.newKaiju(event)}/> : null }
        <button onClick={this.showKaijuForm}>{this.state.creatingAKaiju ? 'Hide Kaiju form' : 'Add a Kaiju' }</button>



        <div id='kaiju-container'>

          {this.state.kaijus.map(kaiju => <KaijuCard  sightings={this.sightings}  delete={this.delete} changeKaiju={this.changeKaiju}  key={kaiju.id} {...kaiju} editKaiju={this.props.editedKaiju} handleSubmit={this.handleSubmit}/>)}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
