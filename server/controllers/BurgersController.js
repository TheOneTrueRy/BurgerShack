import { fakeDb } from "../db/FakeDb.js";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgersController extends BaseController{

  constructor(){
    super('api/burgers')
    this.router
    .get('', this.getBurgers)
    .get('/:id', this.getBurgerByID)
    .post('', this.createBurger)
    .put('/:id', this.editBurger)
    .delete('/:id', this.deleteBurger)
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

  createBurger(req, res, next){
    try {
      let rawBurgerData = req.body
      let newBurger = burgersService.createBurger(rawBurgerData)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  editBurger(req, res, next){
    try {
      let burgerData = req.body
      let burgerID = req.params.id
      let burgerToEdit = burgersService.editBurger(burgerID, burgerData)
      res.send(burgerToEdit)
    } catch (error) {
      next(error)
    }
  }

  deleteBurger(req, res, next){
    try {
      let burgerID = req.params.id
      let burgerToDelete = burgersService.deleteBurger(burgerID)
      res.send(burgerToDelete)
    } catch (error) {
      next(error)
    }
  }

}