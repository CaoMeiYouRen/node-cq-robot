export declare class CQStatus {
    id: number;
    msg: string;
    constructor(id: number, msg: string);
    /**
     * 操作是否执行成功，成功返回true
     *
     * @author CaoMeiYouRen
     * @date 2019-07-12
     * @returns {boolean}
     * @memberof CQStatus
     */
    isSuccess(): boolean;
    static getStatus(status: number): CQStatus;
}
