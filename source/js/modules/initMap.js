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
        zoom: 11
      }
    },
      [
        new ymaps3.YMapDefaultSchemeLayer()
      ]
    );

    const markerElement = document.createElement('div');
    markerElement.className = 'marker';

    YMapMarker = window.YMapMarker

    const marker = new YMapMarker(
      {
        source: 'markerSource',
        coordinates: [10.260566, 43.877557],
        draggable: true,
        mapFollowsOnDrag: true
      },
      markerElement
    );

    map.addChild(marker);
  };
};

export {initMap};
