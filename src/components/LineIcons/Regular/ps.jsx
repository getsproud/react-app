import React from 'react';

function Ps(props) {
	const title = props.title || "ps";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.7 9.6L40.3 2.5c-1.2-.8-2.7-1.3-4.2-1.3H17.5c-4.1 0-7.4 3.3-7.4 7.4v46.6c0 4.1 3.3 7.4 7.4 7.4h28.9c4.1 0 7.4-3.3 7.4-7.4V15.8c.1-2.5-1.1-4.8-3.1-6.2zm-.3 45.7c0 2.2-1.8 3.9-3.9 3.9h-29c-2.2 0-3.9-1.8-3.9-3.9V8.7c0-2.2 1.8-3.9 3.9-3.9H36c.8 0 1.6.2 2.2.7l10.4 7.1c1.1.7 1.7 2 1.7 3.3v39.4z"/>
		<path d="M27 24.8h-5.8c-1 0-1.8.8-1.8 1.8v21.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-11h4c2.7 0 4.9-2.2 4.9-4.9v-2.6c-.1-2.7-2.2-4.9-4.9-4.9zm1.3 7.5c0 .7-.6 1.4-1.4 1.4h-4.1v-5.3H27c.7 0 1.4.6 1.4 1.4v2.5z"/>
		<path d="M39.9 37.6h2.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.7c-2.5 0-4.4 2-4.4 4.4v.9c0 2.5 2 4.4 4.4 4.4.5 0 .9.4.9.9v.9c0 .5-.4.9-.9.9h-2.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.7c2.5 0 4.4-2 4.4-4.4v-.9c0-2.5-2-4.4-4.4-4.4-.5 0-.9-.4-.9-.9v-.9c-.1-.5.4-.9.9-.9z"/>
	</g>
</svg>
	);
};

export default Ps;