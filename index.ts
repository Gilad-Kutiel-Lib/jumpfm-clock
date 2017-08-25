import { JumpFm } from 'jumpfm-api'

import * as moment from 'moment'

export const load = (jumpFm: JumpFm) => {
    const update = () => {
        const m = moment(Date.now())
        jumpFm.statusBar.msg('clock')
            .setType('info')
            .setText(m.format(
                jumpFm.settings.getStr('timeFormat', 'HH:mm:ss')
            ))
            .setTooltip(m.format(
                jumpFm.settings.getStr('dateFormat', 'MM/DD/YYYY ')
            ))
    }

    update()
    setInterval(update, 1000)
}
