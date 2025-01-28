import styled from '@emotion/styled'
const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  console.log('🚀 ~ Layout ~ children:', children)
  return <LayoutWrapper>{children}</LayoutWrapper>
}
export default Layout
