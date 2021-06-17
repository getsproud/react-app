import React from 'react';

function Straight(props) {
	const title = props.title || "straight";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm1.8 57.9V27.3l5.4 5.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-8.4-8.4c-.7-.7-1.8-.7-2.5 0l-8.4 8.4c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l5.4-5.4v31.9C16 58.3 4.8 46.4 4.8 32 4.8 17 17 4.8 32 4.8S59.3 17 59.3 32c0 14.4-11.3 26.3-25.5 27.2z"/>
	</g>
</svg>
	);
};

export default Straight;