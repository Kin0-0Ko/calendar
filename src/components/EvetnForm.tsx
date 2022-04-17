import { FC, useState } from 'react';
import React from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from '../utils/rules';

const EventForm: FC = () => {

	return ( 
		<Form>
			<Form.Item
				label="Event descrioption"
				name="descrioption"
				rules={[rules.required('Please input event description!')]}
			>
				<Input/>
      		</Form.Item>
			<Form.Item>
			<Select>
				<Select.Option value="jack">Jack</Select.Option>
				<Select.Option value="lucy">Lucy</Select.Option>
				<Select.Option value="disabled" disabled>
					Disabled
				</Select.Option>
				<Select.Option value="Yiminghe">yiminghe</Select.Option>
			</Select>
			</Form.Item>
			<Form.Item
				label="Event date"
				name="date"
				rules={[rules.required('Please input date!')]}
			>
			<DatePicker/>  
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