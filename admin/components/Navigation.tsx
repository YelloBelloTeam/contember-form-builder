import * as React from 'react'
import { Menu } from '@contember/admin'
import locale from '../locales'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title={locale['Forms']} to="formList" />
      <Menu.Item title="Articles" to="articleList" />
      <Menu.Item title="Categories" to="categoryList" />
		</Menu.Item>
	</Menu>
)
