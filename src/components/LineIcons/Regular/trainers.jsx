import React from 'react';

function Trainers(props) {
	const title = props.title || "trainers";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52 28.1l-13.5-1.4-15.6-6.1-4.2-3.8c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l2.8 2.6c-2.8 1.9-9.1 5.4-15.8 3.6-.5-.1-1.1 0-1.5.3-.4.3-.7.8-.7 1.4v14.2c0 3.4 2.7 6.1 6.1 6.1H61c1 0 1.8-.8 1.8-1.8V40c0-6.2-4.7-11.3-10.8-11.9zm7.3 16H7.4c-1.4 0-2.6-1.2-2.6-2.6V29.4c8.2 1.2 15.2-3.5 17.5-5.3l6 2.3-2.9 3.6c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l3.7-4.4 3.9 1.5-3 3.5c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l4-4.7s0-.1.1-.1l12.2 1.2c4.3.4 7.6 4.1 7.6 8.4v4.1z"/>
	</g>
</svg>
	);
};

export default Trainers;