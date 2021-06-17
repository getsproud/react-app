import React from 'react';

function Couch(props) {
	const title = props.title || "couch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 36.8h-.7V29c0-6.5-5.3-11.8-11.8-11.8H18.8v-3.5c0-3.4-2.7-6.1-6.1-6.1H7.4c-3.4 0-6.1 2.7-6.1 6.1V49c0 1 .8 1.8 1.8 1.8h4.1v4.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.1H54v4.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.1H61c1 0 1.8-.8 1.8-1.8V38.5c-.1-1-.8-1.7-1.8-1.7zM48.5 20.7c4.5 0 8.3 3.7 8.3 8.3v7.8h-38V20.7h29.7zm-43.7-7c0-1.4 1.2-2.6 2.6-2.6h5.3c1.4 0 2.6 1.2 2.6 2.6v23.1H4.8V13.7zm54.4 33.4H4.8v-6.9h54.5v6.9z"/>
	</g>
</svg>
	);
};

export default Couch;