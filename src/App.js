import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Search from './search';
import Counter from './counter';
import {DATASET} from "./testData";
import {css} from '@emotion/css'

const modifyData = () => {

    const newData = []
    DATASET.forEach((data, index) => {
        newData.push({id: index, name: data})
    })
    return newData
}

const items = modifyData()

const filterPosts = (items, query) => {
    if (!query) {
        return items;
    }
    return items.filter((post) => {
        const postName = post.name;
        return postName.includes(query);
    });
};

const App = () => {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('search');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(items, searchQuery);
    const color = 'darkgreen'
    return (
        <Router>
            <div>
                <div className={css`
                                  padding: 32px;
                                  background-color: gray;
                                  font-size: 24px;
                                  &:hover {
                                    color: ${color};
                                  }
    `}>
                    <Counter message={`${filteredPosts.length} items`}/>
                </div>
                <div className={css`
                                 max-width: 500px;
                                 margin: 0 auto;
    `}>
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <ul
                        className={css`
                            -webkit-box-shadow: 10px 10px 44px -25px rgba(0,0,0,0.75);
                            -moz-box-shadow: 10px 10px 44px -25px rgba(0,0,0,0.75);
                            box-shadow: 10px 10px 44px -25px rgba(0,0,0,0.75);
                            list-style-type: none;
                            text-decoration: none;
                            max-width: 500px;
                            background: gainsboro;
                            padding: 0;
                            border-radius: 5px;
                            text-align: center;`}
                    >
                        {filteredPosts.map((post) => (
                            <li className={css`border-bottom: 1px solid; padding: 5px`}
                                key={post.id}>{post.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Router>
    );
};

export default App;
