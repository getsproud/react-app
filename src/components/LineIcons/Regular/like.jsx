import React from 'react';

function Like(props) {
	const title = props.title || "like";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.3 22.9c-1.8-1.5-4-2.4-6.3-2.4H42.1v-7.3c0-4.4-1.4-7.6-4-9.6-1.7-1.2-3.7-1.9-6.1-1.9-2.2 0-3.9.6-3.9.6-1.3.4-2.3 1.6-2.3 3v10.2c0 4.9-4.4 7.5-6.8 8.6V24c0-1-.8-1.8-1.8-1.8H6c-2.6 0-4.8 2.1-4.8 4.8v30.6c0 2.6 2.1 4.8 4.8 4.8h11.2c.9 0 1.7-.8 1.7-1.7 1.3.6 2.7 1 4.2 1H48c6.4 0 10.6-3.5 11.4-9.4l3.2-20c.6-3.6-.7-7.2-3.3-9.4zM15.5 58.8H6c-.7 0-1.3-.6-1.3-1.3V27c0-.7.6-1.3 1.3-1.3h9.5v33.1zm43.7-27.2L56 51.7c-.6 4.1-3.4 6.3-8 6.3H23.1c-1.5 0-3-.6-4.2-1.6V27.8c2.3-.8 10.3-4.3 10.3-12.3V5.6c.4-.1 1.4-.3 2.6-.3 1.6 0 3 .4 4.1 1.2 1.7 1.3 2.6 3.6 2.6 6.8v9.1c0 1 .8 1.8 1.8 1.8h12.6c1.5 0 2.9.5 4.1 1.5 1.7 1.3 2.5 3.6 2.2 5.9z"/>
	</g>
</svg>
	);
};

export default Like;