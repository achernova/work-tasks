

const initYaMap = () => {
  const mapYandex = document.getElementById('map');

  let firstCoordinates = 43.877557;
  let secondCoordinates = 10.260566;

  let myMap;

  ymaps.ready(
      function initMap() {
        myMap = new ymaps.Map(mapYandex, {
          center: [firstCoordinates, secondCoordinates],
          zoom: 12,
        }, {
          searchControlProvider: 'yandex#search',
        });

        let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Метка',
          // balloonContent: 'Метка',
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/svg/icon.svg',
          iconImageSize: [50, 50],
        });

        myMap.behaviors
            .disable(['rightMouseButtonMagnifier', 'scrollZoom']);

        myMap.geoObjects
            .add(myPlacemark);

        myMap.addCursor(YMaps.Cursor.GRAB);
      });
};

export {initYaMap};
