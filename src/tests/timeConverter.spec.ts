import { formatTime } from "../utils/timeConverter";

describe('time converter cases', () => {
      it('when the value is 999 should return 00:00.999', () => {
            const ms = 999;
            expect(formatTime(ms)).toBe('00:00.999')
      })

      it('when the value is 1000 should return 00:01.000', () => {
            const ms = 1000;
            expect(formatTime(ms)).toBe('00:01.000')
      })
      it('when the value is 5,999,999 should return 99:59.999', () => {
            const ms = 5999999;
            expect(formatTime(ms)).toBe('99:59.999')
      })

})