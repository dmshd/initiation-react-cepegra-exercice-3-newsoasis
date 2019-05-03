import React from 'react';
import ArticlePreview from "./ArticlePreview";
import { uid } from 'react-uid';

const ArticlesList = ({articles}) => (
    <section className="articlesListSection">
        {articles.map((item) => <ArticlePreview key={uid(item)} titre={item.titre} content={item.content} date={item.date} author={item.author} source={item.source} />)}
    </section>
);

export default ArticlesList;
