import React from 'react';

function Panel5(props) {
	const title = props.title || "panel 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zM20.1 39.7H4.8V24.3h15.4v15.4zM8.8 4.8h11.3v16.1H4.8v-12c0-2.3 1.8-4.1 4-4.1zm-4 50.4v-12h15.4v16.1H8.8c-2.2 0-4-1.9-4-4.1zm54.5 0c0 2.2-1.8 4-4 4H23.6V4.8h31.6c2.2 0 4 1.8 4 4v46.4z"/>
	</g>
</svg>
	);
};

export default Panel5;