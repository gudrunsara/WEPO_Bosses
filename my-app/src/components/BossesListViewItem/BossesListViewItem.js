import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GETBOSSES } from '../../constants/Constants';
import { getAllBosses } from '../../actions/BossActions';


class BossesListViewItem extends React.Component {
    render() {
        const {  id ,name, description, image } = this.props;
        
        return (
            <div className="boss-item">
                <h3> {name} </h3>
                <p>{description}</p>
                <img class="BossImg" src={image} alt= 'img'/>
                <NavLink to={"/bosses/" + id }> See more! </NavLink>
            </div>
        );
    }
};

BossesListViewItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default BossesListViewItem;