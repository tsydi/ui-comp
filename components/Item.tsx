export const Item: React.FC = ({ children }) => {
  return (
    <div className="bg-white w-full h-24 md:h-32 rounded-xl flex flex-col items-center justify-center">
      {children}
    </div>
  )
}