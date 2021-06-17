import React from 'react';

function Toolbox(props) {
	const title = props.title || "toolbox";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 14.4H44.3v-3.5c0-3.9-3.2-7-7-7H26.7c-3.9 0-7 3.2-7 7v3.5H9c-4.3 0-7.8 3.5-7.8 7.8V32c0 1 .8 1.8 1.8 1.8h.9v19c0 4.1 3.3 7.4 7.4 7.4h41.4c4.1 0 7.4-3.3 7.4-7.4v-19h.9c1 0 1.8-.8 1.8-1.8v-9.8c0-4.3-3.5-7.8-7.8-7.8zm-31.8-3.5c0-1.9 1.6-3.5 3.5-3.5h10.5c1.9 0 3.5 1.6 3.5 3.5v3.5H23.2v-3.5zM4.8 22.2c0-2.3 1.9-4.3 4.3-4.3h46c2.3 0 4.3 1.9 4.3 4.3v8.1H4.8v-8.1zm51.8 30.5c0 2.2-1.8 3.9-3.9 3.9H11.3c-2.2 0-3.9-1.8-3.9-3.9v-19h12.3v6.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.2h17.6v6.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.2h12.3v19z"/>
	</g>
</svg>
	);
};

export default Toolbox;