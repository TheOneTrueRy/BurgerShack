import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService{
  deleteBurger(burgerID) {
  let burgerToDelete = fakeDb.burgers.findIndex(b => b.id == burgerID)
  if(burgerToDelete == -1){
    throw new BadRequest('Bad Burger ID! Yuck!')
  }
  const removed = fakeDb.burgers.splice(burgerToDelete, 1)
  return removed[0]
  }
  editBurger(burgerID, burgerData) {
    let burgerToEdit = fakeDb.burgers.find(b => b.id == burgerID)
    if(!burgerToEdit){
      throw new BadRequest('Bad Burger ID. Yuck!')
    }
    if(!burgerData.patties && !burgerData.buns){
      throw new BadRequest('Invalid Burger! Yuck!')
    }

    burgerToEdit.buns = burgerData.buns
    burgerToEdit.patties = burgerData.patties
    burgerToEdit.toppings = burgerData.toppings
    return burgerToEdit
  }
  createBurger(rawBurgerData) {
    if(!rawBurgerData.patties && !rawBurgerData.buns){
      throw new BadRequest('Invalid Burger! Yuck!')
    }

    rawBurgerData.id = Math.floor(Math.random()) * 1000000000 + 'abc' + Math.floor(Math.random() * 100000)

    fakeDb.burgers.push(new Burger(rawBurgerData))
  }
  getBurgerByID(burgerID) {
  const burger = fakeDb.burgers.find(b => b.id == burgerID)
  if(!burger){
    throw new BadRequest('Bad Burger ID. Yuck!')
  }
  return burger
  }
  getBurgers() {
  return fakeDb.burgers
  }

}

export const burgersService = new BurgersService()