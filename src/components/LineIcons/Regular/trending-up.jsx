import React from 'react';

function TrendingUp(props) {
	const title = props.title || "trending up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.1 21.9H43.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H56l-14.9 9.9c-.8.5-1.7.5-2.5 0l-13.7-9.1c-1.9-1.3-4.4-1.3-6.4 0L2.5 37c-.8.5-1 1.6-.5 2.4.3.5.9.8 1.5.8.3 0 .7-.1 1-.3l16-10.7c.8-.5 1.7-.5 2.5 0l13.7 9.1c1.9 1.3 4.4 1.3 6.4 0l15.6-10.4.1-.1v12.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1c-.1-2.9-2.5-5.2-5.3-5.2z"/>
	</g>
</svg>
	);
};

export default TrendingUp;