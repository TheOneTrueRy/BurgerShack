import { Burger } from "../models/Burger.js"

class FakeDb{

  burgers = [
    new Burger({
      id: 'dmvndfoiu43twfnw285728',
      buns: 2,
      patties: 1,
      toppings: ['ketchup', 'mustard', 'onions', 'fries']
    }),
    new Burger({
      id: '509r23rwekprj239r2',
      buns: 3,
      patties: 2,
      toppings: ['Big Sauce', 'fries', 'haystack onions']
    }),
  ]

}

export const fakeDb = new FakeDb()