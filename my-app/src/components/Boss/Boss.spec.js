import React from 'react';
import PropTypes from 'prop-types';
import { GETBOSSES } from '../../constants/Constants';
import { getAllBosses } from '../../actions/BossActions';


class BossesListViewItem extends React.Component {
    render() {
        const { name, description, image } = this.props;

        function getBoss() {
            
        }

        return (
            <div className="boss-item">
                <h3 onClick="getBoss()" >{name}</h3>
                <p>{description}</p>
                <img class="BossImg" src={image} alt= 'img'/>
            </div>
        );
    }
};


export default BossesListViewItem;