import React from 'react';

function Flag(props) {
	const title = props.title || "flag";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.5 9.5c-.6-.7-1.6-1.2-2.6-1.2H12.8V1.5c0-.8-.7-1.5-1.5-1.5S9.8.7 9.8 1.5v61c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V36.3h34.9c1.6 0 3-1.2 3.3-2.7L54.2 12c.1-.9-.1-1.8-.7-2.5zM48 33.1c0 .1-.1.2-.3.2H12.8v-22h38.1c.2 0 .3.1.3.1v.1L48 33.1z"/>
	</g>
</svg>
	);
};

export default Flag;