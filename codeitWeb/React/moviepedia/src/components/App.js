import { useEffect, useState } from 'react';
import ReviewList from "./ReviewList";
import {getReviews} from "./api";
//import mockItems from '../mock.json';

const LIMIT = 6;

function App() {
    const [order, setOrder] = useState('createdAt');
    const [offset, setOffset] = useState(0);
    const [items, setItems] = useState([]);
    const sortedItems = items.sort((a,b) => b[order] - a[order]);

    const handleNewestClick = () => setOrder('createdAt');
    const handleBestClick = () => setOrder('rating');

    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    }

    const handleLoad = async (options) => {
        const { reviews } = await getReviews(options);
        if (options.offset === 0) {
            setItems(reviews);
        } else {
            setItems([...items, ...reviews]);
        }
        //console.log(options.offset);
        setOffset(options.offset + options.limit + 10);
        console.log(offset);
    }

    const handleLoadMore = async () => {
        await handleLoad({ order, offset, limit: LIMIT });
    }

    useEffect(() => {
        handleLoad({ order, offset: 0, limit: LIMIT });
    }, [order])

    return (
        <div>
            <div>
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleBestClick}>베스트순</button>
            </div>
            <ReviewList items={sortedItems} onDelete={handleDelete}/>
            <button onClick={handleLoadMore}>더보기</button>
        </div>
    );
}

export default App;