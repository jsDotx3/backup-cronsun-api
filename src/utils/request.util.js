const request = require('request-promise')

const resolveUseBaseUrl = (useBaseUrl, path) => {
  if (useBaseUrl === false) {
    return { url: path }
  }
  if (useBaseUrl === true) {
    return {
      baseUrl: process.env.CRONSUN_URL,
      uri: path,
      auth: {
        username: process.env.AUTH_USER_CRONSUN,
        password: process.env.AUTH_PASSWORD_CRONSUN,
        sendImmediately: true,
      },
    }

  }
}

const service = async (
  { method, path, body, headers = {}, useBaseUrl = true, extraOptions = {} }) =>
{

  let options = {
    method,
    headers,
    body,
    ...resolveUseBaseUrl(useBaseUrl, path),
    ...extraOptions
  }
  return await request(
    options,
  )

}

module.exports = service
