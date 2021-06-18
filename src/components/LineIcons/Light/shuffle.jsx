import React from 'react';

function Shuffle(props) {
	const title = props.title || "shuffle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 47l-8.8-9c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7.4 7.6H47.5L35.4 32.5l12.1-15.1h11.3L52.4 24c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5l8.8-9.1c.8-.9.8-2.3 0-3.2l-8.8-9.1c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7.3 7.5H46.8c-.5 0-.9.2-1.2.6L33.5 30.1 21.4 14.9c-.3-.4-.7-.6-1.2-.6H1.5c-.8.1-1.5.7-1.5 1.6s.7 1.5 1.5 1.5h18l12.1 15.1-12.1 15.1h-18c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h18.7c.5 0 .9-.2 1.2-.6l12.1-15.2L45.6 50c.3.4.7.6 1.2.6h12l-6.3 6.5c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5l8.8-9.1c.8-.7.8-2.1 0-3z"/>
	</g>
</svg>
	);
};

export default Shuffle;