
/**
 * CQ应用抽象类
 * @author CaoMeiYouRen
 * @date 2019-07-07
 * @export
 * @abstract
 * @class CQAppAbstract
 */
export abstract class CQAppAbstract {
    /**
     *
     * 应用启用状态
     * @abstract
     * @type {boolean}
     * @memberof CQAppAbstract
     */
    abstract isEnable: boolean
    /**
     * 应用数据目录
     * @abstract
     * @type {string}
     * @memberof CQAppAbstract
     */
    abstract appDirectory: string
}