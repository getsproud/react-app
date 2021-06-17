import React from 'react';

function PoundUp(props) {
	const title = props.title || "pound up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.9 27.9H26c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-7.1c.2-.7.4-1.4.4-2.1V25h2.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.5v-2.2c0-1.5 1-2.7 2.1-2.7.5 0 1 .2 1.4.7.7.7 1.8.8 2.5.1.7-.7.8-1.8.1-2.5-1.1-1.2-2.5-1.8-4-1.8-3.1 0-5.6 2.8-5.6 6.2v2.2h-.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.4v.7c0 1.2-.8 2.2-1.7 2.2z"/>
		<path d="M32 1.3C19.9 1.3 10.1 11 10.1 23c0 6.6 3 12.8 8.1 17 .3.3.7.4 1.1.4.5 0 1-.2 1.4-.7.6-.8.5-1.9-.3-2.5-4.3-3.5-6.8-8.7-6.8-14.2 0-10 8.3-18.2 18.4-18.2C42.1 4.8 50.4 13 50.4 23c0 1 .8 1.8 1.8 1.8S54 24 54 23c-.1-12-9.9-21.7-22-21.7z"/>
		<path d="M49.5 40.2H39.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H45l-11.2 7.7c-.3.2-.6.3-1 .3H20.7c-1.5 0-2.9.6-3.8 1.6l-6.3 6.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5l6.3-6.5c.3-.3.8-.5 1.2-.5h12.2c1 0 2.1-.3 2.9-.9l11.9-8.2V52c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42c.1-1-.7-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default PoundUp;