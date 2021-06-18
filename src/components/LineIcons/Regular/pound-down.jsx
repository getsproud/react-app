import React from 'react';

function PoundDown(props) {
	const title = props.title || "pound down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.9 27.9H26c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.1c.2-.7.4-1.4.4-2.1V25h2.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.5v-2.2c0-1.5 1-2.7 2.1-2.7.5 0 1 .2 1.4.7.7.7 1.8.8 2.5.1.7-.7.8-1.8.1-2.5-1.1-1.2-2.5-1.8-4-1.8-3.1 0-5.6 2.8-5.6 6.2v2.2h-.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.4v.7c0 1.2-.8 2.2-1.7 2.2z"/>
		<path d="M11.9 24.8c1 0 1.8-.8 1.8-1.8C13.6 13 21.9 4.8 32 4.8 42.1 4.8 50.4 13 50.4 23c0 5.5-2.5 10.7-6.8 14.2-.8.6-.9 1.7-.3 2.5.3.4.9.7 1.4.7.4 0 .8-.1 1.1-.4 5.2-4.2 8.1-10.3 8.1-17 0-12-9.8-21.8-21.9-21.8C19.9 1.3 10.1 11 10.1 23c0 1 .8 1.8 1.8 1.8z"/>
		<path d="M49.5 49.2c-1 0-1.8.8-1.8 1.8v5.9l-11.9-8.2c-.9-.6-1.9-.9-2.9-.9H20.7c-.5 0-1-.2-1.3-.5l-6.3-6.5c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l6.2 6.5c1 1 2.4 1.6 3.8 1.6h12.2c.3 0 .7.1 1 .3L45 59.4h-5.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.1c1 0 1.8-.8 1.8-1.8V50.9c0-.9-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default PoundDown;