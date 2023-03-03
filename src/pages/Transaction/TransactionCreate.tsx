import { useDispatch } from "react-redux"
import { create } from "../../features/transaction/transactionSlice"
import { useNavigate, Form } from "react-router-dom"

let submit = () => {}

export async function action() {
  submit()
}

function TransactionCreate() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  submit = () => {
    dispatch(create("Some transaction"))
    navigate("/transactions")
  }

  return (
    <Form method="post">
      <button type="submit">New</button>
    </Form>
  )
}

export default TransactionCreate
