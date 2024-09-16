import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Do',
      email: 'johndo@example.com',
      phone: '81998567949',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
