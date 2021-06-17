import React from 'react';

function Bitcoin(props) {
	const title = props.title || "bitcoin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 31.9c4.6-2.2 7.9-6.8 8.1-12v-1c-.2-8-7.2-14.5-15.5-14.5h-4.7V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2.9H26V1.5c0-.8-.6-1.5-1.5-1.5S23 .7 23 1.5v2.9H10c-.8 0-1.5.6-1.5 1.5s.7 1.5 1.5 1.5h2.9v49H10c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13v3.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.1h6.1v3.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.1h4.6c8.3 0 15.3-6.5 15.5-14.5v-1.2c0-5.1-3.2-9.6-7.8-11.8zM15.9 7.4h24c6.7 0 12.3 5.2 12.5 11.6v.8c-.2 5.9-5.4 10.6-11.5 10.6h-25v-23zm36.5 37.4c-.2 6.4-5.8 11.6-12.5 11.6h-24v-23h25c6.1 0 11.2 4.7 11.4 10.5.1.3.1.6.1.9z"/>
	</g>
</svg>
	);
};

export default Bitcoin;