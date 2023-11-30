"use client"

import * as z from 'zod'
import Link from "next/link";
import { db } from '@/lib/db';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  mataKuliah: z.string().min(1, { message: "Mata kuliah is required" }),
  sks: z.number().min(1, { message: "sks is required" })
})


const Page = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mataKuliah: "",
      sks: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/matakuliah", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    form.reset()
    router.refresh()
    window.location.reload()

  }

  const isLoading = form.formState.isSubmitting


  return (
    <div className="py-20 flex flex-col">
      <Link href="/matakuliah" className="float-right" >kembali</Link>
      <div className="mt-10">
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="mataKuliah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>mata kuliah</FormLabel>
                  <FormControl>
                    <Input placeholder="mata kuliah" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>jumlah sks</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="jumlah sks" {...field} onChange={(e) => {
                      const numericValue = parseInt(e.target.value, 10);
                      field.onChange(numericValue);
                    }} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-5" disabled={isLoading}> {isLoading ? 'Submitting...' : 'Submit'}</Button>


          </form>
        </Form>
      </div>
    </div>
  );
}

export default Page;