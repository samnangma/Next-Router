import Card from "@/components/card";
import { data } from "autoprefixer";
import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "This is the home page",
};

// get data from api
export const getData = async () => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=10&offset=1"
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      {products.map((products) => (
        <Card
          key={products.id}
          title={products.title}
          description={products.description}
          image={products.images[0]}
        ></Card>
      ))}
    </main>
  );
}
