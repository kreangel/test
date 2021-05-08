let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.948588, 30.357900],
    zoom: 12,
    controls: []
  });

  const coords = [
    [59.986840, 30.355248],
    [60.004911, 30.300624],
    [59.927590, 30.360820]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/icons/marker.svg",
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);  

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
