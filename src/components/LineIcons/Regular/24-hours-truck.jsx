import React from 'react';

function 24HoursTruck(props) {
	const title = props.title || "24 hours truck";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 39.8l-5.7-8.2c-.3-.5-.9-.8-1.4-.8h-8.6v-1.7c0-2.8-2.3-5.2-5.2-5.2h-6.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.4c.9 0 1.7.7 1.7 1.7V52h-7.4c-.6-2.2-2.6-3.9-5-3.9s-4.4 1.6-5 3.9h-5.4c-.9 0-1.7-.7-1.7-1.7V39.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10.9c0 2.8 2.3 5.2 5.2 5.2H26c.8 1.7 2.6 3 4.7 3s3.8-1.2 4.7-3H47.8c.8 1.7 2.6 3 4.7 3s3.8-1.2 4.7-3H61c1 0 1.8-.8 1.8-1.8V40.8c0-.3-.2-.7-.4-1zm-8-5.5l3.7 5.3H46.7v-5.3h7.7zM30.8 55c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.8 1.7-1.7 1.7zm21.6 0c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.8 1.7-1.7 1.7zm5-3c-.6-2.2-2.6-3.9-5-3.9s-4.4 1.6-5 3.9h-.7v-8.9h12.5V52h-1.8z"/>
		<path d="M32.2 21c0-8.5-6.9-15.5-15.5-15.5-8.5 0-15.4 7-15.4 15.5s6.9 15.5 15.5 15.5c8.5 0 15.4-7 15.4-15.5zM4.8 21c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12-12-5.4-12-12z"/>
		<path d="M14.4 14.5h-3.5c-1 0-1.8.8-1.8 1.8S10 18 10.9 18h1.8v2h-1.8c-1 0-1.8.8-1.8 1.8v5.5c0 1 .8 1.8 1.8 1.8h3.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.8v-2h1.8c1 0 1.8-.8 1.8-1.8v-5.5c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M18.9 23.5h3.3v3.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.3-.3-5.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V20h-1.6v-3.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5.5c.1 1 .9 1.8 1.9 1.8z"/>
	</g>
</svg>
	);
};

export default 24HoursTruck;