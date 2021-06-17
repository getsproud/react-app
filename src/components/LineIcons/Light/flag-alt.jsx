import React from 'react';

function FlagAlt(props) {
	const title = props.title || "flag alt";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.8 34.2l-3.9-9.1 3.9-9.1c0-.1.1-.2.1-.3v-.3c0-.8-.7-1.5-1.5-1.5H33.5v-4c0-.8-.7-1.5-1.5-1.5H14.1V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v61c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V30.7h16.4v2.9c0 1.5 1.2 2.7 2.7 2.7h18.2c.8 0 1.5-.7 1.5-1.5 0-.2 0-.4-.1-.6zm-38.7-6.5V11.3h16.4v16.4H14.1zm19.4-1.2v-9.6h15.7l-3.5 8.2 3.5 8.2H33.5v-6.8z"/>
	</g>
</svg>
	);
};

export default FlagAlt;