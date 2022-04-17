import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EvetnForm';



const Event : FC = () => {
	const [visible, setVisible] = useState(false)

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
				<EventForm/>
			</Modal>
		</Layout>
	);
}

export default Event;