import React from 'react';

function Coins(props) {
	const title = props.title || "coins";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30.1 33.8h-5.8c-2.1 0-3.8-1.7-3.8-3.7s1.7-3.7 3.8-3.7h10.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3.4v-2.9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2.9h-4.1c-3.8 0-6.8 3-6.8 6.7s3.1 6.7 6.8 6.7h5.8c2.1 0 3.8 1.7 3.8 3.7s-1.7 3.7-3.8 3.7h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h9.3v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3c3.1-.6 5.5-3.3 5.5-6.6 0-3.7-3-6.7-6.8-6.7z"/>
		<path d="M35.3 2.7c-7.6 0-14.7 2.9-20.1 8.1-.3.3-.5.8-.4 1.2C6 16.4 0 25.2 0 35.3c0 14.4 12.2 26.1 27.2 26.1 6.5 0 12.5-2.2 17.1-5.8-.1.3-.1.6.1.9.2.6.8.9 1.4.9.2 0 .4 0 .6-.1C57.1 52.8 64 42.5 64 31.1 64 15.4 51.1 2.7 35.3 2.7zM3 35.3c0-12.7 10.8-23 24.2-23s24.2 10.3 24.2 23-10.8 23-24.2 23S3 47.9 3 35.3zm42.9 18.8c5.2-4.7 8.4-11.4 8.4-18.8 0-14.4-12.2-26.1-27.2-26.1-2 0-4 .2-5.9.6 4.1-2.7 9-4.1 14-4.1C49.5 5.7 61 17.1 61 31.1c0 9.9-5.9 18.9-15.1 23z"/>
	</g>
</svg>
	);
};

export default Coins;