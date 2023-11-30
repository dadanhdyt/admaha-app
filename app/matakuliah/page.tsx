import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const mataKuliahData = async () => {
  const response = await fetch('http://localhost:3000/api/matakuliah', {
    method: "GET",
    cache: "no-store"
  })

  const data = await response.json()
  return data
}

const mataKuliah = async () => {

  const listMataKuliah = await mataKuliahData()
  return (
    <div className="py-20">
      <Link href="/matakuliah/create" className="capitalize bg-stone-950 text-white p-1 rounded-md float-right" >create data</Link>
      <Table>
        <TableCaption className={cn('capitalize')} >data mata kuliah</TableCaption>
        <TableHeader >
          <TableRow>
            <TableHead className={cn('capitalize')} >no</TableHead>
            <TableHead className={cn('capitalize')} >mata kuliah</TableHead>
            <TableHead className={cn('capitalize')} >sks</TableHead>
            <TableHead className={cn('capitalize')} >opsi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            listMataKuliah.map((item: any, index: number) => {
              return (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.mataKuliah}</TableCell>
                  <TableCell>{item.sks}</TableCell>
                  <TableCell>opsi</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default mataKuliah;