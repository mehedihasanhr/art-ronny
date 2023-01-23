import { ExperienceType } from "@/services/store/slices/experienceSlice";
import Button from "../Button/Button";

type PropsType = {
    experience: ExperienceType;
    deleteExp: (id: string) => void;
};

export default function Experiences({ experience, deleteExp }: PropsType) {
    return (
        <div className="p-4 w-full max-w-[300px] border border-white/30 rounded-md relative group">
            {/* DELETE BUTTON */}
            <Button
                type="button"
                aria-describedby="delete experience"
                onClick={() => deleteExp(experience.id)}
                className="bg-red-700 hover:bg-red-600 w-8 h-8 items-center justify-center rounded-sm absolute top-2 right-2 hidden group-hover:flex"
            >
                <i className="fi fi-rr-trash -mb-1" />
            </Button>

            <div className="">
                {/* DURATION */}
                <div className="flex items-center text-gray-400 text-sm font-bold">
                    <span>{experience.duration.start}</span>
                    <span className="mx-2">-</span>
                    <span>{experience.duration.end}</span>
                </div>

                {/* POSITION */}
                <div>
                    <h4 className=" text-green-500">{experience.position}</h4>
                </div>

                {/* COMPANY */}
                <div>
                    <h5 className="text-white/80 text-md font-bold">{experience.company}</h5>
                    {/* LOCATION */}
                    <span className="text-white/70 text-xs">{experience.location}</span>
                </div>
                <div className="mt-3">
                    <p className="text-slate-400 text-xs">{experience.description}</p>
                </div>
            </div>
        </div>
    );
}
