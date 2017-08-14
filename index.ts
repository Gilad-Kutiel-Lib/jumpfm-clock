import * as moment from 'moment'

export const load = (jumpFm) => {
    const update = () => {
        jumpFm.statusBar.info('clock2',
            moment(Date.now()).format(
                jumpFm.settings.getStr('dateFormat', 'MM/DD/YYYY hh:mm:ss')
            )
        )
    }

    update()
    setInterval(update, 1000)
}
