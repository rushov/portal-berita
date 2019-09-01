import React from 'react';

const NewsList = ({ article }) => (
	<article className="row news__list">
		<div className="col-md-12 col-xs-12">
			<div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 news__image">
				<div className="">
					<img src={article.urlToImage} alt="" className="img__thumbnail"/>
				</div>
			</div>
			<div className="col-lg-10 col-md-8 col-sm-12 col-xs-12 news__text">
				<div className="news__title">
					<a href={article.url} className="pointer" target="_blank" rel="noopener noreferrer">{article.title}</a>
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