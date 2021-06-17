import React from 'react';

function Search(props) {
	const title = props.title || "search";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.3 53.4L45.9 36c-.9-.9-2.4-.9-3.4 0l-2.2 2.2-6.3-6.3c6.5-7.6 6.2-19-1-26.2-7.5-7.5-19.8-7.5-27.3 0s-7.5 19.8 0 27.3c3.8 3.8 8.7 5.6 13.7 5.6 4.5 0 8.9-1.6 12.5-4.6l6.4 6.4-2.3 2.1c-.9.9-.9 2.4 0 3.4l17.4 17.4c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l6.5-6.5c.9-.9.9-2.4 0-3.4zM7.8 30.9c-6.4-6.4-6.4-16.7 0-23.1C11 4.6 15.1 3 19.3 3s8.4 1.6 11.5 4.8c6.4 6.4 6.4 16.7 0 23.1s-16.7 6.3-23 0zm47.3 29.8L38.6 44.2l5.6-5.6 16.5 16.5-5.6 5.6z"/>
	</g>
</svg>
	);
};

export default Search;