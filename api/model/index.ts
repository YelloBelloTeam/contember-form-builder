export * from './Content'
export * from './File'
export * from './Form'
export * from './FormInput'
export * from './Image'
export * from './Response'
export * from './Category'
export * from './CategoryInput'

import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'

export class Article {
  title = def.stringColumn()
  content = def.stringColumn()
}
/*
export class Category {
  title = def.stringColumn()
	slug = def.stringColumn().unique().notNull()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
}
*/
