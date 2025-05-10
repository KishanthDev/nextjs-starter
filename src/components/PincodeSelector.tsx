"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PincodeData {
    id: number
    officeName: string
    pincode: number
    districtName: string
    taluk: string
    stateName: string
    city: string
}

export default function PincodeSelector() {
    const [open, setOpen] = React.useState(false)
    const [pincodeData, setPincodeData] = React.useState<PincodeData[]>([])
    const [selected, setSelected] = React.useState<PincodeData | null>(null)
    const [search, setSearch] = React.useState("")

    React.useEffect(() => {
        fetch("/api/pincodes")
            .then((res) => res.json())
            .then(setPincodeData)
            .then(() => {
                console.log("Pincode data fetched successfully")
            })
            .catch((error) => {
                console.error("Error fetching pincode data:", error)
            })
    }, [])

    const handleSelect = (pincode: string) => {
        const data = pincodeData.find((item) => item.pincode.toString() === pincode)
        setSelected(data ?? null)
        setOpen(false)
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Label>Pincode</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {selected ? `${selected.pincode} - ${selected.officeName}` : "Select pincode..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput
                            placeholder="Search pincode..."
                            value={search}
                            onValueChange={setSearch}
                        />
                        <CommandList>
                            <CommandEmpty>No pincode found.</CommandEmpty>
                            <CommandGroup>
                                {pincodeData
                                    .filter((item) =>
                                        `${item.pincode}-${item.officeName}`
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    )
                                    .map((item) => (
                                        <CommandItem
                                            key={item.id}
                                            value={item.pincode.toString()}
                                            onSelect={handleSelect}
                                        >
                                            {item.pincode} - {item.officeName}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    selected?.pincode === item.pincode
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="grid grid-cols-1 gap-4">
                <div>
                    <Label>District</Label>
                    <Input value={selected?.districtName ?? ""} readOnly />
                </div>
                <div>
                    <Label>State</Label>
                    <Input value={selected?.stateName ?? ""} readOnly />
                </div>
                <div>
                    <Label>City</Label>
                    <Input value={selected?.city ?? ""} readOnly />
                </div>
            </div>
        </div>
    )
}
