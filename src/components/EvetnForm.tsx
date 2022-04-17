import { FC, useState } from 'react';
import React from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/user';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formDate } from '../utils/dates';

interface EventFormProps {
	guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {

	const [event, SetEvent] = useState<IEvent>({
		author: '',
		date: '',
		descrition: '',
		guest: ''
	} as IEvent)

	const selectDate = (date: Moment | null) => {
		if(date){
		console.log(formDate(date.toDate()))

		}
	}

	return ( 
		<Form>
			<Form.Item
				label="Event descrioption"
				name="descrioption"
				rules={[rules.required('Please input event description!')]}
			>
				<Input
				onChange={e => SetEvent({...event, descrition: e.target.value})}
				value={event.descrition}
				/>
      		</Form.Item>
			<Form.Item
				label="Guests"
				name="guests"
				rules={[rules.required('Please select guests!')]}
			>
			<Select onChange={(guest: string) => SetEvent({...event, guest: guest})}>
				{props.guests.map((g) => 
				<Select.Option key={g.username} value={g.username}>{g.username}</Select.Option>
				)}
			</Select>
			</Form.Item>
			<Form.Item
				label="Event date"
				name="date"
				rules={[rules.required('Please input date!')]}
			>
			<DatePicker
				onChange={(date) => selectDate(date)}
			/>  
      		</Form.Item>	

			<Row justify='end'>
				<Form.Item>
					<Button type="primary" htmlType="submit" >
						Add
					</Button>
				</Form.Item>
			</Row>

		</Form>
		);
}

export default EventForm;