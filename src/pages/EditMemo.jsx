import React from 'react'
import { useParams } from 'react-router-dom';

function EditMemo() {
  const { uuid } = useParams();
  return <div>EditMemo - {uuid}</div>;
}

export default EditMemo