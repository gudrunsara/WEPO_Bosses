import React from 'react';
import { connect } from 'react-redux';
import { getAllBosses } from '../../actions/BossActions.js';

import validator  from 'validator'; 
// import toastr from 'toastr';



class CreateBossForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      NewBoss: {
        name: '',
        description: '', 
        image: ''
      }
    };
  };

  addBoss(e) {
    if( this.state.NewBoss.name !== "" &&
        this.state.NewBoss.description !== "" &&
        this.state.NewBoss.image !== "" ) {
        }
  }

    render() {
       // const { name, description, image } = this.props;
        return (
            <div className="CreateBossForm">
              <form onSubmit={e => this.addBoss(e) }>
                Name: <input type="text" name="Name" placeholder="Name" value={this.state.NewBoss.name}/>
                Description: <input type="text" name="Description" placeholder="Description" value={this.state.NewBoss.description}/>
                Image: <input type="text" name="Image" placeholder="image URL" value={this.state.NewBoss.image}/>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>
        );
    }
};




export default connect () (CreateBossForm);