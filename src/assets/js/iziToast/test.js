import iziToast from 'iziToast'

module.exports = function () {
  iziToast.show({
    color: 'dark',
    icon: 'icon-person',
    title: 'Hey',
    message: 'Welcome!',
    timeout: false,
    position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [
      ['<button>Ok</button>', function (instance, toast) {
        window.alert('Hello world!')
      }],
      ['<button>Close</button>', function (instance, toast) {
        instance.hide({
          transitionOut: 'fadeOutUp',
          onClose: function (instance, toast, closedBy) {
            console.info('closedBy: ' + closedBy) // btn2
          }
        }, toast, 'close', 'btn2')
      }]
    ],
    onOpen: function (instance, toast) {
      console.info('callback abriu!')
    },
    onClose: function (instance, toast, closedBy) {
      console.info('closedBy: ' + closedBy) // tells if it was closed by 'drag' or 'button'
    }
  })
}
