import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { ContactDetails } from "../constants/contact-details";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

			<Card className="py-4">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">{ContactDetails.company}</p>
					<small className="text-default-500">{ContactDetails.location}</small>
					<h4 className="font-bold text-large">{ContactDetails.name}</h4>
				</CardHeader>
				<CardBody className="overflow-visible py-2">
					<Image
						alt="Card background"
						className="object-cover rounded-xl"
						src={ContactDetails.photo}
						width={270}
					/>
				</CardBody>
				<CardFooter>
					<p className=" font-bold">To book, phone: &nbsp;</p>
					<p className="uppercase"><Link href="tel:0402635259">{ContactDetails.mobile}</Link></p>
				</CardFooter>
			</Card>
		</section>
	);
}
