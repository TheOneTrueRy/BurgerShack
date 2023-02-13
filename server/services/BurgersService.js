import { fakeDb } from "../db/FakeDb.js"

class BurgersService{
  getBurgers() {
  return fakeDb.burgers
  }

}

export const burgersService = new BurgersService()