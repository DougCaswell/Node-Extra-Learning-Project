import React, {Component} from 'react';


export default class List extends Component {
    
    //   this.editMessage = this.editMessage.bind( this );
    //   this.removeMessage = this.removeMessage.bind( this );
    
  
    
  
    // editMessage( id, text ) {
    //   console.log( 'editMessage:', id, text ); 
    //   axios.put( url + `/${id}`, { text } ).then( response => {
    //     this.setState({ messages: response.data });
    //   });
    // }
  
    // removeMessage( id ) {
    //   axios.delete( url + `/${id}` ).then( response => {
    //     this.setState({ messages: response.data });
    //   });
    // }
  
    render() {
    let id = 0;
    var safeColors = ['00','33','66','99','cc','ff'];
    
      return (
            <div>
              {
                this.props.list.map( item => {
                  id++
                  return (
                    <h2  className='listElement' key={id}>{item.text.text}</h2>
                  )
                 } )
              }
            </div>
      )
    }
  }