import Dropdown from "@/Components/Dropdown";
import { useState } from "react";

export default function Trial () {
    const [selected, setSelected] = useState("Adventure")

    return(
        <>
        <Dropdown selected={selected} setSelected={setSelected} />
        </>
    )
}