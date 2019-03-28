import React from 'react';
import PropTypes from 'prop-types';
import validator  from 'validator'; 



class CreateBossForm extends React.Component {
    render() {
       // const { name, description, image } = this.props;
        return (
            <div className="boss-item">
                <h3>{name}</h3>
                <p>{description}</p>
                <img class="BossImg" src={image} alt= 'img'/>
            </div>
        );
    }
};

CreateBossForm.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default CreateBossForm;