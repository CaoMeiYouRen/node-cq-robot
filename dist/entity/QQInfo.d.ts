/**
 * QQ信息
 *
 * @author CaoMeiYouRen
 * @date 2019-07-12
 * @export
 * @class QQInfo
 */
export declare class QQInfo {
    user_id: number;
    nickname: string;
    sex: string;
    age: number;
    constructor(user_id: number, nickname: string, sex: 'male' | 'female' | 'unknown', age: number);
}
