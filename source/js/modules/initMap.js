const mapYandex = document.getElementById('map');
let firstCoordinates = 10.260566;
let secondCoordinates = 43.877557;

const initMap = () => {
  main();

  async function main() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда
    // загрузятся все компоненты API.
    await ymaps3.ready;
    // Создание карты.
    const map = new ymaps3.YMap(mapYandex, {
      location: {
        // Координаты центра карты.
        // Порядок по умолчанию: «долгота, широта».
        center: [firstCoordinates, secondCoordinates],

        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
      }
      },
      [
        // Добавляем слой для отображения схематической карты.
        new ymaps3.YMapDefaultSchemeLayer()
      ]
    )
  }

  const markerElement = document.createElement('div')
  markerElement.className = 'map-one__marker';
  // markerElement.innerText = "I'm marker!";

  const marker = new YMapMarker(
    {
      source: 'markerSource',
      coordinates: [firstCoordinates, secondCoordinates],
      draggable: true,
      mapFollowsOnDrag: true
    },
    markerElement
  );

  mapYandex.addChild(marker);
};

export {initMap};
