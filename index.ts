import { JumpFm } from 'jumpfm-api'

import * as moment from 'moment'

export const load = (jumpFm: JumpFm) => {
    console.log('clock')
    const update = () => {
        console.log('clock')
        const m = moment(Date.now())
        jumpFm.statusBar.info('clock', {
            txt: m.format(
                jumpFm.settings.getStr('timeFormat', 'HH:mm:ss')
            ),
            dataTitle: m.format(
                jumpFm.settings.getStr('dateFormat', 'MM/DD/YYYY ')
            ),
        })
    }

    update()
    setInterval(update, 1000)
}
