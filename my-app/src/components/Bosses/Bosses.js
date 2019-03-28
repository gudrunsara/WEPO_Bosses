import React from 'react'; 
import { connect } from 'react-redux';
import { getAllBosses } from '../../actions/BossActions.js';
import BossesListView from '../BossesListView/BossesListView';

class Bosses extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getAllBosses();
  }

  render() {

    return (
      <div className="Bosses">
        <h2> List of bosses </h2>
        <BossesListView bosses={this.props.bosses.bosses} />
      </div>
    );

  }
}

const mapStateToProps = ({ bosses }) => {
  console.log('hello');
  console.log(bosses);
  return {
    bosses
  }; 
}

// Connect: 
// Connect fær ákveðin skilyrði, það sem kemur 
// út úr því er fall sem tekur við vcomponent
// Tekur inn fallið mapStateToProps, sem er kallað á í hverst skipti
// sem redux store breytist. 


export default connect(mapStateToProps, { getAllBosses })(Bosses);