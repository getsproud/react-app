import React from 'react';

function CommentsAlt(props) {
	const title = props.title || "comments alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 5.5h-61C.7 5.5 0 6.2 0 7v50c0 .5.3 1 .7 1.3.2.1.5.2.8.2.3 0 .5-.1.7-.2l19.1-10.9h41.2c.8 0 1.5-.7 1.5-1.5V7c0-.8-.7-1.5-1.5-1.5zM61 44.4H20.9c-.3 0-.5.1-.7.2L3 54.4V8.5h58v35.9z"/>
		<path d="M12.6 19.6h36c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-36c-.8 0-1.5.7-1.5 1.5 0 .9.7 1.5 1.5 1.5z"/>
		<path d="M12.6 28h30.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H12.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M12.6 36.3h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H12.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default CommentsAlt;