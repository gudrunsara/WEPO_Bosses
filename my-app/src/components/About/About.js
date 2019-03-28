import React from 'react';

class About extends React.Component {
    render() {

        const email = 'Bosses@Bosses.com';
        
        return (
            <div>
                <h1> About Bosses </h1>
                <p> ............ Lorem ipsum ...........</p>
                <p>Address: BossRoad 55</p>
                <a href={"mailto:" + email}>Email us!</a>
            </div>
        );
    }
}

export default About;