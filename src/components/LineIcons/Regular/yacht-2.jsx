import React from 'react';

function Yacht2(props) {
	const title = props.title || "yacht 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 46.5c-.3-.5-.9-.8-1.4-.8h-21v-6.6h12.7c.6 0 1.2-.3 1.5-.9s.3-1.2 0-1.7L35.8 10.2V3c0-.8-.5-1.5-1.3-1.7-.8-.2-1.6.2-2 .9L17 30.9c-.9 1.8-.9 3.8.1 5.5s2.8 2.7 4.8 2.7h10.4v6.6h-25c-.6 0-1.1.3-1.4.8-.3.5-.4 1.1-.2 1.6l4.2 11.1c.8 2.2 2.9 3.6 5.2 3.6H49c2.3 0 4.4-1.5 5.2-3.6l4.2-11.1c.2-.6.1-1.2-.2-1.6zM45.6 35.6h-9.7v-18l9.7 18zm-25.4-1c-.4-.7-.4-1.4 0-2.1L32.3 9.9v25.7H22c-.8 0-1.5-.3-1.8-1zm30.7 23.3c-.3.8-1.1 1.4-2 1.4H15.1c-.9 0-1.7-.5-2-1.4l-3.3-8.7h44.4l-3.3 8.7z"/>
	</g>
</svg>
	);
};

export default Yacht2;