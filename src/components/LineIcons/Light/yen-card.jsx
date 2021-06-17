import React from 'react';

function YenCard(props) {
	const title = props.title || "yen card";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 3.8H7.6C3.4 3.8 0 7 0 10.8v30.5c0 3.9 3.4 7 7.6 7h27.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7.6c-2.5 0-4.6-1.8-4.6-4V26.2h58v12.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V10.8c0-3.9-3.4-7-7.6-7zm-48.8 3h48.8c2.5 0 4.6 1.8 4.6 4v4H3v-4c0-2.2 2.1-4 4.6-4zM3 23.2v-5.3h58v5.3H3z"/>
		<path d="M56 31.8c-.7-.4-1.6-.2-2.1.5l-5.3 9.1-5.3-9.1c-.4-.7-1.3-1-2.1-.5-.7.4-1 1.3-.5 2.1l6.4 10.9v.7h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v5.3h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4h4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4v-5.3h4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4v-.6l6.4-11c.5-.8.2-1.7-.5-2.1z"/>
	</g>
</svg>
	);
};

export default YenCard;