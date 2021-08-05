import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SearchIcon from '@material-ui/icons/Search';

const App = () => {

  const Items = () => {
    return (
      <>
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
        <div style={{ borderRadius: '.5em', backgroundColor: 'white', padding: '1em', minWidth: '150px', marginRight: '.5em', marginBottom: '.5em' }} />
      </>
    )
  }

  return (
    <div style={{ padding: '1em' }}>
      <header style={{ display: 'flex' }}>
        <MenuIcon style={{ height: '1.5em', width: '1.5em', marginRight: '1em' }} />
        <div style={{ position: 'relative', flex: 1 }}>
          <SearchIcon style={{ position: 'absolute', top: '20%', left: '8px' }} />
          <input type="email" name="" id="" style={{ flex: 1, margin: '2px', borderRadius: '99px', border: 'none', padding: '0px 3em', boxShadow: '1px 1px 5px grey', height: '30px', width: '100%', boxSizing: 'border-box' }} placeholder="Search" />
        </div>
      </header>

      <section style={{ marginTop: '1em' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5em' }}>All Items</span>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ border: 'none', backgroundColor: '#FFF', borderRadius: '.5em', height: '30px', width: '30px', marginRight: '.3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="shadow">
              <ExpandLessIcon />
            </button>
            <button style={{ border: 'none', backgroundColor: '#6C91E8', borderRadius: '.5em', height: '30px', width: '30px', marginRight: '.3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="shadow">
              <ViewModuleIcon style={{ color: 'white' }} />
            </button>
            <button style={{ border: 'none', backgroundColor: '#FFF', borderRadius: '.5em', height: '30px', width: '30px', marginRight: '.3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="shadow">
              <ViewStreamIcon />
            </button>
            <button style={{ border: 'none', backgroundColor: '#FFF', borderRadius: '.5em', height: '30px', width: '150px' }} className="shadow">
              Sort by: Alphabet(A-Z)
            </button>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '1em', display: 'flex', flexWrap: 'wrap' }}>

        {Items()}

      </section>
    </div>
  )
}

export default App
