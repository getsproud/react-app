import React from 'react';

function LniLniWeathercock(props) {
	const title = props.title || "lni lni weathercock";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51 52.4l3.5-3.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-4.2 4.2H35v-9.5c8.9-.6 15.9-8.1 15.9-17.1v-2.3c0-1 .8-1.9 1.9-1.9 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-2.8 0-5.1 2.2-5.3 5H45v-.1c0-4.1 3.3-7.4 7.4-7.4 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-6 0-10.9 4.9-10.9 10.9v.1H30.9v-6.4c0-2.7-1.6-5.1-3.8-6.3l2.7-2.8c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-1.7 1.8V3c0-1-.8-1.8-1.8-1.8S21.9 2 21.9 3v2.1l-1.7-1.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l2.7 2.8c-1.9 1-3.3 2.8-3.7 4.9h-3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.9v7.2c0 8.7 6.5 15.9 14.9 17v9.6H15l1.7-1.7c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-4.7 4.7c-.7.7-.7 1.8 0 2.5l4.7 4.7c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L15 54.2h16.4V61c0 1 .8 1.8 1.8 1.8S35 62 35 61v-6.8h12.8l4.2 4.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L51 52.4zM20 24.1v-9.3c0-2 1.6-3.7 3.7-3.7s3.7 1.6 3.7 3.7v8.1c0 .5.2.9.5 1.2.3.3.8.5 1.2.5h18.3c-.3 7.2-6.3 13-13.7 13-7.5.2-13.7-6-13.7-13.5z"/>
	</g>
</svg>
	);
};

export default LniLniWeathercock;