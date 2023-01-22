import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import Button from "@/components/Button/Button";
import EditablePriceCard from "@/components/Card/EditablePriceCard";
import { Input } from "@/components/Form";
import { usePriceCard } from "@/hooks/usePriceCard";
import { usePriceTableState } from "@/hooks/usePriceTableState";
import { PriceTableType } from "@/services/store/slices/priceTableSlice";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const IsInclude = ({ isIncluded = false }: { isIncluded: boolean }) => {
    return isIncluded ? (
        <FiCheckCircle className="text-xl text-[#29C358] mx-auto" />
    ) : (
        <MdOutlineCancel className="text-xl text-red-500 mx-auto" />
    );
};

export default function Price() {
    const { priceCards, loading, error, updatePriceCardHandler, updating } = usePriceCard();
    const {
        priceTables,
        loading: loadingTable,
        error: errorTable,
        addPriceTable,
        deletePriceTable,
    } = usePriceTableState();
    const [addNewService, setAddNewService] = React.useState(false);

    const [serviceName, setServiceName] = React.useState("");
    const [serviceIsAvailableStartUp, setServiceIsAvailableStartUp] = React.useState(false);
    const [serviceIsAvailableStandard, setServiceIsAvailableStandard] = React.useState(false);
    const [serviceIsAvailableGoldenPlan, setServiceIsAvailableGoldenPlan] = React.useState(false);

    const addNewServiceHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!serviceName) {
            alert("Service name is required");
            return;
        }
        const newPriceTable = {
            title: serviceName,
            standard: serviceIsAvailableStartUp,
            startup: serviceIsAvailableStandard,
            gold: serviceIsAvailableGoldenPlan,
        };

        // add new price table
        addPriceTable(newPriceTable);

        // reset state
        setServiceName("");
        setServiceIsAvailableStartUp(false);
        setServiceIsAvailableStandard(false);
        setServiceIsAvailableGoldenPlan(false);
    };

    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Price Plans</h3>
                    </div>
                    <div className="overflow-y-auto h-[880px]">
                        {/* Card */}
                        <div className="flex items-center justify-between pb-4 px-8">
                            <h3>Plans Card</h3>
                        </div>
                        <div className="overflow-y-auto max-h-[830px] scroll">
                            <div className="grid grid-cols-12 gap-4 px-8">
                                {loading && <div>Loading...</div>}
                                {priceCards.map((priceCard) => (
                                    <div key={priceCard.id} className="col-span-4">
                                        <EditablePriceCard
                                            update={updatePriceCardHandler}
                                            priceCardDetails={priceCard}
                                            updating={updating}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* table */}
                        <div className="px-8">
                            <div>
                                {/*  Price describe table  */}
                                <div className="py-10">
                                    <div className="flex items-center justify-between">
                                        <h3>Features Table</h3>
                                    </div>
                                    <div className="py-6 overflow-y-hidden overflow-x-auto">
                                        {loadingTable ? (
                                            <div>Loading...</div>
                                        ) : (
                                            <table className="table-auto w-full min-w-[720px]">
                                                <thead>
                                                    <tr>
                                                        <th className="font-bold text-xl">Service List</th>
                                                        <th className="font-bold text-xl">Startup</th>
                                                        <th className="font-bold text-xl">Standard </th>
                                                        <th className="font-bold text-xl">Golden </th>
                                                        <th className="font-bold text-xl">Action </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {priceTables.map((pt: PriceTableType) => (
                                                        <tr key={pt.id}>
                                                            <td className="text-center py-4 text-xl">{pt.title}</td>
                                                            <td className="text-center py-4">
                                                                <IsInclude isIncluded={pt.startup} />
                                                            </td>
                                                            <td className="text-center py-4">
                                                                <IsInclude isIncluded={pt.standard} />
                                                            </td>
                                                            <td className="text-center py-4">
                                                                <IsInclude isIncluded={pt.gold} />
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    type="button"
                                                                    className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md"
                                                                    onClick={() => deletePriceTable(pt.id)}
                                                                >
                                                                    <i className="fi fi-rr-trash -mb-1" />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                    {addNewService && (
                                                        <tr>
                                                            <td className="text-center text-xl">
                                                                <Input
                                                                    type="text"
                                                                    className="py-4 text-center text-lg placeholder:text-lg"
                                                                    placeholder="Service Name"
                                                                    value={serviceName}
                                                                    onChange={(e) => setServiceName(e.target.value)}
                                                                />
                                                            </td>
                                                            <td className="text-center py-4">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked={serviceIsAvailableStartUp}
                                                                    onChange={(e) =>
                                                                        setServiceIsAvailableStartUp(e.target.checked)
                                                                    }
                                                                    className="hover:cursor-pointer w-5 h-5"
                                                                />
                                                            </td>
                                                            <td className="text-center py-4">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked={serviceIsAvailableStandard}
                                                                    onChange={(e) =>
                                                                        setServiceIsAvailableStandard(e.target.checked)
                                                                    }
                                                                    className="hover:cursor-pointer w-5 h-5"
                                                                />
                                                            </td>
                                                            <td className="text-center py-4">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked={serviceIsAvailableGoldenPlan}
                                                                    onChange={(e) =>
                                                                        setServiceIsAvailableGoldenPlan(
                                                                            e.target.checked,
                                                                        )
                                                                    }
                                                                    className="hover:cursor-pointer w-5 h-5"
                                                                />
                                                            </td>
                                                        </tr>
                                                    )}

                                                    <tr>
                                                        <th
                                                            colSpan={5}
                                                            className="text-center bg-indigo-500 hover:bg-indigo-600 py-0"
                                                        >
                                                            {addNewService ? (
                                                                <Button
                                                                    className="w-full"
                                                                    onClick={addNewServiceHandler}
                                                                >
                                                                    + Save
                                                                </Button>
                                                            ) : (
                                                                <Button
                                                                    className="w-full"
                                                                    onClick={() => setAddNewService(!addNewService)}
                                                                >
                                                                    + Add New Service
                                                                </Button>
                                                            )}
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
