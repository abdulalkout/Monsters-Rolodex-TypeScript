import './card-list.style.css';
import Card from '../card/card.component';
import { monster } from '../../App';

type CardListProps = {
    monsters : monster[];
}

const CardList = ({monsters} : CardListProps) => {
    return (
        <div className="card-list">
            {
                monsters.map((monster)=>{
                    return <Card monster={monster}/>
                })
            }
        </div>
    ) 
}

export default CardList;