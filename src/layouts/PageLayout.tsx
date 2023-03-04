type Props = {
  title: String
  actionButton?: React.ReactNode
  children?: React.ReactNode
}

function PageLayout({ title, actionButton, children }: Props) {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center my-4">
        <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
        {actionButton}
      </header>
      {children}
    </div>
  )
}

export default PageLayout
