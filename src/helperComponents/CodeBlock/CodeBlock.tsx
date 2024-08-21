import React, { type FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export interface Props {
  title?: string
  className?: string
  children: string | string[]
  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD
  language?: string
}

export const CodeBlock: FC<Props> = ({ title, children, language, className }) => (
  <div className={className} style={{ margin: '10px 0' }}>
    {title && <h3>{title}</h3>}
    <SyntaxHighlighter language={language ?? 'js'} style={atomDark} wrapLines showLineNumbers>
      {Array.isArray(children) ? children.map((child) => child.trim()) : children.trim()}
    </SyntaxHighlighter>
  </div>
)
