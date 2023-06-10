import { Client } from '@notionhq/client'

export const notion = new Client({ auth: process.env.NOTION_KEY })
export const DB_ID = process.env.NOTION_DATABASE_ID || ''
