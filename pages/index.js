import { createClient } from "contentful"
import FoodCard from "../components/FoodCard"

export default function Home({ streetFood }) {
  console.log(streetFood)
  
  return (
    <div className="food-list">
      {streetFood.map(food => (
        <FoodCard key={food.sys.id} food={food} />
      ))}

      <style jsx>{`
      .food-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 60px;
      }
      `}
      </style>

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
