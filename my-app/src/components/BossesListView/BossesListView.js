import React from 'react';
import BossesListViewItem from '../BossesListViewItem/BossesListViewItem';

class BossesListView extends React.Component {
    render() {
        let list;

        if(this.props.bosses) {
            list = this.props.bosses.map((boss) => {
                return(
                    <BossesListViewItem 
                        key={boss.id} id={boss.id} name={boss.name} description={boss.description} image={boss.img}/>
                )
            })
        }
        return (<div>
            {list}
        </div>)
    }
};

export default BossesListView;
