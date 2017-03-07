import iziToast from 'iziToast'

module.exports = function () {
  iziToast.show({
    message: 'Vos modifications ont été sauvegardés',
    messageColor: '#fff',
    backgroundColor: '#65a844',
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    timeout: 2000,
    pauseOnHover: true,
    resetOnHover: false,
    progressBar: true,
    animateInside: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOut',
    transitionInMobile: 'fadeInUp',
    transitionOutMobile: 'fadeOutDown'
  })
}
