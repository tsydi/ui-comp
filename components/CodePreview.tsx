export const CodePreview: React.FC = ({ children }) => {
  return (
    <div className="bg-white h-96 overflow-auto border border-solid">
      {children}
    </div>
  )
}
