import { Card, CardFooter, Image, Button } from "@nextui-org/react";


export default function Home() {
  const shops = require("./data/shops.json");
  console.log(shops);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-10 dark:bg-jplgray-700">
      <div className="container flex flex-row flex-wrap mx-auto space-x-10">
        {
          shops.data.map((shop, index) => (
            <Card
              key={index}
              isFooterBlurred
              radius="lg"
              className="border-none h-[300px] w-[300px]"
            >
              <Image
                alt={shop.name}
                src={shop.image}
                isZoomed
                width={400}
                height={400}
                isBlurred
                className="object-cover h-[300px] w-full"
              />
              <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="w-2/3">
                  <p className="uppercase text-white/80 font-HelveticaNeueLT55">{shop.name}</p>
                  <p className="text-white/80 font-HelveticaNeueLT45 ">{shop.bldg}</p>
                </div>
                <Button className="text-white uppercase font-AceSansBlackOblique bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Start
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </main>
  );
}
