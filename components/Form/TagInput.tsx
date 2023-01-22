import React from "react";

export const TagInput = ({ label, tags = [], setTags, placeholder }: any) => {
    const [inputValue, setInputValue] = React.useState<string>("");

    const ref = React.useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: any) => {
        const val = e.target.value;
        if (e.key === "Enter" && val) {
            if (tags.find((tag: any) => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            setInputValue("");
        } else if (e.key === "Backspace" && !val) {
            removeTag(tags.length - 1);
        }
    };

    const removeTag = (i: number) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
    };

    const handleFocus = () => {
        ref.current?.focus();
    };

    return (
        <div className="w-full" onClick={handleFocus}>
            <label className="block font-medium text-gray-400 mb-2">{label}</label>
            <div className="flex items-center flex-wrap gap-2 py-2 bg-[#021C42]  rounded-md px-3">
                {tags?.map((tag: any, index: number) => (
                    <span key={index} className="py-0.5 px-1.5 bg-indigo-900 rounded-md text-sm">
                        {tag}
                    </span>
                ))}

                {/* input */}
                <input
                    type="text"
                    ref={ref}
                    value={inputValue}
                    className="outline-none bg-transparent placeholder-gray-400 font-norma text-sm"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder || "Add a tag"}
                />
            </div>
        </div>
    );
};
