import React from 'react';

function ElegantTable4(props) {
	const title = props.title || "elegant table 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 15.8H3c-1 0-1.8.8-1.8 1.8S2 19.3 3 19.3h4.2v27.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V20.4l6.3 3.8v16.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V26.3l12.6 7.6c1 .6 2 .9 3.1.9 1.4 0 2.7-.5 3.8-1.4l3.5-2.9v10.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.5l6.3-5.3v24.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V19.3l.1-.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6zM37.8 30.6c-.8.7-2 .8-2.9.2l-15.2-9.1h-.1l-4-2.4h35.8L37.8 30.6z"/>
	</g>
</svg>
	);
};

export default ElegantTable4;