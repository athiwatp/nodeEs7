import express from 'express';
const _routes = express.Router();


import {productController as _controller} from "../controllers";
export const productRoutes = _routes;
const _api = 'products';





/*REST*/
_routes.use([`/${_api}`], (req, res, next) => {

    console.log(`a ${req.method} request in ${_api} route.`);
    console.log('query ========>', req.query);
    console.log('params =======>', req.params);
    console.log('body =========>', req.body);
    next();
});




_routes.route(`/${_api}`).get(_controller.getAll);


_routes.route(`/${_api}/:_id`).get(_controller.getOne);


_routes.route(`/${_api}`).post(_controller.create);


_routes.route(`/${_api}/:_id`).put(_controller.edit);



_routes.route(`/${_api}/:_id`).delete(_controller._delete);
