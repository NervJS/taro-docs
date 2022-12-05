import fetch from 'node-fetch'

export async function fetchContributors ({ list = [], page = 1, perPage = 100, owner = 'NervJS', repo = 'taro' } = {}) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?page=${page}&per_page=${perPage}`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      // authorization: `token ${this.token}`
    }
  }).then((e) => e.json())
  if (response.length === perPage) {
    return fetchContributors({
      list: list.concat(response), page: ++page, perPage, owner, repo
    })
  }
  return list.concat(response)
}

export async function fetchUser (name: string) {
  // https://api.github.com/users/ZakaryCode
  const response = await fetch(`https://api.github.com/users/${name}`, {
    headers: {
      accept: 'application/vnd.github.v3+json',
      // authorization: `token ${this.token}`
    }
  }).then((e) => e.json())
  return response
}
