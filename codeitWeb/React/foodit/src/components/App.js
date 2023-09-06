import { useEffect, useState } from 'react';
import FoodList from './FoodList';
import {getFoods} from "./api";
//import mockItems from '../mock.json';

const LIMIT = 6;

function App() {
    const [order, setOrder] = useState('createdAt');
    const [offset, setOffset] = useState(0);
    const [items, setItems] = useState([]);
    const handleNewestClick = () => setOrder('createdAt');
    const handleHighClick = () => setOrder('calorie');

    const handleDelete = (id) => {
        const nextFoodItems = items.filter((item) => item.id !== id);
        setItems(nextFoodItems);
    };

    const handleLoad = async (orderQuery) => {
        const { foods } = await getFoods(orderQuery);
        setItems(foods);
    }

    useEffect(() => {
        handleLoad(order);
    }, [order]);

    const sortedItems = items.sort((a,b) => b[order] - a[order]);

    return (
        <div>
            <button onClick={handleNewestClick}>최신순</button>
            <button onClick={handleHighClick}>칼로리순</button>
            <FoodList items={sortedItems} onDelete={handleDelete} />
        </div>
    );
}
export default App;