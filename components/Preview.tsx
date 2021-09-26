interface IPreview {
  children: React.ReactNode;
}

export const Preview = ({ children } : IPreview) => {
  return (
    <div className="p-4 w-full md:w-64 h-64 md:h-full grid grid-cols-1 gap-6 overflow-y-auto overflow-x-hidden scrollbar">
      {children}
    </div>
  )
}