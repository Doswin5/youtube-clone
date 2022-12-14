import ContentItem from "./ContentItem"

const Content = ({ contents }) => {
  return (
    <div className='content'>
      {contents.map((content) => (
        <ContentItem key={content.id} content={content} />
      ))}
    </div>
  )
}

export default Content