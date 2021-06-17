import React from 'react';

function Hanger2(props) {
	const title = props.title || "hanger 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.9 46.3L33.2 33.4v-6.7c3.4-.8 6-3.9 6-7.5 0-4.3-3.5-7.7-7.7-7.7-3.6 0-6.7 2.4-7.5 5.9-.1.6-.2 1.2-.2 1.8 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.3 0-.7.1-1 .5-1.9 2.1-3.2 4.1-3.2 2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-1 0-1.8.8-1.8 1.8v8.1l-26.7 13C1.7 47 1 48.5 1.3 50c.4 1.5 1.6 2.5 3.2 2.5h55c1.5 0 2.9-1.1 3.2-2.6s-.4-2.9-1.8-3.6zM5.5 49l25.8-12.6L58.4 49H5.5z"/>
	</g>
</svg>
	);
};

export default Hanger2;