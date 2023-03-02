import { useState } from "react"

function TransactionList() {
  const [transactions] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ])

  return (
    <section>
      {transactions.map((t) => (
        <article
          key={t}
          className="bg-white shadow rounded m-4 p-4"
        >
          Transaction
        </article>
      ))}
    </section>
  )
}

export default TransactionList