export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const USERS_SECLECTED= 'USERS_SECLECTED';

const MY_API_KEY = '193443ee62914d44884ab5249279537e';

export const requestPosts = () => ({
	type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
	type: RECEIVE_POSTS,
	json: json.articles,
});

export function selectMenu(channel) {
	console.log("you click ",channel.url);
	
	return function (dispatch) {
		dispatch(requestPosts());
		return fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${channel.url}&apiKey=${MY_API_KEY}`)
		.then(
			response => response.json(),
			error => console.log('An error occurred.', error),
		)
		.then(
			(json) => {dispatch(receivedPosts(json));}

		);
	};
};

export function selectMenu2(channel) {
	console.log("you click2 ",channel.url);
	
	return {
		type: USERS_SECLECTED,
		json: channel,
	};
};


export function loadawal(channel) {
	console.log("you click2 ",channel.url);
	
	return {
		type: USERS_SECLECTED,
		json: channel,
	};
};

