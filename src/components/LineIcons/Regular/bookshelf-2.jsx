import React from 'react';

function Bookshelf2(props) {
	const title = props.title || "bookshelf 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 1.3H16.6c-3.4 0-6.1 2.7-6.1 6.1V61c0 1 .8 1.8 1.8 1.8S14 62 14 61V45.2h36V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.4c-.1-3.4-2.8-6.1-6.2-6.1zM16.6 4.8h30.8C48.8 4.8 50 6 50 7.4v15.2h-6.5V12.2c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.8v10.3h-4.1V12.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10.3H14V7.4c0-1.5 1.1-2.6 2.6-2.6zM14 26h16.3v15.7H14V26zm19.8 15.7V26H50v15.7H33.8z"/>
	</g>
</svg>
	);
};

export default Bookshelf2;