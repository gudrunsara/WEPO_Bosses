import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBoss } from '../../actions/BossActions.js';


class Boss extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bossInfo: undefined
        }
      }

      componentDidMount(){

        this.props.getBoss(this.props.match.params.id);
        this.setState({
            bossInfo: this.props.bossInfo
        })
      }

    render() {

        return (
            <div className="boss-item">
                {/* <h3> {this.props.boss.name} </h3>
                <p> {this.bossInfo.description} </p>
                <img className="BossImg" src={this.bossInfo.img} alt= 'img'/> */}
                <NavLink to={"/bosses"}> Back to bosses</NavLink>
            </div>
        );
    }
}

const mapStateToProps = ({ boss }) => {
    return {
      bossInfo: boss
    }; 
};

export default connect(mapStateToProps, { getBoss })(Boss);