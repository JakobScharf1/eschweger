import { useAuthStore } from '@/store/auth'

const BASE_URL = 'https://api.wannefredder.de'

class ApiError extends Error {
  constructor(status, statusText, message) {
    super(message ?? `${status} ${statusText}`)
    this.name = 'ApiError'
  }
}

async function request(method, path, body, options = {}) {
  const url = new URL(BASE_URL + path)

  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== null && value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
    throw new ApiError(response.status, response.statusText)
  }

  if (response.status === 204) return undefined

  return response.json()
}

export const ApiService = {
  get(path, options) {
    return request('GET', path, undefined, options)
  },

  post(path, body, options) {
    return request('POST', path, body, options)
  },

  put(path, body, options) {
    return request('PUT', path, body, options)
  },

  patch(path, body, options) {
    return request('PATCH', path, body, options)
  },

  delete(path, options) {
    return request('DELETE', path, undefined, options)
  },
}

export { ApiError }
