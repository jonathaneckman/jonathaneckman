import glob from 'fast-glob'
import * as path from 'path'

// TODO: Replace this with the frontmatter implementation in api.ts

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tage: string[],
  coverImage: string;
}

async function importArticle(articleFilename: string): Promise<Article> {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
// TODO: Type component
  console.log(component)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date).getUTCMilliseconds() - new Date(a.date).getUTCMilliseconds())
}
