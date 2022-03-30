import { createClient } from "contentful"

export default function Home({ streetFood }) {
  console.log(streetFood)
  
  return (
    <div className="food-list">
      {streetFood.map(food => (
        <div key={food.sys.id}>{food.fields.title}</div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "streetFood" })

  return {
    props: {
      streetFood: res.items
    }
  }
}
