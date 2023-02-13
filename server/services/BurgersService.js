import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService{
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