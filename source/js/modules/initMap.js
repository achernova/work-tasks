const mapYandex = document.getElementById('map');
let firstCoordinates = 10.260566;
let secondCoordinates = 43.877557;

const initMap = () => {
  main();

  async function main() {
    await ymaps3.ready;

    const map = new ymaps3.YMap(mapYandex, {
      location: {
        center: [firstCoordinates, secondCoordinates],
        zoom: 11,
      }
    },
      [
        new ymaps3.YMapDefaultSchemeLayer(),
      ]
    );
  };
};

export {initMap};
