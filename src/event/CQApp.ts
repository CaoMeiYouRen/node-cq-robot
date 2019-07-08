import { CQAppAbstract } from './CQAppAbstract'
import { CoolQ } from '../entity/CoolQ'
/**
 * CQ应用抽象类
 *
 * @author CaoMeiYouRen
 * @date 2019-07-08
 * @export
 * @abstract
 * @class CQApp
 * @extends {CQAppAbstract}
 * @implements {CQListener}
 */
export abstract class CQApp extends CQAppAbstract {
    /**
     *  CQ核心操作变量
     *
     * @abstract
     * @type {CoolQ}
     * @memberof CQApp
     */
    abstract CQ: CoolQ
    /**
     *
     * 返回应用的API_VER、APP_ID、HTTP_API_VER
     * @author CaoMeiYouRen
     * @date 2019-07-08
     * @abstract
     * @returns {{ CQ_API_VER: number, APP_ID: string, HTTP_API_VER: number }}
     * @memberof CQApp
     */
    abstract appInfo(): { CQ_API_VER: number, APP_ID: string, HTTP_API_VER: number }
}