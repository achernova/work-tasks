const initYaMapSecond = () => {
  const mapYandex = document.getElementById('map-2');

  let firstCoordinates = 43.877557;
  let secondCoordinates = 10.260566;

  let myMap;

  ymaps.ready(
      function initMap() {
        myMap = new ymaps.Map(mapYandex, {
          center: [firstCoordinates, secondCoordinates],
          zoom: 14,
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

        let objectManager = new ymaps.ObjectManager();

        myMap.geoObjects.add(objectManager);

        let myMarkOne = new ymaps.Placemark([43.862929, 10.239869], {
          hintContent: 'Метка',
          balloonContentHeader: '<p>Порт</p>',
          balloonContentBody: '<img src="img/content/port.jpg" width="100" height="100">',
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/svg/port.svg',
          iconImageSize: [50, 50],
        });

        let myMarkSec = new ymaps.Placemark([43.874490, 10.242886], {
          hintContent: 'Метка',
          balloonContentHeader: '<p>Парк</p>',
          balloonContentBody: '<img src="img/content/garden.jpg" width="100" height="100">',
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/svg/garden.svg',
          iconImageSize: [50, 50],
        });

        let myMarkThe = new ymaps.Placemark([43.870361, 10.239809], {
          hintContent: 'Метка',
          balloonContentHeader: '<p>Пляж</p>',
          balloonContentBody: '<img src="img/content/beach.jpg" width="100" height="100">',
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/svg/beach.svg',
          iconImageSize: [50, 50],
        });

        let myMarkFour = new ymaps.Placemark([43.864997, 10.258584], {
          hintContent: 'Метка',
          balloonContentHeader: '<p>Ж/Д</p>',
          balloonContentBody: '<img src="img/content/train.jpg" width="200" height="100">',
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/svg/train.svg',
          iconImageSize: [50, 50],
        });

        myMap.behaviors
            .disable(['rightMouseButtonMagnifier', 'scrollZoom']);

        myMap.geoObjects
            .add(myPlacemark)
            .add(myMarkOne)
            .add(myMarkSec)
            .add(myMarkThe)
            .add(myMarkFour);

        myMap.addCursor(YMaps.Cursor.GRAB);
      });
};

export {initYaMapSecond};
