import './app.scss'
import './button.scss'
import Content from './components/Content/Content'
import Select from './components/Select/Select'

import "@fontsource/poppins"


function App() {

  return (
    <div className='box'>
      <div className="title">
        <h1>ToDo List</h1>
      </div>
      <div className="container">
        <Select />
        <Content />

      </div>
    </div>
  )
}

export default App
