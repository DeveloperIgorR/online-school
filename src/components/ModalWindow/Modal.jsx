import React from 'react'
import { Modal, Button } from 'antd'
import { useState } from 'react';
import CreateStudent from '../CreateStudent/CreateStudent';

const ModalWindow = ({visible, setVisible}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');  

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
    setVisible(false);
    setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

    return (
        <>      
      <Modal        
        title="Добавить студента"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={'Отмена'}
        okText={'Готово'}
        width={400}
      >
        <CreateStudent/>
      </Modal>
    </>
    )
}

export default ModalWindow
