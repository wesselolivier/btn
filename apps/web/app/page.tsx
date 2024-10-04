"use client";

import * as React from "react"
import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/ui/alert-dialog"

interface Project {
  id: number;
  project: string;
}

export default function CardWithForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  // let data;
  // const response = await fetch('/api/projects');
  // if(response.ok)
  //   data = await response.json();

  // const { rows: projects} = data

  const [projects, setProjects] = useState<Project[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        console.log("API Response:", data);  // Debug the structure of the response
        if (Array.isArray(data.projects)) {
          setProjects(data.projects); // Only set users if it's an array
        } else {
          console.error("project is not an array");
          setProjects([]); // Set to empty array if the response is not as expected
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Transfer project</CardTitle>
        <CardDescription>Transfer your new project in a few clicks.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Project</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {projects.map((project) => (<SelectItem key={project.id} value={project.project}>{project.project}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={openDialog}>Next</Button>
      </CardFooter>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="dialogTitle">Transfer project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to transfer this project?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="btnLabel" onClick={closeDialog}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={closeDialog}>Transfer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}
