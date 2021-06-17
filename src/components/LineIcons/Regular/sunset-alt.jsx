import React from 'react';

function SunsetAlt(props) {
	const title = props.title || "sunset alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 15.1c-8 0-14.5 6.5-14.5 14.5S24 44.1 32 44.1s14.5-6.5 14.5-14.5S40 15.1 32 15.1zm0 25.5c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"/>
		<path d="M32 9.2c1 0 1.8-.8 1.8-1.8V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v4.5c.1 1 .8 1.7 1.8 1.7z"/>
		<path d="M47.6 15.7c.4 0 .9-.2 1.2-.5L52 12c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-3.2 3.2c-.7.7-.7 1.8 0 2.5.5.4.9.5 1.3.5z"/>
		<path d="M15.1 44l-3.2 3.2c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l3.2-3.2c.7-.7.7-1.8 0-2.5s-1.7-.6-2.4 0z"/>
		<path d="M58.6 27.9h-4.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M9.9 27.9H5.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M48.9 44c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.2 3.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L48.9 44z"/>
		<path d="M15.1 15.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-3.2-3.2c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.3 3.2z"/>
		<path d="M37.6 52.8l-3.9 3.9v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5.1L26.4 53c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l6.8 6.8c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5l7-7c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0z"/>
	</g>
</svg>
	);
};

export default SunsetAlt;