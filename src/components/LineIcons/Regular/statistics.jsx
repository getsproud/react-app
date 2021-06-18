import React from 'react';

function Statistics(props) {
	const title = props.title || "statistics";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.5 44.6h11.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H26.5c-1 0-1.8.8-1.8 1.8s.9 1.8 1.8 1.8z"/>
		<path d="M45.7 50H26.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M54.4 1.3H19.7c-2.8 0-5 2.3-5 5v38.6H5.4c-1 0-1.8.8-1.8 1.8V57c0 3.1 2.6 5.7 5.7 5.7h45.1c3.3 0 5.9-2.7 5.9-5.9V7.2c.1-3.3-2.6-5.9-5.9-5.9zm-43.1 58h-2c-1.2 0-2.2-1-2.2-2.2v-8.6h7.5V57c0 1.2-1 2.2-2.2 2.2h-1.1zm45.6-2.5c0 1.3-1.1 2.4-2.4 2.4H17.7c.3-.7.4-1.4.4-2.2V6.3c0-.8.7-1.5 1.5-1.5h34.7c1.3 0 2.4 1.1 2.4 2.4v49.6z"/>
		<path d="M47.6 20.3l-5.3 2.4-6.9-3.4c-.5-.2-1-.2-1.5 0l-5.6 2.5v-8.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v20.7c0 1 .8 1.8 1.8 1.8h20.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H28.3v-6.9c.1 0 .2 0 .2-.1l6-2.7 6.9 3.4c.2.1.5.2.8.2.3 0 .5-.1.7-.2l6-2.8c.9-.4 1.3-1.4.9-2.3-.3-.9-1.4-1.2-2.2-.8z"/>
	</g>
</svg>
	);
};

export default Statistics;