import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getDataList } from '../redux/reducers/notesReducer';
import { RootState } from '../types/redux';

export default function NotesList() {
  const notesList = useSelector(getDataList)
  useEffect(() => {
    console.log('list');
  }, [])
  

  console.log("states" , notesList)


  const notesState = []

  return (
    <div>
      {notesState.length === 0 && <h1>Notes list is empty...</h1>}
    </div>
  )
}
