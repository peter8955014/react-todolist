import { Popover, Modal, Form, Input } from "antd"
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react';


const Select = () => {

  const [isShow, setIsShow] = useState(false)
  const [myForm] = Form.useForm()

  const addData = (item) => {
    
  }

  return (
    <>
      <div className="select-box">
        <Popover>
          <button onClick={() => { setIsShow(true) }}>
            {<IoMdAdd style={{ fontSize: '20px' }} />}
          </button>
        </Popover>

        <Modal
          title="Add todo"
          open={isShow}
          okText='Submit'
          onOk={() => {
            myForm.submit()
          }}
          onCancel={() => { setIsShow(false) }}
          destroyOnClose={true}
          keyboard={true}
        >
          <Form
            form={myForm}
            layout="vertical"
            onFinish={(data) => {
              addData(data)
            }}
          >

            <Form.Item 
            label="Title"
            name='title'
            rules={[{
              required: true,
              message: 'Please enter the title.'
            }]}
            >
              <Input placeholder="input title" />
            </Form.Item>
            <Form.Item
              label="Content"
              name='content'
              rules={[{
                required: true,
                message: 'Please enter the content.'
              }]}
            >
              <Input placeholder="input content" />
            </Form.Item>
          </Form>
        </Modal>


        <select className="select" id="all">
          <option value="">select</option>
          <option value="dog">all</option>
          <option value="cat">incomplete</option>
          <option value="hamster">complete</option>
        </select>
      </div>
    </>
  )
}

export default Select