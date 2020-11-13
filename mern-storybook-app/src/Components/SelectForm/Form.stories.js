import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form'

let options = ["Title", "Genre", "Rating"]

storiesOf('Forms', module)

 //Selects
 .add('Select Small', () => <Form type="select" options={options} />)
 .add('Select Medium', () => <Form type="select" medium options={options} />)
 .add('Select Large', () => <Form type="select" large options={options} />)

 .add('Select-Box Small', () => <Form type="select" selectBox options={options} />)
 .add('Select-Box Medium', () => <Form type="select" selectBox medium options={options} />)
 .add('Select-Box Large', () => <Form type="select" selectBox large options={options} />)