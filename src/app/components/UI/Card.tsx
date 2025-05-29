import Image from "next/image";

interface CardProps {
    title: string;
    image: string;
    description?: string;
    onClick?: () => void;
}

const Card = (props: CardProps) => {
    return (
        <div
            className="bg-white rounded-md shadow-md overflow-hidden max-w-xs mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={props.onClick}
        >

            <Image
                src={props.image}
                alt={props.title}
                width={250}
                height={250}
            />
            <h2>{props.title}</h2>
            {props.description && <p>{props.description}</p>}
        </div>
    );
};

export default Card;
