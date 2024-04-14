import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Ops parece que essa pagina não existe</div>
      <button onClick={() => navigate('/login')}>back to login</button>
    </>
  )
}
