/**
 * 酷Q插件的配置项
 *
 * @author CaoMeiYouRen
 * @date 2019-07-08
 * @export
 * @interface CQOption
 */
export interface CQOption {
    apiver: number;
    name: string;
    version: string;
    version_id: number;
    author: string;
    description: string;
    event: Array<CQEvent>;
    auth: Array<number>;
}
export interface CQEvent {
    id: number;
    type: number;
    name: string;
    priority: number;
    function: string;
}
