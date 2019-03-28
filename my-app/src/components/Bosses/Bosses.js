import React from 'react'; 
import { connect } from 'react-redux';
import { getAllBosses } from '../../actions/BossActions.js';
import BossesListView from '../BossesListView/BossesListView';
import CreateBossForm from '../CreateBossForm/CreateBossForm';


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
        <h2> Create a new boss! </h2>  
         <CreateBossForm/>
        <h2> List of bosses </h2>
        <BossesListView bosses={this.props.bosses.bosses} />
      </div>
    );

  }
}

const mapStateToProps = ({ bosses }) => {
  return {
    bosses
  }; 
}

export default connect(mapStateToProps, { getAllBosses })(Bosses);