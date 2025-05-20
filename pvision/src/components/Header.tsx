import { FC } from "react";

export const Header: FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-primary text-white">
        <div className="flex items-center">
            <link rel="icon" href="./favicon.ico" sizes="any" />
            <h1 className="text-xl font-bold">PVVision</h1>
        </div>
        </header>
    );
}