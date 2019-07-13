/**
 * @export
 * @param {number} auth
 * @returns {string}
 */
export declare function getAuthName(auth: number): string;
/**
 * 根据操作名称获取操作权限值
 * @export
 * @param {string} authName
 * @returns {number}
 */
export declare function getAuth(authName: string): number;
