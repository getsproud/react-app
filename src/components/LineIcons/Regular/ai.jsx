import React from 'react';

function Ai(props) {
	const title = props.title || "ai";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.7 10.4L39.6 2.1c-.8-.6-1.8-.9-2.8-.9H15.1c-2.7 0-5 2.2-5 5v51.6c0 2.7 2.2 5 5 5H49c2.7 0 5-2.2 5-5V14.5c-.1-1.7-.9-3.2-2.3-4.1zm-1.3 47.4c0 .8-.7 1.5-1.5 1.5H15.1c-.8 0-1.5-.7-1.5-1.5V6.2c0-.8.7-1.5 1.5-1.5h21.8c.3 0 .6.1.8.3l12.1 8.3c.4.3.6.7.6 1.2v43.3z"/>
		<path d="M28.6 28.7c-.3-.5-.9-.9-1.5-.9s-1.2.3-1.5.9l-7.9 13.8c-.5.8-.2 1.9.7 2.4.8.5 1.9.2 2.4-.7l1.7-3h9.2l1.7 3c.3.6.9.9 1.5.9.3 0 .6-.1.9-.2.8-.5 1.1-1.5.7-2.4l-7.9-13.8zm-4.1 8.9l2.6-4.6 2.6 4.6h-5.2z"/>
		<path d="M42.3 34.9c-1 0-1.8.8-1.8 1.8v6.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.7c0-1.1-.8-1.8-1.8-1.8z"/>
		<circle cx="42.3" cy="30.6" r="2.1"/>
	</g>
</svg>
	);
};

export default Ai;