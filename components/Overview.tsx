import { NavBar } from '../components/NavBar'
import { ListItems } from '../components/ListItems'

export const Overview: React.FC = ({ children }) => {
  return (
    <div className="w-60 md:w-96 mx-4 py-6 h-screen flex flex-col overflow-hidden">
      <NavBar />
      <ListItems>
        {children}
      </ListItems>
    </div>
  )
}