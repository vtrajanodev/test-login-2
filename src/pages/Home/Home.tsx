import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate("/login")
  })

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      <div>Home</div>
      <button type="button" onClick={logout}>Logout</button>
    </>
  )
}
