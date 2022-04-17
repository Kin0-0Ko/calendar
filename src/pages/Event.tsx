import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EvetnForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';



const Event : FC = () => {
	const [visible, setVisible] = useState(false)
	const {fetchGuests} = useActions()
	const {guests} = useTypedSelector(state => state.event)

	useEffect(() => {
		fetchGuests()
	}, [])

	return (  
		<Layout>
			<EventCalendar events={[]}/>
			<Row justify='center'>
				<Button onClick={() => setVisible(true)}>Add Event</Button>
			</Row>
			<Modal
			title="Add Event"
			visible={visible}
			footer={null}
			onCancel={() => setVisible(false)}
			>
				<EventForm
					guests={guests}
				/>
			</Modal>
		</Layout>
	);
}

export default Event;