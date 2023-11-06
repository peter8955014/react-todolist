import { FaTrash } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'

const Content = () => {
  return (
    <>
      <div className="content-box">
        <div className="check">
          <div className="checkbox-wrapper-12">
            <div className="cbx">
              <input id="cbx-12" type="checkbox" />
              <label htmlFor="cbx-12"></label>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
              </svg>
            </div>
          </div>
          <div className="content">
            <span>1</span>
            <span className='timer'>3:21 PM, 11/01/2023</span>
          </div>
        </div>
        <div className="tool">
          <FaTrash className='FaTrash'/>
          <BiEdit className='BiEdit'/>
        </div>
      </div>
    </>
  )
}

export default Content