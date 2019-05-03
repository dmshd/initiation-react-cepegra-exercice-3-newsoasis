import React from 'react';
import {Link} from 'react-router-dom';

const ArticlePreview = (props) => (
    <article>
        <h3 className='newsDetailTitle'>{props.titre}</h3>
        <h4>{props.date}</h4>
        <h5>{props.author}</h5>
        <h6>{props.source}</h6>
        <p>{props.content}</p>
        {/* <Link to='/article_detail'><p>Lire la suite</p></Link> */}
    </article>
);

export default ArticlePreview;