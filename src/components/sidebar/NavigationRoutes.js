export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
    },
    {
      name: 'nuevo',
      displayName: 'menu.nuevo',
      meta: {
        icon: 'glyphicon glyphicon-plus',
      },
    },
    // {
    //   name: 'editar',
    //   displayName: 'menu.editar',
    //   meta: {
    //     icon: 'glyphicon glyphicon-pencil',
    //   },
    // },
    // {
    //   name: 'datatable',
    //   displayName: 'menu.datatable',
    //   meta: {
    //     icon: 'glyphicon glyphicon-pencil',
    //   },
    // }
  ],
}
