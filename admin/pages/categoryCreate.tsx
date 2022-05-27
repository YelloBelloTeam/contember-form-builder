import * as React from 'react'
import { CreatePage, RichTextField, TextField } from '@contember/admin'
import { CategoryForm, CategorySideForm } from '../forms/categoryForms'

export default () => (
  <CreatePage
    entity="Category"
    rendererProps={{ title: 'Create Category' }}///, side: <CategorySideForm />
    redirectOnSuccess="categoryEdit(id: $entity.id)"
  >
    <TextField field="title" label="Title" />
        {/*<RichTextField field="content" label="Introtext" />*/}
        <CategoryForm />
  </CreatePage>
)