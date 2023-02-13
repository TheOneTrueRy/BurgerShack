import { fakeDb } from "../db/FakeDb.js";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController{

  constructor(){
    super('api/burgers')
    this.router
    .get('', this.getBurgers)
    .get('/:id', this.getBurgerByID)
  }

  getBurgers(req, res, next){
    try {
      let burgers = burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  getBurgerByID(req, res, next){
    try {
      let burgerID = req.params.id
      const burger = burgersService.getBurgerByID(burgerID)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

}