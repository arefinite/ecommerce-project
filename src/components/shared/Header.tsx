import { ModeToggle } from '../theme/ModeToggle'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='center flex justify-end py-4'>
      <div className='flex items-center gap-2'>
        <Button size='sm'>Login/Register</Button>
        <ModeToggle />
      </div>
    </header>
  )
}
export default Header
