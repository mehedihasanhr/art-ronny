import { useExperienceState } from "@/hooks/useExperienceState";
import React from "react";
import Button from "../Button/Button";
import { Input, Label, TagInput, Textarea } from "../Form";
import _ from "lodash";

export default function ExperienceForm() {
    const { saving, addExperienceToDB } = useExperienceState();
    // form state
    const [position, setPosition] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [present, setPresent] = React.useState(false);
    const [formError, setFormError] = React.useState("");

    // handle submit
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!position || !company || !location || !startDate) {
            setFormError("All fields are required");
        }

        const formattedDate = (date: Date) => {
            return `${date.getFullYear()}`;
        };

        let start = new Date(startDate);
        let _end;

        if (!present) {
            let end = new Date(endDate);
            _end = formattedDate(end);
        } else _end = "Present";

        // format start date to month and year
        let _start = formattedDate(start);

        let expreience = {
            position,
            company,
            duration: {
                start: _start,
                end: _end,
            },
            location,
            description,
        };

        addExperienceToDB(expreience);

        // reset form
        setPosition("");
        setCompany("");
        setLocation("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        setPresent(false);
        setFormError("");
    };

    return (
        <div className="w-96 h-screen py-10 bg-[#000B1C] border-l border-dashed border-white/30">
            <div className="flex items-center justify-between border-b border-dashed border-white/30 pb-5 pl-8 pr-6">
                <h3>Add Experience</h3>
            </div>

            <div className="py-8 pl-8 pr-6">
                <form action="" className="flex flex-col gap-y-3">
                    <Label title="Company">
                        <Input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company name"
                        />
                    </Label>

                    <Label title="Location">
                        <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Company Location"
                        />
                    </Label>

                    <Label title="Position">
                        <Input
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder="Write your position in company"
                        />
                    </Label>

                    <Label title="Description">
                        <Textarea
                            rows={10}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="text-sm placeholder:text-sm"
                            placeholder="Write description.."
                        />
                    </Label>

                    <Label title="Start Date">
                        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </Label>

                    <div className="flex items-center my-3 gap-4">
                        <p className="text-white text-sm">Present</p>
                        <input
                            type="checkbox"
                            checked={present}
                            onChange={(e) => setPresent(e.target.checked)}
                            className="w-4 h-4 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {
                        // if present is false show end date
                        !present && (
                            <Label title="End Date">
                                <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </Label>
                        )
                    }

                    <div className="mt-5 w-full">
                        {formError && <p className="text-red-500 text-base">{formError}</p>}
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            disabled={saving}
                            className="bg-indigo-500 rounded-md hover:bg-indigo-600 w-full"
                        >
                            {saving ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
