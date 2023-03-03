import { redirect, Form } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { firestore } from "@/vendor/firebase"

const categories = ["Food", "Transportation", "Entertainment", "Taxes"]

export async function action() {
  addDoc(collection(firestore, "transactions"), {
    category: categories[Math.floor(Math.random() * categories.length)],
    amount: Math.floor(Math.random() * 10000) / 100,
    date: new Date(),
  })

  return redirect("/transactions")
}

function TransactionCreate() {
  return (
    <Form method="post">
      <button type="submit">New</button>
    </Form>
  )
}

export default TransactionCreate
