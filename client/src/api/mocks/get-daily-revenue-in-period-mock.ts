import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 312 },
    { date: '02/01/2024', receipt: 2000 },
    { date: '03/01/2024', receipt: 2732 },
    { date: '04/01/2024', receipt: 1329 },
    { date: '05/01/2024', receipt: 932 },
    { date: '06/01/2024', receipt: 1432 },
    { date: '07/01/2024', receipt: 1984 },
  ])
})
