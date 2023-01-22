import * as React from "react";
import DashboardLayout from "@/components/AppLayout/DashboardLayout";
import AddPortfolio from "@/components/Portfolios/AddPortfolio";
import DashboardPortfolioCard from "@/components/Portfolios/DashboardPortfolioCard";
import { usePortfolioState } from "@/hooks/usePortfolioState";

export default function Portfolio() {
    const { portfolios, loading, error, getAllPortfolios } = usePortfolioState();

    return (
        <DashboardLayout>
            <div className="flex items-start">
                <div className="flex-1 pt-10">
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-white/30 px-8">
                        <h3>Portfolios</h3>
                    </div>
                    {/* Card */}
                    <div className="overflow-y-auto max-h-[830px] scroll">
                        <div className="flex flex-wrap gap-3 px-7">
                            {loading ? (
                                <h5>Loading...</h5>
                            ) : (
                                portfolios.map((portfolio) => {
                                    return <DashboardPortfolioCard key={portfolio.id} portfolio={portfolio} />;
                                })
                            )}
                        </div>
                    </div>
                </div>
                <AddPortfolio />
            </div>
        </DashboardLayout>
    );
}
