import React from 'react';

export default class ArticleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: true
        };
    }

    render = () => (
        <article>
            <h3 className='newsDetailTitle'>Article Title</h3>
            <h4>published date</h4>
            <h5>Author</h5>
            <h6>source</h6>
            <p>Article content</p>
        </article>
    );

}