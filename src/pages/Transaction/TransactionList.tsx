import Transaction from "@/models/Transaction"
import { useSelector } from "react-redux"

function TransactionList() {
  const transactions: Transaction[] = useSelector((state) =>
    state.transaction.items.map((name: string) => new Transaction(name))
  )

  return (
    <section>
      {transactions.map((t, index) => (
        <article key={index} className="bg-white shadow rounded m-4 p-4">
          Transaction
        </article>
      ))}
    </section>
  )
}

export default TransactionList
