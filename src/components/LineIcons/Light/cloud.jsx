import React from 'react';

function Cloud(props) {
	const title = props.title || "cloud";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.7 55.6H14.5C6.5 55.6 0 49 0 41c0-7.7 6-14 13.6-14.5.2-10 8.4-18.1 18.4-18.1 2.2 0 4.2.3 6 1 4 1.4 7.4 4.2 9.7 8 4.3.6 8.3 2.8 11.2 5.9 3.3 3.6 5.1 8.2 5.1 13.1 0 10.6-8.6 19.2-19.3 19.2zm-30.2-3h30.2c9 0 16.3-7.3 16.3-16.2 0-4.1-1.5-8-4.3-11-2.5-2.8-6.2-4.6-10-5-.5-.1-.9-.3-1.2-.8-1.9-3.5-4.9-6.1-8.5-7.3-1.5-.6-3.1-.9-5-.9-8.5 0-15.5 6.9-15.5 15.5V28c0 .8-.7 1.5-1.5 1.5h-.5C8.1 29.5 3 34.6 3 41s5.1 11.6 11.5 11.6z"/>
	</g>
</svg>
	);
};

export default Cloud;