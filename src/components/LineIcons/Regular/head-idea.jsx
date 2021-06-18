import React from 'react';

function HeadIdea(props) {
	const title = props.title || "head idea";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.5 1.3C22 1.3 11.9 11.4 11.9 23.8v4.4l-4.7 9.5c-.3.5-.2 1.2.1 1.7s.9.8 1.5.8h2.9c.2 0 .3.2.3.3v12.1c0 .5.2 1 .6 1.3.4.3.9.5 1.4.4l10.1-1.7c.1 0 .1 0 .2.1s.1.2.1.3v8c0 .5.2 1 .6 1.3.3.3.7.4 1.1.4h.3l20.8-3.5c.8-.1 1.5-.9 1.5-1.7V46.4c0-2.9 1.1-5.7 3.2-8.2 3.3-4 5.2-9.1 5.2-14.4 0-12.4-10.2-22.5-22.6-22.5zM49.2 36c-2.6 3.1-4 6.8-4 10.4V56l-17.3 2.9V53c0-1.1-.5-2.2-1.3-2.9-.7-.6-1.6-.9-2.5-.9-.2 0-.4 0-.6.1l-8 1.3V40.5c0-2.1-1.7-3.8-3.8-3.8l3.5-7c.3-.5.4-1.1.4-1.7v-4.2c0-10.5 8.6-19.1 19.1-19.1 10.5 0 19.1 8.6 19.1 19.1-.2 4.5-1.8 8.8-4.6 12.2z"/>
		<path d="M30.3 25.8h7.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.8v-1.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v1.6h-1.1c-3.2 0-5.7 2.6-5.7 5.7s2.6 5.7 5.7 5.7h3.4c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2h-7.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.1v1.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.8c2.6-.5 4.6-2.8 4.6-5.6 0-3.1-2.6-5.7-5.7-5.7h-3.4c-1.2 0-2.2-1-2.2-2.2-.1-1.1.9-2.1 2.1-2.1z"/>
	</g>
</svg>
	);
};

export default HeadIdea;