import React from 'react';

function VrGlasses(props) {
	const title = props.title || "vr glasses";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 40.4h-1.8v-1.5c0-3.3-2.7-5.9-5.9-5.9H39c-3.3 0-5.9 2.7-5.9 5.9v1.5h-1.8c-3.3 0-5.9 2.7-5.9 5.9v10.5c0 3.3 2.7 5.9 5.9 5.9h7.8c.5 0 .9-.2 1.2-.5l3.5-3.5 3.5 3.5c.3.3.8.5 1.2.5h7.8c3.3 0 5.9-2.7 5.9-5.9V46.4c.1-3.3-2.6-6-5.8-6zm-17.4-4h9.6c1.3 0 2.4 1.1 2.4 2.4v1.5H36.6v-1.5c0-1.3 1.1-2.4 2.4-2.4zm17.4 22.9h-7.1L45 55.1c-.7-.7-1.8-.7-2.5 0l-4.2 4.2h-7.1c-1.3 0-2.4-1.1-2.4-2.4v-4.6h3.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.9v-2.3c0-1.3 1.1-2.4 2.4-2.4H56.4c1.3 0 2.4 1.1 2.4 2.4v2.3h-3.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.9v4.6c0 1.3-1.1 2.4-2.4 2.4z"/>
		<path d="M27.8 21.9V8.8c0-1.1-.6-2-1.6-2.5L15.9 1.5c-.7-.3-1.6-.3-2.3 0L3.3 6.3c-1 .4-1.6 1.4-1.6 2.5v13.1c0 1 .5 1.9 1.4 2.4l10.3 5.9c.4.2.9.4 1.4.4s1-.1 1.4-.4l10.3-5.9c.7-.6 1.3-1.5 1.3-2.4zM14.7 4.8l7.2 3.3-7.2 3.3-7.2-3.3 7.2-3.3zm-9.5 6.1l7.8 3.6v11.4l-7.8-4.5V10.9zm11.3 15V14.5l7.8-3.6v10.5l-7.8 4.5z"/>
		<path d="M36.8 11.3h11.8c1.3 0 2.4 1.1 2.4 2.4v5.6l-1.6-1.8c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5l4.7 5c.3.4.8.6 1.3.6s.9-.2 1.3-.6l4.7-5c.7-.7.6-1.8-.1-2.5s-1.8-.6-2.5.1l-1.6 1.8v-5.6c0-3.3-2.7-5.9-5.9-5.9H36.8c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default VrGlasses;