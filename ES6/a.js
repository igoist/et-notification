const ETNotification = {}

ETNotification.delay = 2500;
ETNotification.delta = 300;

ETNotification.success = (text) => {
    var div = document.createElement('div')
    div.classList.add('et-notification')
    div.classList.add('success')
    div.innerText = text + '成功'

    var delay = ETNotification.delay;
    var delta = ETNotification.delta;
    document.body.appendChild(div)
    setTimeout(() => {
        div.classList.add('et-notification-fadeOut')
    }, delay)
    setTimeout(() => {
        div.remove()
        div.classList.remove('et-notification-fadeOut')
    }, delay + delta)
}

ETNotification.warning = (text) => {
    var div = document.createElement('div')
    div.classList.add('et-notification')
    div.classList.add('warning')
    div.innerText = text + '失败'

    var delay = ETNotification.delay;
    var delta = ETNotification.delta;
    document.body.appendChild(div)
    setTimeout(() => {
        div.classList.add('et-notification-fadeOut')
    }, delay)
    setTimeout(() => {
        div.remove()
        div.classList.remove('et-notification-fadeOut')
    }, delay + delta)
}