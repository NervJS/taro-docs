import { Redirect } from '@docusaurus/router'
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'

function Home () {
  const url = useBaseUrl('/docs')
  return <Redirect to={url} />
}

export default Home
