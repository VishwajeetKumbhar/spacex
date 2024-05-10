import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Main from "./Main";
import { useSelector, useDispatch } from 'react-redux';
import { showdata } from '../features/createSlice'

const Hello = () => {
   
    const state = useSelector((state) => state.app);
    console.log("state", state)
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(()=>{
        dispatch(showdata())
    },[])
    useEffect(() => {
        axios
            .get("https://api.spacexdata.com/v3/launches?offset=0&limit=12")
            .then((res) => setItems(res.data))
            .catch((err) => console.log(err));
    }, []);


    const fetchMoreData = () => {
        axios
            .get(`https://api.spacexdata.com/v3/launches?offset=${index}0&limit=12`)
            .then((res) => {
                setItems((prevItems) => [...prevItems, ...res.data]);

                res.data.length > 0 ? setHasMore(true) : setHasMore(false);
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 1);
    };
    
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}

        >
            <div className='container'>
                <div className='row'>
                    {items &&
                        items.map((item) => <Main data={item} key={item.id} />)}
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default Hello