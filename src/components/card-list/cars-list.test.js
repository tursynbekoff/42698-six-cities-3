import React from 'react';
import CardList from './card-list.jsx';
import renderer from 'react-test-renderer';

const aparts = [
  {
    imgs: [
      {
        url: `img/apartment-01.jpg`,
        id: 1
      },
      {
        url: `img/room.jpg`,
        id: 2
      },
      {
        url: `img/apartment-02.jpg`,
        id: 3
      },
      {
        url: `img/apartment-03.jpg`,
        id: 4
      },
      {
        url: `img/apartment-02.jpg`,
        id: 5
      },
      {
        url: `img/apartment-01.jpg`,
        id: 6
      },
    ],
    insides: [
      {
        name: `Wi-Fi`,
        id: 1
      },
      {
        name: `Heating`,
        id: 2
      },
      {
        name: `Kitchen`,
        id: 3
      },
      {
        name: `Fridge`,
        id: 4
      },
      {
        name: `Washing machine`,
        id: 5
      },
      {
        name: `Coffee machine`,
        id: 6
      },
      {
        name: `Dishwasher`,
        id: 7
      },
      {
        name: `Towels`,
        id: 8
      },
      {
        name: `Baby seat`,
        id: 9
      },
      {
        name: `Cabel TV`,
        id: 10
      },
      {
        name: `Soap`,
        id: 11
      },
      {
        name: `Bed`,
        id: 12
      },
    ],
    img: `img/apartment-01.jpg`,
    price: 180,
    rating: 4.9,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: true,
    isPremium: true,
    bedrooms: 2,
    adults: 3,
    id: 1,
    host: {
      name: `Angellna`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
      description: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          id: 1
        },
        {
          text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          id: 2
        },
      ]
    }
  },

  {
    imgs: [
      {
        url: `img/apartment-01.jpg`,
        id: 1
      },
      {
        url: `img/room.jpg`,
        id: 2
      },
      {
        url: `img/apartment-02.jpg`,
        id: 3
      },
      {
        url: `img/apartment-03.jpg`,
        id: 4
      },
      {
        url: `img/apartment-02.jpg`,
        id: 5
      },
      {
        url: `img/apartment-01.jpg`,
        id: 6
      },
    ],
    insides: [
      {
        name: `Wi-Fi`,
        id: 1
      },
      {
        name: `Heating`,
        id: 2
      },
      {
        name: `Kitchen`,
        id: 3
      },
      {
        name: `Fridge`,
        id: 4
      },
      {
        name: `Washing machine`,
        id: 5
      },
      {
        name: `Coffee machine`,
        id: 6
      },
      {
        name: `Dishwasher`,
        id: 7
      },
      {
        name: `Towels`,
        id: 8
      },
      {
        name: `Baby seat`,
        id: 9
      },
      {
        name: `Cabel TV`,
        id: 10
      },
      {
        name: `Soap`,
        id: 11
      },
      {
        name: `Bed`,
        id: 12
      },
    ],
    img: `img/room.jpg`,
    price: 120,
    rating: 3.5,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: true,
    isPremium: true,
    bedrooms: 2,
    adults: 3,
    id: 2,
    host: {
      name: `Angellna`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
      description: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          id: 1
        },
        {
          text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          id: 2
        },
      ]
    }
  },

  {
    imgs: [
      {
        url: `img/apartment-01.jpg`,
        id: 1
      },
      {
        url: `img/room.jpg`,
        id: 2
      },
      {
        url: `img/apartment-02.jpg`,
        id: 3
      },
      {
        url: `img/apartment-03.jpg`,
        id: 4
      },
      {
        url: `img/apartment-02.jpg`,
        id: 5
      },
      {
        url: `img/apartment-01.jpg`,
        id: 6
      },
    ],
    insides: [
      {
        name: `Wi-Fi`,
        id: 1
      },
      {
        name: `Heating`,
        id: 2
      },
      {
        name: `Kitchen`,
        id: 3
      },
      {
        name: `Fridge`,
        id: 4
      },
      {
        name: `Washing machine`,
        id: 5
      },
      {
        name: `Coffee machine`,
        id: 6
      },
      {
        name: `Dishwasher`,
        id: 7
      },
      {
        name: `Towels`,
        id: 8
      },
      {
        name: `Baby seat`,
        id: 9
      },
      {
        name: `Cabel TV`,
        id: 10
      },
      {
        name: `Soap`,
        id: 11
      },
      {
        name: `Bed`,
        id: 12
      },
    ],
    img: `img/apartment-02.jpg`,
    price: 100,
    rating: 2.2,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: true,
    isPremium: false,
    bedrooms: 2,
    adults: 3,
    id: 3,
    host: {
      name: `Angellna`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
      description: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          id: 1
        },
        {
          text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          id: 2
        },
      ]
    }
  },

  {
    imgs: [
      {
        url: `img/apartment-01.jpg`,
        id: 1
      },
      {
        url: `img/room.jpg`,
        id: 2
      },
      {
        url: `img/apartment-02.jpg`,
        id: 3
      },
      {
        url: `img/apartment-03.jpg`,
        id: 4
      },
      {
        url: `img/apartment-02.jpg`,
        id: 5
      },
      {
        url: `img/apartment-01.jpg`,
        id: 6
      },
    ],
    insides: [
      {
        name: `Wi-Fi`,
        id: 1
      },
      {
        name: `Heating`,
        id: 2
      },
      {
        name: `Kitchen`,
        id: 3
      },
      {
        name: `Fridge`,
        id: 4
      },
      {
        name: `Washing machine`,
        id: 5
      },
      {
        name: `Coffee machine`,
        id: 6
      },
      {
        name: `Dishwasher`,
        id: 7
      },
      {
        name: `Towels`,
        id: 8
      },
      {
        name: `Baby seat`,
        id: 9
      },
      {
        name: `Cabel TV`,
        id: 10
      },
      {
        name: `Soap`,
        id: 11
      },
      {
        name: `Bed`,
        id: 12
      },
    ],
    img: `img/apartment-03.jpg`,
    price: 99,
    rating: 1.9,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: false,
    isPremium: true,
    bedrooms: 2,
    adults: 3,
    id: 4,
    host: {
      name: `Angellna`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
      description: [
        {
          text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          id: 1
        },
        {
          text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          id: 2
        },
      ]
    }
  }
];

it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();

  const tree = renderer
    .create(<CardList aparts={aparts} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
