import blockContent from './blockContent/blockContent'
import blogBlockContent from './blockContent/blogBlockContent'
import blogPost from './blogPost'
import project from './project' // Import the new schema

export const schemaTypes = [project, blogPost, blockContent, blogBlockContent] // Add it to the array