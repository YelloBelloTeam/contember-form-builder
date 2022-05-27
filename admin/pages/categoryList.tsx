import * as React from 'react'
import { DataGridPage, DeleteEntityButton, GenericCell, LinkButton, Link, TextCell } from '@contember/admin'
import locale from '../locales'

export default () => (
  <DataGridPage 
    entities="Category" 
    rendererProps={{ title: 'Categories', actions: <LinkButton to="categoryCreate">{locale['Add category']}</LinkButton> }}>
    <TextCell field="title" header="Title" />
    <GenericCell shrunk><Link to="categoryEdit(id: $entity.id)">Edit</Link></GenericCell>
    <GenericCell shrunk><DeleteEntityButton immediatePersist /></GenericCell>
  </DataGridPage>
)