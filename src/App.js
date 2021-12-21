import React, { useEffect, useState } from 'react'
import BoxContent from './Components/BoxContent';
import Header from './Components/Header';
import PlusSign from './Components/PlusSign';
import ScreenOverlay from './Components/ScreenOverlay';
import Sidebar from './Components/Sidebar';
import Loading from './Components/Loading';
import ObservablePasswordStore from './PasswordStores'
import { observer } from 'mobx-react-lite';

const App = observer(({ store, ...props }) => {
  const passwordStore = new ObservablePasswordStore();

  useEffect(() => {

    return () => {

    }
  }, [])

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const addPassword = () => {
    passwordStore.addPassword(Math.random(), 'site', 'note', store.user.username, 'title')
  }

  const handleOnlogin = () => {
    store.login(user, pass)
    alert(store.user.message)
  }

  return (
    <>
      {!store.user.isLoggedIn ? <div>
        <form onSubmit={e => { e.preventDefault(); handleOnlogin() }}>
          <span>user :</span>
          <input type="text" onChange={e => setUser(e.target.value)} name="user" /> <br />
          <span>pass :</span>
          <input type="password" name="pass" onChange={e => setPass(e.target.value)} /> <br />
          <button type="submit">Submit</button>
        </form>
      </div> :

        <>
          {/* HEADER SECTION */}
          <Header setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

          {/* CONTAINER */}
          <div className="pt-16 pr-4 pl-4">

            {/* BODY SECTION */}
            <BoxContent store={passwordStore} />
          </div>

          {/* PLUS SIGN */}
          <PlusSign onClick={addPassword} />

          {/* SIDEBAR */}
          <Sidebar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

          {/* LOADING */}
          <Loading isLoading={isLoading} />
        </>}

    </>
  )
})

export default App
