import React from 'react';

function LawBook(props) {
	const title = props.title || "law book";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 6.2c0-2.7-2.2-5-5-5H10.9c-2.7 0-5 2.2-5 5v50.7c.3 3.2 3 5.8 6.3 5.8h44.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H12.2c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8h44.1c1 0 1.8-.8 1.8-1.8v-.2V6.2zM19.7 4.8H26v12.6l-2.3-1.2c-.5-.3-1.1-.3-1.7 0l-2.3 1.2V4.8zm-10.3 46V6.2c0-.8.7-1.5 1.5-1.5h5.3v15.6c0 .6.3 1.2.9 1.5.5.3 1.2.3 1.7 0l4.1-2.2 4.1 2.2c.3.1.5.2.8.2.3 0 .6-.1.9-.2.5-.3.9-.9.9-1.5V4.8h23.6c.8 0 1.5.7 1.5 1.5v43.9H12.2c-1 0-1.9.2-2.8.6z"/>
	</g>
</svg>
	);
};

export default LawBook;