import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import { Menu } from './components/Menu';
import { Button } from './components/UI';

function App() {
  const menuItem = [
    {
      name: 'Work',
      link: '#',
    },
    {
      name: 'Services',
      link: '#',
    },
    {
      name: 'About',
      link: '#',
    },
    {
      name: 'Client',
      link: '#',
    },
    {
      name: 'Blog',
      link: '#',
    },
  ];
  return (
    <div className='App'>
      <Header menuItem={menuItem} />
      {/* <Button text='HOW IT WORKS' />
      <Button text='GET IN TOUCH' theme='primary' />
      <Button text='TEAM WORKS' theme='default-outline' rounded={true} />
      <Button text='TEAM WORKS' theme='primary-outline' rounded={true} /> */}
      <br />
      <br />
      <br />
      <br />
      {/* <Menu menuItem={menuItem} /> */}
      <br />
      <br />
      <br />
      <br />
      {/* <Logo link='#' /> */}
    </div>
  );
}

export default App;
