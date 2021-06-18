import React from 'react';

function Balance1(props) {
	const title = props.title || "balance 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13.3 19.8c3.8 0 7-3 7-6.8 0-3.7-3.1-6.8-7-6.8s-7 3-7 6.8 3.2 6.8 7 6.8zm0-10c1.9 0 3.5 1.5 3.5 3.3s-1.5 3.3-3.5 3.3c-1.9 0-3.5-1.5-3.5-3.3s1.6-3.3 3.5-3.3z"/>
		<path d="M4.2 37.8h18.2c1.3 0 2.4-1.1 2.4-2.4V31c0-4.8-3.9-8.7-8.7-8.7h-5.6c-4.8 0-8.7 3.9-8.7 8.7v4.4c0 1.4 1.1 2.4 2.4 2.4zm1.1-6.7c0-2.9 2.3-5.2 5.2-5.2h5.6c2.9 0 5.2 2.3 5.2 5.2v3.3h-16v-3.3z"/>
		<path d="M56 20.3h-4.2c-1.8 0-3.2-1.4-3.2-3.2S50 14 51.8 14H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-3.9V8c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.8v2.5h-1.8a6.7 6.7 0 0 0 0 13.4H56c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2h-9.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.7v2.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.5c3.2-.5 5.7-3.3 5.7-6.6 0-4-3.1-7-6.8-7z"/>
		<path d="M60.1 43.5H3c-1 0-1.8.8-1.8 1.8S2 47 3 47h25.3l-6.8 7.9c-.4.5-.5 1.3-.3 1.9.3.6.9 1 1.6 1h17.3c.7 0 1.3-.4 1.6-1 .3-.6.2-1.4-.3-1.9L34.7 47H60c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.7-1.7zM26.7 54.2l4.8-5.6 4.8 5.6h-9.6z"/>
	</g>
</svg>
	);
};

export default Balance1;