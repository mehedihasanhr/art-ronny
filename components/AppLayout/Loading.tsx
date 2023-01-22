export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-700"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                    Loading ...
                </span>
            </div>
        </div>
    );
}
