import React from 'react';

function Kettlebell(props) {
	const title = props.title || "kettlebell";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.1 23.4l2.1-16c.2-1.9-.3-3.7-1.6-5.1C47.4.9 45.6.1 43.7.1H20.2c-1.9 0-3.6.8-4.9 2.2-1.2 1.4-1.8 3.3-1.6 5.1l2.1 16c-7.2 5.1-12 13.5-12 23.1 0 6.1 1.9 12 5.6 16.9.3.4.7.6 1.2.6h42.7c.5 0 .9-.2 1.2-.6 3.7-4.9 5.6-10.8 5.6-16.9.1-9.6-4.7-18-12-23.1zM16.7 7c-.1-1 .2-2 .8-2.8.7-.7 1.7-1.2 2.7-1.2h23.7c1 0 2 .4 2.6 1.2s1 1.8.8 2.8l-2 14.7c-4-2.1-8.5-3.4-13.3-3.4-4.8 0-9.4 1.2-13.3 3.4L16.7 7zm35.9 54H11.4c-3-4.3-4.6-9.3-4.6-14.5 0-13.9 11.3-25.2 25.2-25.2s25.2 11.3 25.2 25.2c0 5.2-1.6 10.2-4.6 14.5z"/>
	</g>
</svg>
	);
};

export default Kettlebell;