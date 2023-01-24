import React from "react";
import Button from "@/components/Button/Button";
import { Input, Label, Textarea } from "../Form";
import PriceCard from "./PriceCard";
import { PriceCardType } from "@/services/store/slices/priceCardSlice";

type EditablePriceCardPropsType = {
    update: (id: string, data: any) => void;
    updating: boolean;
    priceCardDetails: PriceCardType;
};

const EditablePriceCard = ({ update, updating, priceCardDetails }: EditablePriceCardPropsType) => {
    const [editModeIsOn, setEditModeIsOn] = React.useState(false);
    const [planName, setPlanName] = React.useState("Startup Plan");
    const [planPrice, setPlanPrice] = React.useState("399");
    const [description, setDescription] = React.useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    );
    const [features, setFeatures] = React.useState([{ name: "Feature 1", isAvailable: true }]);

    const [error, setError] = React.useState("");

    // default values
    React.useEffect(() => {
        if (priceCardDetails) {
            setPlanName(priceCardDetails.title);
            setPlanPrice(priceCardDetails.price);
            setDescription(priceCardDetails.description);
            let features = priceCardDetails.features.map((feature) => {
                return {
                    name: feature.name,
                    isAvailable: feature.isAvailable,
                };
            });

            setFeatures(features);
        }
    }, [priceCardDetails]);

    // handle feature availability change
    const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newFeatures = [...features];
        newFeatures[index].isAvailable = !newFeatures[index].isAvailable;
        console.log(newFeatures[index]);
        setFeatures(newFeatures);
    };

    // handle feature name change
    const handleFeatureNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newFeatures = [...features];
        newFeatures[index].name = e.target.value;
        setFeatures(newFeatures);
    };

    // handle update
    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!planName || !planPrice || !description || !features) return;

        const data = {
            planName,
            price: planPrice,
            description,
            features,
        };

        update(priceCardDetails.id, data);

        editModeIsOn && setEditModeIsOn(false);
    };

    return (
        <div className="relative">
            {/* edit and delete and save button */}
            <div className="absolute top-4 right-6 flex items-center gap-3">
                {editModeIsOn ? (
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            onClick={handleUpdate}
                            className="bg-green-500 hover:bg-green-500 px-3 rounded-md flex items-center"
                        >
                            {updating ? (
                                <span className="animate-spin">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M11 7H13V13H18V15H11V7Z"
                                        />
                                    </svg>
                                </span>
                            ) : (
                                <i className="fi fi-br-check -mb-1" />
                            )}
                        </Button>

                        <Button
                            type="button"
                            onClick={() => setEditModeIsOn(false)}
                            className="bg-red-500 hover:bg-red-600 px-3 rounded-md flex items-center"
                        >
                            <i className="fi fi-br-cross-small -mb-1" />
                        </Button>
                    </div>
                ) : (
                    <Button
                        type="button"
                        onClick={() => setEditModeIsOn(true)}
                        className="bg-gray-800 hover:bg-gray-700 px-3 rounded-md flex items-center"
                    >
                        <i className="fi fi-rr-edit -mb-1" />
                    </Button>
                )}
            </div>

            {/* edit mode */}
            {!editModeIsOn ? (
                <PriceCard showPlanBtn={false} priceCardDetails={priceCardDetails} />
            ) : (
                <div className="p-0.5 pb-0 bg-gradient-to-b from-[#BDCEF7] via-[#BDCEF7] to-indigo-500/5 rounded-md">
                    <div className="w-full p-5 pb-10 rounded-md bg-[#000B1C] flex flex-col gap-2">
                        {error && (
                            <div className="flex items-center gap-2">
                                <i className="fi fi-rr-cross-circle text-red-500 -mb-1" />
                                <span className="text-red-500">{error}</span>
                            </div>
                        )}
                        {/* plan name */}
                        <h6>{planName}</h6>

                        {/* price */}
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-semibold">$</span>
                            <Input
                                type="number"
                                value={planPrice}
                                min={0}
                                onChange={(e) => setPlanPrice(e.target.value)}
                                className="w-1/2"
                            />
                            <span>/Month</span>
                        </div>

                        {/* description */}
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                        ></Textarea>

                        {/* features */}
                        <div className="flex flex-col gap-2">
                            <p> Features </p>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={feature.isAvailable}
                                        onChange={(e) => handleFeatureChange(e, index)}
                                    />

                                    <Input
                                        type="text"
                                        value={feature.name}
                                        onChange={(e) => handleFeatureNameChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditablePriceCard;
