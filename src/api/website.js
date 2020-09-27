import service from '@/utils/service'

const baseUrl = '/api/admin/websites'

const websiteApi = {}

websiteApi.listAll = () => {
  return service({
    url: `${baseUrl}`,
    method: 'get'
  })
}

websiteApi.create = (website) => {
  return service({
    url: baseUrl,
    data: website,
    method: 'post'
  })
}

websiteApi.get = websiteId => {
  return service({
    url: `${baseUrl}/${websiteId}`,
    method: 'get'
  })
}

websiteApi.getByParse = url => {
  return service({
    url: `${baseUrl}/parse`,
    params: {
      url: url
    },
    method: 'get'
  })
}

websiteApi.update = (websiteId, website) => {
  return service({
    url: `${baseUrl}/${websiteId}`,
    data: link,
    method: 'put'
  })
}

websiteApi.delete = websiteId => {
  return service({
    url: `${baseUrl}/${websiteId}`,
    method: 'delete'
  })
}

websiteApi.listTeams = () => {
  return service({
    url: `${baseUrl}/teams`,
    method: 'get'
  })
}

export default websiteApi
