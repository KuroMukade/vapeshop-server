import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={1.5}
    width={404}
    height={529}
    viewBox="0 0 404 529"
    backgroundColor="#ababab"
    foregroundColor="#e9e5e2"
  >
    <rect x="0" y="0" rx="8" ry="8" width="404" height="350" /> 
    <rect x="0" y="382" rx="8" ry="8" width="372" height="33" /> 
    <rect x="0" y="441" rx="8" ry="8" width="372" height="66" />
  </ContentLoader>
)

export default MyLoader