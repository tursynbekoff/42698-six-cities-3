import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card MouseOver`, () => {
  const handlerMouseEnter = jest.fn((apart) => apart);
  const handlerMouseLeave = jest.fn((object) => object);

  const apart = {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  };

  const card = shallow(
      <Card
        apart={apart}
        setFavorite={jest.fn()}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
        typesClass={[`near-places__list`, `near-places__card`]}
      />
  );

  let cardWrap = card.find(`.place-card`);

  cardWrap.simulate(`mouseenter`, handlerMouseEnter);
  cardWrap.simulate(`mouseleave`, handlerMouseLeave);

  expect(handlerMouseEnter).toHaveBeenNthCalledWith(1, apart);
  expect(handlerMouseLeave.mock.calls.length).toBe(1);
});
