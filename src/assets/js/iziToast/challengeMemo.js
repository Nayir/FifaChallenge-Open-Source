import iziToast from 'iziToast'

module.exports = function () {
  iziToast.show({
    message: 'Votre challenge en cours',
    color: 'blue',
    position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    timeout: false,
    close: false,
    drag: true
  })
}
