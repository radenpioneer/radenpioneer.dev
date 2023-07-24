import { marked } from 'marked'
import { markedSmartypants } from 'marked-smartypants'

export const parser = (text: string) => {
  marked.use(markedSmartypants())
  return marked.parse(text, { mangle: false, headerIds: false })
}
