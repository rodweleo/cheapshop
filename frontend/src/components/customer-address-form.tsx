import { CustomerAddressSchema } from "@/schemas/CustomerAddressSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function CustomerAddressForm() {
    const form = useForm<z.infer<typeof CustomerAddressSchema>>({
        resolver: zodResolver(CustomerAddressSchema),
        defaultValues: {
            address: "",
        },
    })

    function onSubmit(values: z.infer<typeof CustomerAddressSchema>) {

        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-10 justify-between">
                <FormField
                    control={form.control}
                    name="address"
                    
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>First Name</FormLabel>
                            <FormControl className="w-full">
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">SAVE ADDRESS</Button>
            </form>
        </Form>
    )
}