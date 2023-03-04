import { redirect, Form } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { firestore } from "@/vendor/firebase"
import type { ActionFunctionArgs } from "react-router-dom"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  addDoc(collection(firestore, "categories"), {
    name: data.name,
    icon: data.icon,
    income: !!data.income,
  })

  return redirect("/categories")
}

function CategoryCreate() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center my-4">
        <h1 className="font-bold text-4xl text-gray-800">New category</h1>
      </header>
      <section className="bg-white shadow rounded p-4">
        <Form method="post" className="flex flex-col">
          <input name="name" placeholder="Name" />
          <input name="icon" placeholder="Icon" />
          <div>
            Income: <input type="checkbox" name="income" />
          </div>
          <button type="submit">New</button>
        </Form>
      </section>
    </div>
  )
}

export default CategoryCreate
