export const ListItems: React.FC = ({ children }) => {
  return (
    <div className="mt-8 p-4 w-full h-full grid grid-cols-1 gap-2 md:gap-4 rounded-l-2xl light scrollbar overflow-auto">
      {children}
    </div>
  )
}
