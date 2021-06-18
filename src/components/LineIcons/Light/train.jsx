import React from 'react';

function Train(props) {
	const title = props.title || "train";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.6 15.2c-.8-7.1-6.8-12.4-14-12.4H39v-.3C39 1.1 37.9 0 36.5 0h-9.1C26.1 0 25 1.1 25 2.5v.3h-2.6c-7.1 0-13.1 5.3-14 12.4-.1.5-.1 1.1-.1 1.6V50c0 1.6 1.3 2.9 2.9 2.9H17l-5.7 8.7c-.5.7-.3 1.6.4 2.1.3.2.5.2.8.2.5 0 1-.2 1.3-.7L20.6 53h23.1l6.5 10.3c.3.5.8.7 1.3.7.3 0 .6-.1.8-.2.7-.4.9-1.4.5-2.1L47.2 53h5.6c1.6 0 2.9-1.3 2.9-2.9V16.8c0-.5 0-1-.1-1.6zM28 3h8v2.5h-8V3zm-5.6 2.8H25v.3c0 1.4 1.1 2.5 2.5 2.5h9.1c1.4 0 2.5-1.1 2.5-2.5v-.3h2.5c5.1 0 9.4 3.4 10.7 8.1H11.7c1.3-4.7 5.6-8.1 10.7-8.1zm8.1 11.1v10.9H11.3V16.9h19.2zm3 0h19.2v10.9H33.5V16.9zM11.3 50V30.8h41.4V50H11.3z"/>
		<path d="M20.9 33.3c-3.9 0-7 3.2-7 7s3.2 7 7 7 7-3.2 7-7-3.1-7-7-7zm0 11.1c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
		<path d="M43.1 33.3c-3.9 0-7 3.2-7 7s3.2 7 7 7c3.9 0 7-3.2 7-7s-3.1-7-7-7zm0 11.1c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
	</g>
</svg>
	);
};

export default Train;