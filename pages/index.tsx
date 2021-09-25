import type { NextPage } from 'next'
import { Overview } from '../components/Overview'
import { Item } from '../components/Item'
import { Description } from '../components/Description'
import { CodePreview } from '../components/CodePreview'
import { DescriptionTitle } from '../components/DescriptionTitle'

const Home: NextPage = () => {
  return (
    <>
      <Overview>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Overview>
      <Description>
        <DescriptionTitle>
          <h1>Headers</h1>
        </DescriptionTitle>
        
        <CodePreview>
          <p></p>
        </CodePreview>
      </Description>
    </>
  )
}

export default Home