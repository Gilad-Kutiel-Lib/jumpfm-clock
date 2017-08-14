import * as moment from 'moment'

console.log('clock rock lala yaya')

export const load = (jumpFm) => {
    const update = () => {
        jumpFm.statusBar.warn('clock2',
            moment(Date.now()).format(
                jumpFm.settings.getStr('dateFormat', 'MM/DD/YYYY hh:mm:ss')
            )
        )
    }

    update()
    setInterval(update, 1000)
}
