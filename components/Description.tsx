interface IDescription {
  children: React.ReactNode;
}

export const Description = ({ children } : IDescription) => {
  return (
    <div className="default p-4 w-full">
      {children}
    </div>
  )
}
