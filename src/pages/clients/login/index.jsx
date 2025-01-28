import styled from '@emotion/styled'

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rebeccapurple;
  color: #ffff;

  .form-login {
    width: 200px;
    height: 400px;
  }
`
const Login = () => {
  const data = [
    { id: '1', username: 'dasdad', password: 'dsadadaewam@#!213' },
    { id: '2', username: 'nasdad', password: 'asdasdasda!##!' },
  ]
  console.log('🚀 ~ Login ~ data:', data)
  return (
    <PageWrapper>
      {/* <form className="form-login">
        <label>User</label>
        <input type="text" placeholder="User" />
        <label>Password</label>
        <input type="password" placeholder="User" />
      </form> */}
      <div>
        {data.map((value) => {
          return <div key={value.id}>{value.username}</div>
        })}
      </div>
    </PageWrapper>
  )
}
export default Login
