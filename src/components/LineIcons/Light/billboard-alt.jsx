import React from 'react';

function BillboardAlt(props) {
	const title = props.title || "billboard alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 4.1h-61C.7 4.1 0 4.8 0 5.6v32.1c0 .8.7 1.5 1.5 1.5h8.3v19.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V39.2h17.7v19.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V39.2h17.7v19.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V39.2h8.3c.8 0 1.5-.7 1.5-1.5V5.6c0-.8-.7-1.5-1.5-1.5zM61 36.2H3V7.1h58v29.1z"/>
		<path d="M14.9 29.8c.7.4 1.6.1 2-.7l1.9-3.8H27l1.8 3.8c.3.5.8.8 1.3.8.2 0 .4 0 .7-.2.7-.4 1.1-1.3.7-2l-7.3-15c-.3-.5-.8-.8-1.3-.8s-1.1.3-1.3.8l-7.3 15c-.5.8-.2 1.7.6 2.1zm7.9-13l2.7 5.5h-5.3l2.6-5.5z"/>
		<path d="M38.5 30.1H41c4.9 0 8.9-4 8.9-8.9v-.5c0-4.9-4-8.9-8.9-8.9h-2.5c-.8 0-1.5.7-1.5 1.5v15.4c0 .8.7 1.4 1.5 1.4zM40 14.7h1c3.3 0 5.9 2.7 5.9 5.9v.5c0 3.3-2.7 5.9-5.9 5.9h-1V14.7z"/>
	</g>
</svg>
	);
};

export default BillboardAlt;