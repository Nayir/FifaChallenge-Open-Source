import iziToast from 'iziToast'

module.exports = function () {
  iziToast.show({
    title: 'Erreur',
    message: 'Merci d\'actualiser la page',
    color: 'red',
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
