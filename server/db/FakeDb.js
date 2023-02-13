class FakeDb{

  burgers = [
    {
      buns: 2,
      patties: 1,
      toppings: ['ketchup', 'mustard', 'onions', 'fries']
    },
    {
      buns: 3,
      patties: 2,
      toppings: ['Big Sauce', 'fries', 'haystack onions']
    }
  ]

}

export const fakeDb = new FakeDb()