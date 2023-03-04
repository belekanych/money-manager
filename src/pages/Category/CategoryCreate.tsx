import { redirect, Form } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { firestore } from "@/vendor/firebase"
import type { ActionFunctionArgs } from "react-router-dom"
import PageLayout from "@/layouts/PageLayout"

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
    <PageLayout title="New category">
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
    </PageLayout>
  )
}

export default CategoryCreate
