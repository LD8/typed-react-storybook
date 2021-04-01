import React from 'react'

export interface TaskProps {
  task: {
    id: string
    title: string
    state: string
    [key: string]: any
  }
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled
          name='checked'
        />
        <span
          className='checkbox-custom'
          onClick={() => onArchiveTask && onArchiveTask(id)}
        />
      </label>
      <div className='title'>
        <input type='text' value={title} readOnly placeholder='Input title' />
      </div>
      <div className='actions' onClick={(e) => e.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask && onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  )
}

export default Task
