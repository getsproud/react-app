import React from 'react';

function Closet1(props) {
	const title = props.title || "closet 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.4 1.3H15.6c-2.6 0-4.8 2.1-4.8 4.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.6h35.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V6c-.1-2.6-2.2-4.7-4.8-4.7zM49.6 6v36.7H33.8V4.8h14.6c.7 0 1.2.5 1.2 1.2zm-34-1.2h14.6v37.9H14.4V6c0-.7.5-1.2 1.2-1.2zm-1.2 41.4h35.2v4.7H14.4v-4.7z"/>
		<path d="M25.3 22.5c1 0 1.8-.8 1.8-1.8V16c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.7c.1 1 .9 1.8 1.8 1.8z"/>
		<path d="M38.7 22.5c1 0 1.8-.8 1.8-1.8V16c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.7c0 1 .8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Closet1;