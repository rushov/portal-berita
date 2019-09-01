import React from 'react';

const NewsList = ({ article }) => (
	<article className="row">
		<div className="col-md-12 col-xs-12 news__list">
			<div className="col-md-2 col-xs-12 news__image">
				<div className="aspect-ratio">
					<img src={article.urlToImage} alt="" className="img__thumbnail"/>
				</div>
			</div>
			<div className="col-md-10 col-xs-12 news__text">
				<div className="news__title">
					<a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
				</div>
				<div className="news__detail">
					{article.author}<br/>
					{article.publishedAt}
				</div>
			</div>
		</div>
	</article>
);

export default NewsList;