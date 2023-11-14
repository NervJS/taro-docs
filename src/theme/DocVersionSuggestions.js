/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  useActivePlugin,
  useActiveVersion,
  useDocVersionSuggestions,
} from '@theme/hooks/useDocs'
import React from 'react'

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId)

function DocVersionSuggestions () {
  const {pluginId} = useActivePlugin({
    failfast: true,
  })
  const activeVersion = useActiveVersion(pluginId)
  const {
    latestDocSuggestion,
    latestVersionSuggestion,
  } = useDocVersionSuggestions(pluginId) // No suggestion to be made

  if (!latestVersionSuggestion) {
    return <></>
  } // try to link to same doc in latest version (not always possible)
  // fallback to main doc of latest version

  const suggestedDoc =
    latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion)
  return (
    <div></div>
    // <div className="alert alert--warning margin-bottom--md" role="alert">
    //   {
    //     // TODO need refactoring
    //     activeVersion.name === 'current' ? (
    //       <div>
    //         This is unreleased documentation for {siteTitle}{' '}
    //         <strong>{activeVersion.label}</strong> version.
    //       </div>
    //     ) : (
    //       <div>
    //         This is documentation for {siteTitle}{' '}
    //         <strong>{activeVersion.label}</strong>, which is no longer actively
    //         maintained.
    //       </div>
    //     )
    //   }
    //   <div className="margin-top--md">
    //     For up-to-date documentation, see the{' '}
    //     <strong>
    //       <Link to={suggestedDoc.path}>latest version</Link>
    //     </strong>{' '}
    //     ({latestVersionSuggestion.label}).
    //   </div>
    // </div>
  )
}

export default DocVersionSuggestions
