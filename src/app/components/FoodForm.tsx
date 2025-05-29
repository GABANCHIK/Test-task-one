"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FoodForm = () => {
    const router = useRouter();
    const [recipe, setRecipe] = useState<string>("");
    const [cuisine, setCuisine] = useState<string>("");
    const [preparationTime, setPreparationTime] = useState<number>(0);

    const recipeChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRecipe(event.target.value);
    };

    const cuisineChangeHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCuisine(event.target.value);
    };

    const preparationTimeChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPreparationTime(+event.target.value);
    };

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const queryParams: {
            query: string;
            cuisine: string;
            maxReadyTime: string;
        } = {
            query: "",
            cuisine: "",
            maxReadyTime: "",
        };

        if (recipe) queryParams.query = recipe;
        if (cuisine) queryParams.cuisine = cuisine;
        if (preparationTime)
            queryParams.maxReadyTime = preparationTime.toString();

        const queryString = new URLSearchParams(queryParams).toString();
        router.push(`/recipes/complexSearch?${queryString}`);

        setRecipe("");
        setCuisine("");
        setPreparationTime(0);
    };
    const isButtonActive: boolean =
        recipe.trim().length > 0 ||
        cuisine.trim().length > 0 ||
        preparationTime > 0;
    return (
        <div className="flex items-center justify-center m-10">
            <form
                onSubmit={formSubmitHandler}
                className="bg-white w-150 p-4 rounded-sm p-5"
            >
                <div className="text-3xl font-semibold border-b border-gray-500 pb-3">
                    RECIPE FORM
                </div>

                <div className="flex flex-col mt-3">
                    <label className="font-semibold text-xl">Recipe</label>
                    <input
                        type="text"
                        placeholder="Input your recipe"
                        className="h-10 w-100 border border-gray-500 rounded-md px-3 py-2 cursor-pointer"
                        onChange={recipeChangeHandler}
                        value={recipe}
                    />
                </div>

                <div className="flex flex-col mt-3">
                    <label
                        htmlFor="cuisine"
                        className="font-semibold text-xl mb-1"
                    >
                        Choose a cuisine:
                    </label>
                    <select
                        name="cuisine"
                        id="cuisine"
                        className="h-10 w-100 border border-gray-500 rounded-md px-3 py-2 cursor-pointer"
                        value={cuisine}
                        onChange={cuisineChangeHandler}
                    >
                        <option value="" disabled>
                            -- Select Cuisine --
                        </option>
                        <option value="Italian">Italian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="German">German</option>
                        <option value="Mexican">Mexican</option>
                    </select>
                </div>

                <div className="flex flex-col mt-3">
                    <label htmlFor="maxTime" className="font-semibold text-xl">
                        Max Preparation Time (minutes)
                    </label>
                    <input
                        type="number"
                        id="maxTime"
                        name="maxTime"
                        min="0"
                        className="h-10 w-100 border border-gray-500 rounded-md px-3 py-2 cursor-pointer"
                        placeholder="e.g. 30"
                        value={preparationTime}
                        onChange={preparationTimeChangeHandler}
                    />
                </div>

                <div className="flex justify-end items-end">
                    <button
                        disabled={!isButtonActive}
                        type="submit"
                        className="ml-2 text-xl text-white bg-[#202020] border-solid border-[#202020] border-2 text-[#202020] px-4 py-2 disabled:bg-gray-500 disabled:text-gray-300 disabled:border-gray-300 hover:bg-[#363636]"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FoodForm;
