import React from 'react';
import axios from 'axios';


class PlayerForm extends React.Component {
    submitPlayer(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((erros) => {
            console.log(erros);
        })
    }

    render() { 
        return ( 
            <div className="row">
                <h1 className='centre'>Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="firstName" ref="firstName" type="text" class="validate" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="lastName" ref="lastName" type="text" class="validate" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="phone" ref="phone" type="text" className="validate" />
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" ref="email" type="text" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                         </div>
                         <button className='btn waves-effect waves-light' type='submit' name='action'>Add Player</button>  
                </form>
  </div>
         );
    }
}
 
export default PlayerForm;