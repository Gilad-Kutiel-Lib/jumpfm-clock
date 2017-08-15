import { JumpFm } from 'jumpfm-api'
import * as moment from 'moment'

export const load = (jumpFm: JumpFm) => {
    const update = () => {
        jumpFm.statusBar.info('clock', {
            txt: moment(Date.now()).format(
                jumpFm.settings.getStr('dateFormat', 'MM/DD/YYYY hh:mm:ss')
            )
        })
    }

    update()
    setInterval(update, 1000)
}
