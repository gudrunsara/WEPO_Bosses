import React from 'react';
import PropTypes from 'prop-types';


class BossesListViewItem extends React.Component {
    render() {
        const { name, description, image } = this.props;
        return (
            <div className="boss-item">
                <h3>{name}</h3>
                <p>{description}</p>
                <img class="BossImg" src={image} alt= 'img'/>
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