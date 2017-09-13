const routes = [
	{
		routes: [
			{
				path: '/',
				exact: true,
				component: 'Routes'
			},
			{
				path: '/dashboard',
				component: 'Dashboard'
			},
			{
				path: '/consultant',
				component: 'ConsultantNav'
			},
			{
				path: '/consultant/info',
				component: 'Info'
			}
		]
	}
];
module.exports = routes;
