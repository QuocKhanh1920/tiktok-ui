import routesConfig from '~/config/routes';

//Pages

import Home from '~/pages/Home';

import Following from '~/pages/Following';

import Profile from '~/pages/Profile';

import Upload from '~/pages/Upload';

import Search from '~/pages/Search';

//Layouts

import { HeaderOnly } from '~/components/Layout';

//Public Routes

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.nickname, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//Private Routes

const privateRoutes = [];

export { publicRoutes, privateRoutes };
