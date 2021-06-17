import React from 'react';

function BriefcaseAlt(props) {
	const title = props.title || "briefcase alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 19.6H43.8v-1.9c0-6.3-5.2-11.5-11.5-11.5h-.7c-6.3 0-11.5 5.2-11.5 11.5v1.9H4.5c-2.5 0-4.5 2-4.5 4.5v29.2c0 2.5 2 4.5 4.5 4.5h55c2.5 0 4.5-2 4.5-4.5V24.1c0-2.4-2-4.5-4.5-4.5zm-36.3-1.9c0-4.7 3.8-8.5 8.5-8.5h.7c4.7 0 8.5 3.8 8.5 8.5v1.9H23.2v-1.9zM4.5 22.6H59.6c.8 0 1.5.7 1.5 1.5v8.7h-8.4v-3.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.2H14.4v-3.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.2H3v-8.7c0-.8.7-1.5 1.5-1.5zm55 32.2h-55c-.8 0-1.5-.7-1.5-1.5V35.8h8.4V39c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.2h35.3V39c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.2H61v17.5c0 .8-.7 1.5-1.5 1.5z"/>
	</g>
</svg>
	);
};

export default BriefcaseAlt;