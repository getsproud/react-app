import React from 'react';

function Knowledge(props) {
	const title = props.title || "knowledge";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 44.6h-4.9V33.5H61c1 0 1.8-.8 1.8-1.8S62 30 61 30H39.1c2.3-1.5 4.2-4.4 5.4-8.3 1.4-4.3 1-8.3-1.1-10.9-1.6-2-4-3-6.9-2.7-1 .1-2 .3-2.9.6-.6-2.4-1.8-4.6-3.8-6.8-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5 1.3 1.4 2.2 2.8 2.7 4.3-1-.3-2-.4-2.7-.5-2.8-.2-5.3.8-6.9 2.8-2 2.6-2.4 6.5-1 10.9 1.3 3.9 3.2 6.7 5.4 8.3H10.3c-5 0-9.1 4.1-9.1 9.1 0 3 1.5 5.7 3.7 7.3-2.3 1.6-3.7 4.3-3.7 7.3 0 5 4.1 9.1 9.1 9.1h45.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.1V48.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-38.2-24c-1-3.2-.9-6 .4-7.6.9-1.1 2.2-1.6 3.9-1.5 1.3.1 3.4.7 4.4 1.2.5.2 1 .2 1.5 0l.9-.4c.9-.4 2-.7 3.1-.8 1.7-.1 3 .4 3.9 1.4 1.3 1.7 1.5 4.4.5 7.6-.6 1.9-2.9 7.9-7.1 7.1-.4-.1-.9-.3-1.3-.5-.4-.1-.7-.1-1-.1-.3 0-.6.1-.8.2-.5.3-1 .4-1.3.5-4.2.9-6.5-5.2-7.1-7.1zM4.8 39c0-3.1 2.5-5.6 5.6-5.6h42.3v11.1H10.3c-3.1.1-5.5-2.4-5.5-5.5zm41.3 20.2H10.3c-3.1 0-5.6-2.5-5.6-5.6S7.2 48 10.3 48h35.8v11.2z"/>
	</g>
</svg>
	);
};

export default Knowledge;