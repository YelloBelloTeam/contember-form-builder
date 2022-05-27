import { SchemaDefinition as def } from '@contember/schema-definition'
//import { Content } from './Content'
//import { CategoryInput } from './CategoryInput'
//import { Response } from './Response'

export class Category {
	title = def.stringColumn().notNull()
	slug = def.stringColumn().unique()//.notNull()
	//content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	//inputs = def.oneHasMany(CategoryInput, 'category').orderBy('order')
}
