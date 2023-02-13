import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController{

  constructor(){
    super('api/burgers')
    this.router
    .get('', this.getBurgers)
  }

  getBurgers(req, res, next){
    try {
      let burgers = burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

}