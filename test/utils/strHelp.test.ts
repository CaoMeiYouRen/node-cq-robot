import 'should'
import { getMidStr } from '../../src/utils'
describe('strHelp', () => {
    describe('getMidStr', () => {
        it('getMidStr("123456789","123","789")', () => {
            getMidStr('123456789', '123', '789').should.equal('456')
        })
        it('getMidStr("123456789","789","123")', () => {
            getMidStr('123456789', '789', '123').should.equal('')
        })
        it('getMidStr("1234561789","123","1")', () => {
            getMidStr('1234561789', '123', '1').should.equal('456')
        })
        it('getMidStr("123456789","0","321")', () => {
            getMidStr('123456789', '0', '321').should.equal('')
        })
    })
})