import React from 'react'

export interface TaskProps {
  task: {
    id: string
    title: string
    state: string
    [key: string]: any
  }
  onArchiveTask?: () => void
  onPinTask?: () => void
}
const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className='list-item'>
      <input type='text' value={title} readOnly />
    </div>
  )
}

export default Task
