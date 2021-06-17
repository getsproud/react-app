import ActivityItem from '../ActivityItem'

function ActivityFeed({loadLong}) {
  const activities = [{
    _id: 1,
    type: 'feedback',
    title: 'new_feedback_title',
    translation: 'new_feedback_text',
    from: 'Peter',
    training: 'DMEXCO 2020',
  },{
    _id: 2,
    type: 'brownbag',
    title: 'new_brownbag_title',
    translation: 'new_brownbag_text',
    from: 'Saskia',
    training: 'omficon 2020',
    date: new Date('12-21-2021')
  },{
    _id: 3,
    type: 'spending',
    title: 'new_spending_title',
    translation: 'new_spending_text',
    training: 'React Next 2021'
  },{
    _id: 4,
    type: 'feedback',
    title: 'new_feedback_title',
    translation: 'new_feedback_text',
    from: 'Peter',
    training: 'DMEXCO 2020',
  },{
    _id: 5,
    type: 'brownbag',
    title: 'new_brownbag_title',
    translation: 'new_brownbag_text',
    from: 'Saskia',
    training: 'omficon 2020',
    date: new Date('12-21-2021')
  },{
    _id: 6,
    type: 'spending',
    title: 'new_spending_title',
    translation: 'new_spending_text',
    training: 'React Next 2021'
  }]

  return (
    <ul className="activity-feed">{ activities.map(item => <ActivityItem key={`activity-item-${item._id}`} item={item} />)}</ul>
  )
}

export default ActivityFeed
