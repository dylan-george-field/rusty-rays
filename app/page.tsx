import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">VIP Lawns & Gardens</p>
					<small className="text-default-500">Melbourne</small>
					<h4 className="font-bold text-large">Russell Field</h4>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src="/images/russell-gardening.jpg"
						width={270}
					/>
				</CardBody>
				<CardFooter>
					<p className=" font-bold">To book, phone: &nbsp;</p>
					<p className="uppercase"><Link href="tel:0402635259">0402 635 259</Link></p>
				</CardFooter>
			</Card>
		</section>
	);
}
