import React from 'react';

function Yen(props) {
	const title = props.title || "yen";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.9 2.3c.4-.7.2-1.6-.5-2.1-.7-.4-1.6-.2-2.1.5L32 26.3 16.7.7c-.4-.7-1.3-.9-2.1-.5-.7.4-.9 1.3-.5 2.1l16.4 27.4v3.6H18.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h12.4v8.1H18.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h12.4v15.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V47.4h12.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H33.5v-8.1h12.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H33.5v-3.6L49.9 2.3z"/>
	</g>
</svg>
	);
};

export default Yen;