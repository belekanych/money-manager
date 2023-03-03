import { collection, query, orderBy } from "firebase/firestore"
import { firestore } from "@/vendor/firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

function TransactionList() {
  const transactionsRef = collection(firestore, "transactions")
  const transactionsQuery = query(transactionsRef, orderBy("date", "desc"))

  const [transactions] = useCollectionData(transactionsQuery)

  return (
    <section>
      {transactions &&
        transactions.map((transaction, index) => (
          <article key={index} className="bg-white shadow rounded m-4 p-4">
            {transaction.category}
            <br />
            {transaction.amount}
          </article>
        ))}
    </section>
  )
}

export default TransactionList
