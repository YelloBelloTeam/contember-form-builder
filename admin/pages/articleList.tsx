import * as React from 'react'
import { DataGridPage, DeleteEntityButton, GenericCell, Link, TextCell } from '@contember/admin'

export default () => (
  <DataGridPage entities="Article" rendererProps={{ title: 'Articles' }}>
    <TextCell field="title" header="Title" />
    <GenericCell shrunk><Link to="articleEdit(id: $entity.id)">Edit</Link></GenericCell>
    <GenericCell shrunk><DeleteEntityButton immediatePersist /></GenericCell>
  </DataGridPage>
)