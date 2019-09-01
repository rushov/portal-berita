import React from 'react';
import Async from 'react-async';
import { connect } from 'react-redux';
import  NewsItem  from '../components/news';

const loadHome = () =>
  fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=193443ee62914d44884ab5249279537e")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
	.then(parsedJSON => parsedJSON.articles.map(data => (
		{
			title: `${data.title}`,
			author: `${data.author}`,
			url: `${data.url}`,
			thumbnail: `${data.urlToImage}`,
			published: `${data.publishedAt}`,
			content: `${data.content}`,
		}
	)))

let News = ({ newslist, isloading,menuactive }) => {
	let news = '',title='';
	var i, loading = [];
	
	if(newslist) {
		news = newslist.map((article, index) =>
		(
			<div key={`${index}`}>
				<NewsItem article={newslist[index]} />
			</div>
		))
	}else{
		news = (
			<Async promiseFn={loadHome}>
				{({ data, err, isLoading }) => {
					if (isLoading) {
						for (i = 0; i < 5; i++) {
						loading.push (
							<div className="loading">
								<div className="col-md-2 col-xs-12 loading__image"></div>
								<div className="col-md-10 col-xs-12 loading__text-top"></div>
								<div className="col-md-10 col-xs-12 loading__text-bottom"></div>
								<div className="col-md-10 col-xs-12 loading__text-bottom"></div>
							</div>);
						}
						return loading;
					}
					if (err) {return `An error occurred.: ${err.message}`}

					if (data){
						return (
							<div>
								{data.map((article,index)=> (
									<article className="row" key={index}>
										<div className="col-md-12 col-xs-12 news__list">
											<div className="col-md-2 col-xs-12 news__image">
											<div className="aspect-ratio">
												<img src={article.thumbnail} alt="" className="img__thumbnail"/></div>
											</div>
											<div className="col-md-10 col-xs-12 news__text">
												<div className="news__title">
													<a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
												</div>
												<div className="news__detail">
													{article.author}<br/>
													{article.published}
												</div>
											</div>
										</div>
									</article>
								))}
							</div>
						)
					}
				}}
			</Async>
		);

		title= 'Hightligth';
	}

	if(menuactive){
		title= menuactive.title;
	}


	if (isloading) {
		for (i = 0; i < 5; i++) {
		loading.push (
			<div className="loading">
				<div className="col-md-2 col-xs-12 loading__image"></div>
				<div className="col-md-10 col-xs-12 loading__text-top"></div>
				<div className="col-md-10 col-xs-12 loading__text-bottom"></div>
				<div className="col-md-10 col-xs-12 loading__text-bottom"></div>
			</div>);
		}
		news= loading;
	}

	return (
		<div className="content">
			<div className="content__title">
				<h2>{title}</h2>
			</div>
			<div className="content__detail">
				{news}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	newslist: state.content.json,
	isloading: state.content.loading,

	menuactive: state.activeMenu.json,
});

export default connect(mapStateToProps)(News);

