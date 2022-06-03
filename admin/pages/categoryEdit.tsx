import * as React from 'react'
import { EditPage, RichTextField, TextField } from '@contember/admin'
import { CategoryForm/*, CategorySideForm*/ } from '../forms/categoryForms'

export default () => (
    <EditPage 
      entity="Category(id = $id)" 
      rendererProps={{ title: 'Edit Category' }}> {/*, side: <CategorySideForm />*/}
        <TextField field="title" label="Title" />
        {/*<RichTextField field="content" label="Introtext" />*/}
        <CategoryForm />
    </EditPage>
)