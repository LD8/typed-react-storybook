import React from 'react'
import Task, { TaskProps } from './Task'

const exp = {
  component: Task,
  title: 'Task',
}
export default exp

const Template = (args: TaskProps) => <Task {...args} />

export const Default: any = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
}

export const Pinned: any = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived: any = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}
