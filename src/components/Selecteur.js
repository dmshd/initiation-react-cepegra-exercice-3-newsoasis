
import React from 'react';

export default class Selecteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <form>
            <label className='theLabel' htmlFor='news-source-selector'>News from :</label>
            <select id='news-source-selector'>
                <option value='a-news-source'>Site 1</option>
                <option value='b-news-source'>Site 2</option>
                <option value='c-news-source'>Site 3</option>
            </select>
        </form>
    );
}
