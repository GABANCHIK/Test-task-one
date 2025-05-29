import Header from "@/app/components/Header";
import Card from "@/app/components/UI/Card";

interface Props {
    searchParams: {
        query?: string;
        cuisine?: string;
        maxReadyTime?: string;
    };
}

interface RecipeCard {
    id: number;
    title: string;
    image: string;
    description?: string;
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const apiKey = process.env.API_KEY ?? "";

const ComplexSearchPage = async ({ searchParams }: Props) => {
    const paramsObj = await searchParams;

    const params = new URLSearchParams();

    if (paramsObj.query) params.append("query", paramsObj.query);
    if (paramsObj.cuisine) params.append("cuisine", paramsObj.cuisine);
    if (paramsObj.maxReadyTime)
        params.append("maxReadyTime", paramsObj.maxReadyTime);

    params.append("apiKey", apiKey);

    const response = await fetch(
        `${baseURL}/recipes/complexSearch?${params.toString()}`,
        {
            next: { revalidate: 60 },
        }
    );
    const data = await response.json();

    return (
        <div>
            <Header />
            <h1 className="flex justify-center text-white text-3xl font-bold m-5">
                Recipes
            </h1>
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,250px))] justify-center">
                {Array.isArray(data.results) && data.results.length > 0 ? (
                    data.results.map((card: RecipeCard) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            image={card.image}
                            description={card.description}
                        />
                    ))
                ) : (
                    <p className="text-white text-center mt-10">
                        No results found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ComplexSearchPage;
