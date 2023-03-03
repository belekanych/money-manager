import { collection, query, orderBy } from "firebase/firestore"
import { firestore } from "@/vendor/firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Link } from "react-router-dom"
import { TfiPlus } from "react-icons/tfi"

function CategoryList() {
  const categoriesRef = collection(firestore, "categories")
  const categoriesQuery = query(categoriesRef, orderBy("name"))

  const [categories] = useCollectionData(categoriesQuery)

  return (
    <div className="p-4">
      <header className="flex justify-between items-center my-4">
        <h1 className="font-bold text-4xl text-gray-800">Categories</h1>
        <Link
          to="/categories/create"
          className="p-2 bg-white rounded-full text-gray-800 shadow"
        >
          <TfiPlus />
        </Link>
      </header>
      <section>
        {categories &&
          categories.map((category, index) => (
            <article
              key={index}
              className="bg-white shadow rounded mb-4 p-4 flex items-center"
            >
              <img src={category.icon} className="w-10 h-10 mr-4" />
              <h2
                className={category.income ? "text-green-700" : "text-red-700"}
              >
                {category.name}
              </h2>
            </article>
          ))}
      </section>
    </div>
  )
}

export default CategoryList
