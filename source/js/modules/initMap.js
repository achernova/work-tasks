const map = document.getElementById('map');
console.log(map);

const initMap = () => {
  main();

  async function main() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда
    // загрузятся все компоненты API.
    await ymaps3.ready;
    // Создание карты.
    const map = new ymaps3.YMap(map, {
      location: {
        // Координаты центра карты.
        // Порядок по умолчанию: «долгота, широта».
        center: [43.866229, 10.259199],

        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
      }
      },
      [
        // Добавляем слой для отображения схематической карты.
        new ymaps3.YMapDefaultSchemeLayer()
      ]
    )
  }
};

export {initMap};
