import React from 'react';

function DressingTable(props) {
	const title = props.title || "dressing table";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 41.3h-8.2v-27c0-7.2-5.8-13-13-13h-7.6c-7.2 0-13 5.8-13 13v27.1H7.5c-1 0-1.8.8-1.8 1.8S6.5 45 7.5 45h4.2v16c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.9H49V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44.8h4.2c1 0 1.8-.8 1.8-1.8s-1.1-1.7-2.1-1.7zm-38.2-27c0-5.2 4.3-9.5 9.5-9.5h7.6c5.2 0 9.5 4.3 9.5 9.5v27.1H18.3V14.3zm-3.1 30.5h15.1v9.7H15.2v-9.7zm33.6 9.8h-15v-9.7H48.9v9.7z"/>
		<path d="M23.4 48.1h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M41.9 48.1h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default DressingTable;