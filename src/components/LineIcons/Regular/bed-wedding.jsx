import React from 'react';

function BedWedding(props) {
	const title = props.title || "bed wedding";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 37.6l-3.6-3.3V22c0-3-2.4-5.4-5.4-5.4H11.1c-3 0-5.4 2.4-5.4 5.4v12.4l-3.1 3.3c-.9 1-1.4 2.3-1.4 3.7v15.5c0 3 2.4 5.4 5.4 5.4h4.1c2.6 0 4.9-1.9 5.3-4.6.2-.9.9-1.6 1.9-1.6h29.7c.9 0 1.7.7 1.9 1.6.4 2.6 2.7 4.5 5.3 4.5h2.6c3 0 5.4-2.4 5.4-5.4V41.6c0-1.5-.7-3-1.8-4zM11.1 20.1H52c1 0 1.9.8 1.9 1.9v11.4H52v-3.5c0-3-2.4-5.4-5.4-5.4h-7c-3 0-5.4 2.4-5.4 5.4v3.5h-4.8v-3.5c0-3-2.4-5.4-5.4-5.4h-7c-3 0-5.4 2.4-5.4 5.4v3.5H9.3V22c0-1 .8-1.9 1.8-1.9zm26.7 13.3v-3.5c0-1 .8-1.9 1.9-1.9h7c1 0 1.9.8 1.9 1.9v3.5H37.8zm-22.5 0v-3.5c0-1 .8-1.9 1.9-1.9h7c1 0 1.9.8 1.9 1.9v3.5H15.3zm-10 6.7l3-3.3H55l3.6 3.3c.4.4.6.9.6 1.4v3.8H4.8v-3.9c0-.5.1-.9.5-1.3zm52.1 18.7h-2.6c-.9 0-1.7-.7-1.9-1.6-.4-2.6-2.7-4.5-5.3-4.5H17.9c-2.6 0-4.9 1.9-5.3 4.6-.2.9-.9 1.6-1.9 1.6H6.6c-1 0-1.9-.8-1.9-1.9v-8h54.5v8c.1.9-.8 1.8-1.8 1.8z"/>
		<path d="M30 15.6c.5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l4.2-4.2c1.1-1.1 1.7-2.5 1.6-4 0-1.5-.6-2.9-1.6-4-1.7-1.7-4.1-2.1-6.2-1.2-.7-.3-1.4-.4-2.2-.4-1.4 0-2.8.5-3.8 1.5-1.1 1-1.7 2.4-1.8 4 0 1.6.6 3.2 1.7 4.3l4.1 4zm-1.7-9.8c.4-.4.9-.6 1.4-.6.4 0 .8.1 1.2.4.6.4 1.4.4 2 0 .8-.6 2-.5 2.7.2.4.4.6.9.6 1.5s-.2 1.1-.6 1.5l-3.7 3.7L28.4 9c-.5-.5-.7-1.1-.7-1.8 0-.5.2-1.1.6-1.4z"/>
	</g>
</svg>
	);
};

export default BedWedding;