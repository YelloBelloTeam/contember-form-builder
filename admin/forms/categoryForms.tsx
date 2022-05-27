import * as React from 'react'
import { Component, DateTimeField, LinkButton, Section, SlugField, TextField } from '@contember/admin'
import { CategoryInputs } from '../components/CategoryInputs'
import { PreviewLink } from '../components/PreviewLink'
import locale from '../locales'
import { ContentField } from '../components/ContentField'

export const CategorySideForm = Component(
	() => (
		<>
			<PreviewLink slugField="slug" prefix="/category/" />
			<LinkButton to="responseList(id: $entity.id)">{locale['See responses']}</LinkButton>
		</>
	),
	'CategorySideForm',
)

export const CategoryForm = Component(
	() => (
		<>
			<Section heading={locale['Content']}>
				<TextField field="title" label={locale['Title']} />
				<SlugField
					field="slug"
					label={locale['Url']}
					derivedFrom="title"
					linkToExternalUrl
					unpersistedHardPrefix={(environment) => `${environment.getValue('WEB_URL')}/category/`}
				/>
				<ContentField />
			</Section>
      
			<Section heading={locale['Fields']}>
				<CategoryInputs />
			</Section>
		</>
	),
	'CategoryForm',
)
